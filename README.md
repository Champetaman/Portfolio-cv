# Camilo Oviedo Portfolio

Professional portfolio for Camilo Oviedo, focused on Technical Business Analyst, Business Systems Analyst, and Application Analyst opportunities.

## What the site includes

- Recruiter-focused profile, availability, and contact actions
- 8+ years of professional experience
- Complete personal, open-source, and professional project portfolio
- Project-detail routes with screenshots, contributions, and technologies
- Agentic software practice overview covering LLMs, harness engineering, orchestration, and autonomous review loops
- Responsive light/dark interface and accessible keyboard navigation
- General-purpose custom 404 and 500 error pages

## Technology

- Astro 7 with server output
- Tailwind CSS 4 through its Vite plugin
- Vercel adapter, Web Analytics, and Speed Insights
- Cloudflare R2 resume delivery through `RESUME_PDF_URL`
- pnpm 12.10.1 (single version pin in `package.json#packageManager`)

## Local development

```sh
git clone https://github.com/Champetaman/Portfolio-cv
cd Portfolio-cv
pnpm install --frozen-lockfile
pnpm dev
```

Use the pinned pnpm version, either through an existing pnpm installation that supports automatic version selection or through Corepack (`corepack pnpm install --frozen-lockfile`).

Create a local environment file when resume delivery is needed:

```sh
RESUME_PDF_URL=https://your-resume-url.example/resume.pdf
```

## Production checks

```sh
pnpm check
pnpm typecheck
pnpm lint
pnpm build
pnpm audit
pnpm audit --prod
```

Project uses Astro server output and `@astrojs/vercel`. Unknown routes use `src/pages/404.astro`; on-demand server failures use `src/pages/500.astro`.

`pnpm lint` runs the repository's Impeccable frontend detector. `pnpm build` also tests the packaged Vercel function in isolation. The Vercel adapter remains pinned to 11.0.12 because 11.0.13 has an unresolved serverless startup regression ([Astro issue #18328](https://github.com/withastro/astro/issues/18328)). TypeScript remains on 6.x; its deprecated `baseUrl` setting has been replaced by an explicit relative alias.

## Deployment

Connect repository to Vercel, configure `RESUME_PDF_URL`, and deploy with repository defaults. Vercel uses `pnpm-lock.yaml`. The repository enables Corepack through `vercel.json` so builds use the exact `packageManager` pin; retain the default install command in Vercel settings. See [Vercel package manager selection](https://vercel.com/docs/package-managers).

The redundant exact `engines.pnpm` constraint was removed: it still demanded 11.24.0 after the package manager and lockfile had moved to 12.9.1. One pin now controls local and deployment installs. The pnpm 12 environment document and dependency document in `pnpm-lock.yaml`, plus build permissions and security overrides in `pnpm-workspace.yaml`, remain intact. No repository CI workflows or other pnpm version constraints exist.

## Search visibility

`public/robots.txt` allows public pages and assets to be crawled by all services. Explicit groups document access for the following services; the wildcard already permits these and other crawlers:

- ChatGPT: `OAI-SearchBot` and `ChatGPT-User` ([OpenAI documentation](https://developers.openai.com/api/docs/bots)).
- Claude: `Claude-SearchBot` and `Claude-User` ([Anthropic documentation](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)).
- Perplexity: `PerplexityBot` and `Perplexity-User` ([Perplexity documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)).
- Google Search and Gemini: `Googlebot` and `Google-Extended` ([Google documentation](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)).
- Bing and Microsoft Copilot: `bingbot` ([Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)).

Search discovery and training are generally separate controls. Google's `Google-Extended` token controls both Gemini grounding and model training; it does not affect Google Search ranking. The wildcard continues to allow model-training crawlers as well. Some user-directed fetchers may not apply robots.txt rules. These permissions express access preferences, not guaranteed indexing or citations.

`src/pages/sitemap.xml.ts` generates `/sitemap.xml` at build time from the homepage and all project slugs in `data/projects.json`. Error pages are excluded. Do not add artificial modification dates: a sitemap's `lastmod`, if introduced, must reflect actual content changes.

Canonical URLs and sitemap entries use `https://www.camilooviedo.com`, matching the live redirect destination. The shared layout supplies social previews and factual Person, WebSite, and page structured data. Project pages add CreativeWork and BreadcrumbList data. `pnpm build` checks the generated sitemap and packaged page metadata.

After deployment:

1. Verify the production domain in [Google Search Console](https://search.google.com/search-console) and submit `https://www.camilooviedo.com/sitemap.xml`. Inspect the homepage and project URLs, then request indexing where appropriate.
2. Verify the site in [Bing Webmaster Tools](https://www.bing.com/webmasters/) and submit the same sitemap.
3. Check that hosting or CDN bot protection does not challenge search crawlers. A permissive robots file cannot override a firewall block.
4. Keep project descriptions and contributions current and factual. Link this domain from your professional profiles, and monitor indexing and search performance before judging results.

Crawling, indexing, ranking, and AI citations are not guaranteed. Google's AI search features use the same [SEO foundations](https://developers.google.com/search/docs/appearance/ai-features); no special AI text file is required.

## Contact

- Email: [oviedocamilo94@gmail.com](mailto:oviedocamilo94@gmail.com)
- LinkedIn: [linkedin.com/in/oviedocamilo](https://www.linkedin.com/in/oviedocamilo/)
- GitHub: [github.com/Champetaman](https://github.com/Champetaman)

## License

Licensed under [MIT License](LICENSE).
