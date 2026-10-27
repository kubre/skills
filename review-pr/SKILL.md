---
name: review-pr
description: Review a pull request for blocking and non-blocking findings. Use when asked to review a PR or give a second opinion on one.
---

Review the PR against its base branch. Read the whole diff and the relevant surrounding code. Report all blocking and non-blocking findings by default; `--all` means the same. Mark non-blocking findings with `nit:`. Follow any narrower scope the user requests.

Check correctness, boundary and error cases, races, data loss, performance on paths that handle volume, unnecessary work, scope, abstractions, duplication, and readability. Apply the user's global rules for performance, type safety, repository patterns, professional naming, comments, and tests as review criteria.

Verify each finding against the current PR head and file revision before you report it. State what is wrong, why it matters, and a concrete correction or a way to reproduce it. Drop findings you cannot support and style preferences without a stated rule or practical effect.

A review is read-only except for the GitHub review itself. Post the findings to GitHub as a PR review by default; do not ask first. Return findings only in chat when the user says not to post. Before you post, confirm the PR head is still the reviewed revision; if it moved, recheck the findings on the new head. When you post, add one inline comment per finding on the exact line. Group repeated instances of one defect in one comment and list the other locations. Use plain English without greetings, praise, or a summary that repeats the comments.

When you submit a GitHub review, request changes if any blocking finding remains. Approve if only non-blocking findings remain or there are none. Do not treat checks you could not run as passed. If GitHub blocks the approval, report that limit.

Report findings, with comment links when posted, and identify unverified checks. Monitor the PR only when the user asks. In T3, call `watch_pull_request` and end the turn; do not poll. On new commits, review the changes since the last reviewed head and recheck affected findings. Stop watching when monitoring is complete or the PR is merged or closed.
