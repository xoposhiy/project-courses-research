# Generalized Practices That Address the Ideas in `ideas.md`

This file groups the practices listed in `practices_by_idea.md` into generalized practices. Similar practices from different courses are merged into one generalized practice with a description that covers all variants. The list is sorted by the number of processed courses that use the practice (12 courses processed as of 2026-09-19). Ties are ordered by how directly the practice addresses the ideas.

Course short names are the ones used in `practices_by_idea.md`. Practice numbers refer to the course files in `courses/`.

## Summary table

| # | Generalized practice | Courses | Ideas addressed |
|---|---|---|---|
| 1 | The student is the author and answers for the result; AI assists | 7 | 1, 5 |
| 2 | Specification or design document before code generation | 5 | 2, 4.3, 4.4 |
| 3 | Personal writing stays AI-free | 5 | 1, 5 |
| 4 | The student reviews and tests every generated output | 5 | 1, 5, 4.2 |
| 5 | Oral check of understanding | 4 | 5, 1 |
| 6 | The student controls the context the AI sees | 4 | 2, 3.2 |
| 7 | The steering of the AI is graded, not only the result | 4 | 2, 1 |
| 8 | Calibration by side-by-side comparison | 4 | 3, 4 |
| 9 | The student curates and justifies what the LLM produced or ranked | 4 | 1, 4.2 |
| 10 | Architecture and module boundaries stay under human control | 4 | 4.4 |
| 11 | Deliberate limits on agent autonomy | 3 | 1, 4 |
| 12 | Small steps: one unit per prompt, test before continuing | 3 | 4, 5 |
| 13 | LLM as critic, not only as generator | 3 | 3.3 |
| 14 | Real-world evidence required; LLM output does not count | 2 | 4.5 |
| 15 | Full-delegation exercises that expose prompt quality | 2 | 2 |
| 16 | AI unlocked only after base skills are built | 1 | 1 |
| 17 | Delegate high-volume inspection to the agent | 1 | 3.4 |
| 18 | LLM-as-judge with a human spot check for fuzzy tasks | 1 | 4.1 |
| 19 | Self-reported understanding measured per workflow | 1 | 5 |

## Generalized practices

### 1. The student is the author and answers for the result; AI assists

**Courses: 7** (MIT, Stanford, NUS, Harvard, CMU 15-113, CMU 17-214, CMU 17-445).

The course states, as a policy or as a graded rubric row, that AI may help but the student remains the author of the submitted work and is responsible for its correctness. The rule separates two uses of AI: assisting the student's own work (allowed) and producing the work from a description with the student as observer (not allowed or graded down). The policy usually warns that AI output looks right but is often wrong.

Variants:
- Graded rubric row: personal judgment over AI output is rewarded, unmodified LLM output is a listed failure (MIT 8).
- Policy with acceptable and unacceptable examples: autocomplete and comparison are acceptable, "give the problem description, take the code, claim it as your own" is not (NUS 3).
- Responsibility clause: the student alone answers for correctness, no matter which tool produced the code (CMU 17-214 14, CMU 17-445 4, Stanford 29 "no blaming of the AI").
- Policy plus stated stance: "this is not the vibe coding class"; the job is to manage agents and keep the skills AI does not replace (Stanford 8).
- Explain and modify rule: the student must explain AI code in their own words and must test and modify it, not copy it unchanged (CMU 15-113 4).
- "Amplifying, not supplanting": the essence of the work must be the student's own (Harvard 4).

Ideas addressed: 1 (agency), 5 (the student must be able to explain the result).

### 2. Specification or design document before code generation

**Courses: 5** (CMU 15-113, Stanford, MIT, UMD, CMU 17-316).

Before any code is generated, a written specification or design document exists and is the input to the AI. The document names behavior, data formats, error cases, acceptance criteria, files that may change, and what is out of scope. The specification stays a live artifact: it must match the code at submission, and deviations must be recorded.

Variants by author of the specification:
- Written by the student without AI, as the main learning goal of the exercise (CMU 15-113 15; Stanford 14, where the student acts as product manager and the design template lists the only files the change may touch and the likely future extensions).
- Written per module and graded for consistency with the code; outdated or vague specs lower the grade even if the code works (MIT 22, 23).
- Written by the agent on the student's request, as a no-code design document; deviations during implementation must be documented (UMD 9).
- Written by the LLM to a fixed checklist, with the student responsible for finding inconsistencies between sections; includes full-state UI mockups before frontend code and an English test specification before test code (CMU 17-316 17, 18, 22).

