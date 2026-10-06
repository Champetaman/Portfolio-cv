---
name: "Camilo Oviedo Portfolio"
description: "A systems evidence ledger for analyst work, technical contribution, and supported outcomes."
colors:
  cobalt-signal: "#124FCC"
  cobalt-press: "#0B3694"
  mineral-canvas: "#F2F5F7"
  ledger-paper: "#FAFBFC"
  carbon-ink: "#101820"
  slate-copy: "#52606D"
  steel-rule: "#C6D0D8"
  white-on-cobalt: "#FFFFFF"
  night-canvas: "#0E1318"
  night-paper: "#141B22"
  night-ink: "#F4F7FA"
  night-copy: "#A7B2BD"
  night-rule: "#33404B"
  night-signal: "#7EA6FF"
  night-signal-press: "#AFC5FF"
  night-focus: "#A9C0FF"
typography:
  display:
    fontFamily: '"Onest Variable", "Segoe UI", sans-serif'
    fontSize: "clamp(1.875rem, 3.5vw, 3rem)"
    fontWeight: 560
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  hero:
    fontFamily: '"Onest Variable", "Segoe UI", sans-serif'
    fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)"
    fontWeight: 560
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '"Onest Variable", "Segoe UI", sans-serif'
    fontSize: "clamp(1.625rem, 2.8vw, 2.5rem)"
    fontWeight: 560
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"Onest Variable", "Segoe UI", sans-serif'
    fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)"
    fontWeight: 560
    letterSpacing: "-0.03em"
  item:
    fontFamily: '"Onest Variable", "Segoe UI", sans-serif'
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 560
    lineHeight: 1.12
  subheading:
    fontFamily: '"Onest Variable", "Segoe UI", sans-serif'
    fontSize: "1.125rem"
    fontWeight: 560
    lineHeight: 1.3
  navigation:
    fontFamily: '"Onest Variable", "Segoe UI", sans-serif'
    fontSize: "0.8125rem"
    fontWeight: 400
  error-code:
    fontFamily: '"Onest Variable", "Segoe UI", sans-serif'
    fontSize: "clamp(3rem, 8vw, 4rem)"
    fontWeight: 560
    lineHeight: 0.78
  body:
    fontFamily: '"Onest Variable", "Segoe UI", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  intro:
    fontFamily: '"Onest Variable", "Segoe UI", sans-serif'
    fontSize: "clamp(1rem, 1.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.55
  action:
    fontFamily: '"Onest Variable", "Segoe UI", sans-serif'
    fontSize: "0.875rem"
    fontWeight: 570
    lineHeight: 1.2
  label:
    fontFamily: '"Cascadia Code", "SFMono-Regular", Consolas, monospace'
    fontSize: "0.7rem"
    fontWeight: 400
    letterSpacing: "0.07em"
  section-folio:
    fontFamily: '"Onest Variable", "Segoe UI", sans-serif'
    fontSize: "1.25rem"
    fontWeight: 520
    letterSpacing: "-0.03em"
rounded:
  micro: "2px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  section-min: "2rem"
  section-max: "3.5rem"
  register-min: "1.5rem"
  register-max: "2.5rem"
components:
  action-primary:
    backgroundColor: "{colors.cobalt-signal}"
    textColor: "{colors.white-on-cobalt}"
    typography: "{typography.action}"
    rounded: "{rounded.micro}"
    padding: "0.6rem 0.875rem"
  action-primary-hover:
    backgroundColor: "{colors.cobalt-press}"
    textColor: "{colors.white-on-cobalt}"
  action-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.cobalt-signal}"
    typography: "{typography.action}"
    rounded: "{rounded.micro}"
    padding: "0.6rem 0.875rem"
  inline-link:
    backgroundColor: "transparent"
    textColor: "{colors.cobalt-signal}"
    typography: "{typography.body}"
  exhibit-frame:
    backgroundColor: "{colors.ledger-paper}"
    padding: "{spacing.xs}"
---

# Design System: Camilo Oviedo Portfolio

## Overview

**Creative North Star: "Systems Evidence Ledger"**

The systems evidence ledger treats the portfolio as an authored record of business problems, technical contribution, and supported outcomes. It borrows the discipline of requirements traceability, operational change records, and engineering case files without imitating a dashboard.

The interface is precise, quiet, and human. Cool mineral surfaces, carbon text, cobalt section markers, and hairline rules establish a continuous reading system; asymmetrical evidence layouts and authentic artifacts keep the work itself in command.

**Key Characteristics:**

