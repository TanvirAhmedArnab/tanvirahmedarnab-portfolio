# Website Master Specification

This document is the **definitive blueprint** for the portfolio website for **Tanvir Ahmed Arnab**.

It combines:

- the existing design plans
- the current build documentation
- the refined direction notes
- the additional critique and improvement suggestions

This file is meant to answer:

- what the website is trying to be
- what must remain true as it evolves
- how each page should work
- what each section is responsible for
- which theme choices are locked
- which interaction ideas are required, optional, or later-phase

This document should be treated as the **single source of truth** for future design and content decisions.

---

## 1. Core Definition

### Final site concept

The website should be:

> **A professional C# gameplay programmer portfolio presented as a dark sci-fi character dossier, where the homepage works like a character summary screen, projects work like mission dossiers, skills work like a skill tree, and the resume remains instantly accessible for recruiters.**

### Core fantasy

The site is built around one clear metaphor:

> **The visitor is opening a mission terminal for a C# gameplay / systems developer.**

### Key rule

The site must always remain:

- professional
- readable
- recruiter-friendly
- fast to scan
- easy to navigate

The theme must **support** that identity, not replace it.

---

## 2. Locked Strategic Decisions

These decisions are considered **locked** unless there is a deliberate redesign.

### 2.1 Structural decision

Use:

- **top-down page structure**
- with **game-like interactive sections inside the page**

Do **not** build the whole site as:

- a side-scrolling UI
- a fake game menu
- a navigation gimmick

### 2.2 Theme decision

Primary visual language:

- **dark sci-fi dossier**

Secondary accent:

- **gothic undertones**

### 2.3 Theme ratio

Target ratio:

- **70% sci-fi**
- **30% gothic**

This means:

- sci-fi drives layout, panels, UI, and system framing
- gothic influences mood, dividers, ornaments, and atmospheric details

### 2.4 Resume accessibility rule

The resume must always remain:

- visible
- directly accessible
- not buried behind theme

The site should always include:

- a visible resume button
- a plain HTML resume page
- a direct PDF resume download path

### 2.5 Content philosophy

The site should feel like a game-themed operator dossier, but the actual information should read like a professional portfolio.

### 2.6 Identity line

The primary role line is:

> **C# Gameplay Programmer | Unity Systems | Tools | Technical Writing**

This is the main identity statement unless intentionally revised.

---

## 3. Main Website Promise

The first screen should make this clear immediately:

> **Tanvir Ahmed Arnab is a C# gameplay / systems-focused developer building Unity gameplay projects, .NET tools, and long-form technical writing.**

The homepage should never require the user to:

- scroll too far
- interpret obscure theme language
- play a micro-game
- open a hidden drawer

before understanding who Tanvir is and what kind of developer he is.

---

## 4. Design Principles

### 4.1 Resume-first structure

The site is creative, but not experimental at the expense of usability.

The information hierarchy must still behave like a strong portfolio.

### 4.2 Scan first, theme second

The user should be able to scan:

- the hero
- project names
- skill areas
- milestones
- contact actions

without reading every paragraph.

### 4.3 Theme as framing device

The game theme should:

- create memorability
- give structure
- differentiate the site

It should **not**:

- confuse the meaning of sections
- overuse locked/unlocked language
- turn real achievements into fiction

### 4.4 Honest scope

Projects should be presented truthfully.

If something is:

- in progress
- partially built
- waiting for media
- on a publishing path

the site should say so directly.

### 4.5 Proof over decoration

The strongest future upgrades are:

- screenshots
- gameplay clips
- UI captures
- system notes
- case-study depth

not more surface styling alone.

---

## 5. Audience Model

The site is primarily for:

1. recruiters
2. hiring managers
3. game dev professionals
4. technical collaborators
5. curious readers who want deeper project detail

The experience should support two main usage modes:

### 5.1 Fast scan mode

The visitor wants to know:

- who you are
- what you focus on
- what projects prove it
- how to contact you

### 5.2 Deep dive mode

The visitor wants to:

- inspect project structure
- read case studies
- explore the book project
- understand system design thinking

The homepage should support both.

---

## 6. Current / Target Page Architecture

## 6.1 Core live pages

### `index.html`

Purpose:

- the main homepage
- the character dossier
- the main hub

### `resume.html`

Purpose:

- plain recruiter-readable version
- resume-style summary page

### `game-bug-tracker.html`

Purpose:

- tooling / workflow / web app case study

### `genericrpg-in-csharp.html`

Purpose:

- writing / publishing / architecture proof page

### `404.html`

Purpose:

- custom not-found page with themed recovery messaging

---

## 6.2 Planned future page

### `unity-rpg-prototype.html`

This is a required future project page.

Purpose:

- become the visual flagship of the site
- prove the game-dev identity at full depth

