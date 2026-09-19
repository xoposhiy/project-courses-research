# Practices to Adopt for AI-Assisted Software Engineering Projects

Evidence from university courses in the 2025–26 academic year. Prepared 18 September 2026.

This document proposes practices for an undergraduate Software Engineering programme whose students already have a good programming foundation. Each proposal is a small synthesis of approaches found in the previously reviewed courses. Course examples describe the actual requirements, their differences from the proposal, and any relevant published reflection.

The ten practices develop the earlier report's eight recommendations. The last recommendation has been separated into participation across the engineering lifecycle and comparison of alternatives; verification is also made explicit. They form one shortlist, rather than a second catalogue of all course policies.

**How to read the evidence.** A published assignment establishes a requirement, not universal student compliance. “No outcome evaluation found” means none was found in the materials reviewed; it does not mean that no evaluation exists. Instructor observations and student self-reports are identified as such. Proposed additions are distinguished from documented course requirements.

One recurring source needs particular care: CMU 15-113's [Best Practices and Lessons Learned](https://www.cs.cmu.edu/~mdtaylor/113/S26/bestPractices.html#preface) is a preliminary synthesis of approximately 320 comments from nine surveys. Mike Taylor discloses that most of it was AI-generated and manually revised. Its observations are useful leads, not independently verified learning outcomes.

## 1. State what each student must demonstrate personally

**Practice to adopt.** For each milestone, specify the skill students must demonstrate and the evidence required. For example, students may delegate implementation while personally defining acceptance criteria, explaining a design trade-off, or assessing a proposed fix. Add a short individual task when the team project cannot reliably reveal that skill.

**Problem or rationale.** A working application does not show which participant learned to specify, design, diagnose or evaluate it. An explicit connection between a skill and its evidence helps prevent product completion from becoming the only objective.

**Course precedents and reported outcomes:**

