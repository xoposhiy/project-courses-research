# Generalized Practices

Similar practices from different courses are merged into one generalized practice with a description that covers all variants. 
The list is sorted by the number of processed courses that use the practice. Ties are ordered by how directly the practice addresses the ideas.

Only the practices that adress these ideas were considered:

| Short name | Idea |
|---|---|
| 1-agency | Loss of student agency, including the illusion of competence |
| 2-context | Context engineering: specifications, documents, explicit context |
| 3-strengths | LLM strengths that students must learn to use |
| 3.1-expand | LLMs are strong in expanding the space of ideas |
| 3.2-domain | LLMs are strong in using domain context |
| 3.3-critic | LLMs are strong in finding problems and contradictions |
| 3.4-rl | LLMs are strong in tasks covered by reinforcement learning: programming, math, tool use, games |
| 4-weaknesses | LLM weaknesses that students must learn to control and compensate |
| 4.1-fuzzy | LLMs are weak in tasks with a fuzzy boundary of correctness |
| 4.2-priorities | LLMs are weak in setting priorities: what matters and what does not |
| 4.3-horizon | LLMs are weak in tasks with a long horizon of effect |
| 4.4-architecture | LLMs are weak in defining application architecture |
| 4.5-project-idea | LLMs are weak in choosing an idea for the project |
| 5-discovery | Nobody knows yet how to use these tools well: students must experiment and form their own opinion |

## Summary table

| # | Generalized practice | Courses | Ideas addressed |
|---|---|---|---|
| 1 | The student is the author and answers for the result; AI assists | 8 | 1-agency |
| 2 | The student does the task by hand before AI is allowed to touch it | 6 | 1-agency |
| 3 | Specification or design document before code generation | 5 | 2-context, 4.3-horizon, 4.4-architecture |
| 4 | Reflections, reviews, and design documents are written without AI | 5 | 1-agency, 4.4-architecture |
| 5 | The student reviews and tests every generated output | 5 | 1-agency, 4.2-priorities |
| 6 | Oral check: the student explains the submitted work to staff | 4 | 1-agency |
| 7 | The student controls the context the AI sees | 4 | 2-context, 3.2-domain |
| 8 | How the student directed the AI is graded, not only the result | 4 | 2-context, 1-agency |
| 9 | Written comparison of the student's own work with the LLM's output | 4 | 5-discovery, 3-strengths, 4-weaknesses, 3.3-critic |
| 10 | Architecture and module boundaries stay under human control | 4 | 4.4-architecture |
| 11 | The student writes and defends an own opinion on how to use AI | 4 | 5-discovery |
| 12 | The student selects from LLM-generated lists and justifies each choice | 3 | 1-agency, 4.2-priorities |
| 13 | Deliberate limits on agent autonomy | 3 | 1-agency, 4-weaknesses |
| 14 | LLM as critic, not only as generator | 3 | 3.3-critic, 3.1-expand |
| 15 | Guided experiments with a new AI workflow, ending in a written report on what was gained, risked, or broken | 3 | 5-discovery, 2-context |
| 16 | Small steps: one unit per prompt, test before continuing | 2 | 4-weaknesses, 1-agency |
| 17 | Project idea validated with real-world evidence; LLM output does not count | 2 | 4.5-project-idea |
| 18 | Exercises where the student may change the code only by re-prompting | 2 | 2-context |
| 19 | Delegate high-volume inspection to the agent | 1 | 3.4-rl |
| 20 | Another LLM scores fuzzy tasks; the student spot-checks the judge by hand | 1 | 4.1-fuzzy |
| 21 | Per-assignment student survey published as a best-practices report | 1 | 5-discovery, 1-agency |

## Generalized practices

### 1. The student is the author and answers for the result; AI assists

**Courses: 8** (MIT, Stanford, NUS, Harvard, CMU 15-113, CMU 17-214, CMU 17-445, UCSD).

