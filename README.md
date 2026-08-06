# Dad Again — PWA

Installs to your iPhone home screen. Full screen, own icon, works offline.
No App Store, no Apple developer fee, no build step.

## What's in here

One build: `index.html` + `app.js` + `manifest.json` + `sw.js` + icons.
Nine files. Host them together and it installs to your home screen and
opens offline.

## Files

| File | What it is |
|---|---|
| `CLAUDE.md` | Project context for Claude Code. Architecture, design system, voice rules. |
| `SEED-PROMPT.md` | Paste this into Claude Code as your first message. |
| `index.html` | The shell. Fonts, iOS meta tags, safe-area handling. |
| `app.js` | The whole app. React, written in JSX, compiled in the browser. |
| `manifest.json` | Tells iOS the name, icon, and colors. |
| `sw.js` | Service worker. Caches everything so it opens offline. |
| `icon-*.png` | App icons. |

## Handing this to Claude Code

Push this whole folder to a repo, point Claude Code at it, and paste the
contents of `SEED-PROMPT.md` as your first message. `CLAUDE.md` sits at the
root and carries the architecture, design system, voice rules, and the one
bug pattern that has already cost two rebuilds.

## Important: it will not work by double-clicking the HTML

Two things require a real web server:
- Babel loads `app.js` over the network, which `file://` blocks
- Service workers only run on `https://` or `localhost`

Hosting it is one step and covered below.

---

## Getting it on your phone

### Option A — Replit (fastest, you already pay for it)

1. Go to replit.com, click **Create Repl**
2. Pick the **HTML, CSS, JS** template
3. Name it `dad-again`, click **Create**
4. In the file panel on the left, delete the starter `index.html`, `style.css`, and `script.js`
5. Drag all 9 app files from this folder into the file panel. That is everything except the three `.md` files, which are notes and do not need to be uploaded.
6. Click **Run** at the top
7. A preview window opens with a URL at the top like `dad-again.yourname.repl.co`
8. Copy that URL
9. On your iPhone, open that URL **in Safari** (not Chrome, Add to Home Screen only works in Safari)
10. Tap the **Share** button at the bottom, the square with the arrow
11. Scroll down, tap **Add to Home Screen**
12. Tap **Add**

Done. It is on your home screen with the icon. Opens full screen, no browser bar.

### Option B — Netlify Drop (no account needed to test)

1. Zip this folder
2. Go to `app.netlify.com/drop`
3. Drag the zip onto the page
4. It gives you a live URL in about 10 seconds
5. Follow steps 9 to 12 above

Free tier, and you can claim the site later if you want a custom name.

---

## Updating it later

Replit: edit the file, click Run. The service worker will pick up changes on
the second open. To force it immediately, bump the version string at the
top of `sw.js` from `dadagain-v1` to `dadagain-v2`.

---

## What does not work in a PWA on iPhone

**Scheduled push notifications.** iOS does not reliably deliver them to
home-screen web apps. The notification toggles in Settings save your
preference and will work if this ever moves to a native build, but nothing
will actually fire right now. Settings screen says this so you do not
wonder why.

Everything else works: offline, home screen icon, full screen, saved data,
haptics on tap.

## Where the data lives

`localStorage` on your phone, in the app's own sandbox. Nothing leaves the
device, there is no account and no server. Deleting the app from the home
screen erases it.

## If you want the App Store later

The path is Capacitor: it wraps this exact codebase in a native shell
without a rewrite, and unlocks real push notifications. Worth doing only
if other people start using it.
