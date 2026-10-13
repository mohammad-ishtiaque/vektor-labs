# Vektor Labs - Software Engineering & Digital Product Studio

A portfolio and client conversion platform for an elite software company specializing in Custom Software, Web Platforms, Mobile Apps (iOS/Android), and UI/UX Design Systems.

## Features Included
- **High-Converting Landing Experience**: Hero with interactive product selector, real-world metrics, and client logos.
- **Commercial Value Matrix ("Where You Win")**: Tangible business results (3x velocity, -40% cloud spend, 99.995% SLA).
- **Engagement & Delivery Protocol ("How We Deliver")**: Transparent 3-step sprint model + 4 contractual safeguards.
- **Interactive Portfolio Gallery & Case Studies**: Filterable project gallery with deep-dive technical modals.
- **Client Testimonials & Executive Endorsements**: Carousel with verified quotes from engineering leaders.
- **Engineering Field Notes & Insights Blog**: Technical articles with category filter and search modal.
- **Interactive Contact Intake & Sprint Estimator**: Dynamic scope and squad calculation as clients adjust budget and timeline.
- **Google Drive Integration**: Authenticate with Google to attach project briefs, RFPs, and design specs directly to inquiries.
- **Dual Obsidian Dark / Gallery Light Mode**: Full theme toggle with high contrast and WCAG AA accessibility.
- **Scroll Progress Indicator & Intersection Observer Reveals**: Premium agency feel with subtle parallax elements.

---

## Getting Started Locally

### 1. Prerequisites
- Node.js 18+ or 20+
- npm or pnpm / yarn

### 2. Installation
Clone or download the project folder, then run:

```bash
npm install
```

### 3. Environment Setup (Optional for Google Drive Sync)
Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

If you wish to test Google Drive authentication with your own Firebase project:
1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com).
2. Enable Google Authentication under **Authentication > Sign-in method**.
3. Enable the Google Drive API in your Google Cloud Console for the project.
4. Add your Firebase credentials to `firebase-applet-config.json` (or use local mock mode).

### 4. Running the Development Server
Start the Vite development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) in your browser.

### 5. Production Build
To create an optimized production build:

```bash
npm run build
npm run preview
```

---

## Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React
- **Authentication & Cloud**: Firebase Auth + Google Drive API
- **Fonts**: Syne & Plus Jakarta Sans via Google Fonts
