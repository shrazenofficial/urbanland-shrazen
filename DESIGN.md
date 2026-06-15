---
name: Industrial Heritage
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#41493f'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#72796e'
  outline-variant: '#c1c9bc'
  surface-tint: '#366937'
  primary: '#124719'
  on-primary: '#ffffff'
  primary-container: '#2c5f2e'
  on-primary-container: '#9fd79a'
  inverse-primary: '#9cd597'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e1'
  on-secondary-container: '#656464'
  tertiary: '#755b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c9a84c'
  on-tertiary-container: '#4f3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b7f1b1'
  primary-fixed-dim: '#9cd597'
  on-primary-fixed: '#002205'
  on-primary-fixed-variant: '#1e5122'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#ffe08f'
  tertiary-fixed-dim: '#e6c364'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
  forest-green: '#2C5F2E'
  charcoal-industrial: '#2D2D2D'
  craftsman-gold: '#C9A84C'
  off-white-base: '#F7F4EF'
  deep-ink: '#1A1A1A'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  accent-italic:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
---

## Brand & Style
The design system is built upon the "Ruler" and "Creator" archetypes, projecting an image of authoritative expertise and visionary craftsmanship. It targets high-end corporate and hospitality sectors that value durability and prestige.

The visual style is **Industrial-Nature**, a sophisticated blend of raw structural integrity and organic elegance. It utilizes heavy-weight typography and architectural grid structures balanced against a warm, nature-inspired palette. The interface should feel "built," not just designed—evoking the sensation of a premium, physical product that is built to last.

Key attributes:
- **Authoritative:** Direct, bold, and unapologetic layout structures.
- **Premium:** Generous use of white space and refined serif accents.
- **Expert:** High-precision alignment and technical detail clarity.

## Colors
The palette is rooted in the "Forest Green" primary, symbolizing nature and durability. This is supported by "Charcoal" to provide an industrial, authoritative anchor. "Gold" is used sparingly as a high-contrast accent to signify premium craftsmanship and global standards.

**Implementation Rules:**
- **Backgrounds:** Use the off-white base (`#F7F4EF`) for all primary surfaces to maintain a warm, organic feel.
- **Primary Action:** Use Forest Green for primary buttons and active states.
- **Typography:** Use Deep Ink (`#1A1A1A`) for body text to ensure maximum readability against the off-white background.
- **Accents:** Use Gold for small-scale elements like icons, dividers, or specific highlights that denote quality or "certified" features.

## Typography
Typography creates a "Master & Apprentice" relationship between the authoritative Playfair Display and the utilitarian Inter.

- **Headlines:** Use Playfair Display for all headings. It should feel grand and established. Use tighter letter spacing for large display sizes to increase visual impact.
- **Body:** Use Inter for all functional text. The high x-height ensures readability for technical specifications.
- **Accent Text:** Utilize Playfair Display in Italics for pull quotes or "Craftsman Notes" to add a human, artistic touch to the industrial layout.
- **Labels:** Use Inter in all-caps with generous letter spacing for small metadata or section labels to evoke architectural blueprints.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain the feel of a curated editorial catalog.

- **Desktop:** 12-column grid with a 1280px max-width. Use large vertical section gaps (120px+) to allow the "Nature-Inspired" imagery to breathe.
- **Mobile:** 4-column fluid grid.
- **Rhythm:** Spacing should be disciplined and modular, based on an 8px scale. Alignment should be strictly "Left" for headlines to project a direct, no-nonsense "Ruler" persona.

## Elevation & Depth
This design system rejects floating shadows in favor of **Tonal Layers** and **Bold Outlines**. Depth is achieved through material stacking rather than light simulation.

- **Surfaces:** Use subtle shifts in color (e.g., Charcoal containers on Off-white backgrounds) to define hierarchy.
- **Borders:** Use thin, high-contrast borders (1px) in Charcoal or Gold to define card edges.
- **Shadows:** Only use extremely subtle, sharp "key" shadows for interactive elements like buttons to give them a physical, tactile press feel. Avoid diffused ambient shadows.

## Shapes
The shape language is **Sharp to Subtle**. It reflects industrial manufacturing—clean cuts and precise edges.

- **Standard Elements:** Use a 4px (Soft) radius for buttons and input fields to prevent the UI from feeling aggressive while maintaining its "Solid" character.
- **Containers:** Large cards or sections should remain perfectly sharp (0px) to mimic large architectural slabs or furniture pieces.
- **Imagery:** Photos should always have sharp corners to maintain a professional, gallery-like presentation.

## Components
Consistent component styling reinforces the "Built to Last" promise.

- **Buttons:** Primary buttons use Forest Green backgrounds with white Inter Medium text. They should have a 4px corner radius and a solid 1px Charcoal bottom border for a "tactile" weight.
- **Input Fields:** Use the Off-white background with a 1px Charcoal border. On focus, the border transitions to Gold.
- **Cards:** Cards should be border-heavy (1px Charcoal) with no shadow. The header area of the card should use the `label-caps` typography style.
- **Chips/Badges:** Use Forest Green for "In Stock" or "Premium" status, with no rounded corners (sharp edges) to maintain the industrial look.
- **Dividers:** Use thin Gold lines (`1px`) to separate major content sections, symbolizing the "Golden Thread" of craftsmanship.
- **Iconography:** Use linear, medium-weight icons. Avoid rounded or bubbly icon sets; prefer geometric and sharp strokes.