- **MIT — 6.1040 Software Design, Fall 2025.** Individual problem sets explicitly target skills that students might not acquire through project work. This is a separate assessment component, rather than a personal evidence requirement attached to every milestone. AI is broadly allowed in this course, so “individual” does not imply “without AI.” **Outcomes:** no evaluation isolating the contribution of these problem sets was found. [Class Guide](https://61040-fa25.github.io/guide).

- **CMU — 15-113 Effective Coding with AI, Spring 2026.** HW8 requires students to write the specification themselves, delegate implementation, then assess an AI review. Protecting specification writing is an explicit learning objective. **Difference:** this is one deliberately constrained exercise, not a rule for every project phase. **Outcomes:** the survey reports that some students found the specification-writing time too short; the exercise also exposed risks of disengagement, discussed in Practice 3. [HW8](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html), [student reflection](https://www.cs.cmu.edu/~mdtaylor/113/S26/bestPractices.html#hw8).

- **CMU — 17-316/616 AI Tools for Software Development, Fall 2025.** Individual reflection assignments ask for a concrete experience: the situation, expectation and actual result. The evidence is the student's analysis of an event. **Difference:** reflection demonstrates interpretation of experience, not necessarily the ability to perform a technical task independently. **Outcomes:** no evaluation of learning gains from this requirement was found. [Reflection 1](https://ai-developer-tools.github.io/assignments/HW1/).

The general rule “name the personal skill and evidence for every milestone” is our proposed synthesis. The sources provide specific instances rather than a shared template.

## 2. Set AI permissions separately for each activity

**Practice to adopt.** Explain what AI may do in implementation, specification, testing, review and reflection. Connect restrictions to the skill being practised. Distinguish help with understanding or proofreading from generation of the submitted content.

**Problem or rationale.** A course-wide statement that AI is allowed leaves students uncertain about which intellectual work they must still perform. Different activities may need different rules, even within the same project.

**Course precedents and reported outcomes:**

- **University of Washington, Seattle — CSE403 Software Engineering, Winter 2026.** AI is allowed for project coding, source-code review and AI-powered project features, but not other deliverables or assignments. All team members must agree to its use, which must be disclosed. **Difference:** this course draws a comparatively restrictive boundary around non-code work. **Outcomes:** no evaluation of this policy's effect was found. [AI policy](https://courses.cs.washington.edu/courses/cse403/26wi/syllabus.html).

- **UC San Diego — CSE190/291P Generative AI and Programming, Spring 2026.** Agentic coding is encouraged; generated peer reviews and substantive interpersonal communications are restricted. Brainstorming and proofreading have more permissive rules. **Difference:** the protected activity is partly communication between people. **Outcomes:** no policy-specific learning evaluation was found. [Generative AI Use](https://ucsd-cse-115-215.github.io/sp26/index.html).

- **CMU — 17-316/616, Fall 2025.** HW1 prohibits AI composition of individual reflection, allowing limited proofreading. Conversely, Project 7 requires LLM-generated slides and scripts, revised through prompting. **Difference:** individual reflection and a team presentation/postmortem intentionally have different rules; there is no blanket prohibition on AI-written explanations. **Outcomes:** no comparative evaluation of these modes was found. [Reflection 1](https://ai-developer-tools.github.io/assignments/HW1/), [Final Demo and Postmortem](https://ai-developer-tools.github.io/project/p7/).

- **Harvard — CS50, Fall 2025.** External AI tools are permitted for the final project, unlike earlier course work. **Difference:** permission changes by course stage rather than solely by activity. This introductory-course sequence should be adapted to a stronger incoming cohort. **Outcomes:** no evaluation of this staged permission model was found. [Final Project](https://cs50.harvard.edu/college/2025/fall/project/).

## 3. Teach and rehearse a complete workflow with AI

**Practice to adopt.** Demonstrate a bounded task from planning through generation, inspection and verification. Show where the instructor stops the agent, questions an assumption, changes the context or rejects a suggestion. Follow the demonstration with supervised practice and discussion of what happened.

**Problem or rationale.** Access to an agent does not teach students how to direct it. A demonstration should make human decisions visible, including uncertainty and recovery from mistakes.

**Course precedents and reported outcomes:**

- **UC San Diego — CSE190/291P, Spring 2026.** The document-scanner lesson publishes an instructor's interaction with Claude. He stops premature implementation, requests a plan, records a working rule in CLAUDE.md, and questions API/type assumptions. **Difference:** this is a worked teaching example; it does not establish that every student's project follows the same process. **Reflection:** the instructor describes learning the API while resisting unsuitable defaults. This is first-person experience, not a student outcome study. [Live-Clauding a Document Scanner](https://ucsd-cse-115-215.github.io/sp26/lectures/02-document-scanner.html).

- **MIT — 6.1040, Fall 2025.** Assignment 4a recommends implementing and testing one action at a time, with explicit context and saved intermediate states. **Difference:** the source specifies a student workflow rather than documenting a live demonstration. **Reflection:** Daniel Jackson reports that many students bypassed the recommended context-control approach and damaged the framework without noticing. This is evidence that guidance alone did not ensure the intended behaviour. [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), [instructor's post-course essay, pp. 4–5](https://groups.csail.mit.edu/sdg/pubs/2025/jackson-ai-education.pdf).

- **CMU — 15-113, Spring 2026.** HW8 deliberately teaches a contrasting workflow: write a specification, allow relatively autonomous implementation, then use a fresh agent session for review. Students preserve the raw output and assess the review. **Difference:** it explores delegation with limited intervention, rather than continuous oversight. **Reflection:** some students reported reading less code and losing track of changes. This supports discussing the trade-off; it does not establish that delegation is always educationally harmful. [HW8](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html), [student feedback](https://www.cs.cmu.edu/~mdtaylor/113/S26/bestPractices.html#hw8).

- **University of Maryland — CMSC398Z Effective use of AI coding assistants and agents, Fall 2025.** Most programming work is intended to happen in class through paired coding, project discussion and mutual troubleshooting, followed by learning logs. **Difference:** this provides supervised practice and peer learning, not a prescribed demonstration sequence. **Outcomes:** no evaluation of the format's learning effect was found. [Course format](https://www.cs.umd.edu/class/fall2025/cmsc398z/).

## 4. Collect a short, inspectable record of important decisions

**Practice to adopt.** Ask students to preserve a small set of meaningful episodes: the goal, relevant context, AI contribution, their decision, and the check that followed. Link each episode to a stable version of the code or specification. Assess the quality of the explanation and evidence rather than the volume of logs.

**Problem or rationale.** The final repository hides rejected suggestions, incorrect assumptions and design changes. A selective record gives assessors something concrete to discuss and students something concrete to reflect on.

**Course precedents and reported outcomes:**

- **MIT — 6.1040, Assignment 4a, Fall 2025.** Students document 5–10 significant moments, explain them and link to immutable snapshots. The rubric also looks for incremental, reflective work. **Difference:** this is the closest direct match; it uses a specific course tool and repository structure. **Outcomes:** no separate evaluation of this recording requirement was found. Jackson's broader concerns in Practice 3 should not be treated as a test of the log format. [Assignment and rubric](https://61040-fa25.github.io/assignments/assignment-4a).

- **CMU — 17-316/616, Project 2, Fall 2025.** Students attach prompt/response logs and rationales to sections of generated specifications, and describe where human correction was needed. **Difference:** this requires substantially more documentation than the proposed selective record. **Observation:** staff explicitly report that LLM-generated sections can contradict one another. That explains what students must check; it is not an evaluation of the logging requirement. [Development Specification](https://ai-developer-tools.github.io/project/p2/).

- **CMU — 15-113, Project 3, Spring 2026.** The prompt log includes significant prompts, development history and identification of manually written or substantially modified code. **Difference:** it documents the process across the project and is also used as evidence of effort. **Outcomes:** no isolated assessment of prompt logging was found. [Capstone requirements](https://www.cs.cmu.edu/~mdtaylor/113/S26/project3.html).

The proposal to keep the record short is an adaptation supported most directly by MIT's selected moments. It is not a universal rule across the reviewed courses.

## 5. Check individual understanding alongside the project outcome

**Practice to adopt.** Use short individual conversations about the submitted code: explain a component, justify a decision, trace behaviour, or diagnose a failure. A small live modification can provide additional evidence of understanding. Keep the project assessment and the individual's demonstrated competence distinguishable.

**Problem or rationale.** A polished team product can conceal both uneven participation and dependence on AI-generated explanations. Direct questioning makes some of that understanding observable.

**Course precedents and reported outcomes:**

- **CMU — 15-113, Project 3, Spring 2026.** The capstone includes an in-person oral examination/presentation. Students must explain what parts of the code do and must have written or meaningfully modified some code themselves. **Difference:** the instructions do not establish a compulsory live modification during every examination. **Outcomes:** no evaluation isolating the effect of oral assessment was found. [Project 3](https://www.cs.cmu.edu/~mdtaylor/113/S26/project3.html).

- **UC San Diego — CSE190/291P, Spring 2026.** Staff may withhold an assignment score pending an interview about the code, design, generation process and individual contribution. **Difference:** this is a discretionary check, not a scheduled interview for every student at every milestone. **Outcomes:** no interview-specific evaluation was found. [Check-in Interviews](https://ucsd-cse-115-215.github.io/sp26/index.html).

- **CMU — Machine Learning in Production, Spring 2026, 17-445/645/745/11-695.** Some rubric items require oral explanations; laboratory demonstrations include questions, and students must present their own understanding even when collaboration is permitted. **Difference:** checking is embedded in multiple assessment activities. **Outcomes:** no estimate of its effect under AI use was found. [Grading and Labs](https://mlip-cmu.github.io/s2026/).

The live-modification element is a proposed extension. These sources directly support oral explanation and personal code work, but not a common policy of unseen modification tasks or delayed retention testing.

## 6. Require students to inherit and maintain existing code

**Practice to adopt.** Include an assignment where students receive an existing or unfinished repository and must understand, repair or extend it. Require preservation of useful existing behaviour and enough documentation for a subsequent developer.

**Problem or rationale.** Generating a new application can avoid the difficult work of understanding constraints and previous decisions. Maintenance creates a reason to read code, inspect architecture and manage the effects of changes.

**Course precedents and reported outcomes:**

- **CMU — 15-113, HW7, Spring 2026.** Students exchange unfinished projects; the recipient must retain at least 75% of the inherited code while improving it. **Difference:** this is a short peer handoff with a specific preservation threshold, rather than semester-long maintenance. **Reflection:** 33 respondents gave mean self-rated understanding of 3.7/7; comments stressed useful READMEs and unfinished-work lists. This reveals difficulties and perceived aids, not a measured improvement over another teaching format. [Code Handoff](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw7.html), [survey summary](https://www.cs.cmu.edu/~mdtaylor/113/S26/bestPractices.html#hw7).

- **National University of Singapore — CS2103/T Software Engineering, AY2025/26 Semester 1.** Teams extend AddressBook-Level3 and prepare it for future developers. Quality and maintainability matter more than novelty. **Difference:** everyone starts from an established teaching codebase, rather than another student's unfinished application. **Outcomes:** no AI-specific learning evaluation of this project structure was found. [Team Project Overview](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-overview.html), [AI-use policy](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html).

- **Cornell — CS5150 Software Engineering, Spring 2026.** The first sprint is devoted to understanding codebase architecture; suggested projects extend existing systems such as Gerrit, Airflow, Mattermost and Zulip. AI-assisted coding is allowed with disclosure. **Difference:** this is a graduate course, with larger repositories and client interaction. **Reflection:** the project page says some students value learning new tools, but provides no cohort or measurement; it does not establish an effect of the first sprint or AI policy. [Projects](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects.html), [Syllabus](https://www.cs.cornell.edu/courses/cs5150/2026sp/syllabus.html).

## 7. Make review and revision part of the assessed project

**Practice to adopt.** Set an initial working submission before the final deadline. Other students inspect the software and provide actionable feedback. Authors then fix, challenge or otherwise respond to the feedback. Assess the quality of reviewing separately from the quality of the reviewer's own project.

**Problem or rationale.** A final demo leaves little reason or time to respond to criticism. An assessed revision cycle creates practice in evaluating software, communicating defects and deciding which changes are justified.

**Course precedents and reported outcomes:**

- **UC San Diego — CSE190/291P, Spring 2026.** Assignments have initial, review and revised submissions. Review quality is graded, with separate minimum achievement levels for assignments and reviews. In A4, students submit a response plan and show changes prompted by review. **Difference:** the separate thresholds make reviewing a stronger requirement than simply allocating it a small percentage. **Outcomes:** no evaluation of learning gains from this structure was found. [Assessment rules](https://ucsd-cse-115-215.github.io/sp26/index.html), [A4 workflow](https://ucsd-cse-115-215.github.io/sp26/assignments/a4-assignment.html).

- **University of Washington, Seattle — CSE403, Winter 2026.** The project progresses through milestones, release stages and peer review, supported by recurring team and TA meetings. **Difference:** the reviewed material does not specify UCSD's independent grade threshold for reviewing. **Outcomes:** no evaluation of the review mechanism was found. [Project logistics](https://courses.cs.washington.edu/courses/cse403/26wi/project/index.html).

- **CMU — 17-214/514 Principles of Software Construction, Fall 2025.** The Santorini assignment sequence includes design, peer review, testing and later changes to the implementation. **Difference:** this is a structured software-construction sequence rather than an open project with a standard review/resubmission loop. **Outcomes:** no AI-specific evaluation of this sequence was found. [Course schedule and policies](https://cmu-17-214.github.io/f2025/).

## 8. Give every team member experience across the engineering lifecycle

**Practice to adopt.** Divide ownership by feature or subsystem while ensuring that every student participates in problem framing, design, implementation and verification. A small individual project before the team project can give everyone an initial experience of the complete cycle.

**Problem or rationale.** Efficient specialisation can leave a student practising only one activity throughout the course. AI may make this easier to overlook because a small number of people can produce a substantial application.

**Course precedent and reported outcomes:**

- **MIT — 6.1040, Fall 2025.** The final-project rules explicitly allow division by areas of the project but not exclusive division by activity: everyone must contribute to framing, designing and coding. The course first runs an individual project, followed by a team project using the same stages. **Difference:** these requirements closely match the proposal; they do not mandate a formal rotation schedule or equal numbers of commits. **Outcomes:** Jackson's post-course essay does not isolate the effect of this participation rule or the individual-to-team sequence. [Final Project expectations](https://61040-fa25.github.io/assignments/final-project-main), [Class Guide](https://61040-fa25.github.io/guide), [instructor reflection](https://groups.csail.mit.edu/sdg/pubs/2025/jackson-ai-education.pdf).

MIT is the directly documented match in the reviewed set. The existence of team projects elsewhere is not sufficient evidence that every student must perform every type of activity.

## 9. Assess the evidence used to trust generated work

**Practice to adopt.** Require students to show how they established that an implementation meets its specification: relevant test scenarios, static-analysis findings, specification checks or other appropriate evidence. Ask them to explain what each check covers and what remains uncertain.

**Problem or rationale.** A successful demo and a plausible explanation provide limited assurance. Verification should itself be an assessed engineering activity, including the judgement needed to interpret a tool's findings.

**Course precedents and reported outcomes:**

- **Stanford — CS146S The Modern Software Developer, Fall 2025.** Week 6 requires Semgrep scanning, at least three AI-assisted fixes, before/after changes, explanations of mitigation, and justification of ignored findings. The application and tests must still work. **Difference:** this is a security-focused exercise rather than a verification policy for every milestone. **Outcomes:** no published student outcome evaluation was found. [Scan and Fix Vulnerabilities](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week6/assignment.md).

- **MIT — 6.1040, Assignment 4a, Fall 2025.** Students check consistency between concept specifications and implementation, and provide normal-operation tests plus several additional scenarios. **Difference:** the verification targets the course's concept-design framework. **Reflection:** Jackson reports that few students used provided rubrics to critique ongoing work. This supports making checking concrete, but does not establish how much the required tests improved learning. [Assignment rubric](https://61040-fa25.github.io/assignments/assignment-4a), [instructor essay](https://groups.csail.mit.edu/sdg/pubs/2025/jackson-ai-education.pdf).

- **CMU — 17-316/616, Project 2, Fall 2025.** Students must reconcile LLM-generated specification sections and dependencies between user stories. **Difference:** the checked artifact is a specification, not executable code. **Observation:** staff note inconsistencies such as disagreements between diagrams and class descriptions; they do not report a measured learning effect. [Development Specification](https://ai-developer-tools.github.io/project/p2/).

- **UC San Diego — CSE190/291P, Spring 2026.** A lecture develops an agent-written concurrent allocator using tests, benchmarks and stronger checking tools. **Difference:** this is an instructor-led case study, not evidence that all projects used these tools. **Reflection:** the instructor describes a race missed by earlier runs that later caused a hang on another machine, despite an agent's reassuring explanation. This illustrates the limits of initial checks; it is not a student-outcome result. [Getting Confidence in Agentic Code](https://ucsd-cse-115-215.github.io/sp26/lectures/04-correctness.html).

## 10. Use AI to compare alternatives and improve the workflow

**Practice to adopt.** Reserve some project effort for a bounded comparison: two implementations, stacks, prompting strategies or development workflows. Have students explain the trade-offs and choose what to keep. An automation exercise can similarly compare the manual workflow with the new one.

**Problem or rationale.** Faster implementation creates an opportunity to explore more than the first workable answer. The educational value comes from judging alternatives, so require a reasoned comparison rather than simply counting generated variants.

**Course precedents and reported outcomes:**

- **Stanford — CS146S, Week 8, Fall 2025.** Students build the same application in three stacks, including a non-JavaScript language and at least one AI app generator. **Difference:** the rubric requires multiple implementations and descriptions, but does not establish the deeper comparative argument proposed here. **Outcomes:** no evaluation showing deeper understanding of the stacks was found. [Multi-Stack Build](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week8/assignment.md).

- **Stanford — CS146S, Week 4, Fall 2025.** Students create at least two developer automations and describe the workflow before and after using them. **Difference:** the object of comparison is the development process, not application architecture. **Outcomes:** student write-ups are required, but no aggregated result about learning or productivity was found. [Developer Automations](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/assignment.md).

- **NUS — CS2103/T, AY2025/26 Semester 1.** The AI policy recommends writing one's own solution and then comparing it with generated alternatives. **Difference:** this is an example of good use, not a compulsory graded comparison. **Outcomes:** no evaluation of this recommendation was found. [AI-use examples](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html).

- **CMU — 15-113, Spring 2026.** The schedule includes building Tetris using different prompting strategies and discussing the experience. HW8 asks students to judge when a plan–delegate–review workflow is appropriate. **Difference:** these activities compare ways of using AI rather than technology stacks. **Reflection:** portfolio-task feedback includes conflicting preferences for detailed constraints versus greater AI freedom. This supports examining context-dependent trade-offs, not declaring one strategy best. [Course schedule](https://www.cs.cmu.edu/~mdtaylor/113/S26/), [HW8](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html), [student feedback](https://www.cs.cmu.edu/~mdtaylor/113/S26/bestPractices.html#project1).
