# shravani-c

Personal site. Hand-written HTML and CSS, no framework, no build step.

```
index.html        home
projects.html     project cards
experience.html   role panels + education + resume
about.html        about, outside of work, photos
back-pages.html   reading/listening log, notes
styles.css        the entire look — start here
theme.js          the desk lamp (dark mode)
images/           photos
resume.pdf        the current resume
```

Every page copies the same header. To change the nav, change it in all five files.
To change the look, change `styles.css` — the colors are the tokens at the top.

Run locally: open `index.html` in a browser, or `python3 -m http.server` in this folder.
