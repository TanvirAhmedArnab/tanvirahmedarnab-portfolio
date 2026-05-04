# Tanvir Ahmed Arnab Portfolio

Static portfolio site for [www.tanvirahmedarnab.com](https://www.tanvirahmedarnab.com/).

## Overview

This repository hosts a custom GitHub Pages portfolio for a Unity gameplay programmer focused on:

- gameplay systems
- combat readability
- internal tooling
- technical writing and publishing

The site is intentionally static: `HTML`, `CSS`, and `JavaScript` only. That keeps the portfolio easy to maintain, fast to load, and simple to deploy through GitHub Pages.

## Live sections

- Home / character dossier overview
- `Game Bug Tracker` case study
- `GenericRPG in C#` publishing project page
- plain HTML resume page
- custom `404` page

## Repository structure

```text
.
|-- 404.html
|-- CNAME
|-- contact.html
|-- game-bug-tracker.html
|-- genericrpg-in-csharp.html
|-- index.html
|-- journal.html
|-- music.html
|-- my-world.html
|-- portfolio.html
|-- publication.html
|-- resume.html
|-- robots.txt
|-- script.js
|-- sitemap.xml
|-- site.webmanifest
|-- docs
|   |-- archive
|   |   `-- planning
|   `-- setup
|       `-- DEPLOY-GODADDY.md
|-- scripts
|   `-- music.js
|-- styles
|   |-- music.css
|   `-- site.css
`-- assets
    |-- branding
    |-- books
    |-- music
    |-- social
    `-- projects
        `-- game-bug-tracker
```

## Asset notes

- `assets/branding/` holds the shared site identity files used by the live pages.
- `assets/books/` holds book-related visuals.
- `assets/music/` holds the image and audio files used only by the music page.
- `assets/social/` holds the shared social sharing card used by Open Graph and Twitter metadata.
- `assets/projects/game-bug-tracker/` holds the current real screenshots used by the bug tracker homepage card and case-study page.

## Documentation

- Historical planning and build notes are archived under `docs/archive/planning/`.
- Deployment and DNS notes live in `docs/setup/`.
- The repo root is intentionally kept focused on the public site files and shared assets.

## Deployment

- Hosting: `GitHub Pages`
- Domain DNS: `GoDaddy`
- Email: custom domain email configured separately from site hosting

The current repository is published directly from the main GitHub Pages site source. Domain and DNS notes are kept in [docs/setup/DEPLOY-GODADDY.md](docs/setup/DEPLOY-GODADDY.md).

## Local editing

There is no build step required.

1. Edit the site files directly.
2. Refresh the browser.
3. Commit and push to publish changes.

## Maintenance guidelines

- Keep secrets, API keys, and private credentials out of the repository.
- Do not commit private resume drafts unless you explicitly want them public.
- Prefer replacing placeholder artwork with real project media over adding more decorative effects.
- Keep project copy honest about current progress, scope, and what is still in development.
- Prefer archiving planning documents under `docs/` instead of adding more root-level clutter.
