# Website Decision Sheet

This document is the **practical decision sheet** for the portfolio redesign.

It answers the final questions around:

- color
- design language
- typography
- animation
- “minimalistic slick” direction
- what is locked
- what is flexible
- what is later

This file is meant to sit beside the master spec and make actual implementation easier.

---

## 1. Final Design Direction

### Final design sentence

The website should feel like:

> **a minimalistic dark sci-fi technical dossier with restrained gothic accents, built for recruiter clarity first and game-dev memorability second**

### What “minimalistic slick” means here

It does **not** mean:

- plain white startup portfolio
- empty layout with no personality
- flat generic dark theme

It **does** mean:

- clean structure
- strong spacing
- deliberate typography hierarchy
- restrained ornament
- limited but meaningful glow
- one strong visual idea per section
- controlled motion
- low clutter

### Core visual rule

The site should look:

- premium
- controlled
- readable
- intentional

not:

- noisy
- overloaded
- hyper-neon
- cosplay-HUD

---

## 2. LOCKED Decisions

These are now considered **locked**.

### 2.1 Site concept

- The homepage is a **character dossier**
- Projects are **mission dossiers**
- Skills are a **skill tree / proof map**
- Deep pages are **codex entries**
- Resume access stays direct and visible

### 2.2 Structural model

- top-down vertical page structure
- interactive sections inside the page
- no full side-scrolling site
- no long intro before the content

### 2.3 Professional rule

The theme must frame the resume, not replace it.

### 2.4 Identity line

Use this as the primary role line:

> **C# Gameplay Programmer | Unity Systems | Tools | Technical Writing**

### 2.5 Homepage order

Keep this section order:

1. `Character Summary`
2. `Featured Mission`
3. `Mission Log`
4. `Core Stats / Skill Tree`
5. `Build Philosophy`
6. `Achievements / Unlocks`
7. `Progression Log`
8. `Contact / Links`
9. Footer

### 2.6 Resume rule

Resume must remain:

- in top nav
- in hero actions
- in contact section
- available as HTML and PDF

### 2.7 Visual hierarchy of the 3 main projects

- `Unity RPG Prototype` = gameplay flagship
- `Game Bug Tracker` = tooling / engineering proof
- `GenericRPG in C#` = writing / architecture proof

### 2.8 Stat rule

No fake RPG stats like:

- `C#: 92/100`
- `Architecture: 85%`

Use proof-based labels instead.

### 2.9 Motion rule

Motion stays:

- subtle
- supportive
- optional
- reduced-motion safe

No heavy parallax, constant loops, or flashy transitions that hurt reading.

---

## 3. Final Color System

These are the final intended palette decisions.

### Base background

- `#05060f`
- `#090b18`
- `#12162b`

Purpose:

- near-black deep navy base
- readable dark surface
- cinematic but controlled

### Surfaces / panels

- `rgba(15, 18, 38, 0.82)`
- `rgba(11, 13, 29, 0.92)`
- `rgba(24, 29, 59, 0.8)`

Purpose:

- layered panels
- dossier cards
- card stacking depth

### Primary text

- `#f6f8fc`
- `#c7d0e0`
- `#8793ab`

Purpose:

- strong contrast
- easy long-form reading
- technical muted labels

### Accent palette

#### System cyan

- `#67d7ff`
- `#d2f1ff`

Use for:

- interface lines
- selected states
- technical UI
- active system signals

#### Atmospheric violet

- `#8a73ff`

Use for:

- depth lighting
- sci-fi mood
- secondary panel gradients

#### Atmospheric magenta

- `#ff5fa7`

Use for:

- atmospheric glow
- special panel edges
- caution / intensity flavor

#### Emphasis amber

- `#ffb25f`

Use for:

- important highlights
- key CTA contrast
- milestone emphasis

### Color usage rule

- Cyan = interface / system clarity
- Violet = mood / depth
- Magenta = atmosphere / selective energy
- Amber = emphasis only

Amber should be used sparingly so it still feels important.

### Final color direction statement

The site should read visually as:

> **deep navy base, cyan system UI, violet-magenta atmosphere, and controlled amber emphasis**

---

## 4. Final Typography System

### Headings

- `Chakra Petch`

Use for:

- hero headings
- section headings
- display labels
- mission titles

### Body text

- `Sora`

Use for:

- paragraphs
- descriptions
- long content
- resume readability

### Technical labels / telemetry

- `IBM Plex Mono`

Use for:

- chips
- stat labels
- technical markers
- mission tags
- system signals

### Typography rule

Body text must remain clean and modern.

Do not introduce:

- decorative gothic body fonts
- fantasy script
- ornate lettering for main reading text

Gothic flavor belongs in shapes, not in readable copy.

---

## 5. Final Motion and Animation Rules

### Allowed motion

- section reveal fade / lift
- subtle hover glow
- light card tilt
- soft animated background drift
- tiny mission terminal animations
- micro-showcase interaction

### Discouraged motion

- auto-heavy parallax
- aggressive zoom animations
- constantly moving backgrounds
- large looping distractions
- flashy page transitions

### Motion intensity rule

Animation should feel like:

- a live system
- a powered interface
- a scanning dossier

not:

- a flashy landing page
- a motion demo reel

### Reduced motion rule

The site must respect:

- `prefers-reduced-motion`

This is locked.

### Recruiter View motion rule

