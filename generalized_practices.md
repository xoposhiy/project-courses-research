# Generalized Practices

Similar practices from different courses are merged into one generalized practice with a description that covers all variants.
The list is sorted by the number of processed courses that use the practice. Ties are ordered by how directly the practice addresses the ideas; a practice whose link to the ideas is our inference goes last in its tie.

Only the practices that address these ideas were considered:

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

Two generalized practices (7, and 17 in part) are marked "inferred link". The courses state the mechanism, but they justify it with industry habit or course logistics, not with AI. The link to the idea is our reading.

## Summary table

| # | Generalized practice | Courses | Ideas addressed |
|---|---|---|---|
| 1 | The student is the author and answers for the result; AI assists | 8 | 1-agency |
| 2 | The student does the task by hand before AI may help | 6 | 1-agency |
| 3 | Specification or design document before code generation | 5 | 2-context, 4.3-horizon, 4.4-architecture |
| 4 | Reflections, reviews, and design documents are written without AI | 5 | 1-agency, 4.4-architecture |
| 5 | The student reviews and tests every generated output | 5 | 1-agency, 4.2-priorities |
| 6 | Architecture and module boundaries stay under human control | 5 | 4.4-architecture |
| 7 | An existing codebase must be understood before it is changed (inferred link) | 5 | 4.4-architecture, 4.3-horizon, 1-agency |
| 8 | Oral check: the student explains the submitted work to staff | 4 | 1-agency |
| 9 | The student controls the context the AI sees | 4 | 2-context, 3.2-domain |
| 10 | How the student directed the AI is graded, not only the result | 4 | 2-context, 1-agency |
| 11 | Written comparison of the student's own work with the LLM's output | 4 | 5-discovery, 3-strengths, 4-weaknesses, 3.3-critic |
| 12 | The student writes and defends an own opinion on how to use AI | 4 | 5-discovery |
| 13 | Guided experiment with a new AI workflow, plus a written report on the outcome | 4 | 5-discovery, 2-context |
| 14 | The student selects from LLM-generated lists and justifies each choice | 3 | 1-agency, 4.2-priorities |
| 15 | Deliberate limits on agent autonomy | 3 | 1-agency, 4-weaknesses |
| 16 | LLM as critic, not only as generator | 3 | 3.3-critic, 3.1-expand |
| 17 | Project idea checked by people, not by the LLM | 3 | 4.5-project-idea |
| 18 | Small steps: one unit per prompt, test before continuing | 2 | 4-weaknesses, 1-agency |
| 19 | Exercises where the student may change the code only by re-prompting | 2 | 2-context |
| 20 | Every student must personally do each kind of work | 2 | 1-agency |
| 21 | Per-assignment student survey published as a best-practices report | 1 | 5-discovery, 1-agency |

## Generalized practices

### 1. The student is the author and answers for the result; AI assists

**Courses: 8** ([MIT](courses/mit-61040-fa25-software_design.md), [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md), [NUS](courses/nus-cs2103-ay2526s1-software_engineering.md), [Harvard](courses/harvard-cs50-fa25-final_project.md), [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md), [CMU 17-214](courses/cmu-17214-fa25-principles_of_software_construction.md), [CMU 17-445](courses/cmu-17445-sp26-ml_in_production.md), [UCSD](courses/ucsd-cse190-sp26-generative_ai_and_programming.md)).

The course states, as a policy or as a graded rubric row, that AI may help but the student remains the author of the submitted work and is responsible for its correctness. The rule separates two uses of AI: assisting the student's own work (allowed) and producing the work from a description with the student as observer (not allowed or graded down). The policy usually warns that AI output looks right but is often wrong.

