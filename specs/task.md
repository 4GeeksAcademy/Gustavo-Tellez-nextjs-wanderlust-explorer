# Wanderlust Explorer — Verifiable Task Checklist

This checklist tracks implementation work described in [`plan.md`](./plan.md) and [`specs.md`](./specs.md). Checking a task means its stated verification has passed; creating plans is not evidence that implementation is complete.

## Phase 1 — Project and Data Verification

- [x] Confirm the application root, App Router conventions, existing source structure, and available validation scripts.
- [x] Confirm the local dataset contains exactly 100 experience records.
- [x] Verify every experience has all required fields with valid types and non-empty required strings.
- [x] Verify every experience ID is unique.
- [x] Verify every category is one of `Adventure`, `Culture`, `Food`, `Wellness`, or `Nature`.
- [x] Identify available destination filter values from the dataset without inventing options.
- [x] Record any source-data mismatch or blocker before application work proceeds.

**Verification evidence:** `src/data/experiences.ts` was checked with a source-data validation script: 100 records; all 8 required fields on every record; 100 unique IDs; all required strings present and non-empty; numeric `price` and `rating`; only the five allowed categories; and 78 distinct destination values. No data-integrity mismatch was found.

**Blockers resolved:** The local dataset was accessible and verified. The installed Next.js documentation was also accessible through the terminal; the App Router `use-search-params`, `use-router`, and `use-pathname` references were located and reviewed. No external/API access was needed.

## Phase 2 — Types and Shared Logic

- [x] Define or confirm the TypeScript `Experience` model and `ExperienceCategory` union.
- [x] Implement one centralized search/filter operation over the local dataset.
- [ ] Verify search matches titles without regard to case.
- [ ] Verify category and destination filters are individually effective.
- [ ] Verify simultaneous search, category, and destination criteria use AND semantics.
- [x] Choose a shared in-memory favorites state owner accessible from all required consumers.
- [x] Implement at least one meaningful custom hook with a documented responsibility.

**Verification evidence:** `src/data/experiences.ts` exports the typed model and filter contract. `src/hooks/useExperiences.ts` centralizes case-insensitive title matching and exact category/destination filters with AND semantics, and derives destinations from the dataset. `npm run lint` and the production build pass. Focused behavioral checks for filter cases remain pending.

## Phase 3 — Shared Layout and Navigation

- [x] Provide the required routes: `/`, `/experiences`, `/experiences/[id]`, `/favorites`, and `/profile`.
- [x] Provide shared navigation links to the main destinations, favorites, and profile.
- [x] Indicate the active route where applicable.
- [ ] Verify internal navigation works without a full-document reload.
- [x] Establish global design foundations using primary `#07111E` and secondary `#2563EB`.

**Verification evidence:** the production build emits every required route. Internal links use Next.js `Link`; browser navigation without a document reload has not been manually exercised.

## Phase 4 — Reusable Components

- [x] Provide a reusable Navbar with active-route and favorite-indicator behavior as applicable.
- [x] Provide an ExperienceCard that displays image, title, destination, price, rating, and category.
- [x] Ensure each card has a working detail-navigation action and accessible favorite toggle.
- [x] Provide a labeled Searchbar controlled by explorer state.
- [x] Provide category and dataset-derived destination controls in the Filterbar.
- [x] Use typed props for component data and interaction callbacks.
- [x] Verify the controls expose labels, keyboard focus, and accessible action names.

**Verification evidence:** lint and production build pass; controls have associated labels, visible focus styles, and accessible favorite names/states. Keyboard traversal has not been manually exercised.

## Phase 5 — Home Page

- [x] Replace the Next.js starter content with a discovery-focused home page.
- [x] Include a clear CTA that navigates to `/experiences`.
- [x] Use the reference's editorial hero/composition as visual inspiration without copying Nepal-specific content.

**Verification evidence:** home route contains no starter-template content and the CTA reaches the explorer.

### Home Carousel Section (Popular Experiences)

- [x] Place a carousel section on the home page below the shared navbar and before the hero.
- [x] Create a dedicated Client Component (`PopularExperiencesCarousel`) for the carousel.
- [x] Select 5 curated experiences from the dataset using stable IDs with varied categories (ids 1, 21, 41, 61, 81 covering Adventure, Culture, Food, Wellness, Nature).
- [x] Display overlapping cards on desktop (active card centred/emphasized, adjacent cards partially visible) and a single focused card on mobile.
- [x] Use `ResilientImage` for images, show title/destination/price per card, and link to the correct `/experiences/[id]`.
- [x] Implement previous and next arrow controls that cycle through the selection.
- [x] Apply the canonical palette, typography, editorial spacing, gradient overlays, rounded cards, frosted badges, and pill links.
- [x] Respect `prefers-reduced-motion` for any CSS transitions (added `motion-reduce:transition-none` and `motion-reduce:scale-100 motion-reduce:opacity-100` to all animated elements).
- [ ] Verify arrows advance/retreat and update image, title, destination, and price in the browser.
- [ ] Verify mobile view shows a single focused card without horizontal overflow in the browser.
- [ ] Verify the detail link navigates to the correct experience page in the browser.
- [x] Verify lint and production build pass.
- [x] Confirm no autoplay, swipe, external libraries, or extra content sections were added.

