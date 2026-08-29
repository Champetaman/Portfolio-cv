---
name: project-maintenance
description: Audit and maintain this repository through dependency review, validation, security checks, conservative refactoring, and evidence-based dead-code analysis. Use for project health, upgrade, cleanup, or production-readiness work.
---

# Project Maintenance

Maintain repository without hiding risk or changing product behavior outside requested scope.

## Baseline

Before maintenance edits, record:

- `git status --short`
- `pnpm check`
- `pnpm build`
- `pnpm audit --prod`

Run other existing lint or test scripts when present. Distinguish baseline failures from regressions introduced during task.

## Dependency review

- Treat `package.json`, `pnpm-lock.yaml`, and `pnpm-workspace.yaml` as one dependency state.
- Use pnpm only.
- Inspect outdated and vulnerable packages before changing versions.
- Require explicit approval for major upgrades or upgrades with uncertain migration impact.
- Preserve necessary security overrides and document why they remain.

## Refactoring and cleanup

- Prefer narrow, behavior-preserving changes.
- Prove files, exports, assets, and dependencies unused through references, routes, build behavior, and framework conventions before deletion.
- Require explicit approval when deletion remains uncertain.
- Preserve user changes and unrelated dirty-worktree files.
- Never weaken TypeScript, lint, test, build, accessibility, or security rules to obtain a passing result.

## Validation

Run applicable checks after each logical change group. Finish with full check, build, production dependency audit, and relevant UI or route verification. Report pre-existing failures separately from new failures.
