# Website Build Documentation

This document is a detailed reference for the current portfolio website for **Tanvir Ahmed Arnab**.

It explains:

- the overall design idea
- the page hierarchy
- the page headings and section structure
- the game-theme metaphor system
- the main features and interactions
- the current content model
- the design system
- the parts that are intentionally temporary and meant to be replaced later

This is a **documentation-only** file. It does not change the website by itself.

---

## 1. Project Summary

### Website identity

The portfolio is designed as a:

- **professional resume-first portfolio**
- wrapped in a **game-themed character dossier / mission terminal**
- with **interactive sections** that make the site memorable without hurting readability

The current direction is:

- **top-down portfolio structure**
- with **game-like interactive sections inside it**
- not a fully game-like navigation experience

That means the site is meant to feel like:

- a **character summary screen**
- a **mission log**
- a **technical codex**

while still being easy for:

- recruiters
- collaborators
- hiring managers
- technical reviewers

to scan quickly.

### Main goal

The site should immediately communicate:

> Tanvir is a C# gameplay / systems-focused developer with Unity interests, tool-building ability, and unusually strong technical writing depth.

### Hosting model

The site is intentionally static:

- `HTML`
- `CSS`
- `JavaScript`

It is hosted on:

- **GitHub Pages**

and uses:

- a **custom domain**
- **HTTPS**
- a separate **custom domain email setup**

---

## 2. Core Design Idea

### Design concept

The website is built around a **game-themed technical dossier** concept.

The visual idea is:

- **dark sci-fi dossier** as the main base
- **light gothic undertones** as accents
- strong **terminal / HUD / mission-card** structure

### Theme balance

The current intended ratio is:

- **70% sci-fi**
- **30% gothic accent**

This means:

- the structure and UI should feel like a systems terminal
- the ornament should be restrained
- the theme should support the resume, not overpower it

### Guiding rule

The game theme exists to **frame the information**, not hide it.

The site should never become:

- overly theatrical
- hard to scan
- difficult on mobile
- dependent on long intros or gimmicks

---

## 3. Metaphor System

The portfolio uses a deliberate metaphor system so the theme stays coherent.

| Portfolio Purpose | Game-Themed Label |
|---|---|
| Resume header | `Character Summary` |
| Job identity | `Class / Role` |
| Strongest technical skills | `Core Stats` |
| Skill categories and proof links | `Skill Tree` |
| Projects | `Mission Log` |
| Major completed milestones | `Achievements / Unlocks` |
| Tools and technologies | `Toolkit / Inventory` |
| Deep project pages | `Codex` / `Dossier` |
| Contact section | `Contact / Links` / `Extraction Point` styling |

Important note:

The site intentionally **does not** overuse RPG language in every sentence.  
Some section names are themed; the actual content inside them stays professional and clear.

---

## 4. Current Page Map

### Primary live pages

1. `index.html`
   - Main homepage
   - Character dossier / recruiter-facing overview

2. `resume.html`
   - Plain HTML resume page
   - Cleaner recruiter-readable summary

3. `game-bug-tracker.html`
   - Case-study page for the Game Bug Tracker project

4. `genericrpg-in-csharp.html`
   - Book / publishing project page

5. `404.html`
   - Custom not-found page

### Legacy / archived placeholder pages

These still exist in the repository as reference layouts and legacy URLs, but they are not the main live focus:

- `skyline-siege.html`
- `ritual-runner.html`
- `signal-bloom.html`

These are effectively archived sample pages and should eventually be replaced or removed.

---

## 5. Global Navigation Structure

### Current main nav labels

The site currently uses these top-level nav items:

- `Featured Mission`
- `Mission Log`
- `Skill Tree`
- `Contact / Links`
- `Resume`

These appear in the homepage and are mirrored in the real project pages for consistency.

### Navigation philosophy

Navigation should:

- stay short
- stay scannable
- avoid too many layers
- keep the homepage as the main hub

The deep project pages act as optional exploration rather than the main path.

---

## 6. Homepage Architecture

The homepage is the most important page and is structured like a professional summary page with themed framing.

