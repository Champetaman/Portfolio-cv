---
version: 1
slug: "src-pages-career-ops-index-astro"
primary_target: "src/pages/career-ops/index.astro"
related_targets: ["src/pages/career-ops/privacy.astro", "src/pages/career-ops/terms-of-service.astro", "src/layouts/CareerOpsLayout.astro"]
---

# Career Ops Surface Brief

- Scope: three public Career Ops information pages and a small shared-footer description with overview, privacy and terms links; preserve the portfolio content and shared design system.
- Mode: Read.
- Audience and task: visitors and Google OAuth reviewers need to understand the personal application's purpose, Gmail permission, data handling and limitations.
- Direction: inherit the portfolio's typography, palette, light/dark themes, hairline rules, shared header/footer and back-link convention. Use a quiet reading column and a three-link navigation rail that stacks above the text on mobile.
- First viewport: main-site back link, clear page title, short description, personal-use status, update date and navigation; privacy prominently identifies unconfirmed operational details.
- Interaction: ordinary public links, current-page navigation, existing theme control and keyboard skip link. No new JavaScript, authentication, forms or dependencies.
- Confirmed facts: Career Ops is Camilo's personal job-search workflow using Gmail, Hermes AI and OpenAI Codex; private DigitalOcean VPS accessible only by Camilo; selected job-alert information reaches Codex, but Career Ops publishes none publicly.
- Pending: actual OAuth scopes, retained records and retention/deletion rules including logs/backups, encryption and credential controls, exact OpenAI payload/connection/settings, and any other model provider used by Hermes AI. Do not claim audited compliance or Google approval.
- Build path: code-led extension of the established design; no image assets or visual-world change.

## Built surface record

Recorded from `src/layouts/CareerOpsLayout.astro` and the three Career Ops page sources after implementation. This is a surface-specific extension of the existing Systems Evidence Ledger. `DESIGN.md`, `.impeccable/design.json`, shared styles, and existing portfolio pages remain the global authority and are unchanged by this surface.

### Shared foundation

The Career Ops layout wraps the incumbent `Layout.astro`, inheriting the site header and footer, Onest font loading, global CSS, theme selection and toggle, mobile menu, skip link, canonical URL, social metadata, favicon, and existing analytics. Each page supplies its own title and description. The main landmark retains `id="main-content"`, so the shared skip link has a valid destination. No Career Ops-specific scripts, forms, authentication, dependencies, or image assets were added; the existing layout's default social image remains inherited metadata.

### Reading composition

The shared portfolio shell retains its maximum width (80rem) and minimum side gutters (1rem). The page header uses the existing project-detail composition: back link, page title, introductory copy, explicit personal-use status, and a semantic last-updated date (10 October 2026). It ends with the existing hairline rule.

At widths of 64rem and above, navigation occupies a fixed rail (14rem) beside the flexible reading column, with a fluid gap (`clamp(2rem, 4vw, 3.5rem)`). The rail is sticky below the shared header (`top: 7rem`). Below that breakpoint, navigation precedes the copy in a single-column grid with a gap (2rem). The copy is capped at 70ch, permits shrinking with `min-width: 0`, and wraps long values such as the Gmail scope URL.

Paragraphs and lists use a top interval (1rem). Lists retain visible native-style markers, an indent (1.25rem), and separation between consecutive items (0.75rem). Consecutive sections reuse the global register spacing for both top margin and padding, with a rule between them.

### Palette, typography, and components

Color roles are inherited through the existing canvas, paper, ink, muted, rule, accent, accent-strong, and focus variables. There are no new palette primitives. Light and dark modes therefore use the portfolio's complete role sets. The content stays flat; rules and the paper-toned privacy notice provide grouping without new shadows or decorative imagery.

The type hierarchy reuses the existing page-title, group-title, lead-copy, body, and subheading roles. Onest carries prose and headings; the permission URL uses the incumbent monospace stack at a relative size (0.875em). No surface-specific font family or title scale was introduced.

The three-link navigation is a ruled list with targets at least 2.75rem high and vertical padding (0.75rem). Default links use muted text; hover and the current page use accent text and an underline. The current link also uses weight 570 and `aria-current="page"`. Body links are persistently underlined accent text, with accent-strong on hover; keyboard focus inherits the site's visible outline. The privacy notice is a semantic aside with a square rule border, paper background, and padding (1.25rem).

**The Reading Measure Rule.** These pages retain one restrained reading column capped at 70ch, with navigation stacking before the content on smaller screens.

**The Shared Theme Rule.** Career Ops uses the incumbent semantic color and type roles; its scoped styles do not redefine the portfolio's shared system.

### Content boundaries

The overview explains purpose, workflow, Gmail access, processing locations, and contact. Privacy separates confirmed operations from pending details and explains revocation and deletion requests. Terms state personal-use scope, responsibilities, integrations, and limitations. Public pages neither connect Gmail nor expose the private workflow.

Confirmed operational statements remain limited to Camilo's personal use, private DigitalOcean VPS access only by Camilo, selected job-alert information sent to OpenAI Codex, and no public publication of that information by Career Ops. The sources openly identify unknown retention and deletion rules, actual OAuth scopes, security controls, exact AI payloads and settings, and any additional provider used by Hermes AI. These unknowns are not promoted into promises or system rules.

### Verification remediation

The portfolio footer now provides a short factual Career Ops description and a separate, labelled information navigation with links to all three public pages. It inherits the existing footer's small type, theme colors, underlined links, wrapping behavior and 2.75rem interaction targets. The overview explicitly distinguishes reading the public pages from authorising Gmail and explains how job-alert content supports opportunity assessment and application preparation. Privacy separates email, opportunity, professional-profile and derived information, explains the confirmed data flow, and distinguishes access revocation from deleting stored copies or original Gmail messages.

The OAuth consent screen must use the public application overview at `/career-ops` as its application homepage and `/career-ops/privacy` as its privacy URL on the verified production domain. Footer discovery does not correct a consent-screen URL pointing to a private login. Retention, deletion, security and AI-provider settings still require operator confirmation before the policy can be considered ready for verification; no Google approval is promised.

### Finish evidence

The implementation handoff records passing `pnpm check` and `pnpm build`, static production responses (HTTP 200) for all three routes, no horizontal overflow at desktop (1440px) and mobile (390px), and a working inherited dark-mode toggle. Browser captures are retained as ignored QA artifacts at `.impeccable/career-ops-*.png`.

Finish-review disposition: **ship**, with no material fixes required. This records the scoped interface and validation evidence; it is not legal advice, a security audit, compliance certification, or Google OAuth approval. No existing global-system defect or unverified operational guarantee has been canonized here.
