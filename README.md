<div align="center">

# 👋 Marwane Qada — Portfolio

**A modern, bilingual (EN / FR) developer portfolio.**

Profile, skills, experience, public projects, private professional case studies, and downloadable CVs — in light & dark mode.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff4d8d?logo=framer&logoColor=white)

</div>

---

## ✨ Overview

A data‑driven portfolio built with the Next.js App Router. All content lives in typed data files, so adding a project, skill, or experience is a one‑file edit. Projects can be **public** (with GitHub / live links) or **private professional case studies** presented with a confidentiality note.

## 🚀 Features

- 🌗 Light & dark mode
- 🌐 English / French language switching
- 🧩 Data‑driven profile, skills, projects & experience
- 📄 Dynamic project detail pages at `/projects/[slug]`
- 🔗 Public projects with optional GitHub / live‑demo links (incl. multi‑repo projects)
- 🛡️ Private professional case studies with confidentiality notes
- 📑 Downloadable CVs (EN / FR)
- 🎞️ Smooth motion with Framer Motion, fully responsive

## 🧱 Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Theme | next‑themes |
| Icons | Lucide React · React Icons |

## ✍️ Managing content

Everything editable lives in `src/data`:

```txt
src/data/profile.ts       # name, socials, CV links
src/data/skills.ts        # skill categories
src/data/projects.ts      # projects & case studies
src/data/experience.ts    # work experience
src/data/translations.ts  # all EN / FR UI strings
```

Add a project by appending an entry to `src/data/projects.ts` — its detail page is generated automatically from the slug. Put project images in `public/images/projects/`.

## 🗂️ Project structure

```txt
src/
  app/                 # App Router pages, layout, /projects/[slug]
  components/
    layout/            # Navbar, Footer
    sections/          # Hero, About, Skills, Projects, Experience, Contact
    ui/                # shared UI + providers (theme, language)
  data/                # editable content (see above)
  types/               # shared TypeScript interfaces
public/
  cv/                  # downloadable CVs
  images/projects/     # project & case-study images
```

## 🏁 Getting started

```bash
npm install
npm run dev            # http://localhost:3000
```

## 📜 Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## ✅ Before pushing

```bash
npm run lint
npm run build
```

Also review everything in `public/` — it's all publicly accessible.

<div align="center"><sub>Built with Next.js · TypeScript · Tailwind CSS · Framer Motion</sub></div>