## Homepage section order

1. `Character Summary`
2. `Featured Mission`
3. `Mission Log`
4. `Core Stats / Skill Tree`
5. `Build Philosophy`
6. `Achievements / Unlocks`
7. `Progression Log`
8. `Contact / Links`
9. Footer

Below is a detailed breakdown.

---

## 7. Homepage Detailed Structure

### 7.1 Character Summary

This is the **above-the-fold** section and acts like the resume header.

#### Main heading

- `Tanvir Ahmed Arnab`

#### Role line

- `C# Gameplay Programmer | Unity Systems | Tools | Technical Writing`

#### Purpose

This line is written to be:

- more searchable
- more precise
- clearer than simply saying `Gameplay Programmer`

#### Supporting value statement

The short description communicates:

- gameplay systems work
- support tooling
- technical writing depth
- readable, structured system design

#### Build philosophy line

- `I build systems that are readable, deterministic, and expandable.`

#### Main CTA buttons

The homepage first screen includes direct access to:

- `View Projects`
- `Download Resume`
- `GitHub`
- `Contact`

#### Secondary actions

It also includes:

- `Recruiter View` toggle
- `HTML Resume` link

#### Supporting panels in the hero

The hero also includes:

- `Class / Role` panel
- `Proof Panel`
- playable micro-showcase panel
- mission-terminal metrics

---

### 7.2 Featured Mission

This section exists so the homepage has one clear flagship focus before the full mission map.

#### Current featured mission

- `Unity RPG Prototype`

#### Purpose

This section gives the Unity project:

- more visual space
- more narrative weight
- clearer flagship status

#### Content structure

It currently includes:

- mission label
- status
- short summary
- badges
- telemetry row
- problem
- solution
- gameplay / engineering focus
- what comes next

#### Why it exists

Without a featured mission area, all projects feel equal.  
This section makes it clear which project is supposed to become the centerpiece of the site.

---

### 7.3 Mission Log

This is the main project section.

#### Section heading

- `Mission Log`

#### Purpose

This section shows:

- active projects
- publishing route projects
- live case-study material

#### Current mission cards

1. `Unity RPG Prototype`
   - current quest
   - in development

2. `Game Bug Tracker`
   - live dossier
   - tooling / architecture project

3. `GenericRPG in C#`
   - publishing route
   - long-form writing / systems education project

#### Mission card structure

Each mission card is designed around the same pattern:

- `Mission Name`
- `Role`
- `Tech Stack`
- `Problem`
- `Solution`
- `Gameplay / engineering focus`
- `Screenshots or demo`
- `Repository / live link`
- `What I learned`
- `What I would improve next`

This consistency is important because it makes the cards feel like real professional dossiers rather than decorative game panels.

---

### 7.4 Core Stats / Skill Tree

This section replaces fake RPG-number thinking with evidence-based labeling.

#### Purpose

The site should not say things like:

- `C#: 92/100`

because those numbers are arbitrary and weaken credibility.

Instead it uses:

- `C# — primary language`
- `Unity — gameplay systems`
- `.NET — tools and web apps`
- `Technical Writing — long-form C# textbook`
- `Architecture — state-driven systems`

#### Interactive skill map

The skill map is clickable.

Clicking a skill such as:

- `C#`
- `Unity`
- `Tools`
- `Technical Writing`
- `Architecture`

highlights the mission cards that prove that skill.

This makes the skill tree more than decoration.

#### Sub-panels

This area currently includes:

- `Character sheet`
- `Core stats`
- `Toolkit / Inventory`

---

### 7.5 Build Philosophy

This section explains how the projects connect conceptually.

#### Purpose

This section helps unify:

- game dev
- tooling
- architecture
- writing

under one coherent philosophy.

#### Current theme

- readable systems
- deterministic behavior
- expandable structure

This is useful because it turns the portfolio from a list of things into a point of view.

---

### 7.6 Achievements / Unlocks

This section shows completed milestones rather than ongoing projects.

#### Purpose

The mission log is for active work.  
The achievements area is for:

