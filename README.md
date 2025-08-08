🏆 Sporty Group Frontend

## Features
- **React + TypeScript**: Type-safe application structure for robust development.
- **React Query**: Efficient API caching and on-demand data fetching.
- **ShadCN UI**: Consistent, accessible, and customizable UI components.
- **Organized Structure**: Domain-driven folder structure for scalability.
- **Smart Caching**: Fetches data only when needed, using cached results when available.
- **Extensible Design**: Clean and modular codebase for easy maintenance and growth

## Installation

### Prerequisites
- **Node.js**: Version 20.19.0 or higher (Vite requires this version).
- **Package Manager**: npm (or Yarn/pnpm if preferred).

### Setup
1. Install the required Node.js version using `nvm`:
   ```bash
   nvm install 20.19.0
   nvm use 20.19.0
   npm install
   npm run dev
   ```

### Folder structure
src/
├── components/
│   ├── features/    # Domain-specific components
│   │   ├── LeagueCard.tsx
│   │   ├── LeagueList.tsx
│   │   └── Badge.tsx
│   └── ui/          # Reusable UI primitives (ShadCN-style)
│       ├── button.tsx
│       ├── input.tsx
│       └── ...
├── hooks/           # Custom React hooks


## React Query Usage
- **Automatic Queries**: Some data fetches (e.g., league lists) are triggered automatically on component mount.
- **Manual Queries**: User-triggered actions (e.g., refreshing data) use useCachedRefetch to leverage cached results when available, minimizing API calls.
- **Caching**: React Query caches API responses to optimize performance and reduce redundant requests.

## API
- This app uses TheSportsDB API (https://www.thesportsdb.com/) for fetching league data.
