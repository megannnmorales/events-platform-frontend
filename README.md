# Events Platform

A React and TypeScript front end for an events API. Users can browse events, view details, log in, RSVP, and cancel RSVPs. Logged-in users can also see the events they've RSVPed to.

## Features

- Browse all events and open a single event
- Log in and log out with a token-based session
- RSVP to an event and cancel an RSVP
- View your own RSVPed events and single event (different view - tbc as stats not showing correctly)
- Protected routes that redirect logged-out users to login

## Features to be added

- Log out with a token-based session
- Attendee list to organisers events
- Organiser stack page
- Accessibility labels

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Vitest

## Getting Started

### Prerequisites

- Node.js `<version>` or later
- A running instance of the events API

### Installation

```bash
npm install
```

### Environment

Create a `.env` file in the project root with your API base URL:

```
VITE_API_BASE_URL=http://127.0.0.1:8000
```

### Running the app

```bash
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

## Project Structure

- `src/api/`: API request helpers and endpoint functions
- `src/hooks/`: custom hooks that fetch data and manage loading and error state
- `src/components/`: reusable UI, grouped by feature (`events`, `user`)
- `src/pages/`: route-level pages
- `src/contexts/`: shared login state
- `src/utils/`: small helper functions
- `src/types.ts`: shared TypeScript types

## Design Notes

- A shared `apiGet` helper handles the base URL, auth header, and error checks in one place.
- Custom hooks own data fetching, so components only decide what to render.
- Login state lives in context, so the navbar and protected pages share one value.
- Rendered create event on myevents page for ease - can be separated in future

## Testing (TESTS TO BE ADDED)

```bash
npm test
```
