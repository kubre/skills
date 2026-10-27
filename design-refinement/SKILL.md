---
name: design-refinement
description: Refine an existing UI so it looks calm, clean, and easy on the eyes — type hierarchy, radius, icons, colour, charts, tables, states, dark mode, small screens. Use when asked to polish a screen, make it look better, or fix complaints about fonts, radius, icons, or hierarchy.
---

# Design refinement

Refine what exists. Do not redesign the product. Work from screenshots of the real app, critique them yourself, fix in batches, and grade with the `council` skill.

## Rules

- Keep the brand: font, colours, and voice stay. Tune within them.
- Keep user settings and product behaviour. Do not remove a feature to make a screenshot look better.
- Shared components affect other screens: change them in a backward-compatible way, or leave them out and say so.
- For charts, read the `dataviz` skill first.

## Loop

1. **Notes:** goal, finish line (for example "council ≥ 9 on every set, light and dark"), a list of surfaces, and a score log.
2. **Surfaces:** the main screen, then drawers, dialogs, tooltips, menus, edit modes, empty and error states, tablet and phone widths.
3. **Capture:** light and dark, one prefix per round (`before-`, `r1-`, …). Use the T3 browser; see `references/capture.md`.
4. **Self-critique:** open every shot and go through `references/craft.md`. Write the top problems before anyone else sees the shots.
5. **Fix** 5–10 problems per round, worst first. Reshoot. Check the other theme and widths for regressions.
6. **Grade** with `council` (design rubric). Tell auditors what the shots cannot show, such as hover-only controls, user settings, and data size.
7. **Repeat** until the finish line, then grade the final version once more.

## Ship

One PR with before/after images, changes in plain words by area, changes outside the screen, and what is not included. Then a code review with `council`.
