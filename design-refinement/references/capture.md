# Capture

Use the T3 browser by default. It runs with the user's profile, so sign-in is already done.

1. `preview_open` the page in one tab and reuse that tab.
2. Theme: `preview_set_appearance` only sets `prefers-color-scheme`. If the app stores its own theme (for example `localStorage.theme`), set that with `preview_evaluate` and reload.
3. Width: `preview_resize` with a preset (`ipad-air`, `iphone-12-pro`) or a freeform width. Confirm with `innerWidth` in `preview_evaluate`.
4. Hide dev overlays and toasts once per load: inject a style with `preview_evaluate` (for example `nextjs-portal, [data-sonner-toaster] { display: none !important }`).
5. `preview_snapshot` with `save: true` captures the viewport only; a `locator` does not crop. To shoot one card, scroll it to the top with `preview_evaluate` (`el.scrollIntoView({block: "start"})`), then snapshot. Each snapshot also returns about 10 KB of accessibility tree, so keep the set small or use the batch script for large sets.
6. For drawers, dialogs, menus and tooltips: `preview_click` or `preview_hover`, snapshot, `preview_press` Escape.
7. `preview_snapshot` saves to a generated path (`screenshotPath`). Copy each file to the scratch `shots/` folder as `<prefix>-<theme>-<surface>.png` so auditors can open it by name.

Use the T3 browser also to inspect: read computed styles and sizes with `preview_evaluate` when a shot alone does not explain a problem.

## Batch script (optional)

For many surfaces over many rounds, `scripts/shot.mjs` (Playwright) captures every element with a block attribute in one command. It needs a saved sign-in state (`state.json`). See the variables at the top of the script.

## Pitfalls

- Look at every shot before an auditor does. Spinners, toasts and dev overlays waste a round.
- Sticky headers can cover the top of a card shot. Auditors report it as a page bug.
- Dev servers can keep stale CSS after token or font changes. Restart with a clean cache.
- Use test data. Production data is read-only.