This page should eventually be one of the strongest parts of the portfolio.

---

## 6.3 Legacy / archived pages

These were removed during the Desktop repo cleanup and should now be considered retired artifacts from an earlier placeholder phase.

Long term they should either:

- be replaced with real project pages
- be removed
- or be converted into hidden templates

---

## 7. Final Homepage Architecture

The homepage should keep this section order:

1. `Character Summary`
2. `Featured Mission`
3. `Mission Log`
4. `Core Stats / Skill Tree`
5. `Build Philosophy`
6. `Achievements / Unlocks`
7. `Progression Log`
8. `Contact / Links`
9. Footer

This order is correct because it moves from:

- identity
- to flagship proof
- to broader project proof
- to skill proof
- to philosophy
- to milestones
- to growth timeline
- to contact

---

## 8. Navigation Specification

## 8.1 Homepage and primary navigation

The strongest compromise between themed language and clarity is:

- `Featured Mission`
- `Projects`
- `Skill Tree`
- `Achievements`
- `Contact`
- `Resume`

### Why this is preferred

- `Projects` is clearer than `Mission Log` in top nav
- `Achievements` is more scannable than keeping all thematic language in navigation
- the section headings inside the page can remain more themed

### Section labels inside the page

Inside the homepage, these themed labels are still good:

- `Character Summary`
- `Featured Mission`
- `Mission Log`
- `Core Stats / Skill Tree`
- `Build Philosophy`
- `Achievements / Unlocks`
- `Progression Log`
- `Contact / Links`

---

## 9. Character Summary Specification

This is the **most important section** on the site.

It is the equivalent of:

- the resume header
- the operator profile
- the first impression zone

## 9.1 Layout

Recommended layout:

### Left side

- name
- role line
- short value statement
- CTA buttons
- secondary recruiter/resume links

### Right side

- character dossier card
- proof panel
- small playable micro-showcase
- system telemetry badges

---

## 9.2 Required content

### Main heading

`Tanvir Ahmed Arnab`

### Role line

`C# Gameplay Programmer | Unity Systems | Tools | Technical Writing`

### Value statement

Preferred wording:

> **I build readable, deterministic, and expandable systems for games, tools, and technical learning projects.**

### Main CTA buttons

Required:

- `View Projects`
- `Download Resume`
- `Open GitHub`
- `Contact`

### Secondary actions

Required:

- `Recruiter View`
- `HTML Resume`

---

## 9.3 Character dossier card

This should feel more like a dossier than a normal profile card.

Recommended labels:

- `Character Summary`
- `Class / Role`
- `Specialization`
- `Current Status`
- `Primary Loadout`

Example content structure:

- `Class / Role: C# Gameplay Programmer`
- `Specialization: Unity Systems / Tools / Technical Writing`
- `Status: Open to opportunities`
- `Primary Loadout: C#, Unity, .NET, Git, JavaScript`

### Optional enhancement

Allowed if done tastefully:

- a subtle visual bar such as `Clearance Level` or `Profile Signal`
- a small visual progress band

Not allowed:

- fake numeric levels
- childish XP jokes
- exaggerated fantasy-game ranking labels

---

## 9.4 Proof panel

The proof panel is required.

Its job is to quickly connect identity to evidence.

Recommended structure:

- `Primary Language: C#`
- `Engine Focus: Unity`
- `Project Type: Gameplay Systems`
- `Tooling: .NET / Web`
- `Writing: Long-form C# education`
- `Current Direction: Gameplay programmer portfolio`

### Optional refinement

Small signal labels are welcome:

- `Portfolio Signal: Online`
- `Resume Access: Available`
- `Project Dossiers: Open`

These should stay short and professional.

---

## 9.5 Additional identity enhancement

High-impact optional upgrades:

- stylized portrait
- custom operator silhouette
- cyber-gothic avatar
- clean symbolic insignia

This would strengthen the “character page” fantasy without relying on more words.

### Optional micro-bio

Add a short 2–3 sentence blurb framed as:

- `Service Record`
- `Deployment History`
- or `Origin Summary`

Its purpose is to tie together:

- console RPG roots
- tooling
- Unity systems

without turning the hero into a biography.

---

## 10. Featured Mission Specification

The `Featured Mission` is the homepage flagship project area.

## 10.1 Project choice

The featured mission should be:

### `Unity RPG Prototype`

This is the strongest candidate because the portfolio’s target identity is centered on game development and gameplay systems.

---

## 10.2 Required content structure

The featured mission should clearly communicate:

- what the project is
- what you are building
- what it proves
- what media is currently available
- what comes next

Recommended structure:

- `Mission Name`
- `Status`
- `Role`
- `Tech Stack`
- `Mission Brief`
- `Core Systems`
- `Engineering Focus`
- `Current Proof`
- `Next Milestone`

