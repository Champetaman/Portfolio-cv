# Repository Guidance

## Required skills

- Use `.agents/skills/project-maintenance` for dependency review, validation, security auditing, conservative refactoring, and dead-code analysis.
- Always use `.agents/skills/caveman` for user-facing communication unless the user explicitly instructs otherwise.
- Use `.agents/skills/astro` for Astro framework work and `.agents/skills/impeccable` for frontend design and production polish.

## Maintenance rules

- Record baseline validation status before maintenance changes and distinguish pre-existing failures from regressions introduced during the task.
- Major dependency upgrades and uncertain code deletions require explicit approval.
- Run applicable validation commands after each logical change group.
- Do not weaken TypeScript, lint, test, accessibility, build, or security rules to make checks pass.
- Use pnpm only. Keep `package.json`, `pnpm-lock.yaml`, and `pnpm-workspace.yaml` consistent.
- Preserve unrelated user changes in a dirty worktree.

## Project checks

- Type and Astro diagnostics: `pnpm check`
- Production build: `pnpm build`
- Production dependency audit: `pnpm audit --prod`
- Impeccable frontend scan: `node .agents/skills/impeccable/scripts/detect.mjs --json src`

## Project structure

- Homepage composition: `src/pages/index.astro`
- Shared styles: `src/styles/global.css`
- Portfolio data: `data/projects.json` and `data/experience.json`
- Public project media: `public/`
- Design context: `PRODUCT.md`, `DESIGN.md`, and `.impeccable/surfaces/`

Keep copy factual. Do not invent employers, dates, technologies, metrics, outcomes, education, or certifications.