**Verification evidence:** `PopularExperiencesCarousel` is implemented and integrated into `src/app/page.tsx`. Swiper-like improvements applied: clean chevron SVGs on arrow buttons (`h-12 w-12`, `hover:scale-105`), lateral cards at `scale-[0.85]` with `opacity-70`, `transition-all duration-500` for smoother animations, and `motion-reduce` support on all animated properties. Lint y build pasan limpios (0 errores, 0 warnings). Archivo sin errores de sintaxis. Las variables `prev2`/`next2` eliminadas por no usarse. Browser interaction checks for arrows, card updates, detail link, and mobile layout remain pending.

## Phase 6 — Experience Explorer

- [x] Render the local experiences in a responsive grid of reusable cards.
- [x] Search by title with case-insensitive matching.
- [x] Filter by each valid category.
- [x] Filter by destination values represented in the dataset.
- [ ] Verify all active search/filter criteria are applied together.
- [x] Initialize the input, selectors, and results from `search`, `category`, and `destination` URL parameters.
- [x] Update URL parameters when controls change while preserving other active filters.
- [x] Omit empty parameters and avoid full-page navigation.
- [x] Handle invalid parameters without crashing or desynchronizing controls and results.
- [x] Display a useful empty state when no experiences match.

**Verification evidence:** source implements URL initialization, preservation, empty-value cleanup, and invalid-value normalization. The invalid-query HTTP smoke check returns 200; rendered result consistency and combined filter behavior still need an interactive browser check.

## Phase 7 — Experience Detail

- [x] Resolve the route's experience by ID from the local dataset.
- [x] Display title, image, description, category, destination, price, and rating.
- [x] Provide a favorite action and navigation back to the explorer.
- [x] Show a not-found state and return path for an unknown ID.

**Verification evidence:** HTTP smoke checks return 200 for `/experiences/1` and 404 for an unknown ID; the production build prerenders the 100 known IDs. Detail content was verified in source, but browser rendering has not been manually inspected.

## Phase 8 — Favorites and Profile

- [x] Add an experience to favorites from a card and/or detail view.
- [x] Remove a favorite from the favorites page.
- [ ] Verify favorite state and indicators update immediately across Navbar, cards, detail, favorites, and profile.
- [x] Render favorite experiences on `/favorites`.
- [x] Render a useful empty state when there are no favorites.
- [x] Render simulated profile information on `/profile`.
- [x] Derive the profile's favorite count from current shared state.
- [x] Verify favorites do not require or imply cross-session persistence.

**Verification evidence:** the shared in-memory provider owns the favorite set and all required consumers derive their list/count from it. Empty state and zero count are present; immediate cross-route updates still need an interactive browser check.

## Phase 9 — Responsive, Visual, and Accessibility Refinement

- [x] Apply primary navy `#07111E`, secondary cerulean `#2563EB`, supporting slate `#475569`, and light canvas `#F8F9FA`.
- [x] Apply Plus Jakarta Sans structurally and selective italic Playfair Display accents.
- [x] Use editorial spacing, rounded cards, restrained imagery gradients, subtle badges, and pill actions consistently.
- [ ] Verify mobile layout adapts navigation, cards, and filters without horizontal overflow.
- [ ] Verify tablet layout has a balanced grid and usable navigation/filters.
- [ ] Verify desktop layout uses available space and presents full navigation.
- [ ] Verify semantic landmarks/headings, keyboard navigation, visible focus, labels, contrast, and meaningful image alternatives.
- [x] Verify favorite buttons communicate both action and current state accessibly.
- [x] Confirm testimonials, travel-process steps, tailor-made services, and unsupported duration have not been added.
- [x] Confirm Nepal has not been treated as the only supported destination based solely on the reference screenshot.

**Verification evidence:** responsive breakpoints, compact mobile navigation, palette, typography, focus styles, semantic labels, image alternatives, and scope exclusions were checked in source. Mobile/tablet/desktop rendering, contrast measurement, and keyboard traversal remain pending visual/manual checks.

## Phase 10 — Validation and Documentation

- [ ] Check every acceptance criterion in `specs.md`.
- [x] Run and pass the repository lint command.
- [x] Run and pass the production build.
- [x] Update README run instructions to match the project.
- [x] Ensure README contains a `## Design References` section.
- [x] Add 2–3 real design-reference URLs only after verification, or clearly mark them pending.

**Verification evidence:** `npm run lint` and `npm run build` pass; HTTP smoke checks return 200 for all required pages and invalid filter parameters, and 404 for an unknown experience ID. The README documents project commands and explicitly leaves external design-reference URLs pending. Cross-route interaction checks and viewport inspection remain pending, so Phase 9 and the full acceptance review are not yet complete.
