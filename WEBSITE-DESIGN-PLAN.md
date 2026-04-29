# Website Design Plan

## Direction

Turn the portfolio into a `game-themed character page / codex interface` that still works as a professional portfolio for recruiters, collaborators, and technical readers.

The site should feel like:

- a `character summary screen`
- a `mission terminal`
- a `developer dossier`

The site should **not** feel like:

- a gimmick
- a fake game UI with poor readability
- a site that hides important information behind too many effects

## Theme Recommendation

Primary direction:

- `dark sci-fi dossier`

Secondary flavor:

- `gothic undertones`
- moody atmosphere
- elegant lighting
- restrained horror-like tension in visuals only

Avoid:

- full horror clutter
- overly noisy HUD effects
- heavy intros or slow boot sequences

## Core Goal

Make the homepage feel like a `developer character sheet` where a visitor can quickly understand:

1. who Tanvir is
2. what kind of developer he is
3. what projects are active
4. what skills are strongest
5. what achievements already exist
6. where to click for deeper detail

## UX Principle

`Summary first, deep dive optional.`

Anyone should be able to scan the homepage in under 30 seconds.

Then, if they want more:

- open project dossiers
- open full case-study pages
- request resume
- visit GitHub
- visit LinkedIn
- contact directly

## Planned Homepage Structure

### 1. Character Summary

Top-of-page hero becomes a `player profile / operator card`.

Content:

- Name: `Tanvir Ahmed Arnab`
- Class: `Gameplay Programmer`
- Specialization: `Systems / Tools / Technical Writing`
- Status: `Open to opportunities` or similar
- Main contact path
- Quick links: GitHub, LinkedIn, Resume, Contact

Possible visual ideas:

- profile crest / logo
- faction-style badge
- animated backdrop
- small live showcase panel

### 2. Core Stats

Presented like RPG attributes or loadout values.

Examples:

- `C#`
- `Unity`
- `Gameplay Systems`
- `Tooling`
- `Combat Readability`
- `AI / Behaviors`
- `Architecture`
- `Technical Writing`

Important:

- stats should feel expressive, not fake
- avoid pretending exact measurements are objective
- frame them as specialization signals, not literal ranking

### 3. Skill Tree

Replace flat skills presentation with grouped branches.

Suggested branches:

- `Gameplay`
- `Tools / Workflow`
- `.NET / Web`
- `Writing / Publishing`

Possible interactions:

- click a skill node to highlight matching projects
- show related tools or case studies
- indicate current growth paths

### 4. Mission Log

Projects become `missions`.

Suggested categories:

- `Active Mission`
- `Live Dossier`
- `Publishing Route`
- `Future Flagship`

Current likely mapping:

- `Unity RPG Prototype`
- `Game Bug Tracker`
- `GenericRPG in C#`

Each mission card should show:

- status
- project type
- difficulty / focus tags
- last updated
- short summary
- optional inline dossier toggle
- link to full case study or project page

### 5. Achievements / Unlocks

Add a section for meaningful milestones.

Examples:

- `200 chapters written`
- `8-volume book series in progress`
- `custom domain + professional email configured`
- `interactive portfolio launched`
- `Game Bug Tracker case study live`

This section should communicate:

- discipline
- output
- scope
- real momentum

### 6. Toolkit / Inventory

Present tools like an inventory panel.

Examples:

- Unity
- C#
- .NET
- Razor Pages
- Git
- HTML
- CSS
- JavaScript

This can be simpler than the skill tree and serve as a quick visual reference.

### 7. Codex Entries

Deep-dive content should open in either:

- inline expandable dossier panels
- dedicated project pages

Full pages should act like `codex entries`.

Each codex page should include:

- overview
- problem
- solution
- tools used
- lessons learned
- next improvements
- media
- external links when available

## Information Architecture

### Homepage

Acts as:

- summary screen
- recruiter scan page
- main navigation hub

### Project Pages

Acts as:

- codex entries
- deeper proof of work

### Book Page

Acts as:

- publishing project dossier
- Amazon route page
- selected sample preview page

### 404 Page

Acts as:

- in-world navigation error screen
- still gives useful recovery paths

## Visual Design Goals

### Mood

- dark
- atmospheric
- cinematic
- controlled
- premium

### Color Direction

Base:

- deep navy
- near-black
- dark slate

Accents:

- cyan
- violet
- magenta
- amber

Optional gothic influence:

- muted crimson
- pale bone text accents
- cathedral-like contrast, but subtle

### Typography

Current direction is already close.

Recommended roles:

- headings: stylized, sharp, game-interface feeling
- body: clean and readable
- labels / stats / metadata: monospace

Typography must stay:

- legible
- responsive
- professional

## Interaction Design

### Keep

- subtle motion
- hover depth
- staggered reveals
- expandable dossiers
- playable micro-showcase

### Add Later

- stronger skill filtering
- deeper mission-state interactions
- better media transitions
- command-palette style navigation if still useful

### Avoid

- long intros
- blocking animations
- confusing navigation
- effects that reduce readability

## Media Plan

### Temporary

Use:

- stylized placeholder art
- AI-generated or custom SVG concept visuals
- abstract UI-driven scene art

### Final

Replace with:

- real Unity screenshots
- short clips
- Game Bug Tracker UI screenshots
- final book covers
- Amazon product links

Priority:

1. Unity RPG media
2. Game Bug Tracker UI screenshots
3. final book cover / Amazon links

## Content Priorities

### Highest Priority

- make the homepage feel like one coherent character page
- make mission cards more game-like but still readable
- improve the sense of identity

### Next Priority

- real project media
- stronger flagship Unity project page
- achievement system

### Later

- command palette
- alternate themes
- more advanced interactions

## Constraints

The design must remain:

- static-site friendly
- GitHub Pages friendly
- fast to load
- maintainable without a framework

No unnecessary complexity unless it clearly improves:

- readability
- proof of skill
- portfolio quality

## Proposed Build Phases

### Phase 1

Refine homepage into a fuller `character summary` layout.

### Phase 2

Convert skills + projects into a stronger `skill tree + mission log` system.

### Phase 3

Add `achievements / unlocks` and polish deep-dive codex structure.

### Phase 4

Replace temporary visuals with real media.

## Questions For Next Refinement

1. Should the homepage feel more like:
   - a sci-fi terminal
   - a gothic codex
   - a hybrid of both

2. Should the `character summary` include a portrait / avatar style visual, or stay symbolic?

3. Should achievements feel:
   - serious / professional
   - game-like / collectible
   - a mix of both

4. Should the mission cards feel more like:
   - dossiers
   - map nodes
   - quest cards

5. Should the site lean more toward:
   - recruiter clarity
   - visual uniqueness
   - balanced middle ground

## Recommendation

Best direction:

`A dark sci-fi developer dossier with gothic atmosphere, built as a character sheet / mission codex, where the homepage acts as a summary screen and deeper pages act as codex entries.`