The course states, as a policy or as a graded rubric row, that AI may help but the student remains the author of the submitted work and is responsible for its correctness. The rule separates two uses of AI: assisting the student's own work (allowed) and producing the work from a description with the student as observer (not allowed or graded down). The policy usually warns that AI output looks right but is often wrong.

Variants:
- Graded rubric row: personal judgment over AI output is rewarded, unmodified LLM output is a listed failure (MIT 8).
- Policy with acceptable and unacceptable examples: autocomplete and comparison are acceptable, "give the problem description, take the code, claim it as your own" is not (NUS 3).
- Responsibility clause: the student alone answers for correctness, no matter which tool produced the code (CMU 17-214 14, CMU 17-445 4, Stanford 29 "no blaming of the AI").
- Policy plus stated stance: "this is not the vibe coding class"; the job is to manage agents and keep the skills AI does not replace (Stanford 8).
- Explain and modify rule: the student must explain AI code in their own words and must test and modify it, not copy it unchanged (CMU 15-113 4).
- "Amplifying, not supplanting": the essence of the work must be the student's own (Harvard 4).
- Authorship disclosed per design decision: for three decisions the student states how much they made the decision versus the coding tool (UCSD 5).

Ideas addressed: 1-agency (the student must be able to explain the result).

### 2. The student does the task by hand before AI is allowed to touch it

**Courses: 6** (Harvard, UMD, CMU 17-445, CMU 15-113, CMU 17-316, NUS).

The student must first do the work, or the part of the work that carries the learning goal, without AI. Only after that may the AI be used, either on the same task or on the following steps. The scale ranges from a whole course to one step of one assignment. The stated reason is the same in all variants: the AI should amplify a skill the student already has, not replace the moment where the skill is learned.

Variants, from course level to task level:
- Whole course: general-purpose AI tools are banned during ten weeks of problem sets and allowed only for the final project, with the rule that "the essence of the work must still be your own" (Harvard 4).
- Early exercises: a staff-written coach-mode instruction file forbids the assistant to write a complete function until the student has described the logic step by step in plain English (UMD 8).
- One assignment: the student practices a risk-analysis method by hand on a few examples, then builds an LLM tool that automates it, then curates the tool's output (CMU 17-445 11).
- One step: the specification is written without AI before the coding agent sees it, because "the quality of your planning affects the quality of the AI's output" (CMU 15-113 15).
- One step: the student writes their own value proposition and interview summary and sets it aside before asking the LLM for the same (CMU 17-316 12, 14).
- Policy rule: generating an alternative implementation for comparison is acceptable only after the student has written their own version (NUS 3).

Ideas addressed: 1-agency. Several variants are also counted under other practices: the UMD variant under practice 13 (limits on autonomy), the CMU 15-113 variant under practice 3 (specification first), the CMU 17-316 variants under practice 9 (written comparison).

### 3. Specification or design document before code generation

**Courses: 5** (CMU 15-113, Stanford, MIT, UMD, CMU 17-316).

Before any code is generated, a written specification or design document exists and is the input to the AI. The document names behavior, data formats, error cases, acceptance criteria, files that may change, and what is out of scope. The specification stays a live artifact: it must match the code at submission, and deviations must be recorded.

Variants by author of the specification:
- Written by the student without AI, as the main learning goal of the exercise (CMU 15-113 15; Stanford 14, where the student acts as product manager and the design template lists the only files the change may touch and the likely future extensions).
- Written per module and graded for consistency with the code; outdated or vague specs lower the grade even if the code works (MIT 22, 23).
- Written by the agent on the student's request, as a no-code design document; deviations during implementation must be documented (UMD 9).
- Written by the LLM to a fixed checklist, with the student responsible for finding inconsistencies between sections; includes full-state UI mockups before frontend code and an English test specification before test code (CMU 17-316 17, 18, 22).