- completed visible milestones
- infrastructure wins
- proof that major work has already happened

#### Current achievement cards

1. `200 chapters drafted for GenericRPG in C#`
2. `Custom domain, HTTPS, and professional email are live`
3. `Interactive portfolio rebuilt as a technical dossier`
4. `Game Bug Tracker case study published`

#### Interaction

These are expandable cards using `details/summary`.

The front shows:

- achievement title
- short summary

The expanded state shows:

- what the milestone actually proves

This is a good middle ground between static cards and overly flashy interactions.

---

### 7.7 Progression Log

This is the build / learning timeline.

#### Purpose

It shows growth rather than just claims.

#### Current progression steps

1. `C# foundation`
2. `Console RPG systems`
3. `Tooling discipline`
4. `Unity focus`
5. `Current build`

#### Why it matters

This section helps explain how the portfolio evolved from:

- learning
- to architecture
- to tooling
- to gameplay systems
- to a public-facing portfolio and publishing track

---

### 7.8 Contact / Links

This is the final CTA section.

#### Purpose

It gives a direct exit path for anyone who does not want to browse the themed content.

#### Current actions

- email
- PDF resume
- HTML resume
- LinkedIn
- GitHub

#### Why this matters

The user should not have to “play the theme” just to contact you or access the resume.

---

## 8. Resume Page Structure

The file:

- `resume.html`

exists as a plain, recruiter-readable alternative to the themed homepage.

### Purpose

It gives:

- a cleaner overview
- a stable HTML version of the resume
- a direct PDF download path

### Resume page sections

1. `HTML Resume` hero
2. `Resume summary`
3. `Professional focus`
4. `Proof-based strengths`
5. `Featured projects`
6. `Visible milestones`
7. `Inventory`
8. `Contact / links`

### Why it exists

This page supports the idea that:

- the themed portfolio creates memorability
- the resume page creates scan speed

Both are useful.

---

## 9. Real Project Pages

### 9.1 Game Bug Tracker

File:

- `game-bug-tracker.html`

#### Current content sections

- `Project goal`
- `What is implemented right now`
- `Version 1 roadmap`
- `Why this project matters to the portfolio`
- `What comes next`
- `Project links`
- `Truthful scope`

#### Role in the portfolio

This is the clearest current proof of:

- `.NET`
- internal tooling
- architecture
- production workflow thinking

---

### 9.2 GenericRPG in C#

File:

- `genericrpg-in-csharp.html`

#### Current content sections

- `What this project is`
- `Achievement framing`
- `Short pitch`
- `What the series covers`
- `Why it matters`
- `Volume map`
- `Five web-only sample chapters`
- `Release path`
- `Who it is for`
- `Why it belongs here`

#### Role in the portfolio

This is proof of:

- long-form technical writing
- architecture thinking
- systems explanation
- large-scale project discipline

---

## 10. Custom 404 Page

File:

- `404.html`

### Purpose

This page provides a polished fallback instead of a generic hosting error.

### Current theme

It is styled as:

- an unknown region / unmapped sector message

### Current actions

- return to main map
- open projects
- contact

This is a small but useful polish feature.

---

## 11. Archived Sample Pages

The following files exist as legacy or sample pages:

- `skyline-siege.html`
- `ritual-runner.html`
- `signal-bloom.html`

### Current role

They are not the main live portfolio focus.

They mainly exist as:

- layout references
- legacy URL support
- sample case-study templates

### Recommendation

Eventually:

- replace them with real project pages
- or remove them entirely once they are no longer useful

---

## 12. Design System

### Visual language

The visual language is currently:

- dark
- sci-fi
- dossier-like
- with restrained gothic accents

### Color direction

The palette is built around:

- deep navy / near-black backgrounds
- cool cyan accents
- violet and magenta accent glow
- amber for warm contrast

### Font system

The site uses:

- `Chakra Petch` for major headings and display UI
- `Sora` for readable body copy
- `IBM Plex Mono` for labels, telemetry, chips, and technical UI details

### UI patterns used repeatedly

