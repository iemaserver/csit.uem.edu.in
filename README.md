# CSIT UEM — Department Website

Official website of the **Department of Computer Science & Information Technology (CSIT)**, University of Engineering & Management, Kolkata (UEMK).

Live site: [csit.uem.edu.in](https://csit.uem.edu.in)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) (JSX + TSX) |
| Language | TypeScript 5 / JavaScript (ES modules) |
| Build tool | [Vite 5](https://vitejs.dev/) with `@vitejs/plugin-react-swc` |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) + `tailwindcss-animate` |
| UI components | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) |
| Routing | [React Router v6](https://reactrouter.com/) |
| Data fetching | [TanStack Query v5](https://tanstack.com/query) |
| Icons | [Lucide React](https://lucide.dev/) |
| Forms | React Hook Form + Zod |
| Testing | [Vitest](https://vitest.dev/) + Testing Library |
| Linting | ESLint 9 + typescript-eslint |
| Hosting | [Firebase Hosting](https://firebase.google.com/docs/hosting) |
| CI/CD | GitHub Actions |

---

## Project Structure

```
csit.uem.edu.in/
├── public/                   # Static assets served as-is
│   ├── uemk.ico              # Favicon
│   ├── robots.txt
│   └── placeholder.svg
├── src/
│   ├── assets/               # Images & media imported in components
│   │   ├── Events/           # Event-specific images
│   │   ├── FDP/              # FDP gallery images
│   │   ├── logo.png
│   │   ├── HOD.png
│   │   └── hero-bg.jpg
│   ├── components/           # Shared/reusable UI components
│   │   ├── ui/               # shadcn/ui primitives (auto-generated)
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PageLayout.jsx    # Common page wrapper (Navbar + Footer)
│   │   ├── NavLink.tsx
│   │   ├── SectionTitle.jsx
│   │   ├── GlassCard.jsx
│   │   ├── TechBackground.jsx
│   │   └── EventCard.jsx
│   ├── hooks/                # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                  # Utilities & static data
│   │   ├── utils.ts          # Tailwind class helpers (cn)
│   │   └── fdpData.js        # Faculty Development Programme data
│   ├── pages/                # Route-level page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Events.jsx
│   │   ├── EventDetail.jsx
│   │   ├── FDP.jsx
│   │   ├── FDPGallery.jsx
│   │   ├── ConferenceOrganised.jsx
│   │   ├── Magazine.jsx
│   │   ├── Newsletter.jsx
│   │   └── NotFound.tsx
│   ├── test/                 # Unit tests
│   │   ├── setup.ts
│   │   └── example.test.ts
│   ├── App.tsx               # Root component & route definitions
│   ├── main.tsx              # Application entry point
│   ├── App.css
│   ├── index.css             # Global styles & Tailwind directives
│   └── vite-env.d.ts
├── .github/
│   └── workflows/
│       └── build_and_deploy.yml   # CI/CD pipeline
├── firebase.json             # Firebase Hosting config
├── .firebaserc               # Firebase project alias (uemk-cst-csit)
├── components.json           # shadcn/ui configuration
├── tailwind.config.ts
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
└── vitest.config.ts
```

---

## Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Landing page with hero, highlights |
| `/about` | `About` | Department overview & HOD message |
| `/contact` | `Contact` | Contact details & map |
| `/faculty` | `FDP` | Faculty Development Programmes list |
| `/faculty/gallery/:slug` | `FDPGallery` | Photo gallery for a specific FDP |
| `/conference-organised` | `ConferenceOrganised` | Conferences organised by the dept |
| `/events/:year` | `Events` | Events for a given academic year |
| `/events/:year/:eventId` | `EventDetail` | Individual event detail page |
| `/magazine/:edition` | `Magazine` | Department magazine edition |
| `/newsletter` | `Newsletter` | Newsletter archive |
| `*` | `NotFound` | 404 page |

---

## Local Development

**Prerequisites:** Node.js ≥ 18, npm

```bash
# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev

# Run linter
npm run lint

# Run tests
npm test

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The `@` alias in imports resolves to `./src`.

---

## Deployment Strategy

Deployments are fully automated via **GitHub Actions** and target **Firebase Hosting**.

### Pipeline (`.github/workflows/build_and_deploy.yml`)

Triggered on every push to `main`:

```
push → main
  └─ build job
  │    ├─ Checkout code
  │    ├─ npm ci              (clean install)
  │    ├─ npm run build       (Vite production build → dist/)
  │    └─ Upload dist/ artifact
  └─ deploy job  (needs: build)
       ├─ Checkout code
       ├─ Download dist/ artifact
       └─ FirebaseExtended/action-hosting-deploy
            ├─ Firebase project : ${{ secrets.FIREBASE_PROJECT_ID }}
            ├─ Service account  : ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
            └─ Channel          : live
```

### Firebase Hosting config (`firebase.json`)

- **Public directory:** `dist/` (Vite output)
- **SPA rewrite:** all routes (`**`) fall through to `index.html`, enabling client-side routing
- **Ignored files:** `firebase.json`, dot-files, `node_modules/`

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `FIREBASE_SERVICE_ACCOUNT` | Firebase service account JSON |
| `FIREBASE_PROJECT_ID` | Firebase project ID (`uemk-cst-csit`) |

> `GITHUB_TOKEN` is provided automatically by GitHub Actions for PR comments.

---

## Contributing

1. Fork the repository and create a feature branch from `main`.
2. Follow the existing coding style (TypeScript preferred for new files).
3. Run `npm run lint` and `npm test` before opening a PR.
4. All PRs target the `main` branch — merging triggers an automatic production deployment.
