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
- pnpm 12.9.1 (single version pin in `package.json#packageManager`)

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
pnpm build
pnpm audit --prod
```

Project uses Astro server output and `@astrojs/vercel`. Unknown routes use `src/pages/404.astro`; on-demand server failures use `src/pages/500.astro`.

## Deployment

Connect repository to Vercel, configure `RESUME_PDF_URL`, and deploy with repository defaults. Vercel uses `pnpm-lock.yaml`. The repository enables Corepack through `vercel.json` so builds use the exact `packageManager` pin; retain the default install command in Vercel settings. See [Vercel package manager selection](https://vercel.com/docs/package-managers).

The redundant exact `engines.pnpm` constraint was removed: it still demanded 11.24.0 after the package manager and lockfile had moved to 12.9.1. One pin now controls local and deployment installs. The pnpm 12 environment document and dependency document in `pnpm-lock.yaml`, plus build permissions and security overrides in `pnpm-workspace.yaml`, remain intact. No repository CI workflows or other pnpm version constraints exist.

## Contact

- Email: [oviedocamilo94@gmail.com](mailto:oviedocamilo94@gmail.com)
- LinkedIn: [linkedin.com/in/oviedocamilo](https://www.linkedin.com/in/oviedocamilo/)
- GitHub: [github.com/Champetaman](https://github.com/Champetaman)

## License

Licensed under [MIT License](LICENSE).
