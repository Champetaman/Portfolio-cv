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
- pnpm 11.24

## Local development

```sh
git clone https://github.com/Champetaman/Portfolio-cv
cd Portfolio-cv
pnpm install
pnpm dev
```

Create a local environment file when resume delivery is needed:

```sh
RESUME_PDF_URL=https://your-resume-url.example/resume.pdf
```

## Production checks

```sh
pnpm check
pnpm build
pnpm preview
```

Project uses Astro server output and `@astrojs/vercel`. Unknown routes use `src/pages/404.astro`; on-demand server failures use `src/pages/500.astro`.

## Deployment

Connect repository to Vercel, configure `RESUME_PDF_URL`, and deploy with repository defaults. Vercel uses `pnpm-lock.yaml` and pinned pnpm version from `package.json`.

## Contact

- Email: [oviedocamilo94@gmail.com](mailto:oviedocamilo94@gmail.com)
- LinkedIn: [linkedin.com/in/oviedocamilo](https://www.linkedin.com/in/oviedocamilo/)
- GitHub: [github.com/Champetaman](https://github.com/Champetaman)

## License

Licensed under [MIT License](LICENSE).
