# Rubrics

**Design:** score per set and theme. Type hierarchy, spacing and alignment, consistent radius and icons, quiet chrome, colour and contrast, readable charts and tables, empty and error states, narrow layouts, plain copy.

**Code:** "no defects" or findings with file:line, failure scenario, fix. Correctness, regressions (accessibility, behaviour, theming), shared code that breaks other callers, dead or unnecessary code, claims the diff does not support, breaches of repo rules. No heavy jobs for the auditor.

**Backend:** everything in Code, plus queries in loops, sequential independent calls, work the database should do, missing indexes, transactions and idempotency, retries and scheduled jobs, migrations and rollback, limits, risk to production data, speed claims without measurements.

**Plan:** score and blocking gaps. Clear goal and finish line, ordered steps, rollback, data safety, blast radius, how each step is verified, named unknowns.

**Writing:** score. Claims backed by evidence, plain and short, correct terms, easy to scan.