### Example shape

- `Mission Name: Unity RPG Prototype`
- `Status: Current Quest / In Development`
- `Role: Gameplay Programmer`
- `Tech Stack: Unity, C#, Git`
- `Mission Brief: A prototype RPG project focused on readable gameplay systems, player interaction, combat structure, and expandable architecture.`
- `Core Systems: player control, interaction, combat logic, enemy behavior, UI feedback`
- `Engineering Focus: state clarity, system separation, readable gameplay code`
- `Current Proof: placeholder art now, real gameplay captures next`
- `Next Milestone: replace placeholder visuals with real gameplay screenshots and short clips`

---

## 10.3 Visual treatment

This section should receive the largest visual treatment on the homepage.

Later it should support:

- real screenshots
- looping gameplay GIF
- muted hover video
- short clip preview

### Optional status indicator

Recommended:

- `Mission Status: In Development`
- `Build 0.x.x`

This helps the section feel more like an active live build.

---

## 11. Mission Log Specification

The mission log is the homepage project grid / mission map.

## 11.1 Keep these three main missions

1. `Unity RPG Prototype`
2. `Game Bug Tracker`
3. `GenericRPG in C#`

---

## 11.2 Mission card template

All real mission cards should follow the same structure:

- `Mission Name`
- `Mission Type`
- `Status`
- `Role`
- `Tech Stack`
- `Problem`
- `Solution`
- `Proof`
- `What I Learned`
- `Next Upgrade`
- `Open Dossier`

This consistency is mandatory because it creates a reliable reading pattern across the whole site.

---

## 11.3 Mission identity by project

### Unity RPG Prototype

- `Mission Type: Gameplay Systems`
- `Status: Current Quest`
- `Role: Gameplay Programmer`
- `Tech Stack: Unity, C#`
- `Problem: RPG systems can become messy when input, state, combat, and presentation are mixed together.`
- `Solution: Build small, readable systems with clear responsibilities and expandable structure.`
- `Proof: gameplay screenshots, prototype clips, system notes`
- `Next Upgrade: real project media and a dedicated Unity RPG case-study page`

### Game Bug Tracker

- `Mission Type: Tooling / Web`
- `Status: Live Dossier`
- `Role: Full-stack / tooling builder`
- `Tech Stack: .NET, Razor Pages, C#, HTML, CSS`
- `Problem: Game teams need a simple way to track issues, status, and workflow.`
- `Solution: Build a focused bug-tracking tool that demonstrates practical workflow thinking.`
- `Proof: live case study, UI screenshots, project structure notes`
- `Next Upgrade: add screenshots, workflow diagrams, and system design notes`

### GenericRPG in C#

- `Mission Type: Writing / Publishing`
- `Status: Publishing Route`
- `Role: Author / technical educator`
- `Tech Stack: C#, .NET, software architecture, game-system design`
- `Problem: Beginners often learn disconnected syntax without understanding how systems grow.`
- `Solution: Write a structured C# RPG textbook series that teaches programming through a coherent project.`
- `Proof: chapter drafts, volume map, web samples`
- `Next Upgrade: final covers, sample chapters, direct retail links`

---

## 11.4 Visual feedback rules

When a skill is selected:

- matching mission cards should highlight
- non-matching cards should visibly dim

This is better than highlight-only behavior because it gives stronger proof feedback.

---

## 12. Core Stats / Skill Tree Specification

This section must remain:

- evidence-based
- professional
- interactive

It should not become a fake RPG-number board.

## 12.1 Skill branches

Recommended branches:

- `C# Core`
- `Unity Gameplay`
- `.NET Tooling`
- `Architecture`
- `Technical Writing`
- `Web Presentation`

### Proof mapping

- `C# Core`
  - Unity RPG Prototype
  - Game Bug Tracker
  - GenericRPG in C#

- `Unity Gameplay`
  - Unity RPG Prototype

- `.NET Tooling`
  - Game Bug Tracker

- `Architecture`
  - Unity RPG Prototype
  - Game Bug Tracker
  - GenericRPG in C#

- `Technical Writing`
  - GenericRPG in C#

- `Web Presentation`
  - Portfolio site
  - Game Bug Tracker case study

---

## 12.2 Required helper text

This section should explicitly tell the user how to use it.

Recommended line:

> **Select a skill node to see which projects prove it.**

---

## 12.3 Optional enhancements

Allowed enhancements:

- tooltip
- side evidence note
- short proof snippet

Example:

- click `Architecture`
- show proof line like:
  - `Evidence: book system structure, bug tracker data model, Unity system separation`

### Passive traits section

Optional smaller companion section:

- `Readable Code Advocate`
- `Deterministic Systems Specialist`
- `Technical Documentation Enjoyer`

These should feel more like character traits than hard skills.

---

