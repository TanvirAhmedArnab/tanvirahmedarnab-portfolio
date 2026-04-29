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

- Home / mission-map style overview
- `Game Bug Tracker` case study
- `GenericRPG in C#` publishing project page
- custom `404` page

## Repository structure

```text
.
|-- 404.html
|-- CNAME
|-- DEPLOY-GODADDY.md
|-- game-bug-tracker.html
|-- genericrpg-in-csharp.html
|-- index.html
|-- robots.txt
|-- script.js
|-- sitemap.xml
|-- styles.css
`-- assets
    |-- branding
    |-- books
    `-- projects
        |-- placeholders
        `-- sample-media
```

## Asset notes

- `assets/branding/` holds shared visual identity files such as the logo.
- `assets/books/` holds book-related visuals.
- `assets/projects/placeholders/` holds temporary project artwork that can be replaced later with real screenshots or captures.
- `assets/projects/sample-media/` holds archived sample visuals used by older noindexed placeholder project pages.

## Archived placeholder pages

The following pages are still in the repository as layout references and legacy URLs, but they are marked `noindex` and are not included in the main sitemap:

- `skyline-siege.html`
- `ritual-runner.html`
- `signal-bloom.html`

They can be replaced or removed later once real project pages fully take over their role.

## Deployment

- Hosting: `GitHub Pages`
- Domain DNS: `GoDaddy`
- Email: custom domain email configured separately from site hosting

The current repository is published directly from the main GitHub Pages site source. Domain and DNS notes are kept in [DEPLOY-GODADDY.md](DEPLOY-GODADDY.md).

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