Recruiter View should reduce:

- glow intensity
- motion intensity
- ornamental atmosphere

without changing the core content structure.

---

## 6. Final “Minimalistic Slick” Style Rules

This is the specific style interpretation we are using.

### Required traits

- clean grids
- large readable headings
- restrained card borders
- consistent spacing
- visible breathing room
- small number of visual ideas repeated well

### Visual restraint rules

- no more than one dominant glow treatment per major section
- avoid stacking too many chips, dividers, lights, and effects together
- do not texture every surface
- keep the page calm enough that screenshots can later become the main attraction

### Ornament rule

Gothic ornament is allowed only as:

- divider accents
- emblem shapes
- border details
- subtle framing

Never as:

- heavy wallpaper texture
- decorative body typography
- fantasy-menu clutter

---

## 7. Final Naming Decisions

### Keep as page-section language

- `Character Summary`
- `Featured Mission`
- `Mission Log`
- `Achievements / Unlocks`
- `Progression Log`
- `Contact / Links`

### Keep as content language

- `Current Quest`
- `Live Dossier`
- `Publishing Route`

### Top navigation recommendation

Use the simpler nav labels for scanning:

- `Featured`
- `Projects`
- `Skills`
- `Achievements`
- `Contact`
- `Resume`

If keeping the existing slightly more themed version, that is still acceptable. But the simpler version is better for fast scanning.

### Recruiter toggle label

Preferred:

- `Recruiter View`

Alternative theme-friendly helper text:

- `Reduce visual intensity and prioritize project proof.`

### About “Admin Override”

`Admin Override` is stylish, but it is a little more aggressive and slightly less instantly clear.

Decision:

- keep the main toggle label as `Recruiter View`
- if desired, use `Admin Override` only as supporting microcopy, not the main button label

This keeps the function clear while preserving the dossier fantasy.

---

## 8. LOCKED / FLEXIBLE / LATER

## 8.1 LOCKED

- dark sci-fi dossier base
- light gothic accent only
- resume-first structure
- top-down layout
- direct resume access
- recruiter view
- Unity RPG as flagship
- proof-based stats
- restrained motion
- HTML + CSS + JS static approach

## 8.2 FLEXIBLE

These can still be tuned without changing the overall direction:

- exact nav wording
- exact achievement card labels
- whether “Build Philosophy” becomes “Core Directives”
- whether a portrait is a silhouette, stylized avatar, or later real artwork
- whether the proof panel includes “Clearance Level” flavor
- exact micro-showcase flavor

## 8.3 LATER

These are good ideas but should not block the next implementation pass:

- short boot sequence
- ambient sound toggle
- hidden easter egg
- live GitHub feed / recent transmission
- animated branch lines in the skill tree
- holographic mini-map
- classified overlays on placeholder content
- portrait/avatar upgrade

---

## 9. Character Summary Style Decision

The first screen should feel like:

- an operator profile
- a character dossier
- a systems candidate summary

### Required hero behavior

The user must understand immediately:

- who you are
- what role you’re targeting
- what technologies matter most
- what projects prove it
- where the resume is

### Final first-screen rule

The hero can be atmospheric, but it must stay brutally clear.

No hidden meaning. No slow introduction. No required interaction.

---

## 10. Project Card Visual Decision

Mission cards should be:

- structured
- proof-oriented
- slightly cinematic
- not overdesigned

### Required card ingredients

- clear title
- status
- type / role / focus
- proof summary
- next step
- dossier access

### Visual treatment

- medium glow
- clean image slot
- clear badges
- readable spacing
- subtle hover

Not:

- giant tilt
- aggressive bloom
- cluttered stat overlays

---

## 11. Recruiter View Final Decision

Recruiter View should be treated as:

- a cleaner presentation mode
- not a second design system

### In Recruiter View:

- glow reduced
- ornamental intensity reduced
- cards flatter
- text clearer
- motion reduced
- project proof emphasized

### Do not:

- reorganize the full page
- hide important sections
- rename everything differently

---

## 12. Execution-Ready Build Sprint

This is the next practical build sequence after decisions are accepted.

### Phase 1 — Homepage polish

- refine nav labels
- tighten hero copy
- improve operator dossier card
- improve proof panel
- adjust recruiter view styling

### Phase 2 — Mission hierarchy

- sharpen Featured Mission
- standardize all mission cards
- strengthen dim/highlight behavior in the skill tree

### Phase 3 — Proof clarity

- refine Core Stats into cleaner proof language
- refine Toolkit / Inventory presentation
- tighten Achievements explanations

### Phase 4 — Resume clarity

- tighten `resume.html`
- improve recruiter scan speed
- make PDF path obvious

### Phase 5 — Media pass

- replace Unity placeholders with real screenshots
- add Game Bug Tracker screenshots
- later add book retail visuals

---

## 13. Final Ready-to-Build Statement

Yes, the key decisions are now effectively made for:

- color
- typography
- design language
- animation philosophy
- minimalistic slick presentation
- recruiter-facing structure

At this point, the work is no longer blocked by design ambiguity.

The next stage is implementation and refinement, not more concept invention.

### Final summary

> **The site should look like a premium dark sci-fi operator dossier, remain clean and minimal in structure, use restrained glow and controlled motion, and present Tanvir first as a credible C# gameplay / systems developer and second as a memorable themed portfolio.**

