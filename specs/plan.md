# Wanderlust Explorer — Implementation Plan

## Purpose and constraints

Implement the product defined in [`specs.md`](./specs.md), using `sryle-reference/DESIGN-tourismo.md` and `sryle-reference/home-tourismo.jpg` as visual guidance. The screenshot is a style and composition reference only: its Nepal-specific content must not make the product Nepal-only, and it does not add unrequested features.

This plan does not authorize implementation of backend services, external APIs, a database, authentication, booking, payments, testimonials, travel-process steps, tailor-made services, or experience duration. Favorites remain in memory unless an authoritative requirement changes. The canonical palette is primary midnight navy `#07111E` and secondary cerulean `#2563EB`.

## Phase 1 — Project and Data Verification

- Review existing project structure, conventions, available scripts, and source documentation.
- Verify the local experience dataset has 100 records, unique IDs, valid categories, and the fields required by the specification.
- Identify destination values from the data; do not invent records or fields.
- Record any mismatch between source requirements, dataset, and specification before proceeding.

**Exit check:** dataset shape and project conventions are confirmed, or any blocker is recorded without silently fabricating missing data.

## Phase 2 — Types and Shared Logic

- Define or confirm TypeScript types for experiences and the five valid categories.
- Centralize search and filter behavior so results are derived from the dataset and active criteria.
- Decide where shared in-memory favorites state belongs so all required routes and components can access it.
- Implement at least one meaningful custom hook for reusable application logic.

**Exit check:** data and state contracts are clear, typed, and do not duplicate derived values or business logic.

## Phase 3 — Shared Layout and Navigation

- Establish the shared App Router layout and navigation for all five routes.
- Apply global foundations for the agreed palette, typography, spacing, and responsive containers.
- Use Next.js client-side navigation for internal links.

**Exit check:** required routes can share consistent application chrome and navigation does not cause full-document reloads.

## Phase 4 — Reusable Components

- Build the Navbar, ExperienceCard, Searchbar, and Filterbar responsibilities.
- Pass data, current state, and handlers through appropriately typed props.
- Apply pill-shaped controls, rounded cards, subtle borders/shadows, and image treatments where appropriate.
- Ensure controls have labels, visible focus, and accessible names.

**Exit check:** components can be reused by the relevant pages and expose accessible, testable interactions.

## Phase 5 — Home Page

- Replace the starter page with a discovery-focused hero and CTA to `/experiences`.
- Adapt the editorial composition of the design reference to the actual product and available local destinations.
- Do not copy Nepal-specific copy or add unrequested content sections.

**Exit check:** the home route introduces experience discovery and its CTA reaches the explorer.

## Phase 5b — Home Carousel Section (Popular Experiences)

- Add a new carousel section directly below the shared navigation bar on the home page, placed before the existing hero section.
- Create `PopularExperiencesCarousel` as a Client Component in `src/components/`.
- Select 5 curated experiences from the local dataset using stable numeric IDs, covering a variety of categories.
- Control the active slide index with React `useState`; implement previous/next arrow controls that cycle through the selection.
- Design overlapping cards on desktop (active card centred/emphasized, adjacent cards partially visible) and a single focused card on mobile, without horizontal overflow.
- Each carousel card shows the experience image (via `ResilientImage`), title, destination, price, and a detail link to `/experiences/[id]`. Use gradient overlays on images for readability.
- Apply the existing palette, typography, editorial spacing, rounded cards, restrained gradients, subtle frosted badges, and pill-style action links.
- Apply `prefers-reduced-motion` to any CSS transitions/animations.
- Do not add autoplay, swipe gestures, external libraries, or content sections beyond the carousel.
- Keep the hero and tagline sections below the carousel.

**Exit check:** arrows advance/retreat through the curated selection; the active card changes image, title, destination, and price; mobile view has a single focused card with no horizontal overflow; detail link navigates correctly; lint and build pass.

## Phase 6 — Experience Explorer

- Render the local catalogue in a responsive card grid.
- Implement case-insensitive title search and category/destination filters.
- Combine active criteria so each result satisfies all of them.
- Initialize controls and results from `search`, `category`, and `destination` query parameters.
- Update the URL through client-side navigation while preserving other active parameters.
- Handle empty results and invalid parameters consistently.

**Exit check:** direct links restore the same valid filter state and the displayed records match every active criterion.

## Phase 7 — Experience Detail

- Implement `/experiences/[id]` using the local dataset and route ID.
- Display title, image, description, category, destination, price, and rating.
- Connect the favorite action and provide navigation back to the explorer.
- Show a clear not-found state for unknown IDs.

**Exit check:** valid IDs render their matching record; unknown IDs do not crash and provide a return path.

## Phase 8 — Favorites and Profile

- Add and remove favorites from cards and detail views.
- Display and manage saved experiences on `/favorites`, including an empty state.
- Add the simulated `/profile` page and derive its favorite count from shared state.
- Keep all favorite indicators and lists synchronized immediately.
- Do not add cross-session persistence unless the requirements are revised.

**Exit check:** one favorite change is reflected consistently in every consumer during the current app session.

## Phase 9 — Responsive, Visual, and Accessibility Refinement

- Apply the canonical palette: `#07111E` primary, `#2563EB` secondary, with `#475569` supporting text and `#F8F9FA` light canvas.
- Use Plus Jakarta Sans for structural typography and selective italic Playfair Display accents.
- Refine generous editorial spacing, rounded image cards, restrained image gradients, subtle frosted badges, and pill actions.
- Validate mobile, tablet, and desktop layouts, including no horizontal overflow.
- Review semantic structure, keyboard access, focus, contrast, input labels, image alternatives, and favorite-button state labels.
- Keep testimonials, process steps, tailor-made services, and unsupported duration data out of the product.

**Exit check:** layouts and interactions remain usable at target viewport sizes and meet the documented accessibility requirements.

## Phase 10 — Validation and Documentation

- Verify every acceptance criterion in `specs.md`, including the exact dataset count and URL restoration behavior.
- Run the repository's applicable lint and production-build checks; address failures caused by this implementation.
- Update README run instructions and its `## Design References` section.
- Add only 2–3 real design-reference URLs after they have been selected and verified; until then, mark them pending.

**Exit check:** acceptance criteria and applicable project checks pass, and documentation accurately describes the finished application.

## Dependency order

Project/data verification → types and shared logic → layout and reusable components → home (hero + CTA) → **home carousel** → explorer → detail → favorites and profile → responsive/accessibility refinement → validation and documentation.

The carousel depends on the existing data model, `ResilientImage`, and home-page placement; it can be implemented after the hero section is in place and before the explorer.
