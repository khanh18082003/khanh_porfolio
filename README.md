# Khanh Portfolio

> Personal portfolio website of **Nguyen Trung Khanh** — Backend Developer specializing in Java, Spring Boot, and scalable distributed systems.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## Live Demo

**https://github.com/khanh18082003/khanh_porfolio**

---

## Overview

This portfolio showcases:

- Professional background and career goals
- Technical skills grouped by domain
- Featured backend & full-stack projects with detailed case studies
- Contact information and direct links to GitHub, LinkedIn

The UI is designed to be modern, fully responsive, with dark/light mode and smooth scroll animations.

---

## Features

| Feature             | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| Hero Section        | Quick intro with name, role, and call-to-action buttons                 |
| About Section       | Background, education, and career focus                                 |
| Skills Section      | Skills grouped by category (Backend, Database, DevOps, Frontend, Tools) |
| Work Section        | Featured project cards with tech stack badges                           |
| Project Detail Page | Full case study: overview, features, challenges, highlights             |
| Contact Section     | Email, GitHub, LinkedIn links and a contact form                        |
| Dark / Light Mode   | Theme toggle with persistent preference                                 |
| Scroll Animations   | Framer Motion reveal animations on each section                         |
| Responsive Layout   | Optimized for desktop, tablet, and mobile                               |

---

## Tech Stack

### Frontend

| Package          | Version | Purpose                 |
| ---------------- | ------- | ----------------------- |
| React            | ^19.2   | UI framework            |
| TypeScript       | ~5.9    | Type safety             |
| Vite             | ^7.3    | Build tool & dev server |
| Tailwind CSS     | ^4.2    | Utility-first styling   |
| Framer Motion    | ^12.35  | Animations              |
| React Router DOM | ^7.13   | Client-side routing     |
| React Icons      | ^5.6    | Icon library            |

### Tooling

| Tool                | Purpose       |
| ------------------- | ------------- |
| ESLint              | Code linting  |
| TypeScript Compiler | Type checking |

---

## Project Structure

```text
khanh_porfolio/
├── public/                   # Static assets (images)
├── src/
│   ├── assets/               # Bundled assets
│   ├── components/
│   │   ├── layout/           # Navbar, Footer, Container, RevealSection
│   │   └── ui/               # Button, Card, Badge, SectionTitle, ThemeToggle
│   ├── data/
│   │   ├── profile.ts        # Personal info (name, email, social links)
│   │   ├── projects.ts       # Featured project definitions
│   │   └── skills.ts         # Skill categories
│   ├── hooks/
│   │   └── useTheme.ts       # Dark/light mode hook
│   ├── pages/
│   │   ├── Home.tsx          # Main page (all sections)
│   │   └── ProjectDetail.tsx # Individual project detail page
│   ├── sections/
│   │   ├── about/            # About section
│   │   ├── contact/          # Contact section + form
│   │   ├── hero/             # Hero section + image + actions
│   │   ├── skills/           # Skills grid
│   │   └── work/             # Project cards grid
│   ├── types/
│   │   ├── project.ts        # Project type definition
│   │   └── skill.ts          # Skill type definition
│   ├── App.tsx               # Router setup
│   ├── index.css             # Global styles
│   └── main.tsx              # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
# Clone the repository
git clone https://github.com/khanh18082003/khanh_porfolio.git
cd khanh_porfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with Hot Module Replacement enabled.

### Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Routes

| Path            | Page                      |
| --------------- | ------------------------- |
| `/`             | Home (all sections)       |
| `/projects/:id` | Project detail case study |

---

## Featured Projects

### 1. Affiliate Management System — [tamnt.io.vn](https://tamnt.io.vn/profile)

Commission tracking and reporting platform for Shopee Affiliate earnings.

**Stack:** Java · Spring Boot · MySQL · Redis · WebSocket · Docker · SePay · Ubuntu VPS

### 2. Vietnamese News Classification System

ML pipeline classifying 37,000+ articles across 13 categories with 87% accuracy.

**Stack:** FastAPI · Scikit-learn · PyTorch · PhoBERT · LinearSVC · NestJS · React Native · AWS S3

### 3. Interactive Educational Platform

Microservices-based e-learning platform with real-time quiz sessions.

**Stack:** Spring Boot · Spring Cloud · MongoDB · Redis · WebSocket · Kafka · Docker · AWS S3

---

## Customization

To update the portfolio content, edit the data files:

| File                   | Content                                        |
| ---------------------- | ---------------------------------------------- |
| `src/data/profile.ts`  | Name, role, bio, email, GitHub, LinkedIn       |
| `src/data/projects.ts` | Project list with descriptions and tech stacks |
| `src/data/skills.ts`   | Skill categories and individual skills         |

---

## Deployment

The `dist/` folder can be deployed to any static hosting platform:

- [Vercel](https://vercel.com/) — recommended, zero-config for Vite
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

**Vercel (one command):**

```bash
npx vercel --prod
```

---

## Contact

|          |                                                                        |
| -------- | ---------------------------------------------------------------------- |
| Email    | nguyentrungk461@gmail.com                                              |
| GitHub   | https://github.com/khanh18082003                                       |
| LinkedIn | https://www.linkedin.com/in/kh%C3%A1nh-nguy%E1%BB%85n-trung-33279230b/ |

---

## License

This project is for personal portfolio use. Feel free to use the structure as inspiration for your own portfolio.