## 13. Toolkit / Inventory Specification

This section should present tools as inventory items, but keep them professional.

## 13.1 Recommended categories

### Primary Language

- `C#`

### Game Development

- `Unity`

### Application / Tooling

- `.NET`
- `Razor Pages`

### Web

- `HTML`
- `CSS`
- `JavaScript`

### Workflow

- `Git`
- `GitHub`
- `Visual Studio`

### Publishing / Writing

- `Markdown`
- long-form technical documentation

## 13.2 Presentation rule

Every item should carry a short proof-style description, such as:

- `C# — primary programming language`
- `Unity — gameplay prototype development`
- `.NET — tooling and web app development`
- `GitHub Pages — static portfolio deployment`
- `Markdown — documentation and book drafting`

Do not overload the section with too many icons or gimmicks.

---

## 14. Build Philosophy Specification

This is one of the strongest branding opportunities on the site.

## 14.1 Locked philosophy

The core principle stays:

> **Readable. Deterministic. Expandable.**

## 14.2 Recommended presentation

Turn the philosophy into 3 or 4 clean cards:

### `Readable Systems`

I prefer code and project structures that explain their intent clearly.

### `Deterministic Behavior`

I care about predictable state, explicit flow, and systems that can be reasoned about.

### `Expandable Structure`

I build with future growth in mind instead of hard-coding every behavior into one place.

### Optional fourth card: `Teaching Through Systems`

My writing background helps me explain code structure, not just produce code.

This section should explicitly connect to the textbook project.

---

## 15. Achievements / Unlocks Specification

This section should present real milestones with light game framing.

## 15.1 Required achievement content model

Each achievement should show:

- `What happened`
- `What it proves`
- `Why it matters`

### Example

#### Achievement

`200 chapters drafted for GenericRPG in C#`

#### What happened

Created a large structured C# learning series built around game-development concepts.

#### What it proves

Long-term discipline, technical communication, and software architecture thinking.

#### Why it matters

Shows the ability to explain complex systems clearly and consistently.

---

## 15.2 Optional rarity flavor

Allowed if subtle:

- Common
- Rare
- Epic

This should be visual flavor only:

- icon
- faint glow
- minor label

It should not dominate the meaning of the achievement.

## 15.3 Optional hidden reward

A small secret unlock or Easter egg is acceptable if:

- it does not distract from usability
- it is not required for understanding the portfolio

---

## 16. Progression Log Specification

The progression log should show growth, not biography.

## 16.1 Locked milestone sequence

1. `C# Foundation`
2. `Console RPG Systems`
3. `Tooling Discipline`
4. `Unity Focus`
5. `Current Build`

## 16.2 Recommended presentation

Treat it as a vertical mission timeline with milestone nodes.

Each step should include:

- stage label
- short explanation
- why it mattered

Example:

- `Stage 01 — C# Foundation`
- `Stage 02 — Console RPG Systems`
- `Stage 03 — Tooling Discipline`
- `Stage 04 — Unity Focus`
- `Stage 05 — Current Build`

Optional accents:

- operation complete stamps
- node highlights
- expand-on-click behavior

---

## 17. Recruiter View Specification

This is a required feature and one of the site’s strongest differentiators.

## 17.1 Purpose

Recruiter View should:

- reduce visual intensity
- prioritize proof
- increase scannability
- keep the same structure

It should **not** become a separate second website.

## 17.2 In recruiter view

Reduce:

- heavy glow
- extra ornament
- non-essential motion
- visual noise

Increase:

- clarity
- text visibility
- direct project proof
- resume visibility

## 17.3 Behavior

Keep:

- same page
- same section order
- same content structure

Do not:

- hide essential content
- reorganize the entire page
- create two conflicting experiences

## 17.4 Suggested explanatory text

Recommended label:

> **Recruiter View: reduce visual intensity and prioritize project proof.**

The current localStorage-based memory behavior is correct and should remain.

---

## 18. Resume Page Specification

The resume page should be visually calmer than the homepage.

## 18.1 Purpose

The homepage creates:

- memorability
- identity

The resume page creates:

- speed
- clarity
- reduced visual intensity

## 18.2 Required sections

- `Summary`
- `Technical Focus`
- `Project Proof`
- `Core Skills`
- `Visible Milestones`
- `Contact`

## 18.3 Required note

Near the top, include a short explanation such as:

> **This page provides a cleaner resume-style view of the same portfolio information.**

## 18.4 Required actions

- PDF resume button must be prominent
- `Back to Portfolio` should be visible near the top
- optionally repeat `Back to Portfolio` near the bottom

## 18.5 Motion rule

The resume page should avoid:

- heavy animation
- intense visual glow
- distracting micro-interactions

---

## 19. Unity RPG Prototype Page Specification

This is a required future page.

File target:

- `unity-rpg-prototype.html`

## 19.1 Purpose

This page should become the strongest visual and technical proof page on the site.

## 19.2 Required sections

- `Project Overview`
- `Gameplay Goal`
- `Player Systems`
- `Combat Systems`
- `Enemy / AI Behavior`
- `Interaction Systems`
- `UI Feedback`
- `Architecture Notes`
- `Current Screenshots`
- `Short Gameplay Clip`
- `What I Learned`
- `Next Build Milestone`

## 19.3 Required media

Eventually this page should include:

- real Unity screenshots
- short gameplay clips
- system diagrams
- code snippets
- before / after improvements

This page is critical because the homepage claims a Unity gameplay direction, and this page will become the deepest proof of that claim.

---

## 20. Game Bug Tracker Page Specification

This page should prove tooling, architecture, workflow thinking, and practical web implementation.

## 20.1 Required sections

- `Problem`
- `Target User`
- `Core Workflow`
- `Current Features`
- `Architecture Notes`
- `Screenshots`
- `Version 1 Roadmap`
- `Lessons Learned`
- `Next Improvements`

## 20.2 Required workflow framing

Suggested simple workflow:

> **Report Bug -> Assign Status -> Track Priority -> Review Fix -> Close Issue**

## 20.3 Required proof types

Later, add screenshots of:

- dashboard
- bug list
- bug details
- create/edit form
- status filter

## 20.4 Main message

This page should clearly prove:

> **I can build support tools that help production workflows, not only visual game features.**

---

## 21. GenericRPG in C# Page Specification

This page should prove:

- technical writing
- architecture thinking
- long-term discipline
- teaching clarity

## 21.1 Required sections

- `What this project is`
- `Why I am writing it`
- `Who it is for`
- `Teaching philosophy`
- `Volume map`
- `Sample chapters`
- `Architecture focus`
- `Release path`
- `Why it belongs in my portfolio`

## 21.2 Required conceptual bridge

This page must explicitly explain why the book belongs in a game-dev portfolio.

Suggested core idea:

> **GenericRPG in C# is not only a writing project. It is also a long-form software architecture project.**

That connection should remain visible and not be left for the user to infer.

---

## 22. Playable Micro-Showcase Specification

The micro-showcase should remain small and supportive.

## 22.1 Purpose

It is:

- a signal
- a proof of interactivity
- a memorable UI element

It is **not** the main project proof.

## 22.2 Good content directions

- tiny player avatar moving in a terminal grid
- dodge drones
- collect signal fragments
- idle attract mode
- subtle mission-active animation

## 22.3 Required labeling

Add a short explanation such as:

> **Micro Showcase: keyboard movement, collision awareness, and lightweight interaction.**

And support instructions such as:

- `WASD / Arrow Keys: Move`
- `Avoid drones`
- `Collect signal`

## 22.4 Mobile rule

The micro-showcase must degrade gracefully on mobile.

If needed:

- show a static fallback
- reduce interactivity
- or disable the live canvas on small screens

---

## 23. Accessibility Specification

Accessibility is a required quality dimension, not an optional polish item.

## 23.1 Keep

- skip link
- semantic headings
- keyboard accessibility
- reduced-motion support
- clear link text
- direct resume access

## 23.2 Interactive control rules

Every interactive element should be keyboard-accessible:

- nav links
- CTA buttons
- skill nodes
- mission drawers
- achievement cards

## 23.3 Selected-state rules

Do not use color alone to show selected skills.

Selected state should also include:

- border change
- label change
- emphasis shift
- `aria-pressed` or equivalent

## 23.4 Motion rule

Motion should stay:

- subtle
- non-essential
- easy to suppress

The site must continue respecting:

- `prefers-reduced-motion`

---

## 24. Visual Design Specification

## 24.1 Palette

Keep this palette family:

- deep navy / near black
- cyan for system UI
- violet / magenta for atmosphere
- amber for selective emphasis

### Color behavior

- amber = rare emphasis only
- cyan = technical UI / system signal
- violet / magenta = mood / depth / ambient lighting

## 24.2 Typography

Keep these roles:

- `Chakra Petch` for headings and display UI
- `Sora` for body text
- `IBM Plex Mono` for labels, chips, telemetry, data markers

## 24.3 Gothic usage rule

Use gothic influence only in:

- borders
- section dividers
- emblems
- minor ornaments
- atmospheric framing

Do not:

- set long body text in gothic-styled type
- over-theme every paragraph

---

## 25. 404 Page Specification

The custom 404 page should stay short and useful.

## 25.1 Recommended structure

Heading:

`Unmapped Sector`

Body:

`The requested route does not exist in this build. Return to the main dossier or open the mission log.`

Buttons:

- `Return to Main Dossier`
- `Open Mission Log`
- `Contact`