Ideas addressed: 2-context (structured work). Also 4.3-horizon (future extensions in the spec, Stanford) and 4.4-architecture (file and module boundaries, Stanford and MIT).

### 4. Reflections, reviews, and design documents are written without AI

**Courses: 5** (CMU 17-316, CMU 15-113, CMU 17-445, UCSD, UW).

The course allows AI for code but bans it for the prose deliverables about the work: reflections, AI-use statements, peer reviews, requirements and design documents. This keeps at least one artifact per project that is unmistakably the student's own thinking, and it keeps the student's account of their own AI use honest.

Variants:
- Reflection essays on the student's experience with AI tools, defended in class (CMU 17-316 5).
- Process reflection after each large project (CMU 15-113 8).
- The AI-disclosure statement itself must be human-written; rough honest notes preferred (CMU 17-445 7).
- All human-to-human text: reviews, forum posts, reflections; the stated reason is respect for the reader (UCSD 6).
- Everything except code, code review, and AI product features: requirements, design, status reports, reflections (UW 21).

Ideas addressed: 1-agency (honest self-assessment); UW's variant also 4.4-architecture (design stays human).

### 5. The student reviews and tests every generated output

**Courses: 5** (Stanford, UMD, CMU 15-113, MIT, CMU 17-316).

Generated code, design, or specification is not accepted until the student has read it and checked it against an explicit standard. The review is guided by a checklist or a rule, and the depth of the review is graded.

Variants:
- Line-by-line manual review of every agent change on a branch, fixes explained in commit messages, review depth graded (Stanford 26).
- Fixed review questions after the agent delivers a design and code: do you understand it, where would it do the wrong thing, what is too terse, what is unneeded complexity (UMD 10).
- Policy rule: test and modify what the AI produces, explain it in your own words (CMU 15-113 4).
- Each implementation step is a hypothesis about your understanding, tested before continuing (MIT 19).
- Named LLM failure mode to find and fix before submission: sections of a generated spec that contradict each other (CMU 17-316 17). Proof that generated code works, not that it looks right: a narrated screen recording of the generated frontend at two screen sizes, and a link to a real passing CI run rather than committed workflow files (CMU 17-316 19, 24).
- Each AI-made security fix is reported with the rule, the risk, the change, and why the change removes the risk; findings the student chose to ignore must be justified; the scanner is run again after each fix (Stanford 24, 25).

Ideas addressed: 1-agency (understanding is tested), 4.2-priorities (unneeded complexity and misplaced emphasis, UMD; triage of scanner findings, Stanford).

### 6. Oral check: the student explains the submitted work to staff

**Courses: 4** (CMU 15-113, CMU 17-445, UCSD, CMU 17-214).

The student must explain the submitted work in person to a staff member, and part of the grade depends on that conversation. The check applies regardless of how the work was produced, so copying or AI generation is tolerated as long as the student can explain the result.

Variants:
- Standing right to ask any student to explain any submission at any time, stated inside the AI policy; plus an in-person oral exam on the capstone (CMU 15-113 5, 13).
- Fixed share of points on every individual assignment earned only in an office-hours defense; lab credit only by demonstrating and explaining to a TA, even if the solution was copied; team debrief where each member must convince the mentor they understand the solution and considered alternatives; bonus checked by asking members to explain teammates' parts (CMU 17-445 8, 13, 14, 19, 20).
- Grade "pending" until a check-in interview covers the code, the design decisions, and what was AI-generated versus the student's own (UCSD 17).
- Labs allow copying, but each student presents and explains the solution alone (CMU 17-214 20).

Ideas addressed: 1-agency (illusion of competence; the student must own the reasoning).

### 7. The student controls the context the AI sees

**Courses: 4** (MIT, UMD, Stanford, CMU 15-113).

The student decides, explicitly, which files, documents, and rules the AI works from, instead of letting the tool pull in the whole codebase or the assignment text. The context is a maintained artifact: guidance documents are edited when the AI repeats a mistake, edit scope is limited up front, and the assembled context is inspectable afterward.

