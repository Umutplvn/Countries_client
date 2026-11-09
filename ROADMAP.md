# GeoNavigator (`Countries_client`) — Engineering Roadmap (25+ Hours Planned Work)

This document outlines the planned engineering backlog and upcoming feature development for **GeoNavigator** (`Countries_client`).

## 1. Multi-Dimensional Filtering & Sorting Engine (~6 hours)
- [ ] Filter countries by **Region** and **Subregion** (Africa, Americas, Asia, Europe, Oceania, Antarctic).
- [ ] Filter by **Language**, **Currency**, and **UN Membership Status**.
- [ ] Add population and area range sliders.
- [ ] Multi-key sorting (Population ascending/descending, Area, Alphabetical Official/Common Name).
- [ ] Synchronize filter/sort state with URL query parameters (`?region=Europe&sort=population_desc`) for shareable views.

## 2. Side-by-Side Country Comparison Mode (~5 hours)
- [ ] Allow users to select up to 3 countries to compare side-by-side.
- [ ] Build a dedicated `/compare` route displaying demographic, geographic, linguistic, timezone, and economic metrics in a normalized comparison table.
- [ ] Add visual bar/radar charts for population density and land area comparison.

## 3. Interactive Map & Border Navigation (~5 hours)
- [ ] Integrate interactive Leaflet / OpenStreetMap view on the Country Details page (`/country/:cca2`) using `latlng` and `capitalInfo.latlng`.
- [ ] Resolve neighboring `borders` (`cca3` codes) into clickable neighbor country cards for seamless geographic traversal.

## 4. Client-Side Caching, Offline Resilience & Favorites (~4 hours)
- [ ] Implement `IndexedDB` / `localStorage` caching layer with TTL for `/all` and `/alpha/:cca2` responses to eliminate redundant API calls and handle rate limits.
- [ ] Add a "Bookmarked / Visited Countries" feature persisted locally with JSON export/import.

## 5. Automated Testing & Build Modernization (~5 hours)
- [ ] Add comprehensive unit and integration tests using Jest and React Testing Library covering search, filtering, routing, and API error states.
- [ ] Add end-to-end Playwright smoke tests.
- [ ] Migrate build toolchain from `react-scripts` (Create React App) to **Vite + TypeScript** for faster HMR and smaller production bundles.