Ideas addressed: 2 (context engineering, structured work). Also 4.3 (future extensions in the spec, Stanford) and 4.4 (file and module boundaries, Stanford and MIT).

### 3. Personal writing stays AI-free

**Courses: 5** (CMU 17-316, CMU 15-113, CMU 17-445, UCSD, UW).

The course allows AI for code but bans it for one class of deliverables: reflections, AI-use statements, peer reviews, requirements and design documents. This keeps at least one artifact per project that is unmistakably the student's own thinking, and it keeps the student's account of their own AI use honest.

Variants:
- Reflection essays on the student's experience with AI tools, defended in class (CMU 17-316 5).
- Process reflection after each large project (CMU 15-113 8).
- The AI-disclosure statement itself must be human-written; rough honest notes preferred (CMU 17-445 7).
- All human-to-human text: reviews, forum posts, reflections; the stated reason is respect for the reader (UCSD 6).
- Everything except code, code review, and AI product features: requirements, design, status reports, reflections (UW 21).

Ideas addressed: 1 (agency), 5 (honest self-assessment); UW's variant also 4.4 (design stays human).

### 4. The student reviews and tests every generated output

**Courses: 5** (Stanford, UMD, CMU 15-113, MIT, CMU 17-316).

Generated code, design, or specification is not accepted until the student has read it and checked it against an explicit standard. The review is guided by a checklist or a rule, and the depth of the review is graded.

Variants:
- Line-by-line manual review of every agent change on a branch, fixes explained in commit messages, review depth graded (Stanford 26).
- Fixed review questions after the agent delivers a design and code: do you understand it, where would it do the wrong thing, what is too terse, what is unneeded complexity (UMD 10).
- Policy rule: test and modify what the AI produces, explain it in your own words (CMU 15-113 4).
- Each implementation step is a hypothesis about your understanding, tested before continuing (MIT 19).
- Named LLM failure mode to find and fix before submission: sections of a generated spec that contradict each other (CMU 17-316 17).

Ideas addressed: 1 (agency), 5 (understanding is tested), 4.2 (unneeded complexity and misplaced emphasis, UMD).

### 5. Oral check of understanding

**Courses: 4** (CMU 15-113, CMU 17-445, UCSD, CMU 17-214).

The student must explain the submitted work in person to a staff member, and part of the grade depends on that conversation. The check applies regardless of how the work was produced, so copying or AI generation is tolerated as long as the student can explain the result.

Variants:
- Standing right to ask any student to explain any submission at any time, stated inside the AI policy; plus an in-person oral exam on the capstone (CMU 15-113 5, 13).
- Fixed share of points on every individual assignment earned only in an office-hours defense; lab credit only by demonstrating and explaining to a TA, even if the solution was copied; team debrief where each member must convince the mentor they understand the solution and considered alternatives; bonus checked by asking members to explain teammates' parts (CMU 17-445 8, 13, 14, 19, 20).
- Grade "pending" until a check-in interview covers the code, the design decisions, and what was AI-generated versus the student's own (UCSD 17).
- Labs allow copying, but each student presents and explains the solution alone (CMU 17-214 20).

Ideas addressed: 5 (illusion of competence), 1 (the student must own the reasoning).

### 6. The student controls the context the AI sees

**Courses: 4** (MIT, UMD, Stanford, CMU 15-113).

The student decides, explicitly, which files, documents, and rules the AI works from, instead of letting the tool pull in the whole codebase or the assignment text. The context is a maintained artifact: guidance documents are edited when the AI repeats a mistake, edit scope is limited up front, and the assembled context is inspectable afterward.

Variants:
- A staff-built tool that forces explicit context selection and records every call with its full context; guidance documents added when the LLM repeats an error; independent modules so one module's spec is enough context (MIT 9, 13, 20, 22).
- Tell the agent up front which subdirectory it may edit in a large unfamiliar codebase (UMD 11).
- Repository guidance files written for agents, iterated like a prompt; codebase documented so a human and an agent can follow it (Stanford 15).
- Do not paste the assignment brief into the AI, so the student writes their own requirements (CMU 15-113 10).

Ideas addressed: 2 (context engineering), 3.2 (domain context given to the LLM).

### 7. The steering of the AI is graded, not only the result