Variants:
- A staff-built tool that forces explicit context selection and records every call with its full context; guidance documents added when the LLM repeats an error; independent modules so one module's spec is enough context (MIT 9, 13, 20, 22).
- Tell the agent up front which subdirectory it may edit in a large unfamiliar codebase (UMD 11).
- Repository guidance files written for agents, iterated like a prompt; codebase documented so a human and an agent can follow it (Stanford 15).
- Do not paste the assignment brief into the AI, so the student writes their own requirements (CMU 15-113 10).

Ideas addressed: 2-context, 3.2-domain (domain context given to the LLM).

### 8. How the student directed the AI is graded, not only the result

**Courses: 4** (MIT, Stanford, CMU 15-113, CMU 17-316).

The record of how the student directed the AI is a graded deliverable with its own rubric criteria, separate from the quality of the final code. Plain disclosure logs are not counted here; only cases where the log content is assessed.

Variants:
- A staff tool saves every LLM call with its prompt and context in a record the student cannot edit; the saved record must show small, reflective, incremental steps, and this is graded (MIT 13, 14). The same record is required from students who write code by hand, so the process grade is equal for everyone (MIT 12).
- Each prompt earns the same points as the code it produced (Stanford 10). In the first assignment the code, the model, and the test are fixed and the student may change only the prompt until the test passes (Stanford 12).
- Every intervention during a hands-off agent build is logged and becomes evidence of specification quality (CMU 15-113 16). The README and prompt log must match the submitted code; a generic AI-generated README or a log that does not match the code lowers the grade (CMU 15-113 9).
- Grade depends on how well the student prevented the LLM from hallucinating or duplicating tests (CMU 17-316 22).

