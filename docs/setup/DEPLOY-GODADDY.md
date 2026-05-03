# Domain and Deployment Notes

## Current setup

This portfolio is currently set up as:

- `GitHub Pages` for hosting
- `GoDaddy` for domain registration and DNS
- custom domain: `www.tanvirahmedarnab.com`

That means GoDaddy is handling the domain layer, while the actual site files are published from this repository.

## Files that matter for GitHub Pages

- `CNAME`
- `.nojekyll`
- `robots.txt`
- `sitemap.xml`
- `404.html`

## Current site pages

- `index.html`
- `game-bug-tracker.html`
- `genericrpg-in-csharp.html`
- `resume.html`
- `404.html`

## If the site ever moves off GitHub Pages

If hosting changes later, keep these ideas in mind:

1. Keep the custom domain records updated in DNS.
2. Recreate the custom `404` page on the new host.
3. Preserve canonical URLs for existing public pages when possible.
4. Move only the site files that are actually still in use.
5. Replace the remaining temporary homepage placeholder art with real project media before any larger platform migration.

## Email note

Custom domain email is independent from GitHub Pages hosting. Email DNS changes should not overwrite the website `A` and `CNAME` records used by the portfolio.
