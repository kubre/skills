---
name: council
description: Grade any work with two independent auditors (Sol and Fable), verify their findings, and report one verdict. Use for reviews, audits, second opinions, or score loops ("until it scores N/10") on design, code, plans, or writing.
---

# Council

Two auditors review the same brief on their own. You check every finding against the evidence and report one verdict. You do not grade your own work.

## Auditors

- **Sol:** `gpt-6.1-sol`, medium reasoning, through `delegate_task` with `runtimeMode: "auto"`. Find the provider instance that serves it with `orchestrator_capabilities`. A new task every round.
- **Fable:** the Agent tool with `model: "fable"`, in the background.

Start both in one message. Both run on the first and last rounds. In long loops, Fable can run every second round.

## Brief

One brief per round, the same for both auditors (template: `references/brief.md`):
- What to review: exact files, commit, diff range, or screenshot names. Everything must be readable by the auditor.
- Rubric (`references/rubrics.md`) plus the repo's own rules from CLAUDE.md or AGENTS.md.
- The bar: a score, or "no defects".
- Fixed constraints the auditors must not challenge, each with a reason.
- From round 2: earlier findings, what changed, and what you declined and why.
- Return shape: scores, findings with evidence, yes or no against the bar, a word limit.

Keep it neutral. Do not give your conclusion or ask them to confirm a theory.

## Verify

Auditors make confident mistakes. For each finding, open the evidence and mark it **confirmed**, **partly**, **false**, or **artefact** (caused by the test or capture setup). Act only on confirmed findings. Decline one only with a reason, and carry that reason into the next brief.

## Report

A table of auditor, scores, and pass or fail. Then the confirmed findings, merged, with who raised them; declined findings with reasons; false findings per auditor. Keep a score log in the task notes.

## Loop

Fix, re-check, run a new round with the history. Stop when each required auditor passes the bar on the current version, or when the round budget is spent.

**Round budget:** 3 rounds by default; 5 for security, data safety, auth, payments, or migrations. The user can set another number. Count every auditor round, including the one after a late wording fix.

When the budget is spent and the bar is not met, stop. Report the scores, the open confirmed findings, and what each would cost to fix. Do not start another round without the user's approval.
