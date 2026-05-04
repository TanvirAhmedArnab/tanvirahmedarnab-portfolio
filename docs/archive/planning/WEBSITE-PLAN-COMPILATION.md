# Website Plan Compilation

This document combines:

- the `design direction`
- the `site architecture`
- the `page-by-page content plan`

It is meant to be the working reference for the next major redesign of the portfolio.

---

## 1. Core Decision

### Recommended site structure

Use a `top-down main site structure` with `sideways / interactive UI moments inside sections`.

That means:

- the overall site scrolls vertically
- important areas can feel game-like through:
  - skill trees
  - mission cards
  - codex drawers
  - horizontal media strips
  - inventory panels

### Why this is the recommended approach

It gives the portfolio:

- stronger clarity
- better mobile behavior
- easier recruiter scanning
- more professional structure
- room for game-like presentation without becoming confusing

Avoid making the entire site a left-right side-scroll experience.

That can feel novel, but it usually hurts:

- usability
- scanning speed
- accessibility
- maintenance

---

## 2. Creative Direction

### Theme

Primary direction:

- `dark sci-fi dossier`

Secondary flavor:

- `gothic atmosphere`
- subtle tension
- moody lighting
- ceremonial / codex-like framing

### Desired feel

The site should feel like:

- a `character summary screen`
- a `mission terminal`
- a `developer codex`

It should not feel like:

- a novelty toy
- a fake game menu with weak readability
- a site that hides important information behind style

---

## 3. UX Principle

### Summary first, deep dive optional

The homepage should allow a visitor to understand the essentials quickly:

1. who Tanvir is
2. what kind of developer he is
3. what skills are strongest
4. what projects are active
5. what achievements exist already
6. where to go next

Then deeper information should open through:

- mission cards
- dossier toggles
- codex pages
- project-specific pages

---

## 4. Site Architecture Map

```text
Home
|-- Character Summary
|-- Core Stats
|-- Skill Tree
|-- Mission Log
|-- Achievements / Unlocks
|-- Toolkit / Inventory
`-- Contact / Resume / External Links

Subpages
|-- Game Dev
|   |-- Unity RPG Prototype
|   `-- related gameplay systems work
|
|-- Tools / Web
|   |-- Game Bug Tracker
|   `-- .NET / workflow / support tooling
|
|-- Writing / Publishing
|   |-- GenericRPG in C#
|   `-- future book / publishing material
|
`-- Deep Codex Pages
    |-- full project pages
    `-- detailed case studies
```

---

## 5. Homepage Section Map

The homepage should act as the main `character page summary`.

### Section 1: Character Summary

Purpose:

- establish identity immediately
- show role, class, specialization, and availability

Content:

- Name: `Tanvir Ahmed Arnab`
- Class / Role: `Gameplay Programmer`
- Specialization: `Systems / Tools / Technical Writing`
- Status: `Open to opportunities`
- Contact CTA
- GitHub / LinkedIn / Resume request

Possible styling:

- crest or insignia
- operator card
- animated background
- micro-playable element

### Section 2: Core Stats

Purpose:

- quickly communicate strengths in a game-like format

Suggested stats:

- C#
- Unity
- Gameplay Systems
- Tooling
- Combat Readability
- AI / Behaviors
- Architecture
- Technical Writing

### Section 3: Skill Tree

Purpose:

- organize skills visually
- make the portfolio feel more game-like
- connect skills to actual projects

Suggested branches:

- Gameplay
- Tools / Workflow
- `.NET / Web`
- Writing / Publishing

Interaction:

- clicking a skill node highlights related projects

### Section 4: Mission Log

Purpose:

- make projects feel like active missions / dossiers

Current mission candidates:

- `Unity RPG Prototype`
- `Game Bug Tracker`
- `GenericRPG in C#`

Each mission card should show:

- status
- type
- difficulty / focus
- last updated
- short summary
- dossier toggle
- link to full page

### Section 5: Achievements / Unlocks

Purpose:

- show momentum and completed milestones

Examples:

- `200 chapters written`
- `8-volume book series in progress`
- `custom domain + professional email configured`
- `interactive portfolio live`
- `case study pages published`

### Section 6: Toolkit / Inventory

Purpose:

- show tools in a readable visual block

Examples:

- Unity
- C#
- .NET
- Git
- Razor Pages
- HTML
- CSS
- JavaScript

### Section 7: Contact / Exit Paths

Purpose:

- make next action clear

Include:

- email
- GitHub
- LinkedIn
- resume request

---

## 6. Subpage Plan

### A. Game Dev Page

Purpose:

- main branch for gameplay and Unity-related work

Content:

- Unity RPG Prototype overview
- gameplay strengths
- combat / AI / systems focus
- links to project pages
- future flagship media

Tone:

- strongest visual page
- should eventually become the flagship branch

### B. Tools / Web Page

Purpose:

- show `.NET`, workflow, and support-tooling capability

Content:

- Game Bug Tracker
- internal tooling mindset
- Razor Pages / support systems
- future tools work

Tone:

- cleaner, more systems-oriented
- slightly more technical

### C. Writing / Publishing Page

Purpose:

- show long-form technical writing and structured thinking

Content:

- `GenericRPG in C#`
- series scope
- selected preview
- Amazon links later
- achievement framing

Tone:

- codex / archive / publishing dossier

---

## 7. Deep-Dive Page Rules

Project pages should act like `codex entries`.

Each should contain:

- project title
- one-sentence hook
- problem
- solution
- tools used
- role / ownership
- what was learned
- next improvements
- media
- external links

Deep-dive pages should feel richer, but they should still match the main site theme.

---

## 8. Content Allocation

### Content that belongs on the homepage

- high-level identity
- summary stats
- top skills
- project overview
- top achievements
- contact paths

### Content that belongs on subpages

- grouped category-specific context
- more media
- additional explanation
- expanded mission info

### Content that belongs only on deep-dive pages

- full case study writeups
- detailed responsibilities
- specific lessons
- implementation notes
- galleries

---

## 9. Navigation Plan

Recommended top navigation:

- `Home`
- `Game Dev`
- `Tools / Web`
- `Writing`
- `Contact`
- `Resume`

Alternative:

Keep homepage as the main navigation hub and expose subpages through large in-world cards.

Either approach can work, but the navigation must stay:

- obvious
- quick to scan
- mobile-friendly

---

## 10. Media Plan

### Temporary media

Use for now:

- stylized SVG scenes
- AI-generated concept art
- abstract system visuals
- temporary mock screenshots

### Final media

Replace with:

- actual Unity RPG screenshots
- short gameplay clips
- Game Bug Tracker UI screenshots
- final book covers
- direct Amazon product links

Priority order:

1. Unity RPG real media
2. Game Bug Tracker UI screenshots
3. final book media / Amazon links

---

## 11. Implementation Phases

### Phase 1

Refine the homepage into a stronger full `character summary` page.

### Phase 2

Build the `skill tree` and strengthen the `mission log`.

### Phase 3

Add the `achievements / unlocks` system and improve codex-style transitions.

### Phase 4

Expand into clearer subpages:

- Game Dev
- Tools / Web
- Writing / Publishing

### Phase 5

Replace temporary visuals with real media and mature the flagship project pages.

---

## 12. Recommendation Summary

Best final direction:

`A top-down portfolio structured like a dark sci-fi character dossier, with gothic atmosphere, where the homepage acts as the main character summary and subpages act as themed codex branches for game development, tooling, and publishing work.`

---

## 13. Review Questions

Use these to refine the next version of the plan:

1. Should the homepage feel more like:
   - a terminal
   - a codex
   - a hybrid

2. Should the subpages be:
   - traditional sections with strong theming
   - more immersive in-world pages
   - a balance between both

3. Should the achievements area feel:
   - professional
   - collectible
   - mixed

4. Should the Game Dev page become the visual flagship, with the others more restrained?

5. Do we want the site to feel more:
   - sci-fi
   - gothic
   - sci-fi gothic hybrid
