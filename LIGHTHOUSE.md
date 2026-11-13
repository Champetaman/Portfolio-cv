# Lighthouse optimization

Measured on 13 November 2026 with Lighthouse 13.5.0 and a clean headless Chrome profile. Category order is performance, accessibility, best practices, SEO.

## Baseline and results

| Build and environment | Performance | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Supplied Brave desktop report | 77 | 100 | 77 | 100 |
| Existing public site, clean desktop Chrome | 99 | 100 | 81 | 100 |
| Optimized local production build, desktop, all nine pages | 100 | 100 | 100 | 100 |
| Optimized local production build, default throttled mobile | 96 | 100 | 100 | 100 |

The final mobile run measured FCP 0.83 s, LCP 1.21 s, total blocking time 225 ms, and CLS 0. Desktop and mobile use different Lighthouse throttling and scoring settings; their performance scores are not directly comparable. Earlier mobile runs varied with test-machine load, including a Lighthouse warning about a slow CPU. These are lab measurements, not real-user Core Web Vitals guarantees.

Before edits, `pnpm check`, `pnpm typecheck`, `pnpm build`, `pnpm audit --prod`, and the Impeccable detector passed. No pre-existing code failures were found. Sandbox access to the pnpm store required running the checks with appropriate permissions. The working tree was initially clean. Dependency review found only a new TypeScript major release, which was left unchanged.

## Implementation

- Prerender the homepage and every recorded project route for CDN delivery. Keep server-rendered error handling and its isolated packaged-function startup check.
- Use Astro's build-time image processing for responsive WebP portraits and project images. Set image dimensions, accurate sizing hints, and high priority on each page's primary image. Keep below-the-fold images lazy.
- Preserve original public project image URLs and full-resolution links. The corresponding `src/img/projects/` copies are the inputs for Astro optimization. When replacing a project screenshot, update both its public original and its source copy; add the source copy when adding a project.
- Preload one self-hosted Latin Onest variable font. `font-display: optional` prevents a late font swap: a slow first visit can keep the system fallback, while a promptly available or cached font uses Onest.
- Inline the small shared stylesheet to remove a render-blocking round trip. Keep theme and menu scripts in one shared header entry, which Astro can bundle and inline.
- Keep hero content visible during entry motion. Defer offscreen project layout and painting with `content-visibility: auto`, with remembered intrinsic sizes.
- Let the home link derive its accessible name from its visible text, fixing the report's label-content mismatch.
- Handle unavailable browser storage so theme selection still works when persistence is blocked.
- Enable Vercel analytics and Speed Insights only when building on Vercel (`VERCEL=1`), where their platform endpoints exist. Local previews no longer request missing telemetry endpoints.

No dependency versions or security controls were changed. Existing factual copy and the visual design were preserved.

## Validation

Final Astro diagnostics, TypeScript checks, production build, production dependency audit, and Impeccable scan passed. The build check validates all nine prerendered pages, canonical URLs, structured data, sitemap coverage, and isolated 404 responses from the packaged function. Separate desktop Lighthouse audits of the homepage and all eight project pages each scored 100 in all four categories; the final JSON reports are saved as `.impeccable/lighthouse-desktop-*.json`.

Clean headless Chrome interaction checks passed for desktop and mobile layouts, theme switching and persistence, Escape and link dismissal of the mobile menu, and theme controls when browser storage throws a `SecurityError`. All eight project pages returned 200 with loaded images and no horizontal overflow. No JavaScript exceptions were recorded. Desktop and mobile screenshots were visually inspected.

## Reproduce

Use one terminal to serve the built Vercel output with compression and the packaged error handler:

```powershell
pnpm build
node scripts/preview-vercel.mjs
```

In another terminal, run desktop and mobile audits sequentially. Keep browser extensions disabled and avoid running builds or other CPU-intensive checks during measurement.

```powershell
pnpm dlx lighthouse@13.5.0 http://127.0.0.1:4321/ --preset=desktop --chrome-flags="--headless=new --disable-extensions" --only-categories="performance,accessibility,best-practices,seo" --output=json --output=html --output-path=.impeccable/lighthouse-final-desktop
pnpm dlx lighthouse@13.5.0 http://127.0.0.1:4321/ --chrome-flags="--headless=new --disable-extensions" --only-categories="performance,accessibility,best-practices,seo" --output=json --output=html --output-path=.impeccable/lighthouse-final-mobile
```

Generated Lighthouse reports and screenshots are ignored by Git. The saved HTML reports can be opened directly in a browser.

## Deployment and Cloudflare follow-up

The changes have not been deployed. Local scores do not include Cloudflare's injected scripts or Vercel's hosted telemetry; deployed scores must be measured again after release with a clean browser profile.

The supplied report attributes its unused JavaScript and unminified script findings to `chrome-extension://` resources. Those browser-extension costs cannot be removed by website source changes. Its console failure is a Brave-blocked Cloudflare analytics beacon. The clean live-site baseline independently reproduced deprecated API warnings inside `/cdn-cgi/challenge-platform/scripts/jsd/main.js`.

Cloudflare can [automatically inject the Web Analytics beacon](https://developers.cloudflare.com/speed/observatory/rum-beacon/). Review that site's automatic injection setting to avoid duplicate analytics and blocked-beacon errors. Cloudflare also [injects JavaScript Detections through its bot protections](https://developers.cloudflare.com/cloudflare-challenges/challenge-types/javascript-detections/). The deprecated API use belongs to that provider-managed script; investigate with Cloudflare or review the configured protection mode. Bot Fight Mode enables JavaScript Detections automatically. Do not disable a security control merely to raise a Lighthouse score.

Reference implementation follows Astro's [prerendering](https://docs.astro.build/en/guides/on-demand-rendering/), [image components](https://docs.astro.build/en/guides/images/), and [stylesheet inlining](https://docs.astro.build/en/reference/configuration-reference/#buildinlinestylesheets) documentation. Audit commands follow the [Lighthouse CLI documentation](https://github.com/GoogleChrome/lighthouse#using-the-node-cli).
