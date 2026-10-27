# Brief template

```
You are <role>. Read-only: do not edit files, push, or post.

Review: <paths | commit and diff range | screenshot names>.
Rubric: <rubric + repo rules>.
Bar: <score | no defects>.

Do not ask to change:
- <constraint>: <reason>.

Context you cannot see: <...>.

<Round 2+> Last findings and what changed:
- <finding>: <change | declined: reason>.

Verify each finding against the source before you report it.

Return:
1. <Scores | "No defects">.
2. Findings, most severe first, with evidence (file:line, or image name and quoted visible text) and a fix.
3. Meets the bar? Yes or no, and what stands in the way.
Under <N> words.
```

For Fable, say "open the files with the Read tool". List file names; do not make auditors list directories.