Variants:
- Graded rubric row: personal judgment over AI output is rewarded, unmodified LLM output is a listed failure ([MIT](courses/mit-61040-fa25-software_design.md) [8](https://61040-fa25.github.io/assignments/assignment-1)).
- Policy with acceptable and unacceptable examples: autocomplete and comparison are acceptable, "give the problem description, take the code, claim it as your own" is not ([NUS](courses/nus-cs2103-ay2526s1-software_engineering.md) [3](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html)).
- Responsibility clause: the student alone answers for correctness, no matter which tool produced the code ([CMU 17-214](courses/cmu-17214-fa25-principles_of_software_construction.md) [14](https://web.archive.org/web/20251117092403/https://cmu-17-214.github.io/f2025/index.html), [CMU 17-445](courses/cmu-17445-sp26-ml_in_production.md) [4](https://mlip-cmu.github.io/s2026/), [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [29](https://docs.google.com/presentation/d/1NkPzpuSQt6Esbnr2-EnxM9007TL6ebSPFwITyVY-QxU/edit) "no blaming of the AI").
- Policy plus stated stance: "this is not the vibe coding class"; the job is to manage agents and keep the skills AI does not replace ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [8](https://docs.google.com/presentation/d/1zT2Ofy88cajLTLkd7TcuSM4BCELvF9qQdHmlz33i4t0/edit)).
- Explain and modify rule: the student must explain AI code in their own words and must test and modify it, not copy it unchanged ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [5](https://www.cs.cmu.edu/~mdtaylor/113/S26/)).
- "Amplifying, not supplanting": the essence of the work must be the student's own ([Harvard](courses/harvard-cs50-fa25-final_project.md) [4](https://cs50.harvard.edu/college/2025/fall/project/)).
- Authorship disclosed per design decision: for three decisions the student states how much they made the decision versus the coding tool ([UCSD](courses/ucsd-cse190-sp26-generative_ai_and_programming.md) [5](https://ucsd-cse-115-215.github.io/sp26/assignments/social-media-monitor-assignment.html)).

Ideas addressed: 1-agency (the student must be able to explain the result).

### 2. The student does the task by hand before AI may help

**Courses: 6** ([Harvard](courses/harvard-cs50-fa25-final_project.md), [UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md), [CMU 17-445](courses/cmu-17445-sp26-ml_in_production.md), [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md), [CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md), [NUS](courses/nus-cs2103-ay2526s1-software_engineering.md)).

The student must first do the work, or the part of the work that carries the learning goal, without AI. Only after that may the AI be used, either on the same task or on the following steps. The scale ranges from a whole course to one step of one assignment. The stated reason is the same in all variants: the AI should amplify a skill the student already has, not replace the moment where the skill is learned.

Variants, from course level to task level:
- Whole course: general-purpose AI tools are banned during ten weeks of problem sets and allowed only for the final project, with the rule that "the essence of the work must still be your own" ([Harvard](courses/harvard-cs50-fa25-final_project.md) [4](https://cs50.harvard.edu/college/2025/fall/project/)).
- Early exercises: a staff-written coach-mode instruction file forbids the assistant to write a complete function until the student has described the logic step by step in plain English ([UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md) [8](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week1/playWordle/.github/copilot-instructions.md)).
- One assignment: the student practices a risk-analysis method by hand on a few examples, then builds an LLM tool that automates it, then curates the tool's output ([CMU 17-445](courses/cmu-17445-sp26-ml_in_production.md) [11](https://github.com/mlip-cmu/s2026/blob/main/assignments/I2_risk.md)).
- One step: the specification is written without AI before the coding agent sees it, because "the quality of your planning affects the quality of the AI's output" ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [17](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html)).
- One step: the student writes their own value proposition and interview summary and sets it aside before asking the LLM for the same ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [12](https://ai-developer-tools.github.io/project/p1/), [14](https://ai-developer-tools.github.io/project/p1/)).
- Policy rule: generating an alternative implementation for comparison is acceptable only after the student has written their own version ([NUS](courses/nus-cs2103-ay2526s1-software_engineering.md) [3](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html)).

Ideas addressed: 1-agency. Several variants are also counted under other practices: the [UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md) variant under practice 15 (limits on autonomy), the [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) variant under practice 3 (specification first), the [CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) variants under practice 11 (written comparison).

### 3. Specification or design document before code generation

**Courses: 5** ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md), [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md), [MIT](courses/mit-61040-fa25-software_design.md), [UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md), [CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md)).

Before any code is generated, a written specification or design document exists and is the input to the AI. The document names behavior, data formats, error cases, acceptance criteria, files that may change, and what is out of scope. The specification stays a live artifact: it must match the code at submission, and deviations must be recorded.

Variants by author of the specification:
- Written by the student without AI, as the main learning goal of the exercise ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [17](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html); [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [14](https://docs.google.com/presentation/d/11pQNCde_mmRnImBat0Zymnp8TCS_cT_1up7zbcj6Sjg/edit), where the student acts as product manager and the design template lists the only files the change may touch and the likely future extensions).
- Written per module and graded for consistency with the code; outdated or vague specs lower the grade even if the code works ([MIT](courses/mit-61040-fa25-software_design.md) [22](https://61040-fa25.github.io/assignments/assignment-4a), [23](https://61040-fa25.github.io/assignments/assignment-4a)).
- Written by the agent on the student's request, as a no-code design document; deviations during implementation must be documented ([UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md) [9](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/wordSearch.md)).
- Written by the LLM to a fixed checklist, with the student responsible for finding inconsistencies between sections; includes full-state UI mockups before frontend code and an English test specification before test code ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [17](https://ai-developer-tools.github.io/project/p2/), [18](https://ai-developer-tools.github.io/project/p3/), [22](https://ai-developer-tools.github.io/project/p5/)).

Ideas addressed: 2-context (structured work). Also 4.3-horizon (future extensions in the spec, [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md)) and 4.4-architecture (file and module boundaries, [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) and [MIT](courses/mit-61040-fa25-software_design.md)).

### 4. Reflections, reviews, and design documents are written without AI

**Courses: 5** ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md), [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md), [CMU 17-445](courses/cmu-17445-sp26-ml_in_production.md), [UCSD](courses/ucsd-cse190-sp26-generative_ai_and_programming.md), [UW](courses/uw-cse403-wi26-software_engineering.md)).

The course allows AI for code but bans it for the prose deliverables about the work: reflections, AI-use statements, peer reviews, requirements and design documents. This keeps at least one artifact per project that is unmistakably the student's own thinking, and it keeps the student's account of their own AI use honest.

Variants:
- Reflection essays on the student's experience with AI tools, defended in class ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [5](https://ai-developer-tools.github.io/assignments/HW1/)).
- Process reflection after each large project ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [9](https://www.cs.cmu.edu/~mdtaylor/113/S26/project3.html)).
- The AI-disclosure statement itself must be human-written; rough honest notes preferred ([CMU 17-445](courses/cmu-17445-sp26-ml_in_production.md) [7](https://github.com/mlip-cmu/s2026/blob/main/assignments/I1_llm_features.md)).
- All human-to-human text: reviews, forum posts, reflections; the stated reason is respect for the reader ([UCSD](courses/ucsd-cse190-sp26-generative_ai_and_programming.md) [6](https://ucsd-cse-115-215.github.io/sp26/index.html)).
- Everything except code, code review, and AI product features: requirements, design, status reports, reflections ([UW](courses/uw-cse403-wi26-software_engineering.md) [21](https://courses.cs.washington.edu/courses/cse403/26wi/syllabus.html)).

Ideas addressed: 1-agency (honest self-assessment); [UW](courses/uw-cse403-wi26-software_engineering.md)'s variant also 4.4-architecture (design stays human).

### 5. The student reviews and tests every generated output

**Courses: 5** ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md), [UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md), [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md), [MIT](courses/mit-61040-fa25-software_design.md), [CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md)).

Generated code, design, or specification is not accepted until the student has read it and checked it against an explicit standard. The review is guided by a checklist or a rule, and the depth of the review is graded.

Variants:
- Line-by-line manual review of every agent change on a branch, fixes explained in commit messages, review depth graded ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [26](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week7/assignment.md)).
- Fixed review questions after the agent delivers a design and code: do you understand it, where would it do the wrong thing, what is too terse, what is unneeded complexity ([UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md) [10](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/wordSearch.md)).
- Policy rule: test and modify what the AI produces, explain it in your own words ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [5](https://www.cs.cmu.edu/~mdtaylor/113/S26/)).
- Each implementation step is a hypothesis about your understanding, tested before continuing ([MIT](courses/mit-61040-fa25-software_design.md) [19](https://61040-fa25.github.io/assignments/assignment-4a)).
- Named LLM failure mode to find and fix before submission: sections of a generated spec that contradict each other ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [17](https://ai-developer-tools.github.io/project/p2/)). Proof that generated code works, not that it looks right: a narrated screen recording of the generated frontend at two screen sizes, and a link to a real passing CI run rather than committed workflow files ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [19](https://ai-developer-tools.github.io/project/p3/), [24](https://ai-developer-tools.github.io/project/p5/)).
- Each AI-made security fix is reported with the rule, the risk, the change, and why the change removes the risk; findings the student chose to ignore must be justified; the scanner is run again after each fix ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [24](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week6/assignment.md), [25](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week6/assignment.md)).

Ideas addressed: 1-agency (understanding is tested), 4.2-priorities (unneeded complexity and misplaced emphasis, [UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md); triage of scanner findings, [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md)).

### 6. Architecture and module boundaries stay under human control

**Courses: 5** ([MIT](courses/mit-61040-fa25-software_design.md), [CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md), [UW](courses/uw-cse403-wi26-software_engineering.md), [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md), [UCSD](courses/ucsd-cse190-sp26-generative_ai_and_programming.md)).

The course treats architecture as a place where LLM output is unreliable and adds a rule that keeps structural decisions with the student, bounds what the AI may change, or tests whether the design holds up under a change.

Variants:
- Recommendation against coding agents on the modular backend because they violate module boundaries; architecture with fully independent modules so LLM work on one module cannot touch another ([MIT](courses/mit-61040-fa25-software_design.md) [10](https://61040-fa25.github.io/assignments/final-project-main), [22](https://61040-fa25.github.io/assignments/assignment-4a)).
- The LLM generated a separate architecture for each of two user stories; the team must merge them into one before backend design. Generated architecture sections must be checked for internal contradictions, for example more classes in the diagram than in the class list ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [20](https://ai-developer-tools.github.io/project/p4/), [17](https://ai-developer-tools.github.io/project/p2/)).
- Architecture and design document written without AI ([UW](courses/uw-cse403-wi26-software_engineering.md) [21](https://courses.cs.washington.edu/courses/cse403/26wi/syllabus.html)).
- The design template lists the only files a change may touch ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [14](https://docs.google.com/presentation/d/11pQNCde_mmRnImBat0Zymnp8TCS_cT_1up7zbcj6Sjg/edit)).
- After the first submission, the team must implement one new requirement its design was not built for and explain in the design document which parts had to change and which did not ([UCSD](courses/ucsd-cse190-sp26-generative_ai_and_programming.md) [14](https://ucsd-cse-115-215.github.io/sp26/assignments/doc-scanner-assignment.html)).

Ideas addressed: 4.4-architecture.

### 7. An existing codebase must be understood before it is changed (inferred link)

**Courses: 5** ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md), [NUS](courses/nus-cs2103-ay2526s1-software_engineering.md), [Cornell](courses/cornell-cs5150-sp26-software_engineering.md), [CMU 17-214](courses/cmu-17214-fa25-principles_of_software_construction.md), [UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md)).

The student works in a codebase someone else built and must understand its architecture before changing it. Starting over or regenerating the project is not an option: a rule keeps most of the original code, a whole sprint is reserved for reading, or the task is framed as a review of someone else's system. The courses justify this with how software is built in industry, where a new developer almost always joins a project that already has code and a design. None of the courses gives an AI reason, so the link to the ideas is our reading: the practice trains the skill that compensates for weak LLM architecture, and it keeps the student out of the observer role, because a generated replacement would not count.

Variants:
- A student receives a classmate's unfinished AI-built game and must continue it in one hour while keeping at least 75% of the original code ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [16](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw7.html)).
- After one individual project from a blank page, every team extends the same staff-written existing program; a smaller feature built to a high standard scores higher than an original feature built poorly ([NUS](courses/nus-cs2103-ay2526s1-software_engineering.md) [1](https://nus-cs2103-ay2526s1.github.io/website/admin/courseOverview.html), [12](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-overview.html)).
- The first of four sprints produces no feature code; the team documents the architecture of the open-source system it will extend, with its own deployment and component diagrams ([Cornell](courses/cornell-cs5150-sp26-software_engineering.md) [5](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects.html), [6](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/report-1.html)).
- Refactoring is practiced on a working but badly designed program the student has never seen, and most of the assignment is spent reading it ([CMU 17-214](courses/cmu-17214-fa25-principles_of_software_construction.md) [11](https://web.archive.org/web/20251108042539/https://github.com/CMU-17-214/f2025/blob/main/assignments/hw4.md)).
- A multi-week project on a real running application is framed as a code review: trace one operation through the code and its data stores and report bugs and consistency problems to the original developer ([UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md) [19](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week13/GOAL-WEEK1.md)).

Ideas addressed: 4.4-architecture (understanding an existing architecture), 4.3-horizon (the code must stay usable after the student), 1-agency (regeneration does not count). All three links are inferred.

### 8. Oral check: the student explains the submitted work to staff

**Courses: 4** ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md), [CMU 17-445](courses/cmu-17445-sp26-ml_in_production.md), [UCSD](courses/ucsd-cse190-sp26-generative_ai_and_programming.md), [CMU 17-214](courses/cmu-17214-fa25-principles_of_software_construction.md)).

The student must explain the submitted work in person to a staff member, and part of the grade depends on that conversation. The check applies regardless of how the work was produced, so copying or AI generation is tolerated as long as the student can explain the result.

Variants:
- Standing right to ask any student to explain any submission at any time, stated inside the AI policy; plus an in-person oral exam on the capstone ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [6](https://www.cs.cmu.edu/~mdtaylor/113/S26/), [14](https://www.cs.cmu.edu/~mdtaylor/113/S26/project3.html)).
- Fixed share of points on every individual assignment earned only in an office-hours defense; lab credit only by demonstrating and explaining to a TA, even if the solution was copied; team debrief where each member must convince the mentor they understand the solution and considered alternatives; bonus checked by asking members to explain teammates' parts ([CMU 17-445](courses/cmu-17445-sp26-ml_in_production.md) [8](https://github.com/mlip-cmu/s2026/blob/main/assignments/I2_risk.md), [13](https://github.com/mlip-cmu/s2026/blob/main/labs/lab01.md), [14](https://mlip-cmu.github.io/s2026/), [19](https://mlip-cmu.github.io/s2026/), [20](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md)).
- Grade "pending" until a check-in interview covers the code, the design decisions, and what was AI-generated versus the student's own ([UCSD](courses/ucsd-cse190-sp26-generative_ai_and_programming.md) [18](https://ucsd-cse-115-215.github.io/sp26/index.html)).
- Labs allow copying, but each student presents and explains the solution alone ([CMU 17-214](courses/cmu-17214-fa25-principles_of_software_construction.md) [20](https://web.archive.org/web/20251108042640/https://github.com/CMU-17-214/f2025/blob/main/labs.md)).

Ideas addressed: 1-agency (illusion of competence; the student must own the reasoning).

### 9. The student controls the context the AI sees

**Courses: 4** ([MIT](courses/mit-61040-fa25-software_design.md), [UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md), [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md), [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md)).

The student decides, explicitly, which files, documents, and rules the AI works from, instead of letting the tool pull in the whole codebase or the assignment text. The context is a maintained artifact: guidance documents are edited when the AI repeats a mistake, edit scope is limited up front, and the assembled context is inspectable afterward.

Variants:
- A staff-built tool that forces explicit context selection and records every call with its full context; guidance documents added when the LLM repeats an error; independent modules so one module's spec is enough context ([MIT](courses/mit-61040-fa25-software_design.md) [9](https://61040-fa25.github.io/assignments/assignment-4b), [13](https://61040-fa25.github.io/assignments/assignment-4a), [20](https://61040-fa25.github.io/assignments/assignment-4a), [22](https://61040-fa25.github.io/assignments/assignment-4a)).
- Tell the agent up front which subdirectory it may edit in a large unfamiliar codebase ([UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md) [11](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/modifyingIdle.md)).
- Repository guidance files written for agents, iterated like a prompt; codebase documented so a human and an agent can follow it ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [15](https://docs.google.com/presentation/d/11pQNCde_mmRnImBat0Zymnp8TCS_cT_1up7zbcj6Sjg/edit)).
- Do not paste the assignment brief into the AI, so the student writes their own requirements ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [11](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw6.html)).

Ideas addressed: 2-context, 3.2-domain (domain context given to the LLM).

### 10. How the student directed the AI is graded, not only the result

**Courses: 4** ([MIT](courses/mit-61040-fa25-software_design.md), [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md), [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md), [CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md)).

The record of how the student directed the AI is a graded deliverable with its own rubric criteria, separate from the quality of the final code. Plain disclosure logs are not counted here; only cases where the log content is assessed.

Variants:
- A staff tool saves every LLM call with its prompt and context in a record the student cannot edit; the saved record must show small, reflective, incremental steps, and this is graded ([MIT](courses/mit-61040-fa25-software_design.md) [13](https://61040-fa25.github.io/assignments/assignment-4a), [14](https://61040-fa25.github.io/assignments/assignment-4a)). The same record is required from students who write code by hand, so the process grade is equal for everyone ([MIT](courses/mit-61040-fa25-software_design.md) [12](https://61040-fa25.github.io/assignments/assignment-4a)).
- Each prompt earns the same points as the code it produced ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [10](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week2/assignment.md)). In the first assignment the code, the model, and the test are fixed and the student may change only the prompt until the test passes ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [12](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week1/assignment.md)).
- Every intervention during a hands-off agent build is logged and becomes evidence of specification quality ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [18](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html)). The README and prompt log must match the submitted code; a generic AI-generated README or a log that does not match the code lowers the grade ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [10](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw6.html)).
- Grade depends on how well the student prevented the LLM from hallucinating or duplicating tests ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [22](https://ai-developer-tools.github.io/project/p5/)).

Ideas addressed: 2-context (prompting and context as a skill), 1-agency (the student's role is visible).

### 11. Written comparison of the student's own work with the LLM's output

**Courses: 4** ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md), [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md), [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md), [MIT](courses/mit-61040-fa25-software_design.md)).

The student produces their own version of a task, then the LLM's version, and writes a verdict on which was better and why. Or the student records, per task, where the AI helped and where it failed. The written comparison is the deliverable, so students calibrate their trust in the LLM: they build their own map of LLM strengths and weaknesses from their own cases.

Variants:
- Human-first, then LLM, then verdict: value proposition and interview summaries, with the human version written and set aside before prompting ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [12](https://ai-developer-tools.github.io/project/p1/), [14](https://ai-developer-tools.github.io/project/p1/)).
- Reflection essays that must give concrete "it did x but I expected y in context z" examples ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [5](https://ai-developer-tools.github.io/assignments/HW1/), [11](https://ai-developer-tools.github.io/assignments/HW1/)).
- Own code review compared with an AI review per pull request, with cited cases and written trust heuristics ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [28](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week7/assignment.md)); log of manual fixes needed after app generation ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [31](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week8/assignment.md)).
- Short presentation on how AI helped and where it did not ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [13](https://www.cs.cmu.edu/~mdtaylor/113/S26/project1.html)). After a hands-off agent build, fixed reflection questions tie each intervention to a gap in the student's own specification and ask whether the AI review found real bugs, missed problems, or raised false alarms ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [20](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html)).
- Curated "interesting moments" including unexpectedly good or bad LLM output and edits to guidance documents that stopped a repeated error ([MIT](courses/mit-61040-fa25-software_design.md) [15](https://61040-fa25.github.io/assignments/assignment-4a)).

Ideas addressed: 5-discovery (own map of strengths and weaknesses from own evidence), 3-strengths and 4-weaknesses together, 3.3-critic (AI review compared with own review).

### 12. The student writes and defends an own opinion on how to use AI

**Courses: 4** ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md), [MIT](courses/mit-61040-fa25-software_design.md), [UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md), [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md)).

The course asks the student, repeatedly, to state what they think about working with AI, grounded in their own experience, and grades the depth and concreteness of that opinion, not whether it agrees with the staff. The student's view is treated as a result of the course, because staff do not claim to know the right way of working.

Variants:
- Six reflection essays during the term, each on a different question from a shared bank, with a concrete-example bar for quality; groups turn the essays into presentations and lead a class discussion in which the author must defend the opinion ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [5](https://ai-developer-tools.github.io/assignments/HW1/), [9](https://ai-developer-tools.github.io/overview/), [10](https://ai-developer-tools.github.io/assignments/HW1/), [11](https://ai-developer-tools.github.io/assignments/HW1/)).
- Graded final reflection whose prompts include "what role LLMs should have in software development"; rote text is a listed failure ([MIT](courses/mit-61040-fa25-software_design.md) [18](https://61040-fa25.github.io/assignments/assignment-2)).
- Two short written reflections every week, a look-back and a look-forward, graded on thoughtful completion, not correctness; a low score leads to a conversation with staff ([UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md) [6](https://www.cs.umd.edu/class/fall2025/cmsc398z/grading.html), [7](https://www.cs.umd.edu/class/fall2025/cmsc398z/grading.html)).
- Short in-person presentation on how AI helped and where it did not ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [13](https://www.cs.cmu.edu/~mdtaylor/113/S26/project1.html)).

Ideas addressed: 5-discovery. The [CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) essays are also counted under practice 4 (written without AI) and practice 11 (concrete-example bar).

### 13. Guided experiment with a new AI workflow, plus a written report on the outcome

**Courses: 4** ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md), [CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md), [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md), [UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md)).

The course sets up an experiment with a way of working that staff do not fully understand either, and the deliverable is a report on the outcome in concrete terms: which manual steps disappeared, what broke, where the output drifted, which strategy got furthest. The course structure itself is built as an exploration path.

Variants:
- The weekly assignments raise agent autonomy step by step: prompts only, then an AI editor, then an agent on small tasks, then automations, then several agents at once, then a full app generator ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [3](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week2/assignment.md)).
- Several agents run at once on independent tasks; the report must state what concurrency "gained, risked or broke" ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [21](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week5/assignment.md)).
- For each automation the student describes the manual workflow before and the automated workflow after, naming the concrete steps saved ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [18](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/assignment.md)).
- The same application built in three stacks, one from an AI app generator, with a log of the manual fixes each version needed ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [30](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week8/assignment.md), [31](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week8/assignment.md)).
- A README generated from the codebase, later kept in sync with the live API description; the stated goal is to learn what AI can produce from code context and where it drifts ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [16](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week2/assignment.md)).
- Weekly pair and mob programming sessions rehearse the week's tool before the team uses it on the project; in a mob session the class dictates instructions to one student at the AI tool ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [8](https://ai-developer-tools.github.io/overview/)).
- One hour to build one given game with a self-chosen prompting strategy, after a lecture shows three strategies on another game; the next week staff compare which strategy worked best with which model, and the grade is for the hour and the prompt log, not for the game ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [4](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw2.html)).
- Students sign up for several competing AI tools and choose between them, instead of the class standardizing on one ([UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md) [4](https://www.cs.umd.edu/class/fall2025/cmsc398z/)).

Ideas addressed: 5-discovery, 2-context (mob sessions and the prompting-strategy exercise train turning a goal into an instruction for the LLM). [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [31](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week8/assignment.md) is also counted under practice 11.

### 14. The student selects from LLM-generated lists and justifies each choice

**Courses: 3** ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md), [CMU 17-445](courses/cmu-17445-sp26-ml_in_production.md), [UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md)).

When the LLM generates or prioritizes a set of items, the student must select a small subset or state, per item, whether and why they agree. Full reliance on the LLM's list is named a failure.

Variants:
- LLM writes, ranks, and schedules user stories; the student writes why they agree with each keep or drop ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [15](https://ai-developer-tools.github.io/project/p1/)).
- The student builds an LLM tool to scale a method, then must curate a small number of the most important results ([CMU 17-445](courses/cmu-17445-sp26-ml_in_production.md) [11](https://github.com/mlip-cmu/s2026/blob/main/assignments/I2_risk.md)).
- Review question on unneeded complexity the model added ([UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md) [10](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/wordSearch.md)).

Ideas addressed: 1-agency (agency in decisions), 4.2-priorities (what matters is decided by the student).

### 15. Deliberate limits on agent autonomy

**Courses: 3** ([UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md), [MIT](courses/mit-61040-fa25-software_design.md), [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md)).

The course, or the student, sets the level of autonomy the AI gets and justifies it. Autonomy is treated as a choice with backstops, not a default.

Variants:
- Staff-written coach-mode instruction file: the assistant asks and guides, and writes no complete function until the student has described the logic step by step ([UMD](courses/umd-cmsc398z-fa25-effective_ai_coding_assistants.md) [8](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week1/playWordle/.github/copilot-instructions.md)).
- A controlled tool with explicit context for the backend, a coding agent only for the frontend, in separate repositories so the agent cannot damage the backend ([MIT](courses/mit-61040-fa25-software_design.md) [9](https://61040-fa25.github.io/assignments/assignment-4b)).
- Per task: which permissions the agent got, why, and how the run was supervised; tests, linter, and formatter as backstops; label every agent diff; commit often as checkpoints ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [20](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week5/assignment.md), [22](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/assignment.md)).

Ideas addressed: 1-agency, 4-weaknesses (control of weaknesses in general).

### 16. LLM as critic, not only as generator

**Courses: 3** ([MIT](courses/mit-61040-fa25-software_design.md), [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md), [Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md)).

The student uses the LLM to review work against an explicit standard, and the review is set up to be independent of the generation. The student then judges the review itself.

Variants:
- Rubric and guidance documents given as context, then a critique of the student's own specification or design; the course states the LLM cannot reliably generate specifications in the course's design method, but can review them. The instructor's essay lists further critic modes: compare alternatives, build a refutation ([MIT](courses/mit-61040-fa25-software_design.md) [21](https://61040-fa25.github.io/assignments/assignment-4a)).
- A fresh agent session with no memory of the build reviews the code against the specification; the student then writes whether the review caught real bugs, missed problems, or flagged non-problems ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [19](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html), [20](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html)).
- An AI code review tool run on each pull request, then compared with the student's own review ([Stanford](courses/stanford-cs146s-fa25-modern_software_developer.md) [28](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week7/assignment.md)).

Ideas addressed: 3.3-critic, 3.1-expand (compare alternatives and build a refutation, [MIT](courses/mit-61040-fa25-software_design.md)).

### 17. Project idea checked by people, not by the LLM

**Courses: 3** ([MIT](courses/mit-61040-fa25-software_design.md), [CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md), [UCSD](courses/ucsd-cse190-sp26-generative_ai_and_programming.md); the UCSD link is inferred).

The project idea is checked by people before building: with evidence from real users, or with a staff review of the proposal. Two courses explicitly reject LLM output as evidence. The third puts a human check on the idea without giving an AI reason.

Variants:
- Cited evidence of authentic demand; "LLM output per se does not constitute evidence"; the LLM must not motivate the selection ([MIT](courses/mit-61040-fa25-software_design.md) [4](https://61040-fa25.github.io/assignments/assignment-1), [8](https://61040-fa25.github.io/assignments/assignment-1)).
- At least four interviews with real people; "Interviews with LLMs will not be accepted" ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [13](https://ai-developer-tools.github.io/project/p1/)).
- The proposal is confirmed, widened, or narrowed by staff before building, and at the end each proposal item is marked implemented, changed, or dropped ([UCSD](courses/ucsd-cse190-sp26-generative_ai_and_programming.md) [3](https://ucsd-cse-115-215.github.io/sp26/assignments/a4-assignment.html); inferred link).

Ideas addressed: 4.5-project-idea.

### 18. Small steps: one unit per prompt, test before continuing

**Courses: 2** ([MIT](courses/mit-61040-fa25-software_design.md), [CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md)).

The LLM is asked for one small unit at a time, and each unit is tested before the next prompt. The rule compensates for the LLM's tendency to produce large volumes of code and for wrong output when asked for everything at once.

Variants:
- One operation of one module, tested, then the next; "baby steps" per frontend component ([MIT](courses/mit-61040-fa25-software_design.md) [19](https://61040-fa25.github.io/assignments/assignment-4a)).
- One unit test per prompt, stated as a lesson from staff experience ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [23](https://ai-developer-tools.github.io/project/p5/)).

Ideas addressed: 4-weaknesses (volume and one-shot errors), 1-agency (each step tests the student's understanding, [MIT](courses/mit-61040-fa25-software_design.md)).

### 19. Exercises where the student may change the code only by re-prompting

**Courses: 2** ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md), [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md)).

For a bounded exercise the student may not edit generated output by hand; every change must go through the AI. This makes the quality of the student's prompts and specification the only lever and makes weak prompting visible.

Variants:
- Whole team project: generated code and diagrams may be changed only by re-prompting, using prompt templates taught in class; the final slides and postmortem must also be LLM-generated, with a signed statement that they were edited only by prompting ([CMU 17-316](courses/cmu-17316-fa25-ai_tools_for_software_development.md) [6](https://ai-developer-tools.github.io/project/p3/), [7](https://ai-developer-tools.github.io/project/p7/)).
- One assignment: hands-off build from a student-written spec, every intervention logged ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [18](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html)).

Ideas addressed: 2-context. Note: the [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) survey reports students stopped reading their code under this workflow, so the practice trades against 1-agency.

### 20. Every student must personally do each kind of work

**Courses: 2** ([MIT](courses/mit-61040-fa25-software_design.md), [CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md)).

A rule sets a floor on the student's own hands-on part: nobody may hand a whole kind of work, such as design or coding, to a teammate or to the AI. The floor is small and not measured exactly, but it is stated as a requirement and checked in the oral exam or in the team records.

Variants:
- In the team project, work may be split by area of the system, but every member must take part in problem framing, design, and coding ([MIT](courses/mit-61040-fa25-software_design.md) [30](https://61040-fa25.github.io/assignments/final-project-main)). Not tied to AI in the source.
- In the capstone, the student must write or substantially change at least some of the code themselves and must stop before the AI-built project grows past what they can explain without notes ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [15](https://www.cs.cmu.edu/~mdtaylor/113/S26/project3.html)).

Ideas addressed: 1-agency (no student is only an observer of a kind of work).

### 21. Per-assignment student survey published as a best-practices report

**Courses: 1** ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md)).

A survey after each assignment asks how much of the code the student read and understood, how satisfied they were, and what their AI workflow was, and collects free-text advice. Staff publish the results and the students' advice grouped into themes, so the practices a class discovers itself carry over to the next cohort. The published scores also show which workflows lowered understanding ([CMU 15-113](courses/cmu-15113-sp26-effective_coding_with_ai.md) [21](https://www.cs.cmu.edu/~mdtaylor/113/S26/bestPractices.html)).

Ideas addressed: 5-discovery (the class's own findings become the next cohort's guidance), 1-agency (illusion of competence made measurable).
