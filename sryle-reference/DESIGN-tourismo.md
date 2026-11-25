---
name: Serene Editorial Expedition
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474c'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777c'
  outline-variant: '#c5c6cc'
  surface-tint: '#555f6f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#121c29'
  on-primary-container: '#7b8495'
  inverse-primary: '#bdc7d9'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0d1c2e'
  on-tertiary-container: '#77859a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e3f6'
  primary-fixed-dim: '#bdc7d9'
  on-primary-fixed: '#121c29'
  on-primary-fixed-variant: '#3e4756'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#d5e3fc'
  tertiary-fixed-dim: '#b9c7df'
  on-tertiary-fixed: '#0d1c2e'
  on-tertiary-fixed-variant: '#3a485b'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 52px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-editorial-serif:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: '500'
    lineHeight: 52px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the serenity, prestige, and quiet luxury of bespoke world travel. Designed for discerning travelers seeking transformative, authentic journeys, the aesthetic blends the refined editorial elegance of high-end independent publishing with modern, hyper-tactile digital precision.

The emotional signature is expansive, tranquil, and deeply immersive. Visual rhythm alternates between deep midnight indigo expanses (evoking twilight over alpine silhouettes) and crisp, airy, warm off-white canvases (evoking mountain mist and gallery spaces). 

Stylistically, the aesthetic combines:
- **Contemporary Editorial Luxury:** Typographic pairing that places high-contrast italic serif expressions inside modern sans-serif headlines to highlight poetic nuances.
- **Pill & Organic Curvature:** Smooth, welcoming radii (rounded-3xl containers, pill tags, circular action controllers) that soften rugged geographic themes into sophisticated luxury.
- **Immersive Card Architecture:** Full-bleed natural imagery grounded with deep bottom gradient vignettes, frosted micro-badges, and minimalist linear metrics.

## Colors

The palette balances monumental contrast with subtle atmospheric warmth:

- **Primary (`#07111E`):** Deep Midnight Navy. Anchors the brand. Used for full-bleed dark breakout sections, primary high-emphasis typography, dark container cards, and primary action buttons.
- **Secondary (`#2563EB`):** Expedition Cerulean. Used sparingly for active states, key interactive indicators, small circular accent buttons (`+`), and rating dots.
- **Tertiary (`#475569`):** Alpine Slate. Used for secondary metadata, descriptions, subtle icon strokes, and supporting editorial passages.
- **Neutral Canvas (`#F8F9FA`):** Mist White. The foundational surface for daytime narrative blocks, creating breathing room against deep navy components.

### Semantic & Surface Tokens
- **Surface Dark:** `#07111E` (deep canvas background)
- **Surface Dark Card:** `#0D1C2E` / `rgba(255, 255, 255, 0.06)`
- **Surface Light Container:** `#FFFFFF` (crisp white floating cards)
- **Surface Subdued:** `#F1F3F5` (pill chips, search fields, secondary backdrops)
- **Border Subdued:** `rgba(15, 23, 42, 0.08)` on light surfaces; `rgba(255, 255, 255, 0.12)` on dark surfaces.

## Typography

The typography strategy leverages dual-style tension to deliver an upscale editorial feel:

1. **Primary Structural Typeface (Plus Jakarta Sans):** Modern, geometric yet humanist proportions ensure maximum legibility at structural hierarchy levels (menus, metadata, micro-badges, metrics, and standard headings).
2. **Editorial Accent (Playfair Display Italic):** Used selectively within headlines to inject romanticism and wanderlust (e.g., "Discover *Our Most* Popular Tours", "Nepal *Without Limits*"). These serif accents should be rendered in italics and integrated seamlessly inline within main headline locks.
3. **Category Micro-Labels:** Formatted in uppercase with generous tracking (`0.08em` to `0.12em`), centered within rounded-full pills for section orientation.

## Layout & Spacing

The layout uses a 12-column fluid grid system with controlled maximum content widths to emulate the pacing of a coffee-table book:

- **Desktop (1200px+):** Max-width container of `1280px` with 12 columns, 24px gutters, and 32px canvas margins.
- **Tablet (768px - 1199px):** 8 columns, 20px gutters, and 24px canvas margins.
- **Mobile (< 768px):** 4 columns, 16px gutters, and 16px canvas margins.

