# Practices That Address the Ideas in `ideas.md`

This file lists the practices from the processed course files in `courses/` that directly address the ideas in `ideas.md`. A practice is listed only when the course file states the mechanism and the link to the idea without extra interpretation. Practices that touch an idea only indirectly are listed at the end under "Borderline, not included", with the reason.

Each entry gives: practice name, course, practice number in the course file, one sentence on how the practice addresses the idea, and the primary source document. A practice that addresses more than one idea is listed once, under the main idea, with a note on the other ideas. Each idea section ends with cross-references to practices filed elsewhere.

Date of this pass: 2026-09-19. Twelve processed course files were read. `courses/example.md` is a shortened copy of the MIT file and was not counted separately.

## Course names used below

| Short name | Course file |
|---|---|
| MIT | [MIT 6.1040 Software Design, Fall 2025](courses/mit-61040-fa25-software_design.md) |
| Stanford | [Stanford CS146S The Modern Software Developer, Fall 2025](courses/stanford-cs146s-fa25-modern_software_developer.md) |
| CMU 17-316 | [CMU 17-316 AI Tools for Software Development, Fall 2025](courses/cmu-17316-fa25-ai_tools_for_software_development.md) |
| CMU 15-113 | [CMU 15-113 Effective Coding with AI, Spring 2026](courses/cmu-15113-sp26-effective_coding_with_ai.md) |
| CMU 17-214 | [CMU 17-214 Principles of Software Construction, Fall 2025](courses/cmu-17214-fa25-principles_of_software_construction.md) |
| CMU 17-445 | [CMU 17-445 Machine Learning in Production, Spring 2026](courses/cmu-17445-sp26-ml_in_production.md) |
| UW | [UW CSE403 Software Engineering, Winter 2026](courses/uw-cse403-wi26-software_engineering.md) |
| NUS | [NUS CS2103 Software Engineering, AY2025/26 S1](courses/nus-cs2103-ay2526s1-software_engineering.md) |
| UCSD | [UC San Diego CSE190 Generative AI and Programming, Spring 2026](courses/ucsd-cse190-sp26-generative_ai_and_programming.md) |
| UMD | [UMD CMSC398Z Effective Use of AI Coding Assistants, Fall 2025](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md) |
| Harvard | [Harvard CS50 Final Project, Fall 2025](courses/harvard-cs50-fa25-final_project.md) |
| Cornell | [Cornell CS 5150 Software Engineering, Spring 2026](courses/cornell-cs5150-sp26-software_engineering.md) |

## Idea 1. Loss of student agency

The student stops being the author of the solution and becomes an observer of the agent. These practices keep the student in the author role or make the student's role visible.