It should feel polished, not overdesigned.

---

## 26. Case Study Readiness Rule

A project should only receive a deep codex page when it has enough proof material.

## Required readiness criteria

A project is ready for a deeper case-study page when it has:

- a clear problem
- a clear solution
- screenshots or demo material
- a code link or proof path
- technical explanation
- lessons learned

Without that, a project is better kept as:

- a mission card
- a roadmap block
- or a lighter summary

---

## 27. Priority Build Order

The highest-value upgrade order should be:

1. Replace Unity placeholder visuals with real gameplay screenshots or clips
2. Add dedicated `unity-rpg-prototype.html`
3. Add Game Bug Tracker UI screenshots
4. Add `System Design Notes` to every real project page
5. Improve proof mapping under each skill node
6. Refine the resume page for faster scanning
7. Replace book placeholder links with direct retail links
8. Clean up or retire archived sample pages
9. Add more codex pages only when enough proof exists

---

## 28. Final Shape

The finished site should behave like this:

- the homepage is the **main character dossier**
- the resume page is the **plain recruiter view**
- the Unity RPG page becomes the **visual flagship**
- the Game Bug Tracker page proves **tool-building and workflow thinking**
- the GenericRPG page proves **technical writing and architecture discipline**
- the skill tree connects **claims to proof**
- the achievements show **real momentum**
- the contact section remains **obvious and frictionless**

## Final design rule

> **Let the theme create memorability; let the information create trust.**

---

## 29. Single-Sentence Brand Statement

This line should be reusable across:

- homepage hero
- resume page
- GitHub profile
- LinkedIn
- outreach copy

### Primary brand statement

> **C# gameplay programmer focused on Unity systems, developer tooling, and clear technical communication.**

### Extended version

> **C# gameplay programmer building Unity gameplay systems, .NET tools, and long-form technical writing with a focus on readable, deterministic, and expandable structure.**

---

## 30. Execution Control Layer

The website is no longer blocked by concept direction.  
The next challenge is **controlled execution**.

This section defines:

- what still needs to be built
- what already exists
- what matters most
- how to measure progress

---

## 31. Implementation Checklist

Use this as the practical build-control checklist.

### Core structure

- [ ] confirm final homepage nav labels
- [ ] keep homepage section order locked
- [ ] keep resume access visible above the fold
- [ ] keep recruiter view visible and understandable

### Page creation / refinement

- [ ] create `unity-rpg-prototype.html`
- [ ] refine `resume.html` for faster scanning
- [ ] add system design notes to real project pages
- [ ] add stronger dossier consistency across all real project pages

### Media

- [ ] replace Unity placeholder art with real screenshots
- [ ] add short Unity gameplay clip or GIF
- [ ] add Game Bug Tracker UI screenshots
- [ ] add at least one architecture diagram where helpful
- [ ] replace temporary or generic visuals wherever proof exists

### Content truthfulness

- [ ] verify all project status labels are honest
- [ ] verify unfinished work is clearly labeled
- [ ] verify no placeholder wording sounds like shipped production claims

### Accessibility / UX

- [ ] test keyboard navigation
- [ ] test `prefers-reduced-motion`
- [ ] test mobile layout
- [ ] test button focus visibility
- [ ] test skill filter states beyond color-only feedback

### SEO / public polish

- [ ] update sitemap when pages change
- [ ] keep archived pages `noindex`
- [ ] add / refine page-level meta descriptions
- [ ] add / refine social sharing image later

### Cleanup

- [ ] review archived sample pages
- [ ] remove or replace them when real pages exist
- [ ] verify no broken links remain

---

## 32. Page Status Table

This table separates what is already in place from what is still pending.

| Page | Current Status | What Exists | What Is Still Needed |
|---|---|---|---|
| `index.html` | Mostly complete | Character dossier structure, featured mission, mission log, skill filter, recruiter view, achievements, progression log, contact links | Real Unity media, tighter homepage copy polish, stronger visual proof |
| `resume.html` | Good first version | Plain HTML resume, PDF link, project summary, contact links | Faster scan refinement, tighter recruiter copy, possible stronger summary phrasing |
| `game-bug-tracker.html` | Live dossier | Case-study structure, scope honesty, repo links, roadmap | Screenshots, architecture notes, workflow diagram, deeper implementation proof |
| `genericrpg-in-csharp.html` | Strong live dossier | Publishing framing, volume map, sample chapters, book positioning | Final retail links, final media, stronger architecture-as-proof callout if needed |
| `unity-rpg-prototype.html` | Not built | Homepage featured mission summary only | Full case-study page, screenshots, gameplay clips, system notes, architecture explanation |
| `404.html` | Complete enough | Themed not-found recovery page | Minor copy polish only if needed |
| Archived sample pages | Temporary | Reference layouts and legacy URLs | Replace, remove, or fully archive later |

