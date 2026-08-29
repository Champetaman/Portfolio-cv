---
target: current homepage before full redesign
total_score: 17
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-28T12-22-59Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 2 | No active-section state or feedback around external/download actions |
| 2 | Match System / Real World | 2 | Broad developer language does not match recruiter role-fit evaluation |
| 3 | User Control and Freedom | 2 | Image modals lack Escape, focus containment, and focus return |
| 4 | Consistency and Standards | 3 | Coherent baseline, weakened by link, spacing, and heading inconsistencies |
| 5 | Error Prevention | 2 | Icon controls and external actions lack safeguards or fallbacks |
| 6 | Recognition Rather Than Recall | 3 | Main labels are visible; zoom and mobile controls are less discoverable |
| 7 | Flexibility and Efficiency | n/a | Not material for a portfolio surface |
| 8 | Aesthetic and Minimalist Design | 2 | Exhaustive chronology and equal-weight cards dilute focus |
| 9 | Error Recognition and Recovery | 1 | No designed recovery for failed resume/external actions |
| 10 | Help and Documentation | n/a | Not material for a self-explanatory portfolio |
| **Total** | | **17/32** | **Acceptable; major redesign opportunity** |

## Design Specificity Verdict

The content is specific, but the interface is generic. Camilo's portrait, financial-system screenshots, named institutions, dated roles, and supported outcomes are credible and unusually strong. The centered column, radial background, yellow accent, pill actions, icon headings, timeline, and uniform cards could belong to almost any developer portfolio.

The largest opportunity is to make the interface express the actual mechanism: business need -> analysis and translation -> technical delivery -> supported outcome.

The deterministic Impeccable scan returned zero rules or file findings. It therefore missed the main content and interaction problems, including the contradictory "6+ years / over 6 years / eight years" claims. Browser automation could not initialize because its trusted runtime rejected a dependency path; both assessments used source, rendered HTML, direct asset inspection, and a successful HTTP render as fallback. No reliable overlay is visible.

## Overall Impression

The current site has credible content and a sound technical base, but it presents Camilo as a generic software professional and makes hiring managers work through an exhaustive chronology before reaching the strongest evidence.

## What's Working

1. The portrait creates immediate humanity and trust.
2. The financial and operational evidence is real, substantial, and relevant.
3. The Astro/Tailwind foundation already supports responsive layout, dark mode, and reduced motion.

## Priority Issues

1. **[P1] Contradictory tenure claims undermine credibility.** Remove derived years claims until one figure is confirmed.
2. **[P1] The first viewport does not establish analyst-role fit.** Lead with Technical/Business Systems/Application Analysis and show concise supporting proof.
3. **[P1] Information architecture buries the strongest evidence.** Move selected work and impact ahead of compressed chronology; show context, contribution, technology, and supported outcome together.
4. **[P2] Actions lack priority.** Use one primary recruiter action, one secondary action, and treat availability as passive status.
5. **[P2] The visual language undersells the career story.** Replace generic cards and timeline decoration with an analyst-native evidence system and restrained editorial composition.

## Persona Red Flags

**Jordan, first-time recruiter:** Cannot identify the intended role within five seconds; four equal hero actions compete; domain abbreviations lack context; project-image zoom is not communicated.

**Riley, deliberate stress tester:** Finds contradictory tenure claims, a broken footer About link, template attribution, unsupported resume-failure recovery, and modals without robust keyboard behavior.

**Casey, distracted mobile user:** Primary actions sit below substantial introduction; several controls are small; long expanded experience bullets create high-scroll, low-retention reading.

## Minor Observations

- `bg-slate-180` appears nonstandard.
- Project-image buttons suppress focus outlines without replacement.
- Hamburger, close, and image-zoom controls need stronger accessible names.
- Yellow text likely lacks contrast on the light background.
- The metadata repeats disputed tenure and broad developer positioning.

## Questions to Consider

- Which single analyst role and two pieces of proof should survive a 20-second scan?
- Could business need -> system change -> supported outcome become the visual grammar?
- Should the final screen optimise for a resume download or a conversation?
