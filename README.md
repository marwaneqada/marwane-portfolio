# Marwane Qada Portfolio

A modern bilingual developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

The portfolio presents profile information, technical skills, professional experience, public projects, private professional case studies, and downloadable CVs in English and French.

## Tech Stack

- **Framework:** Next.js 16 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Theme:** next-themes
- **Icons:** Lucide React and React Icons

## Features

- Responsive portfolio layout for desktop and mobile
- Light and dark mode support
- English and French language switching
- Data-driven profile, skills, projects, and experience sections
- Dynamic project detail pages using `/projects/[slug]`
- Public project support with optional GitHub and live demo links
- Private professional case studies with confidentiality notes
- Downloadable CV files in English and French

## Project Structure

```txt
src/app
  Main App Router pages, layout, global styles, and project detail route.

src/components/layout
  Navbar and footer components.

src/components/sections
  Portfolio sections such as Hero, About, Skills, Projects, Experience, and Contact.

src/components/ui
  Shared UI components and providers.

src/data
  Editable portfolio content, translations, projects, skills, profile, and experience data.

src/types
  Shared TypeScript interfaces.

public/cv
  Public CV files used by the download buttons.

public/images/projects
  Project and case study images.
```

## Content Management

Most portfolio content can be updated from the data files:

- `src/data/profile.ts`
- `src/data/translations.ts`
- `src/data/skills.ts`
- `src/data/projects.ts`
- `src/data/experience.ts`

Private professional projects should not include public GitHub or live demo links unless those links are intentionally available. They can be presented as case studies with a confidentiality note.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Before Pushing

Run:

```bash
npm run lint
npm run build
```

Also review the files in `public/cv` and `public/images/projects` before publishing, because everything in `public` is publicly accessible.
