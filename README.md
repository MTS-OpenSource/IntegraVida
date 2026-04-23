# IntegraVida Landing Page

Landing page for IntegraVida, a healthcare-focused web experience centered on diabetes care and patient contact. The project is built with Angular 21 and currently exposes a single-page landing flow designed for static deployment on GitHub Pages.

## Tech Stack

- Angular 21 with standalone components
- TypeScript
- HTML templates and component-scoped CSS
- Angular Router
- Signals for lightweight state handling
- GitHub Actions for GitHub Pages deployment

## Project focus

The current implementation is oriented around a simple landing experience with:

- A root route that loads the landing directly
- Reusable UI sections for navigation, hero, and contact
- A lightweight language service with Spanish and English labels
- Static deployment support for GitHub Pages

## Current structure

```text
IntegraVida/
├── .github/
│   └── workflows/
│       └── static.yml                 # Automatic deploy to GitHub Pages
├── public/                            # Static public assets
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── hero/
│   │   │   ├── services/
│   │   │   └── testimonials/
│   │   ├── core/
│   │   │   └── services/
│   │   │       └── lenguage.service.ts
│   │   ├── pages/
│   │   │   ├── landing/
│   │   │   └── pages/
│   │   ├── shared/
│   │   │   ├── button/
│   │   │   ├── footer/
│   │   │   └── navbar/
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── app.ts
│   ├── assets/                        # Images and SVG assets used by the landing
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── README.md
```

## Routing

The app is configured so the root path loads the landing directly:

- `/` -> landing page

This avoids redirect issues and works better with GitHub Pages static hosting.

## Internationalization

The project currently includes a simple in-app language service:

- Default language: Spanish
- Secondary language: English
- Translation values are defined in `src/app/core/services/lenguage.service.ts`

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm start
```

Then open:

```text
http://localhost:4200
```

## Production build

Run the standard production build:

```bash
npx ng build
```

The output is generated in:

```text
dist/IntegraVida
```

## GitHub Pages deployment

The repository is configured to deploy with GitHub Actions using:

- `.github/workflows/static.yml`

The workflow:

- installs dependencies with `npm ci`
- builds the app for GitHub Pages
- publishes the static browser output
- creates a `404.html` fallback for SPA routing

To trigger deployment:

```bash
git push origin development
```

or:

```bash
git push origin main
```

In GitHub repository settings, Pages should be configured to use:

- `Source` -> `GitHub Actions`

## Notes

- The project currently includes additional sections and shared components that can be wired into the landing as it evolves.
- Since GitHub Pages is static hosting, deployment is configured around a static output instead of a server runtime.