**Courses: 4** (MIT, Stanford, CMU 15-113, CMU 17-316).

The record of how the student directed the AI is a graded deliverable with its own rubric criteria, separate from the quality of the final code. Plain disclosure logs are not counted here; only cases where the log content is assessed.

Variants:
- Snapshots in an immutable record must show small, reflective, incremental steps (MIT 14).
- Each prompt earns the same points as the code it produced (Stanford 10).
- Every intervention during a hands-off agent build is logged and becomes evidence of specification quality (CMU 15-113 16).
- Grade depends on how well the student prevented the LLM from hallucinating or duplicating tests (CMU 17-316 22).

Ideas addressed: 2 (prompting and context as a skill), 1 (the student's role is visible).

### 8. Calibration by side-by-side comparison

**Courses: 4** (CMU 17-316, Stanford, CMU 15-113, MIT).

The student produces their own version of a task, then the LLM's version, and writes a verdict on which was better and why. Or the student records, per task, where the AI helped and where it failed. The written comparison is the deliverable, so students build their own map of LLM strengths and weaknesses from their own cases.

Variants:
- Human-first, then LLM, then verdict: value proposition and interview summaries, with the human version written and set aside before prompting (CMU 17-316 12, 14).
- Reflection essays that must give concrete "it did x but I expected y in context z" examples (CMU 17-316 5, 11).
- Own code review compared with an AI review per pull request, with cited cases and written trust heuristics (Stanford 28); log of manual fixes needed after app generation (Stanford 31).
- Short presentation on how AI helped and where it did not (CMU 15-113 12).
- Curated "interesting moments" including unexpectedly good or bad LLM output and edits to guidance documents that stopped a repeated error (MIT 15).

Ideas addressed: 3 and 4 together (learning strengths and weaknesses from evidence), 3.3 (AI review compared with own review).

### 9. The student curates and justifies what the LLM produced or ranked

**Courses: 4** (UCSD, CMU 17-316, CMU 17-445, UMD).

When the LLM generates or prioritizes a set of items, the student must select a small subset or state, per item, whether and why they agree. Full reliance on the LLM's list is named a failure. Decisions made with the AI are disclosed per decision, not as one yes/no.

Variants:
- Per design decision: how much the student made it versus the coding tool (UCSD 5).
- LLM writes, ranks, and schedules user stories; the student writes why they agree with each keep or drop (CMU 17-316 15).
- The student builds an LLM tool to scale a method, then must curate a small number of the most important results (CMU 17-445 11).
- Review question on unneeded complexity the model added (UMD 10).

Ideas addressed: 1 (agency in decisions), 4.2 (what matters is decided by the student).

### 10. Architecture and module boundaries stay under human control

**Courses: 4** (MIT, CMU 17-316, UW, Stanford).

The course treats architecture as a place where LLM output is unreliable and adds a rule that keeps structural decisions with the student or bounds what the AI may change.

Variants:
- Recommendation against coding agents on the modular backend because they violate module boundaries; architecture with fully independent modules so LLM work on one module cannot touch another (MIT 10, 22).
- Two independently generated architectures must be merged into one before backend design; generated architecture sections must be checked for internal contradictions (CMU 17-316 20, 17).
- Architecture and design document written without AI (UW 21).
- The design template lists the only files a change may touch (Stanford 14).

Ideas addressed: 4.4 (architecture).

### 11. Deliberate limits on agent autonomy

**Courses: 3** (UMD, MIT, Stanford).

The course, or the student, sets the level of autonomy the AI gets and justifies it. Autonomy is treated as a choice with backstops, not a default.

Variants:
- Staff-written coach-mode instruction file: the assistant asks and guides, and writes no complete function until the student has described the logic step by step (UMD 8).
- A controlled tool with explicit context for the backend, a coding agent only for the frontend, in separate repositories so the agent cannot damage the backend (MIT 9).
- Per task: which permissions the agent got, why, and how the run was supervised; tests, linter, and formatter as backstops; label every agent diff; commit often as checkpoints (Stanford 20, 22).

Ideas addressed: 1 (agency), 4 (control of weaknesses).

### 12. Small steps: one unit per prompt, test before continuing

**Courses: 3** (MIT, CMU 17-316, Stanford).

The LLM is asked for one small unit at a time, and each unit is tested before the next prompt. The rule compensates for the LLM's tendency to produce large volumes of code and for wrong output when asked for everything at once.

Variants:
- One operation of one module, tested, then the next; "baby steps" per frontend component (MIT 19).
- One unit test per prompt, stated as a lesson from staff experience (CMU 17-316 23).
- Commit often as checkpoints between agent runs (Stanford 22).

Ideas addressed: 4 (volume and one-shot errors), 5 (each step tests the student's understanding, MIT).

### 13. LLM as critic, not only as generator

**Courses: 3** (MIT, CMU 15-113, Stanford).

The student uses the LLM to review work against an explicit standard, and the review is set up to be independent of the generation.

Variants:
- Rubric and guidance documents given as context, then a critique of the student's own specification or design; the course states the LLM cannot generate specs in its method reliably but can review them (MIT 21).
- A fresh agent session with no memory of the build reviews the code against the specification (CMU 15-113 17).
- An AI code review tool run on each pull request, then compared with the student's own review (Stanford 28).

Ideas addressed: 3.3 (finding problems and contradictions), 3.1 (compare alternatives, build a refutation, MIT essay).

### 14. Real-world evidence required; LLM output does not count

**Courses: 2** (MIT, CMU 17-316).

When the project idea or demand is validated, the course requires evidence from real people or real sources and explicitly rejects LLM output as evidence.

Variants:
- Cited evidence of authentic demand; "LLM output per se does not constitute evidence"; the LLM must not motivate the selection (MIT 4, 8).
- At least four interviews with real people; "Interviews with LLMs will not be accepted" (CMU 17-316 13).

Ideas addressed: 4.5 (choosing the project idea).

### 15. Full-delegation exercises that expose prompt quality

**Courses: 2** (CMU 17-316, CMU 15-113).

For a bounded exercise the student may not edit generated output by hand; every change must go through the AI. This makes the quality of the student's prompts and specification the only lever and makes weak prompting visible.

Variants:
- Whole team project: generated code and diagrams may be changed only by re-prompting, using formalized prompts (CMU 17-316 6).
- One assignment: hands-off build from a student-written spec, every intervention logged (CMU 15-113 16).

Ideas addressed: 2 (context engineering). Note: the CMU 15-113 survey reports students stopped reading their code under this workflow, so the practice trades against idea 1.

### 16. AI unlocked only after base skills are built

**Courses: 1** (Harvard).

General-purpose AI tools are banned during the skill-building part of the course and allowed only for the final project, with the rule that the tools amplify skills the student already has (Harvard 4).

Ideas addressed: 1 (agency).

### 17. Delegate high-volume inspection to the agent

**Courses: 1** (UMD).

Students ask the agent to analyze many data files and summarize, instead of reading them by hand; the student keeps the question and the decision (UMD 15).

Ideas addressed: 3.4 (tool use and data analysis as an LLM strength).

### 18. LLM-as-judge with a human spot check for fuzzy tasks

**Courses: 1** (UCSD).

When a task has no single correct answer, another LLM call may score it, but the student must check the judge's verdicts by hand on several examples first (UCSD 15). Applied to the student's product, not to their own workflow.

Ideas addressed: 4.1 (fuzzy correctness boundary).

### 19. Self-reported understanding measured per workflow

**Courses: 1** (CMU 15-113).

A survey after each assignment asks how much of the code the student read and understood, and the results are published per assignment, which shows which workflows lowered understanding (CMU 15-113 18).

Ideas addressed: 5 (illusion of competence made measurable).

## Coverage of the ideas

- **Idea 1 (agency)** and **idea 5 (illusion of competence)** are covered most: practices 1, 3, 4, 5, 9, 11, 16, 19.
- **Idea 2 (context engineering)** is covered by practices 2, 6, 7, 15.
- **Idea 3 (strengths)** is thin. 3.3 (LLM as critic) has three courses. 3.1 (widening the idea space) appears only as advice in MIT. 3.2 is a side effect of context practices. 3.4 has one practice (UMD).
- **Idea 4 (weaknesses)**: 4.4 (architecture) has four courses; 4.2 (priorities) three; 4.5 (choosing the idea) two; 4.3 (long horizon) appears only as one item in Stanford's spec template; 4.1 (fuzzy correctness) has one product-level practice. No course trains students to handle fuzzy-correctness or long-horizon tasks in their own AI-assisted development work.
- **Courses with no matching practices**: Cornell CS 5150. NUS and Harvard contribute only a policy statement each.