---

## 33. Proof-Strength Ranking

This ranking is used to decide:

- homepage emphasis
- future page investment
- what should receive media first

### 1. `Unity RPG Prototype`

- **Highest strategic value**
- strongest identity alignment with your target role
- currently weakest in proof because media is still missing

### 2. `Game Bug Tracker`

- **Strongest current technical implementation proof**
- best current evidence for tooling, workflow, and architecture discipline

### 3. `GenericRPG in C#`

- **Strongest writing and architecture discipline proof**
- highly distinctive project
- strongest long-form communication signal

### Interpretation rule

The portfolio’s **game-dev identity is promising but not fully proven** until the Unity RPG project has:

- a dedicated case-study page
- real screenshots
- short gameplay clips
- system notes

---

## 34. Homepage Copy Specification

These are the key short-copy areas that should stay polished and intentional.

### Hero value statement

Preferred:

> **I build readable, deterministic, and expandable systems for games, tools, and technical learning projects.**

### Featured Mission summary

Working direction:

> **A prototype RPG project focused on readable gameplay systems, player interaction, combat structure, and expandable architecture.**

### Build Philosophy summary

Working direction:

> **The best systems stay readable under pressure, behave predictably, and expand without collapsing into noise.**

### Contact / Links CTA

Working direction:

> **Use the direct path if you want projects, collaboration, or the recruiter-friendly version of the resume without navigating the whole theme.**

### Recruiter View description

Working direction:

> **Recruiter View: reduce visual intensity and prioritize project proof.**

### Service Record / short bio direction

Optional future version:

> **Former console RPG tinkerer turned systems developer. I specialize in building clean, maintainable gameplay code and developer tools. Currently focused on Unity systems and sharing battle-tested C# architecture through long-form writing.**

---

## 35. Anti-Pattern / “Do Not Do” List

These rules should remain explicit and centralized.

### Do not do these

- do not use fake RPG numeric skill scores as if they are objective
- do not hide the resume behind themed navigation
- do not add a long boot intro before the user can read the site
- do not overuse gothic fonts or make body text decorative
- do not make unfinished projects sound completed
- do not create deep project pages without enough proof material
- do not rely on theme language so heavily that labels become unclear
- do not add large heavy effects that hurt mobile performance
- do not make users “play” before they can understand who you are
- do not turn recruiter view into a second different website

---

## 36. Mobile Behavior Rules

Every major interaction should have an explicit mobile behavior.

### Hero / Character Summary

- stack vertically
- keep CTAs visible early
- do not let the right-side panel dominate the screen

### Playable micro-showcase

- degrade gracefully on small screens
- show a static or simplified fallback if needed
- do not make mobile visitors depend on keyboard controls

### Skill Tree

- keep buttons large enough to tap
- allow wrapping or stacked groups
- preserve selected-state feedback clearly

### Mission cards

- stack vertically
- maintain readable drawer behavior
- avoid hover-dependent understanding

### Achievements

- ensure expansions remain obvious and easy to close

### Resume page

- keep it flatter and lighter than the homepage
- keep PDF and contact buttons visible without excessive scrolling

---

## 37. Performance Budget

Because the site is static and hosted on GitHub Pages, it should stay lightweight and fast.

### Performance rules

- avoid large uncompressed videos
- compress screenshots and images
- lazy-load heavy project media later where appropriate
- keep JavaScript small and purposeful
- avoid unnecessary libraries
- avoid heavyweight frontend frameworks for purely presentational behavior
- keep the first screen fast and responsive

### First-screen priority

The hero must remain fast enough that:

- the theme feels intentional
- the recruiter flow is not delayed
- the site still behaves like a professional portfolio rather than a toy demo

---

## 38. Media Replacement Plan

This plan makes placeholder replacement concrete.

### Required future media assets

- `3` Unity RPG screenshots
- `1` short Unity gameplay clip or muted loop
- `1` combat or interaction GIF
- `4` Game Bug Tracker screenshots
- `1` simple project architecture diagram
- `1` strong book cover / release visual
- `1` stylized portrait, silhouette, or operator-style avatar for the character dossier

### Optional supporting media

- bug workflow diagram
- book-series progression graphic
- small proof thumbnails for achievements

### Replacement priority

1. Unity visuals
2. Bug tracker UI captures
3. Book direct retail media
4. Character avatar / portrait

---

## 39. Case Study Template

Use this as the reusable structure for all real deep project pages.

### Required case-study template

1. `Overview`
2. `Problem`
3. `Goal`
4. `My Role`
5. `Tech Stack`
6. `Core Features`
7. `Architecture Notes`
8. `Screenshots / Demo`
9. `What I Learned`
10. `Next Improvements`
11. `Links`

### Rule