- Evidence-led rather than chronology-led.
- Flat mineral surfaces divided by precise rules.
- One cobalt annotation color across actions and section markers.
- Onest narrative type paired with sparse monospace metadata.
- Numbered section rails that keep the long-form page easy to scan.
- Authentic portraits and repository artifacts presented as documented exhibits.

## Colors

The palette pairs cool, low-chroma mineral neutrals with a single clear cobalt signal; dark mode preserves the same roles rather than inventing a second personality.

### Primary

- **Cobalt Signal** (`colors.cobalt-signal`): Primary actions, section markers, links, selection, and small evidence signals in light mode.
- **Cobalt Press** (`colors.cobalt-press`): Deliberate hover and emphasis state for Cobalt Signal.
- **Night Signal** (`colors.night-signal`): Accessible cobalt counterpart for actions and annotations on dark surfaces.
- **Night Signal Press** (`colors.night-signal-press`): Strong dark-mode interaction state.

### Neutral

- **Mineral Canvas** (`colors.mineral-canvas`): Light-mode page field.
- **Ledger Paper** (`colors.ledger-paper`): Light-mode exhibit and disclosure surface.
- **Carbon Ink** (`colors.carbon-ink`): Light-mode primary copy and headings.
- **Slate Copy** (`colors.slate-copy`): Light-mode secondary copy and metadata.
- **Steel Rule** (`colors.steel-rule`): Light-mode dividers, frames, and register lines.
- **White on Cobalt** (`colors.white-on-cobalt`): Primary-action copy on the light cobalt signal.
- **Night Canvas** (`colors.night-canvas`): Dark-mode page field and dark text on the lightened signal.
- **Night Paper** (`colors.night-paper`): Dark-mode exhibit and disclosure surface.
- **Night Ink** (`colors.night-ink`): Dark-mode primary copy and headings.
- **Night Copy** (`colors.night-copy`): Dark-mode secondary copy and metadata.
- **Night Rule** (`colors.night-rule`): Dark-mode dividers, frames, and register lines.
- **Night Focus** (`colors.night-focus`): Dark-mode keyboard focus outline.

**The Cobalt Annotation Rule.** Cobalt marks actions, section markers, links, and small evidence signals; it never becomes a broad decorative field.

**The Theme Pair Rule.** Light and dark modes swap complete role sets; never mix a light surface token with dark-mode copy or rule tokens.

## Typography

**Display Font:** Onest Variable (with Segoe UI and sans-serif fallbacks)  
**Body Font:** Onest Variable (with Segoe UI and sans-serif fallbacks)  
**Label/Mono Font:** Cascadia Code (with SFMono-Regular, Consolas, and monospace fallbacks)

**Character:** Onest makes the document direct and contemporary without looking like a software dashboard. Monospace appears only where the page behaves like structured evidence: dates, locations, technologies, section hashes, case labels, and exhibit captions.

### Hierarchy

- **Display** (weight 560, `typography.display`): Project-page titles at 30–48px. Hero uses `typography.hero` at 28–40px with a 27ch measure; both remain balanced and readable.
- **Headline** (weight 560, `typography.headline`): Major section headings with compact leading and no ornamental treatment.
- **Title** (weight 560, `typography.title`): Group and capability titles at 20–24px. Individual projects use `typography.item` at 18–22px; employer and supporting headings use the 18px subheading role.
- **Body** (weight 400, `typography.body`): Default narrative and evidence copy; reading measures stay near 58–68 characters.
- **Intro** (weight 400, `typography.intro`): Section framing copy, always secondary to the headline.
- **Label** (weight 400, `typography.label`): Short uppercase metadata with restrained tracking; never long prose.

**The Two-Voice Rule.** Onest carries narrative and hierarchy; monospace is reserved for evidence metadata, not personality or decoration.

## Layout

The system uses an 80rem maximum shell with 1rem minimum side gutters. Major sections are full-width registers with a consistent numbered rail and clear descriptive headline. Section bodies use fluid vertical padding between the `section-min` and `section-max` spacing tokens.

Evidence layouts vary their proportions instead of repeating an equal card grid. Project entries pair a compact artifact at left with contribution, technologies, and actions at right; experience uses a 13rem employer column; capabilities use a ruled two-column register from the medium breakpoint. Mobile preserves source order and keeps actions and controls at least 2.75rem tall. Hero portraits are capped at 13rem on small mobile, 15rem from the small breakpoint, and 16rem on desktop, retaining the 4:5 crop. The About portrait is capped at 21rem with a 4:3 crop and never stretched to match the copy height. Section padding spans 2–3.5rem; project register padding spans 1.5–2.5rem.