Ideas addressed: 2-context (prompting and context as a skill), 1-agency (the student's role is visible).

### 9. Written comparison of the student's own work with the LLM's output

**Courses: 4** (CMU 17-316, Stanford, CMU 15-113, MIT).

The student produces their own version of a task, then the LLM's version, and writes a verdict on which was better and why. Or the student records, per task, where the AI helped and where it failed. The written comparison is the deliverable, so students calibrate their trust in the LLM: they build their own map of LLM strengths and weaknesses from their own cases.

Variants:
- Human-first, then LLM, then verdict: value proposition and interview summaries, with the human version written and set aside before prompting (CMU 17-316 12, 14).
- Reflection essays that must give concrete "it did x but I expected y in context z" examples (CMU 17-316 5, 11).
- Own code review compared with an AI review per pull request, with cited cases and written trust heuristics (Stanford 28); log of manual fixes needed after app generation (Stanford 31).
- Short presentation on how AI helped and where it did not (CMU 15-113 12).
- Curated "interesting moments" including unexpectedly good or bad LLM output and edits to guidance documents that stopped a repeated error (MIT 15).

Ideas addressed: 5-discovery (own map of strengths and weaknesses from own evidence), 3-strengths and 4-weaknesses together, 3.3-critic (AI review compared with own review).

### 10. Architecture and module boundaries stay under human control

**Courses: 4** (MIT, CMU 17-316, UW, Stanford).

The course treats architecture as a place where LLM output is unreliable and adds a rule that keeps structural decisions with the student or bounds what the AI may change.

Variants:
- Recommendation against coding agents on the modular backend because they violate module boundaries; architecture with fully independent modules so LLM work on one module cannot touch another (MIT 10, 22).
- The LLM generated a separate architecture for each of two user stories; the team must merge them into one before backend design. Generated architecture sections must be checked for internal contradictions, for example more classes in the diagram than in the class list (CMU 17-316 20, 17).
- Architecture and design document written without AI (UW 21).
- The design template lists the only files a change may touch (Stanford 14).

Ideas addressed: 4.4-architecture.

### 11. The student writes and defends an own opinion on how to use AI

**Courses: 4** (CMU 17-316, MIT, UMD, CMU 15-113).

The course asks the student, repeatedly, to state what they think about working with AI, grounded in their own experience, and grades the depth and concreteness of that opinion, not whether it agrees with the staff. The student's view is treated as a result of the course, because staff do not claim to know the right way of working.

Variants:
- Six reflection essays during the term, each on a different question from a shared bank, with a concrete-example bar for quality; groups turn the essays into presentations and lead a class discussion in which the author must defend the opinion (CMU 17-316 5, 9, 10, 11).
- Graded final reflection whose prompts include "what role LLMs should have in software development"; rote text is a listed failure (MIT 18).
- Two short written reflections every week, a look-back and a look-forward, graded on thoughtful completion, not correctness; a low score leads to a conversation with staff (UMD 6, 7).
- Short in-person presentation on how AI helped and where it did not (CMU 15-113 12).

Ideas addressed: 5-discovery. The CMU 17-316 essays are also counted under practice 4 (written without AI) and practice 9 (concrete-example bar).

### 12. The student selects from LLM-generated lists and justifies each choice

**Courses: 3** (CMU 17-316, CMU 17-445, UMD).

When the LLM generates or prioritizes a set of items, the student must select a small subset or state, per item, whether and why they agree. Full reliance on the LLM's list is named a failure.

Variants:
- LLM writes, ranks, and schedules user stories; the student writes why they agree with each keep or drop (CMU 17-316 15).
- The student builds an LLM tool to scale a method, then must curate a small number of the most important results (CMU 17-445 11).
- Review question on unneeded complexity the model added (UMD 10).

Ideas addressed: 1-agency (agency in decisions), 4.2-priorities (what matters is decided by the student).

### 13. Deliberate limits on agent autonomy

**Courses: 3** (UMD, MIT, Stanford).

The course, or the student, sets the level of autonomy the AI gets and justifies it. Autonomy is treated as a choice with backstops, not a default.

Variants:
- Staff-written coach-mode instruction file: the assistant asks and guides, and writes no complete function until the student has described the logic step by step (UMD 8).
- A controlled tool with explicit context for the backend, a coding agent only for the frontend, in separate repositories so the agent cannot damage the backend (MIT 9).
- Per task: which permissions the agent got, why, and how the run was supervised; tests, linter, and formatter as backstops; label every agent diff; commit often as checkpoints (Stanford 20, 22).

Ideas addressed: 1-agency, 4-weaknesses (control of weaknesses in general).

### 14. LLM as critic, not only as generator

**Courses: 3** (MIT, CMU 15-113, Stanford).

The student uses the LLM to review work against an explicit standard, and the review is set up to be independent of the generation.

Variants:
- Rubric and guidance documents given as context, then a critique of the student's own specification or design; the course states the LLM cannot reliably generate specifications in the course's design method, but can review them. The instructor's essay lists further critic modes: compare alternatives, build a refutation (MIT 21).
- A fresh agent session with no memory of the build reviews the code against the specification (CMU 15-113 17).
- An AI code review tool run on each pull request, then compared with the student's own review (Stanford 28).

Ideas addressed: 3.3-critic, 3.1-expand (compare alternatives and build a refutation, MIT).

### 15. Guided experiments with a new AI workflow, ending in a written report on what was gained, risked, or broken

**Courses: 3** (Stanford, CMU 17-316, UMD).

The course sets up an experiment with a way of working that staff do not fully understand either, and the deliverable is a report on the outcome in concrete terms: which manual steps disappeared, what broke, where the output drifted. The course structure itself is built as an exploration path.

Variants:
- The weekly assignments raise agent autonomy step by step: prompts only, then an AI editor, then an agent on small tasks, then automations, then several agents at once, then a full app generator (Stanford 3).
- Several agents run at once on independent tasks; the report must state what concurrency "gained, risked or broke" (Stanford 21).
- For each automation the student describes the manual workflow before and the automated workflow after, naming the concrete steps saved (Stanford 18).
- The same application built in three stacks, one from an AI app generator, with a log of the manual fixes each version needed (Stanford 30, 31).
- A README generated from the codebase, later kept in sync with the live API description; the stated goal is to learn what AI can produce from code context and where it drifts (Stanford 16).
- Weekly pair and mob programming sessions rehearse the week's tool before the team uses it on the project; in a mob session the class dictates instructions to one student at the AI tool (CMU 17-316 8).
- Students sign up for several competing AI tools and choose between them, instead of the class standardizing on one (UMD 4).

Ideas addressed: 5-discovery, 2-context (mob sessions train turning a request into an instruction for the LLM). Stanford 31 is also counted under practice 9.

### 16. Small steps: one unit per prompt, test before continuing

**Courses: 2** (MIT, CMU 17-316).

The LLM is asked for one small unit at a time, and each unit is tested before the next prompt. The rule compensates for the LLM's tendency to produce large volumes of code and for wrong output when asked for everything at once.

Variants:
- One operation of one module, tested, then the next; "baby steps" per frontend component (MIT 19).
- One unit test per prompt, stated as a lesson from staff experience (CMU 17-316 23).

Ideas addressed: 4-weaknesses (volume and one-shot errors), 1-agency (each step tests the student's understanding, MIT).

### 17. Project idea validated with real-world evidence; LLM output does not count

**Courses: 2** (MIT, CMU 17-316).

When the project idea or demand is validated, the course requires evidence from real people or real sources and explicitly rejects LLM output as evidence.

Variants:
- Cited evidence of authentic demand; "LLM output per se does not constitute evidence"; the LLM must not motivate the selection (MIT 4, 8).
- At least four interviews with real people; "Interviews with LLMs will not be accepted" (CMU 17-316 13).

Ideas addressed: 4.5-project-idea.

### 18. Exercises where the student may change the code only by re-prompting

**Courses: 2** (CMU 17-316, CMU 15-113).

For a bounded exercise the student may not edit generated output by hand; every change must go through the AI. This makes the quality of the student's prompts and specification the only lever and makes weak prompting visible.

Variants:
- Whole team project: generated code and diagrams may be changed only by re-prompting, using prompt templates taught in class; the final slides and postmortem must also be LLM-generated, with a signed statement that they were edited only by prompting (CMU 17-316 6, 7).
- One assignment: hands-off build from a student-written spec, every intervention logged (CMU 15-113 16).

Ideas addressed: 2-context. Note: the CMU 15-113 survey reports students stopped reading their code under this workflow, so the practice trades against 1-agency.

### 19. Delegate high-volume inspection to the agent

**Courses: 1** (UMD).

Students ask the agent to analyze many data files and summarize, instead of reading them by hand; the student keeps the question and the decision (UMD 15).

Ideas addressed: 3.4-rl (tool use and data analysis as an LLM strength).

### 20. Another LLM scores fuzzy tasks; the student spot-checks the judge by hand

**Courses: 1** (UCSD).

When a task has no single correct answer, another LLM call may score it, but the student must check the judge's verdicts by hand on several examples first (UCSD 15). Applied to the student's product, not to their own workflow.

Ideas addressed: 4.1-fuzzy.

### 21. Per-assignment student survey published as a best-practices report

**Courses: 1** (CMU 15-113).

A survey after each assignment asks how much of the code the student read and understood, how satisfied they were, and what their AI workflow was, and collects free-text advice. Staff publish the results and the students' advice grouped into themes, so the practices a class discovers itself carry over to the next cohort. The published scores also show which workflows lowered understanding (CMU 15-113 18).

Ideas addressed: 5-discovery (the class's own findings become the next cohort's guidance), 1-agency (illusion of competence made measurable).