Every real case-study page should follow this template closely enough that:

- visitors know where to find proof
- technical reviewers know where to find structure
- unfinished work still looks intentional and organized

---

## 40. Truthfulness Rules for Status Labels

Project status labels should stay consistent and honest.

### Label meanings

- `Current Quest`
  - actively being built now

- `Live Dossier`
  - has a real page or case study already published

- `Publishing Route`
  - large project in progress or launch preparation, not fully released

- `Archived Signal`
  - old / sample / non-active reference page not part of the current active portfolio

### Rule

Do not assign a stronger label than the real proof supports.

---

## 41. Skill-to-Proof Matrix

This is the implementation matrix for the skill tree.

| Skill Branch | Proof Projects |
|---|---|
| `C# Core` | Unity RPG Prototype, Game Bug Tracker, GenericRPG in C# |
| `Unity Gameplay` | Unity RPG Prototype |
| `.NET Tooling` | Game Bug Tracker |
| `Architecture` | Unity RPG Prototype, Game Bug Tracker, GenericRPG in C# |
| `Technical Writing` | GenericRPG in C# |
| `Web Presentation` | Portfolio site, Game Bug Tracker |

### Rule

A skill node should never exist without at least one real project or page that proves it.

---

## 42. Recruiter Scan Test

The homepage should answer these questions within roughly **10 seconds**:

1. Who is this person?
2. What role are they targeting?
3. What technologies do they use?
4. What projects prove it?
5. Where is the resume?
6. How do I contact them?

If the homepage fails this test, the design is too decorative or too slow.

---

## 43. Technical Reviewer Scan Test

A technical visitor should be able to find these within roughly **30 seconds**:

1. code links
2. architecture notes
3. project constraints
4. implementation details
5. lessons learned
6. next improvements

If those are difficult to find, the codex / dossier system is not doing its job yet.

---

## 44. Visual Hierarchy Rule for the Three Main Projects

The three main projects should always have clear portfolio roles.

### `Unity RPG Prototype`

- visual and gameplay flagship

### `Game Bug Tracker`

- tooling and engineering proof

### `GenericRPG in C#`

- writing and architecture proof

This hierarchy should remain visible in:

- homepage layout
- copy emphasis
- future media investment

---

## 45. Minimum Viable Launch Version

This defines the smallest acceptable public version of the site.

### Minimum required

- polished homepage
- working resume page
- three mission cards
- working skill filter
- recruiter view toggle
- visible contact links
- at least one strong case-study page
- no broken links
- mobile-safe layout

This is the “good enough to be professional” line.

---

## 46. Versioned Roadmap

Use a simple version-style roadmap to control iteration.

### `v1.0`

- professional themed homepage
- resume page
- existing project pages
- visible contact flow

### `v1.1`

- Game Bug Tracker screenshots
- system notes
- stronger tooling proof

### `v1.2`

- dedicated Unity RPG page

### `v1.3`

- real gameplay media
- stronger flagship proof

### `v1.4`

- book media
- direct retail links

### `v2.0`

- richer interaction polish
- additional codex pages
- stronger universe cohesion

---

## 47. SEO and Public Discovery Rules

Since the site is public and hosted on GitHub Pages, SEO basics should remain part of the spec.

### Rules

- keep clear page titles
- keep strong page-level meta descriptions
- add / refine an Open Graph image later
- keep project page descriptions specific
- update the sitemap whenever public pages change
- keep archived pages `noindex`
- prefer clear URLs and stable public paths

---

## 48. Risk Register

This makes the spec more practical and professional.

### Risk: theme becomes too decorative

- **Control:** recruiter view + resume-first layout + strong headings

### Risk: Unity identity lacks proof

- **Control:** dedicated Unity RPG page + real gameplay media

### Risk: project pages feel unfinished

- **Control:** honest status labels + next-improvement blocks + case-study readiness rule

### Risk: site becomes hard to scan

- **Control:** clear labels, visible CTAs, plain HTML resume page, recruiter scan test

### Risk: media becomes too heavy

- **Control:** performance budget + compressed assets + restrained motion

---

## 49. Definition of Success

The site is successful when:

1. a recruiter can understand the portfolio in under 10 seconds
2. a technical reviewer can find real project proof in under 30 seconds
3. the homepage feels memorable without hiding core information
4. the Unity project becomes the strongest visual proof
5. the resume remains accessible from every page
6. the project pages stay truthful about current status
7. the theme strengthens identity instead of weakening clarity

---

## 50. Final Execution Principle

The remaining work is no longer about inventing more theme ideas.

It is about:

- replacing placeholders with proof
- keeping structure consistent
- preserving honesty
- tightening execution

### Final guiding sentence

> **The portfolio should feel premium because it is well-structured, well-proven, and clearly communicated — not because it is overloaded with effects.**