**The Section-Rail Rule.** Homepage sections use one stable reading sequence: `01 Experience`, `02 Projects`, `03 Capabilities`, `04 About`, `05 Contact`. On wide screens each label occupies a narrow ruled rail; on small screens it becomes a compact horizontal marker above the section body.

**The Ruled Rhythm Rule.** Use border lines and deliberate vertical intervals to group evidence; do not wrap every unit in a container.

## Elevation & Depth

The system is flat by default. Canvas and paper tones, 1px rules, authentic imagery, and asymmetric scale carry depth without shadows. The only implemented lifted surface is the mobile navigation disclosure, which uses a broad ambient shadow (`0 18px 45px rgba(0, 0, 0, 0.14)`) so it remains distinct from page content.

### Shadow Vocabulary

- **Mobile Disclosure:** A broad, low-opacity shadow used only beneath the open mobile navigation panel.

**The Flat Evidence Rule.** Major content surfaces stay flat at rest; shadow is reserved for a temporary layer that physically overlaps the document.

## Shapes

The form language is nearly square. Actions and focus targets use the `rounded.micro` corner only to soften rendering; exhibits, registers, section boundaries, imagery, and disclosures retain square corners. Frames are 1px rules, and paired cobalt corner marks may identify an important authentic artifact.

**The Almost-Square Rule.** Two-pixel action corners are the maximum recurring radius; larger rounding, capsules, and decorative pills do not belong in the ledger.

## Components

### Primary Action

A compact, confident cobalt action for the next meaningful step. It uses `components.action-primary`, a 1px matching border, a 2.75rem minimum height, and a 180ms color transition; hover shifts to `components.action-primary-hover`, while keyboard focus uses a 3px focus outline offset by 4px.

### Secondary Action

An outlined companion to the primary action. It uses `components.action-secondary`, retains the same height, padding, weight, and corner treatment, and receives an 8% cobalt wash on hover rather than becoming filled.

### Inline Evidence Link

An underlined cobalt text action with a 2.75rem minimum target. Its underline begins at reduced opacity, sits 0.28em below the text, and resolves to the current text color on hover.

### Navigation

The sticky header sits directly on the canvas behind a bottom rule. Desktop navigation is quiet Onest text with 2.75rem targets and no active pill; mobile uses native disclosure semantics, 3rem ruled rows, a paper surface, and numbered monospace destinations. Theme controls are 2.75rem square icon buttons with visible labels supplied to assistive technology.

### Section Rail

Each major register begins with a cobalt number and concise uppercase monospace label. The rail stays separate from the descriptive section heading and acts as a reliable wayfinding sequence across the long page.

### Project Exhibit

Every personal, open-source and professional project receives an authentic 4:3 image inside a paper mat and a 1px rule. At medium and wide viewports the image sits left of a concise project snippet; mobile stacks image above text. Information follows one stable order: category and identity, context or contribution, technologies, then actions. The complete portfolio remains visible without turning projects into repetitive cards.

### Evidence Register

Experience, capability, and outcome groups are flat lists separated by rules. Employer, role, date, contribution, and outcome occupy explicit columns at wider breakpoints and collapse into a single semantic sequence on smaller screens.

### Motion and State

Hero document blocks settle upward by 1rem over 650ms with the system ease (`cubic-bezier(0.22, 1, 0.36, 1)`); the second block is delayed by 90ms. State motion is limited to color, underline, and disclosure movement. Reduced-motion mode removes entry animation and makes link and action transitions effectively instantaneous.

## Do's and Don'ts

### Do:

- **Do** use numbered section rails, evidence labels, captions, and rules to make contribution and context easy to trace.
- **Do** keep Cobalt Signal rare enough that every appearance reads as action or annotation.
- **Do** present repository screenshots and portraits as flat exhibits with honest captions.
- **Do** vary evidence-layout proportions while preserving a clear semantic reading order.
- **Do** preserve 2.75rem minimum interaction targets, visible focus, dark-mode role parity, and reduced-motion behavior.

### Don't:

- **Don't** introduce gradients, glow, glass effects, or decorative saturation.
- **Don't** turn evidence into repeated rounded cards, bento tiles, chips, or skill-logo walls.
- **Don't** imitate a dashboard, add fake case-study artifacts, or imply unsupported authorship.
- **Don't** use large radii, decorative pills, or shadows on persistent content surfaces.
- **Don't** hide projects behind a curated shortlist; use category rhythm, compact image scale and concise copy to keep every project visible without making the page noisy.