- **Critical use of AI as a graded skill** — MIT, practice 8. A rubric row rewards personal judgment over AI output and names unmodified or uncritical LLM output as a failure. Also idea 3.1 (the advice lists what an LLM may help with: problems, evidence, comparable products, names) and idea 4.5 (the LLM must not motivate the selection of the problem). Source: [Assignment 1](https://61040-fa25.github.io/assignments/assignment-1), "Rubric".
- **AI coding tools allowed for productivity, not for producing submitted code from a description** — NUS, practice 3. The policy names "give the problem description to the tool, take the code, claim it as your own" as unacceptable, and autocomplete or comparison after writing your own version as acceptable. Source: [Appendix B: Course Policies](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html), "Policy on reuse".
- **General-purpose AI tools allowed only for the final project** — Harvard, practice 4. AI is unlocked only after ten weeks of problem sets, and the rule says "the essence of the work must still be your own" and "amplifying, not supplanting". Source: [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Implementation".
- **AI policy built on disclosure, not banning tools** — CMU 15-113, practice 4. Students must explain AI-generated code in their own words and test and modify what the AI produces rather than copy it unchanged. Also idea 5. Source: [Course archive, Spring 2026](https://www.cs.cmu.edu/~mdtaylor/113/S26/), "AI Usage Policy".
- **Stated ownership rule: the student owns merged code** — Stanford, practice 29. "You own the code that is merged and shipped, no blaming of the AI." Source: [Lecture 7 slides](https://docs.google.com/presentation/d/1NkPzpuSQt6Esbnr2-EnxM9007TL6ebSPFwITyVY-QxU/edit), "Limitations".
- **Explicit course stance stated in the first lecture** — Stanford, practice 8. "This is not the vibe coding class"; the developer's job is to manage agents and keep the skills AI does not replace. Also idea 2 ("Good context leads to good code"). Source: [Lecture 1 slides](https://docs.google.com/presentation/d/1zT2Ofy88cajLTLkd7TcuSM4BCELvF9qQdHmlz33i4t0/edit), "The Takeaway".
- **AI use allowed, but the student stays responsible for anything it produced** — CMU 17-214, practice 14, and **Unrestricted AI-tool use, full responsibility stays with the student** — CMU 17-445, practice 4. Both policies say the student alone answers for correctness and warn that AI answers often look right but are wrong. Sources: [CMU 17-214 Syllabus](https://web.archive.org/web/20251117092403/https://cmu-17-214.github.io/f2025/index.html), "Collaboration policy and academic integrity"; [CMU 17-445 Course archive](https://mlip-cmu.github.io/s2026/), "Use of content generation AI tools and external sources".
- **Coach-mode custom instructions file stops the assistant from just answering** — UMD, practice 8. A staff-written configuration file tells the assistant to act as a coach, ask what a function should return, and require a plain-English description of the logic before writing more than a few lines. Source: [Coach-mode instructions](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week1/playWordle/.github/copilot-instructions.md), "Be a coach, not an over eager intern".
- **One-shot prompt, then line-by-line manual review on a branch per task** — Stanford, practice 26. After the AI implements a task, the student reads every changed line, fixes problems, and explains fixes in commit messages; the depth of review notes is graded. Also idea 5. Source: [Week 7](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week7/assignment.md), "For each task".
- **Report of the autonomy level used for each task** — Stanford, practice 20. For each agent task the student writes which permissions the agent got, why, and how the run was supervised. Source: [Week 5](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week5/assignment.md), "Deliverables".
- **Design-decision authorship disclosure** — UCSD, practice 5. For three design decisions the student states how much they made the decision versus the coding tool. Source: [A1: Social Media Monitor](https://ucsd-cse-115-215.github.io/sp26/assignments/social-media-monitor-assignment.html), "Deliverables".
- **User stories fully authored and triaged by the LLM, with mandatory human sign-off reasons** — CMU 17-316, practice 15. The LLM writes, ranks, and schedules the stories; for each kept or dropped story the student writes why they agree. Also idea 4.2. Source: [Project 1](https://ai-developer-tools.github.io/project/p1/), "3. User Stories".
- **Build a small LLM tool to scale a risk-analysis method, then manually curate its output** — CMU 17-445, practice 11. Full reliance on the tool is named a failure; the student must select a small curated subset. Also idea 4.2. Source: [Individual Assignment 2](https://github.com/mlip-cmu/s2026/blob/main/assignments/I2_risk.md), "Analysis Steps, Automation".
- **AI allowed only for project code, code review, and AI features** — UW, practice 21. Requirements, design documents, status reports, and reflections must be written without AI. Also idea 4.4 (architecture and design stay human). Source: [Syllabus](https://courses.cs.washington.edu/courses/cse403/26wi/syllabus.html), "Use of AI Tools".
- **Personal reflection written without AI** — four courses keep one deliverable per project the student's own text:
  - CMU 17-316, practice 5: six reflection essays on the student's experience with AI tools, no AI allowed, and the student must defend the opinions in class. Source: [Reflection 1 (HW1)](https://ai-developer-tools.github.io/assignments/HW1/), "AI Constraints".
  - CMU 15-113, practice 8: process reflection after each large project, "you must write this yourself, without AI". Source: [Project 3](https://www.cs.cmu.edu/~mdtaylor/113/S26/project3.html), "Reflection".
  - CMU 17-445, practice 7: the AI-disclosure statement itself must be written by the student; "honest bullet points with typos" are preferred. Source: [Individual Assignment 1](https://github.com/mlip-cmu/s2026/blob/main/assignments/I1_llm_features.md), "AI use".
  - UCSD, practice 6: no generative AI for reviews, forum posts, and reflection documents. The course gives respect for the reader as the reason, not agency. Source: [Syllabus](https://ucsd-cse-115-215.github.io/sp26/index.html), "Generative AI Use".

Also relevant, filed under other ideas: CMU 15-113 practice 15 (spec written alone, idea 2), MIT practice 9 (controlled tool, idea 2), CMU 15-113 practice 10 (keep the brief out of the AI's context, idea 2), MIT practice 19 (each step a hypothesis about your understanding, idea 5).

## Idea 2. Context engineering

AI pushes toward more structured work: specifications, documents, explicit context. These practices make the student write, choose, or maintain the context the AI works from.

- **Write the specification alone before the coding agent sees it** — CMU 15-113, practice 15. The spec covers behavior, data format, error cases, acceptance criteria, and must be written without AI, because "the quality of your planning affects the quality of the AI's output". Also idea 1. Source: [HW8: The Agentic Build](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html), "Detailed Instructions".
- **Hands-off agent build with every intervention logged** — CMU 15-113, practice 16. The student lets the agent build from the spec and logs each intervention, so the number of interventions measures spec quality. Source: [HW8](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html), "Detailed Instructions".
- **Keep the assignment brief out of the AI's context** — CMU 15-113, practice 10. Students must not paste the staff-written assignment into the AI, so they practice writing their own requirements; staff noticed "a lack of prompt sophistication due to overreliance on the specifications we've already given you". Also idea 1. Source: [HW6](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw6.html), "Grading".
- **Written specification before a complex agent task** — Stanford, practice 14. The student acts as product manager and writes goal, definitions, plan, files to change, tests, edge cases, out of scope, and likely future extensions; the design template requires listing the only files the change may touch. Also idea 4.3 (future extensions "so the agent does not take shortcuts") and idea 4.4 (file boundaries). Source: [Lecture 3 slides](https://docs.google.com/presentation/d/11pQNCde_mmRnImBat0Zymnp8TCS_cT_1up7zbcj6Sjg/edit), "Best practices"; [Design Doc Template](https://drive.google.com/file/d/1MZ0Qx68Vzw4x5x_XcV8XiPLp7fFDe1LJ/view).
- **Agent guidance files and a codebase readable by agents** — Stanford, practice 15. Students write repository guidance files for the agent and are taught to make the repository legible to both humans and agents; "iterate on `CLAUDE.md` like a prompt". Also idea 3.2. Source: [Week 4](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/assignment.md), "B) `CLAUDE.md` guidance files".
- **Prompts are graded next to the code they produced** — Stanford, practice 10. Each prompt earns the same points as the code it generated. Source: [Week 2](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week2/assignment.md), "Evaluation rubric".
- **Controlled LLM tool for backend, coding agent for frontend** — MIT, practice 9. The backend must be built with a staff tool that makes the student choose the context explicitly and records every call. Source: [Assignment 4b](https://61040-fa25.github.io/assignments/assignment-4b), "The big picture".
- **Explicit context and shared guidance documents** — MIT, practice 20. Students assemble the context from linked files; when the LLM repeats a mistake they write or edit a guidance document and include it in later prompts; when results surprise them they open the recorded call to see what the context contained. Also idea 3.2. Source: [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Updating background material".
- **Independent modules for small LLM context** — MIT, practice 22. The design method requires fully independent modules so that one module's specification is enough context to implement it. Also idea 4.4. Source: [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Context and concept design".
- **Specification kept consistent with code** — MIT, practice 23. Vague or outdated specifications lower the grade even when the code works, because the specification is what the student controls and the LLM consumes. Source: [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Deliverables".
- **Immutable record of every LLM call** — MIT, practice 13. The prompt is a Markdown file with links to specifications, code, and guidance documents; the tool assembles the context from the links and saves it. Source: [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Repository organization".
- **Design document before code, with required notes on any deviation** — UMD, practice 9. The agent writes a design document with no code first; if the code later differs, the agent must record what changed and why. Source: [Week 8: wordSearch](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/wordSearch.md).
- **Restrict the assistant's edit scope inside a large, unfamiliar codebase** — UMD, practice 11. The student tells the agent up front which subdirectory is in scope for edits while the rest is read-only context. Source: [Week 8: Modifying the IDLE editor](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/modifyingIdle.md).
- **Team project deliverables may be changed only by re-prompting the LLM** — CMU 17-316, practice 6. No hand edits to generated code or diagrams; every change goes through a new prompt, using "formalized LLM prompts" taught in class. Source: [Project 6](https://ai-developer-tools.github.io/project/p6/), "Project Context".
- **Full UI-state Figma mockups with layout annotations required before generating frontend code** — CMU 17-316, practice 18. Every interface state and resize behavior is specified so the LLM can implement without guessing. Source: [Project 3](https://ai-developer-tools.github.io/project/p3/), "1. UI Mockups in Figma".
- **LLM writes a function-by-function test specification before any test code exists** — CMU 17-316, practice 22. An English test specification with inputs and expected outputs per function precedes test generation. Source: [Project 5](https://ai-developer-tools.github.io/project/p5/), "Deliverables".

Also relevant: Stanford practice 8 (stance "good context leads to good code", idea 1).

## Idea 3. LLM strengths that students must learn to use

### 3.1 Expanding the space of ideas

- **Critical use of AI as a graded skill** — MIT, practice 8 (filed under idea 1). The advice says an LLM may help find problems, evidence, comparable products, and names. Source: [Assignment 1](https://61040-fa25.github.io/assignments/assignment-1), "Advice".
- **LLM as critic with the rubric in context** — MIT, practice 21 (filed under 3.3). The instructor essay lists further modes: compare alternatives, build a refutation.

No other processed course has a practice that trains students to use the LLM to widen the set of options.

### 3.2 Using domain context

Filed under idea 2: MIT practice 20 (guidance documents on the design method given to the LLM), MIT practice 21 (rubric and guide as context for critique), Stanford practice 15 (codebase documentation written for agents).

### 3.3 Finding problems and contradictions

- **LLM as critic with the rubric in context** — MIT, practice 21. Students give the LLM the rubric and guidance documents and ask for a critique of their own specification or design; the course says the LLM cannot reliably generate specifications in its method, but can review them. Source: [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Exploit background materials as prompts".
- **Independent code review from a fresh agent session** — CMU 15-113, practice 17. A new chat session with no memory of the build reviews the code against the specification, so the reviewer does not defend the builder's choices. Source: [HW8](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html), "Phase 3: The AI Review".
- **Compare own review with an AI review and write trust heuristics** — Stanford, practice 28 (filed under "Calibration" below).

### 3.4 Tasks covered by reinforcement learning: programming, math, tool use

- **Delegate bulk data inspection to the assistant instead of manual review** — UMD, practice 15. Students ask the agent to analyze many output files and summarize, while the student decides the question and what to do with the answer. Source: [Week 9 class notes](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week9/README.md), "Projects with fuzzy requirements".

Programming itself is the delegated task in almost every course above; no course frames a practice around math or games.

## Idea 4. LLM weaknesses that students must learn to control and compensate

### 4.1 Tasks with a fuzzy boundary of correctness

- **LLM-as-judge scoring, spot-checked by hand** — UCSD, practice 15. When a task has no single correct answer, students may score it with another LLM call, but must check the judge's verdicts by hand on a handful of examples first because judges have their own biases. This is applied to the student's product, not to the student's own workflow. Source: [A3: Agents](https://ucsd-cse-115-215.github.io/sp26/assignments/agent-assignment.html), "Engineering and Testing".

No processed course has a practice that trains students to handle fuzzy-correctness tasks in their own development work with AI.

### 4.2 Setting priorities: what matters and what does not

- **Build a small LLM tool to scale a risk-analysis method, then manually curate its output** — CMU 17-445, practice 11 (filed under idea 1). "Use your judgment to actively curate a small number of results that will be the most important." Source: [Individual Assignment 2](https://github.com/mlip-cmu/s2026/blob/main/assignments/I2_risk.md), "Analysis Steps, Automation".
- **User stories fully authored and triaged by the LLM, with mandatory human sign-off reasons** — CMU 17-316, practice 15 (filed under idea 1). The LLM prioritizes; the student must justify agreement per story.
- **Structured student review of the assistant's design and code** — UMD, practice 10. One review question targets unneeded complexity: "Coding models are notorious for writing explicit code to catch and log all kinds of exceptions that are unlikely to occur." Also idea 5. Source: [Week 8: wordSearch](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/wordSearch.md).

### 4.3 Tasks with a long horizon of effect

- **Written specification before a complex agent task** — Stanford, practice 14 (filed under idea 2). The spec includes likely future extensions "so the agent does not take shortcuts".

No other processed course has a practice aimed at this weakness.

### 4.4 Application architecture

- **No coding agents on the modular backend** — MIT, practice 10. Coding agents "tend to violate the concept conventions and complicate the structure", so the staff recommend against them for the backend in team work. Source: [Final Project](https://61040-fa25.github.io/assignments/final-project-main), "Using LLMs".
- **Independent modules for small LLM context** — MIT, practice 22 (filed under idea 2). The architecture is chosen so that LLM work on one module cannot touch another.
- **Backend spec must harmonize two independently generated architecture diagrams into one shared backend** — CMU 17-316, practice 20. The LLM generated two architectures for two stories; the team must have them merged into one before backend design. Source: [Project 4](https://ai-developer-tools.github.io/project/p4/), "Project Context".
- **Fixed technical-artifact checklist with a named LLM failure mode to catch** — CMU 17-316, practice 17. Staff warn that generated architecture sections disagree with each other (more classes in the diagram than in the list) and require students to find and fix this. Source: [Project 2](https://ai-developer-tools.github.io/project/p2/), "Deliverables".
- **AI allowed only for project code, code review, and AI features** — UW, practice 21 (filed under idea 1). The architecture and design document must be written without AI.
- **Written specification before a complex agent task** — Stanford, practice 14 (filed under idea 2). The design template lists the only files the change may touch.

### 4.5 Choosing an idea for the project

- **Self-chosen problem under published criteria** — MIT, practice 4. The project must fulfill authentic demand with cited evidence, and "LLM output per se does not constitute evidence". Source: [Assignment 1](https://61040-fa25.github.io/assignments/assignment-1), "Evidence".
- **Mandatory live human interviews; LLM interviews explicitly rejected** — CMU 17-316, practice 13. Demand for the product must be checked with at least four real people; "Interviews with LLMs will not be accepted." Source: [Project 1](https://ai-developer-tools.github.io/project/p1/), "2b. Measure/demonstrate that people want the product".
- **Critical use of AI as a graded skill** — MIT, practice 8 (filed under idea 1). The LLM must not replace the student's judgment "in motivating selections".

### 4.0 Other LLM weaknesses named by the courses (not in the list in `ideas.md`)

These practices control an LLM weakness that the course names explicitly, so they address the top-level idea 4 even though the weakness is not one of 4.1 to 4.5.

- **LLM test specification graded on preventing hallucinated or duplicate tests** — CMU 17-316, practice 22. "You will be graded on how well you prevent the LLM from hallucinating nonsensical test cases or creating duplicate or significantly overlapping test cases." Source: [Project 5](https://ai-developer-tools.github.io/project/p5/), "2. Create your unit tests".
- **One-test-at-a-time prompting rule, stated as a lesson from staff's own experience** — CMU 17-316, practice 23. Asking for the whole suite in one prompt "will lead to incorrect output". Source: [Project 5](https://ai-developer-tools.github.io/project/p5/), "2. Create your unit tests".
- **Quality gates ship with the starter code** — Stanford, practice 22. Tests, linter, and formatter in pre-commit hooks are "the backstops that make agent autonomy acceptable"; staff add: label every agent diff, commit often as checkpoints. Source: [Lecture 4 slides](https://docs.google.com/presentation/d/19mgkwAnJDc7JuJy0zhhoY0ZC15DiNpxL8kchPDnRkRQ/edit), "Best practices".
- **Each step as a testable hypothesis** — MIT, practice 19 (filed under idea 5). Incremental work is required because LLMs "produce large volumes of code" and failure to work incrementally is the most common cause of frustration (MIT practice 14).

## Calibration: learning strengths and weaknesses together (ideas 3 and 4)

These practices make the student compare their own work or expectation with the LLM's output and write down where the LLM was better or worse. They address ideas 3 and 4 as a pair.

- **Side-by-side human vs. LLM value proposition, with a required verdict** — CMU 17-316, practice 12. The student writes the value proposition without AI first, then asks the LLM, then states which is more compelling and why. Source: [Project 1](https://ai-developer-tools.github.io/project/p1/), "1. Initial value proposition/product description".
- **Blind human-then-LLM summary comparison of interview data** — CMU 17-316, practice 14. The human summary is written and set aside before the LLM summarizes the same transcripts. Source: [Project 1](https://ai-developer-tools.github.io/project/p1/), "2c. Summarize what you learned".
- **Concrete-example bar for essay quality** — CMU 17-316, practice 11, together with practice 5. The six reflection essays on the student's experience with AI tools must give examples of the form "it did x but I expected y in the context of z". Source: [Reflection 1 (HW1)](https://ai-developer-tools.github.io/assignments/HW1/), "The task".
- **Compare own review with an AI review and write trust heuristics** — Stanford, practice 28. The student classifies their own review comments, compares them with the AI review per pull request, cites cases where the AI was better or worse, and states when they will trust AI reviews. Source: [Week 7](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week7/assignment.md), "Deliverables".
- **Log of manual fixes after generation and time-to-first-run metrics** — Stanford, practice 31. For each generated app version the student records what had to be fixed by hand and where prompts needed extra guidance. Source: [Week 8](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week8/assignment.md), "Deliverables".
- **Short in-person presentation on how AI was used** — CMU 15-113, practice 12. Five minutes on the process, "how AI helped, and any areas where it did not". Source: [Project 1](https://www.cs.cmu.edu/~mdtaylor/113/S26/project1.html), "Grading Rubric".
- **Curated "interesting moments" with snapshot links** — MIT, practice 15. Among the required 5 to 10 moments: "unexpectedly good or bad LLM output" and "editing a guidance document to stop a repeated LLM error". Source: [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Deliverables".

## Idea 5. LLMs amplify the illusion of competence

These practices check whether the student understands the work they submitted. Oral checks are listed even when the course does not tie them to AI, because the mechanism directly tests competence behind a good-looking result. Where the course ties the check to AI, this is noted.

- **Standing right to orally verify any submission** — CMU 15-113, practice 5. Staff may ask a student at any time to explain any part of the code, the process, and rejected alternatives; stated inside the AI policy. Source: [Course archive, Spring 2026](https://www.cs.cmu.edu/~mdtaylor/113/S26/), "AI Usage Policy".
- **In-person oral exam on the final project** — CMU 15-113, practice 13. The student must explain what each part of their code is responsible for. Source: [Project 3](https://www.cs.cmu.edu/~mdtaylor/113/S26/project3.html), "Assignment Overview".
- **Every individual assignment ends with a graded oral defense at office hours** — CMU 17-445, practice 8. Ten of 100 points on each assignment are earned only by convincing staff in conversation that the student understands their solution. AI use is unrestricted in this course (practice 4). Source: [Individual Assignment 3](https://github.com/mlip-cmu/s2026/blob/main/assignments/I3_agent_security.md), grading list.
- **Lab credit requires a live demonstration and short defense to a TA; copying allowed but each student explains alone** — CMU 17-445, practices 13 and 14, and **Looser collaboration rules for labs, but present and explain to the TA** — CMU 17-214, practice 20. Copying is tolerated; the explanation is the check. Sources: [CMU 17-445 Course archive](https://mlip-cmu.github.io/s2026/), "Labs"; [CMU 17-214 Labs Overview](https://web.archive.org/web/20251108042640/https://github.com/CMU-17-214/f2025/blob/main/labs.md), "Collaboration policy".
- **Mandatory 30-minute team debrief with an assigned mentor after every milestone** — CMU 17-445, practice 19. Points are earned per student only if "the team members can convince the mentor that they understand their solution and that they have thought about alternatives". Source: [Group Project](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), "Milestone 1, Grading".
- **Bonus points for working outside one's comfort zone, checked against commit history** — CMU 17-445, practice 20. Every member must be able to roughly explain the parts teammates implemented; the mentor probes with follow-up questions. Not tied to AI in the source. Source: [Group Project](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), "Bonus: Beyond the Comfort Zone".
- **Grade "pending" plus an oral check-in interview** — UCSD, practice 17. Staff may withhold a grade until the student walks them through the code, the design decisions, and "what was AI-generated versus their own contribution". Source: [Syllabus](https://ucsd-cse-115-215.github.io/sp26/index.html), "Check-in Interviews".
- **Each step as a testable hypothesis** — MIT, practice 19. "Treating each step as a hypothesis (that your understanding is correct) that you can test before you continue." Source: [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Working incrementally".
- **Structured student review of the assistant's design and code** — UMD, practice 10 (filed under 4.2). The first review questions ask whether the student actually understands the design and the code.
- **Grading checks documentation against the delivered code** — CMU 15-113, practice 9. Generic AI-generated README or prompt log that does not match the submitted code lowers the grade. Source: [HW6](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw6.html), "Grading".
- **Recurring student survey turned into a public best-practices report** — CMU 15-113, practice 18. The per-assignment survey asks students how much of the code they understood, which makes self-reported understanding visible per workflow; the report shows the two agentic assignments had the lowest "read the code" scores. Source: [Best Practices and Lessons Learned](https://www.cs.cmu.edu/~mdtaylor/113/S26/bestPractices.html).

Also relevant: Stanford practice 26 (line-by-line review, idea 1), CMU 15-113 practice 4 (explain AI code in own words, idea 1).

## Borderline, not included

Listed so the judgment calls are visible.

- **Disclosure and log requirements on their own**: MIT 7, Stanford 11, CMU 17-316 16, CMU 15-113 7, UCSD 4, UMD 13, CMU 17-445 5 and 6, NUS 4 and 5, UW 22, Cornell 17, CMU 17-214 15. A log or a disclosure line makes AI use visible, but by itself it does not keep the student the author or test understanding. Logs are included above only where the course grades what the log shows (MIT 13 and 14, Stanford 10, CMU 15-113 16).
- **LLM engineering inside the student's product**: MIT 25 (validators for AI features), UCSD 12, 13, 14, 16 (eval harness, testable extraction, pass@k, guardrail taxonomy), CMU 17-445 9 and 10 (security guarantee, planted backdoor). These teach control of an LLM as a product component, not control of the LLM as the student's development tool. UCSD 15 is the one exception above because it names the fuzzy-correctness case directly.
- **UMD 14, project with fuzzy requirements**: the course frames requirement discovery as a real-world skill and does not connect it to an LLM weakness.
- **Stanford 3, weekly assignments increase agent autonomy step by step**: a course sequence, not a rule students apply; the instructor's remark on "too much too soon" is an observation.
- **Stanford 16, generated documentation checked against the running code**: the stated goal is to learn where AI output drifts, but the mechanism is a documentation task.
- **UMD 12, reuse one generated project-context file**: a staff convenience; the note on nondeterminism is an observation.
- **CMU 17-445 26 and MIT 18, graded reflections that reject generic or "AI slop" text**: reflection quality rules, not tied to the student's role in the AI workflow. CMU 17-445 does not ban AI for the reflection.
- **CMU 15-113 6 (collaboration test: can they redo it alone) and 14 (paired code handoff)**: the test is exactly the idea-1 and idea-5 test, but the course applies it to human collaboration and to inheriting a classmate's code, not to AI.
- **Instructor observations**, for example MIT's essay (students bypassed the controlled tool and did not notice the damage), UCSD's lecture notes (pushing back on the agent's bias to implement; independent verifier rerun against reward hacking), CMU 15-113's survey report (students stopped reading code under the agentic workflow). These support the ideas but are not practices.
- **Cornell CS 5150** has no practice that addresses the ideas; its only AI-related practice is a disclosure rule (17).