- signal panels
- mission cards
- dossier drawers
- badges
- telemetry tags
- proof panels
- details/summary milestone cards
- HUD-style chips and labels

---

## 13. Main Interactions and Features

### 13.1 Playable micro-showcase

The homepage includes a small interactive canvas scene.

#### Purpose

It acts as:

- living proof of interactivity
- a small game-dev signal
- a way to make the hero more memorable

#### Behavior

- move with keyboard
- dodge drones
- attract mode when idle

### 13.2 Skill filter

The skill tree acts as a project filter.

#### Purpose

It allows users to:

- click a skill
- highlight matching missions
- understand which projects prove which abilities

### 13.3 Dossier drawers

Mission cards include expandable dossier sections.

#### Purpose

This keeps the homepage:

- compact by default
- deeper on demand

### 13.4 Recruiter View toggle

The homepage includes a recruiter-oriented view toggle.

#### Purpose

This allows the page to shift toward:

- flatter
- calmer
- less visually intense

while keeping the same content.

#### Technical behavior

The state is saved in `localStorage` so the choice persists after refresh.

### 13.5 Achievement expansion

Achievements use expandable cards.

#### Purpose

This lets a milestone show:

- short headline first
- proof explanation second

### 13.6 Reduced motion support

The site already respects:

- `prefers-reduced-motion`

This is important because the site uses:

- reveals
- subtle motion
- interactive components

but should not become uncomfortable to use.

---

## 14. Accessibility and Scanning Principles

The site is trying to follow a clear rule:

### Scan first, theme second

That means:

- strong section headings
- readable first lines
- meaningful CTA labels
- obvious contact paths
- direct resume access

### Current accessibility-supporting features

- skip link
- semantic headings
- clear navigation
- reduced-motion handling
- contrast-oriented dark palette
- direct HTML resume page

---

## 15. Repository-Level Structure

### Important top-level files

- `index.html`
- `resume.html`
- `game-bug-tracker.html`
- `genericrpg-in-csharp.html`
- `404.html`
- `styles.css`
- `script.js`
- `sitemap.xml`
- `robots.txt`
- `README.md`

### Assets structure

- `assets/branding/`
  - logo and identity assets

- `assets/books/`
  - book-related visuals

- `assets/projects/placeholders/`
  - temporary project visuals

- `assets/projects/sample-media/`
  - sample / archived media

### Planning docs

These exist in the repo as design/planning references:

- `WEBSITE-DESIGN-PLAN.md`
- `WEBSITE-PLAN-COMPILATION.md`
- `WEBSITE-FINAL-BLUEPRINT.md`

---

## 16. What Is Still Intentionally Temporary

Several parts of the website are intentionally not final yet.

### Temporary / replace-later items

1. **Unity RPG visuals**
   - current hero/mission visuals are still placeholder art
   - real gameplay screenshots or clips should replace them

2. **Game Bug Tracker screenshots**
   - case study exists
   - screenshots are not fully layered in yet

3. **Book retail links**
   - Amazon buttons should later point to final live product URLs

4. **Placeholder legacy pages**
   - sample case-study pages still exist in the repo

5. **Potential resume refinement**
   - if the public PDF changes, links may need updating

---

## 17. What the Site Currently Communicates Best

The site is currently strongest at communicating:

- gameplay / systems direction
- C# and Unity orientation
- tool-building ability
- strong technical writing depth
- architectural thinking
- willingness to present unfinished work honestly

---

## 18. Best Future Refinement Priorities

If refining the website later, the highest-value upgrades are:

1. Replace temporary Unity visuals with real gameplay screenshots or clips
2. Add real Game Bug Tracker UI captures
3. Replace Amazon search links with direct retail URLs
4. Add `System Design Notes` to deeper project pages
5. Add more real codex pages only when there is enough proof material

---

## 19. One-Sentence Summary

The website is currently built as a **professional C# gameplay programmer portfolio presented through a dark sci-fi technical dossier theme**, with a clear top-down structure, game-like interaction layers, recruiter-friendly resume access, and room to deepen into real project proof as more media and case-study content becomes available.