### Spacing Philosophy
- **Generous Vertical Breathing:** Section intervals use expanded padding (`80px` to `120px` desktop, `48px` to `64px` mobile) to create deliberate pacing between themes.
- **Editorial Centering:** Pre-titles and narrative intros are centered horizontally above card arrangements, anchoring viewer focus before splitting into multi-card horizontal scrollways or staggered columns.

## Elevation & Depth

This system avoids heavy, muddy drop shadows in favor of crisp surface tiers, luminous glass layers, and ambient glows:

- **Base Cards (Day Mode):** Flat crisp `#FFFFFF` resting against `#F8F9FA` with a hairline border `rgba(15, 23, 42, 0.06)` and an ambient, ultra-diffused shadow: `0 8px 30px rgba(7, 17, 30, 0.04)`.
- **Selected / Hero Cards:** Slight upward physical translation (`translate-y: -8px`) paired with a refined elevation shadow: `0 20px 40px rgba(7, 17, 30, 0.12)`.
- **Overlaid Micro-Pills / Translucent Badges:** Frosted glassmorphism (`backdrop-filter: blur(12px)`) with background `rgba(255, 255, 255, 0.2)` on imagery and `rgba(7, 17, 30, 0.4)` on dark imagery, sealed with a `1px` translucent edge.
- **Atmospheric Dark Sections:** High-contrast inversion zones (`#07111E`) featuring soft inner ambient radial lighting that highlights mountain contours or imagery borders without hard breaks.

## Shapes

The shape hierarchy is distinctly rounded and tactile, conveying warmth, approachability, and contemporary luxury:

- **Pill Form (Border Radius: 9999px / `rounded-full`):** Universally applied to all CTA buttons, category badges, numeric indicator tags, avatar outlines, and circular carousel arrow buttons.
- **Large Content Cards (Border Radius: 24px to 28px):** Applied to tour itinerary cards, testimonial panels, and image showcase blocks.
- **Sub-Containers & Micro-Panels (Border Radius: 16px to 20px):** Applied to embedded metric tiles, stat callouts, and search input wraps.
- **Circular Icon Controls:** Navigation arrows and toggle buttons maintain a strict 1:1 aspect ratio with full circle curvature.

## Components

### Buttons & Action Controls
- **Primary Pill Button:** Solid midnight navy background (`#07111E`), pure white text, fully rounded (`rounded-full`), generous horizontal padding (`px-8 py-3.5`). On hover, soft background shift to `#1E293B`.
- **Secondary / Inverted Pill Button:** Solid white background (`#FFFFFF`), midnight navy text (`#07111E`), subtle shadow. Used over dark imagery or midnight sections.
- **Carousel Arrow Controls:** Minimal 44px circular buttons (`rounded-full`), white background with fine border (`1px solid rgba(0,0,0,0.1)`), containing centered slate arrows.

### Category Chips & Badges
- **Micro Section Chips:** Pill-shaped tags with light neutral background (`#F1F3F5`), slate text (`#475569`), uppercase typography (`11px`, `tracking-wider`). Centered above main section titles.
- **Card Badges (Price / Duration):** Translucent frosted pills pinned to corners of photography cards displaying pricing (`$540`) or duration (`4 days`).

### Cards & Media Carousels
- **Itinerary Cards:** Vertical ratio (approx. 3:4), 24px border radius, overflow hidden. Photography spans full bleed with bottom gradient dark fade (`linear-gradient(to top, rgba(7,17,30,0.85) 0%, transparent 60%)`). Bottom area embeds title, price chip, and an inner pill button (`Explore`).
- **Review & Testimonial Cards:** Solid white surface or soft gray (`#F1F3F5`), 24px rounded corners, padding `space-lg`. Includes user avatar thumbnail, name, location, 5-dot rating indicator in cerulean blue, and italic quote snippet.

### Data Metrics & Step Indicators
- **Metric Highlights:** Clean stacked numerals (`8,000+ m`, `100+`) rendered in bold Plus Jakarta Sans (`32px` to `40px`) accompanied by soft slate descriptor labels below.
- **Horizontal Process Steps:** Sequential numbers (`01`, `02`, `03`) connected by thin neutral tracks with blue accent indicator pips.

### Form Inputs & Search
- **Subscription & Search Fields:** Pill-shaped capsules enclosing input placeholder and trailing rounded action button (`Join the journey →`). Minimalist border with no heavy inner shadows.