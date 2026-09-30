# Dad Again

Read this before touching anything.

## What it is

An iOS home-screen PWA for second-time dads in the newborn phase. Tactical
reference, keyed to the kid's exact age in days. Clint is the only user right
now. His kid is a newborn, so this gets opened at 3am on no sleep. That single
fact drives every decision below.

Covers weeks 1 through 12 only.

## Working with Clint

He is not technical. When he needs to do something outside the chat, give him
one action per line and tell him exactly what he should see on screen. Do not
assume he knows what a terminal, a package manager, or a build step is.

Never state a number, spec, or claim without a source. "I don't know" is an
acceptable answer and is preferred over a confident guess.

---

## Architecture

Do not change any of this without asking him first.

**Zero build step.** React, ReactDOM, and Babel standalone all load from CDN.
Tailwind loads from CDN. This is deliberate, not laziness. He will not
maintain a toolchain, so anything requiring npm install, a bundler, or a
compile step is a regression even if the code is cleaner.

**Icons are hand-written inline SVG** components at the top of `app.js`. No
icon library. The app has to render with no signal, so every dependency that
could fail offline was removed on purpose.

**localStorage only.** No account, no server, no analytics, no telemetry.
Nothing leaves the phone. Three keys: `babyProfile`, `userProgress`,
`notifPrefs`.

**CDN versions are pinned** in `index.html` (React 18.3.1, Babel standalone
7.29.9, Tailwind 3.4.17) and the same URLs are precached in `sw.js`, which is
what makes the app open with no signal. Change both files together.

**Service worker caches the shell.** When `app.js` changes, bump the cache
version string in `sw.js` from `dadagain-v1` to `v2` and so on, or his phone
serves a stale copy and he will think the change did not land.

**Must be served over http or https.** `file://` breaks both Babel's ability
to fetch `app.js` and service worker registration. He cannot double-click the
HTML file.

## The bug that keeps coming back

An earlier version loaded all app state inside a `useEffect`. It failed
silently and he was permanently stuck on a blank onboarding screen with no
error and no way forward.

State now loads **synchronously** inside the `useState` initializer at the top
of `DadAgain()`. There is no loading screen and no window where the app can
render nothing.

**Never move app-critical state loading into `useEffect`.** `useEffect` is for
side effects only: removing the boot splash, scrolling to top on navigation.
If you find yourself adding a `loading` state, stop and reconsider.

---

## Design system

Hold these exactly. The look is settled and he has already rejected two
generic versions.

### Color

| Token | Hex | Use |
|---|---|---|
| Background | `#0d0c0a` | Page |
| Surface | `#14130f` | Cards, nav |
| Hairline | `#1c1a17` | List dividers |
| Border | `#2a2622` | Card borders |
| Border hover | `#3a3530` | Inputs, outline buttons |
| Text | `#f5f2ed` | Primary |
| Secondary | `#d4cec3` | Body copy |
| Muted | `#a8a39a` | Supporting |
| Dim | `#8b8579` | Labels |
| Faint | `#5a5650` | Micro-labels, disabled |
| Accent | `#d97757` | Terracotta. Primary action, active nav, emphasis. |
| Accent active | `#b85a3d` | Pressed state |
| Green | `#7ba378` | Completed checkmarks only |
| Danger | `#dc4444` | Emergency text, 911 button |
| Danger surface | gradient `#1f0f0a` to `#2a1410`, border `#5a2418` | Quick Help, danger sections |

### Type

- **Fraunces** serif for display. Light weight. Italic on the emphasis word in
  a headline. This carries the whole premium feel, do not swap it out.
- **Inter Tight** for body and UI.
- **IBM Plex Mono** for micro-labels only. Always 10px, uppercase, `0.3em`
  tracking. Never use it for body copy.
- All numbers get `tabular-nums`.

### Layout rules

- Section markers are `01`, `02`, `03` in mono, not bullets or boxes.
- Lists use full-bleed hairline dividers, not boxed cards.
- Every fixed or sticky element respects `env(safe-area-inset-*)`. Bottom nav
  and modals must clear the home indicator, headers must clear the notch.
- Atmospheric depth comes from large blurred radial glows behind content, not
  from flat colored panels.
- Grain overlay at 4% opacity, `mix-blend-screen`, fixed and pointer-events-none.

---

## Voice

This matters more than the code. Wrong voice is a bigger failure than a bug.

Dad to dad. Blunt, short, no hedging. Never chirpy, never condescending, never
marketing.

**Hard rules, no exceptions:**
- Never use em dashes.
- Never use exclamation points.

**Word choices:**
- "The kid" or the kid's actual name. Never "your little one," never "baby's
  journey," never "mama."
- "She" for the mother in postpartum content, addressed as a partner he is
  backing up, not a patient he is managing.

**Structure:**
- When something is normal, say it is normal and stop. Do not pad reassurance.
- When it is an emergency, say call the doctor and stop. Do not soften.
- Medical content stays conservative. Anything ambiguous routes to a doctor.

Good: "Cluster feeding is normal. It is not a sign the milk is running out."
Bad: "Don't worry, mama's milk supply is probably just fine!"

---

## Decided, do not relitigate

- **PWA, not native.** No App Store for now. Capacitor is the upgrade path if
  other people start using it, and it wraps this codebase rather than
  replacing it.
- **Notifications do not fire.** iOS does not reliably deliver scheduled
  notifications to a home-screen web app. The toggles save preference only and
  the Settings screen states this plainly. Do not attempt to make them work.
  If daily notifications become the deciding feature, that is the trigger for
  Capacitor, not for a workaround.
- **Weeks 1 to 12 only.** Siblings content and pregnancy content are later
  phases, not scope creep for this one.

---

## Files

```
index.html   Shell. Fonts, iOS meta tags, safe-area CSS, boot splash.
app.js       Everything. Icons, storage, all six screens, all content data.
manifest.json  Standalone display, portrait, #0d0c0a theme.
sw.js        Cache-first shell caching.
icon-*.png   180 (apple-touch), 192, 512, maskable 512, favicon.
```

## Screens

1. **Onboarding.** Screen 0 is the emotional hook plus an "I need help right
   now" button that skips setup entirely and jumps to Quick Help. That escape
   hatch is the most important thing on the screen. Screens 1 and 2 collect
   birthdate plus optional name, then notification prefs.
2. **Home.** Streak, date, age in days, week N of 12, Today card with three
   age-keyed tips, Quick Help button, weekly checklist with progress, two
   tiles to Guides and Milestones.
3. **Quick Help.** Six cards: won't stop crying, weird poop, won't sleep, not
   eating, something looks wrong, she seems off. Ordered sections, danger
   sections in the red treatment. Plus 911 criteria with a live `tel:` link.
4. **Guides.** Nine reference manuals.
5. **Milestones.** Weeks 1 to 12, marked past / now / coming.
6. **Settings.** Name, birthdate, notification toggles, streak and points,
   destructive reset behind a confirm sheet.

Plus a weekly celebration modal that fires once when the kid crosses into a
new week.

## Age math

`dayOf` returns elapsed days, so a kid born today is 0. Display handles three
cases: 0 renders "arrived today", 1 renders "1 day old", N renders "N days
old". `weekOf` is `floor(elapsedDays / 7) + 1`, clamped to 1 through 12.

Both anchor the birthdate at `T12:00:00` to avoid timezone drift flipping the
day count.

## Before you ship a change

1. Compile check: the JSX must transform cleanly with Babel's react preset.
2. Render check: onboarding, day 0, day 1, day 10, week 12.
3. Bump the `sw.js` cache version if `app.js` or `index.html` changed.
