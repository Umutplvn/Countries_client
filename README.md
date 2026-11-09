# GeoNavigator (`Countries_client`)

**Live Demo:** [https://geonavigator-info.netlify.app/](https://geonavigator-info.netlify.app/)

GeoNavigator is a TypeScript and React single-page web application for exploring demographic, geographic, linguistic, and administrative data for countries worldwide using the REST Countries v3.1 API.

## Who It's For
- Students, educators, researchers, and travelers looking for a fast, visual directory of world countries, capitals, populations, languages, timezones, UN membership status, and map links.

## Tech Stack
- **Language:** TypeScript (`^4.9` / strict typing via `src/types.ts`)
- **Frontend Framework:** React 19 (`react`, `react-dom`)
- **Routing:** React Router v7 (`react-router-dom`)
- **UI & Styling:** React Bootstrap (`react-bootstrap`, `bootstrap 5.3`, `bootstrap-icons`)
- **HTTP Client:** Axios (`axios`)
- **Deployment:** Netlify

## Project Structure
```text
countries/
├── public/                 # Static assets and HTML template
├── src/
│   ├── assets/             # SVG and PNG illustrations and loading indicators
│   ├── components/
│   │   ├── CountryCard.tsx     # Summary card with flag, official name, and hover state
│   │   ├── CountryDetails.tsx  # Detailed view (/country/:cca2) with demographics & map links
│   │   ├── Header.tsx          # Fixed navigation header
│   │   └── Footer.tsx          # Footer with author links
│   ├── App.tsx             # Root component
│   ├── AppRouter.tsx       # Route definitions (/ and /country/:cca2)
│   ├── Home.tsx            # Searchable country grid & REST Countries API integration
│   ├── types.ts            # TypeScript interfaces for REST Countries v3.1 payloads
│   └── index.tsx           # Application entry point
├── .env.example            # Environment variable template
├── LICENSE                 # MIT License
└── ROADMAP.md              # Planned 25+ hour development roadmap
```

## Getting Started

### Prerequisites
- Node.js (v18+ or v20+ recommended)
- npm or yarn

### Installation & Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Umutplvn/Countries_client.git
   cd Countries_client
   ```
2. (Optional) Copy the environment variable template:
   ```bash
   cp .env.example .env
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```

## Planned Work & Roadmap
See [ROADMAP.md](./ROADMAP.md) for the full 25+ hour engineering backlog, including:
- Multi-dimensional filtering (Region, Subregion, Currency, Language, Population range) and sorting
- Side-by-side Country Comparison view (`/compare`)
- Interactive Leaflet map integration and clickable border-country navigation
- Client-side caching & Favorites persistence
- Jest / React Testing Library test suite and Vite migration

## License
Distributed under the **MIT License**. See [LICENSE](./LICENSE) for details.
