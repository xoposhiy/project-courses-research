# MIT 6.1040 Software Design, Fall 2025

## Course card

- **University and course**: Massachusetts Institute of Technology, 6.1040 *Software Design* (also numbered 6.104).
- **Term**: Fall 2025 (September to December 2025).
- **Level and audience**: junior and senior undergraduates. Prerequisites: a software construction course (specifications, invariants, JavaScript, Node) and discrete mathematics.
- **Project format**: two projects with the same steps. First an individual project over nine weeks, then a team project in teams of four over five weeks. Students choose their own problems. AI is encouraged in all work.
- **Grade structure**: personal project 45%, team project 30%, two individual problem sets 20%, technology preps 5%. Team members get the same grade unless effort is very unequal.
- **Sources**: [Class Guide](https://61040-fa25.github.io/guide) (policies, AI policy, grading), [Assignments list](https://61040-fa25.github.io/assignments), [Assignment 1: Problem Framing](https://61040-fa25.github.io/assignments/assignment-1), [Assignment 2: Functional Design](https://61040-fa25.github.io/assignments/assignment-2), [Assignment 3: An AI-Augmented Concept](https://61040-fa25.github.io/assignments/assignment-3), [Assignment 4a: Backend Concept Coding](https://61040-fa25.github.io/assignments/assignment-4a) (LLM workflow), [Assignment 4b: Frontend UI Coding](https://61040-fa25.github.io/assignments/assignment-4b) (coding agent), [Assignment 4c: Completing Your Personal Project](https://61040-fa25.github.io/assignments/assignment-4c), [Final Project](https://61040-fa25.github.io/assignments/final-project-main) (team project), [Problem Set 1](https://61040-fa25.github.io/assignments/problem-set-1), [FAQ](https://61040-fa25.github.io/faq), Daniel Jackson, [LLMs are not calculators](https://groups.csail.mit.edu/sdg/pubs/2025/jackson-ai-education.pdf) (instructor essay, Dec 2025).

Note on terms: the course calls its unit of functionality a "concept" and its composition rules "syncs". Below these are called "module" and "composition rule". The staff-built command-line LLM tool (called "Context" in the course) is called "the staff-built LLM tool". Quotes keep the original words.

## Practices

### Course structure

#### 1. Individual project before the team project

Each student completes a full project cycle alone, then repeats the same cycle in a team of four on a more ambitious problem. The cycle covers problem framing, design, implementation, design document, and reflection. The team project adds a team contract, an ethical analysis, and user testing. The guide calls the first project a dry-run whose lessons are applied in the second.

> "The steps for both projects will be the same. The first project will be done individually, and the second in teams of four." — [Class Guide](https://61040-fa25.github.io/guide), "Projects".

#### 2. Problem sets for skills the project may skip

Two individual problem sets, without collaboration, train the core design skills that project work might not force every student to practice. The sets ask students to read a given specification, find invariants, fix an operation, write a specification, and compose modules. They are due before the design assignment. The general AI policy still applies, so "individual" does not mean "without AI".

> "There are a few problem sets that students will work on individually, whose purpose is to inculcate some important skills that might not otherwise be acquired in the context of project work." — [Class Guide](https://61040-fa25.github.io/guide), "Problem sets".

> "we request that you do not collaborate on this assignment so that you learn the ideas well." — [Problem Set 1](https://61040-fa25.github.io/assignments/problem-set-1).

#### 3. One new technology per implementation stage

The individual implementation is split into three assignments so that each introduces few new technologies: backend modules first, then the frontend, then backend composition and deployment. Each stage is also paired with a different way of using AI (see practice 9). The team project drops the staging and asks for agile sprints with frontend and backend developed together.

> "we have devised a plan for you that will allow you to focus on a few key skills at a time, and to avoid having to become familiar with too many technologies at once." — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "The big picture".

#### 4. Self-chosen problem under published criteria

Students pick their own project problem, and the assignment publishes what makes a project acceptable: usable and complete, authentic demand, dynamic state, limited use of technologies outside the course. The first assignment is a funnel: many candidate domains and problems, a justified selection, stakeholders, cited evidence that the problem is real, candidate features. LLM output does not count as evidence. The design assignment adds "a real app, not a proof of concept" and warns against over-ambition.

> "Your solution should fulfill some *authentic demand* (as discussed in class), bringing real value to its users." — [Assignment 1](https://61040-fa25.github.io/assignments/assignment-1), "Project Criteria".

> "LLM output per se does *not* constitute evidence." — same page, "Evidence".

#### 5. Rationale section in each assignment

Coding assignments open with a section that explains why the staff require a particular way of working, before stating the requirements. Both coding assignments have a section "The Philosophy Behind This Assignment": incremental work, reflective practice, why LLMs matter, their risks and cost, why a controlled tool is used for the backend and a coding agent for the frontend. The section invites feedback through the survey and the forum.

> "Before explaining the very particular way in which we expect you to work on this assignment, we’d like to explain our rationale: what we’re trying to accomplish and why we believe this is a good approach." — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a).

#### 6. Rubrics with common failures; length penalized

Every assignment ends with a rubric table that names a skill, describes good work, and lists examples of falling short; grading favors quality and penalizes needless length. Students are told to use rubrics as checklists and as LLM context for self-critique (practice 21). The FAQ names "mastery over volume" as a change for this year. A nearly complete set of modules can still earn a perfect grade if the quality and the recorded process are good.

> "Be aware that grading will favor submissions that are well organized and clear, and gratuitous length will be counted against you." — [Assignment 1](https://61040-fa25.github.io/assignments/assignment-1), "Advice".

### AI use rules

#### 7. AI allowed everywhere with survey disclosure

Students may use an LLM or coding agent in any work, and if they do, they briefly describe how in a survey submitted within 24 hours after each deadline, as they would credit a human collaborator. Every submission has three steps: push and record the commit hash, submit a form with the hash, fill in the survey. The disclosure lives in the survey, not in the deliverables. The course calls itself experimental because AI tools change quickly.

> "You are encouraged to use an AI agent or LLM in any of your work in the class, although if you do, you must briefly describe in the assignment survey saying how you used it [...]" — [Class Guide](https://61040-fa25.github.io/guide), "Using LLMs".

#### 8. Critical use of AI as a graded skill

The problem-framing rubric has a row "Critical Use of Tools" that rewards personal judgment over AI output and lists unmodified or uncritical LLM output as a failure. The advice says an LLM may help find problems, evidence, comparable products, and names, but must not replace the student's judgment in drawing lessons from experience or in motivating selections.

> "Demonstrates thoughtful use of LLMs and external resources, but applies personal judgment and insight rather than copying output." — [Assignment 1](https://61040-fa25.github.io/assignments/assignment-1), "Rubric".

> Failure: "Over-relies on AI-generated text with little personalization, or submits uncritical/unmodified LLM output."

#### 9. Controlled LLM tool for backend, coding agent for frontend

Students must build the backend with a staff-built LLM tool that makes them choose the context explicitly and records every call, and are asked to build the frontend with a coding agent, to experience both modes. The backend and frontend live in separate repositories so the agent cannot damage the backend. For the frontend the advice is "baby steps", component by component, pointing the agent to relevant files. Students may still use the staff-built tool for the frontend if they prefer.

> "Whereas you used the Context tool to generate code for your backend, in this assignment you’ll use an agentic tool (such as Cursor) to “vibe code” your front end." — [Assignment 4b](https://61040-fa25.github.io/assignments/assignment-4b), "The big picture".

#### 10. No coding agents on the modular backend

In the team project, the staff recommend not using a generic coding agent for the backend and name a specific model that works better for coding. The reason given: coding agents modify files beyond the request and undermine module boundaries, which matters more in a team. The course cannot fund coding agents, so their use on the frontend is at the student's cost.

> "We recommend that you do *not* use a generic agentic tool (such as Copilot or Cursor) for the back end as it will tend to violate the concept conventions and complicate the structure." — [Final Project](https://61040-fa25.github.io/assignments/final-project-main), "Using LLMs".

#### 11. Equal LLM budget for all students

Every student receives the same LLM credits, and the required tool keeps context small so the credits last; the course states that paying for more AI must not give an advantage. The staff-built LLM tool sends only the files the student links, so a call for one module includes that module's specification and guidance documents, not the whole codebase. Cost-control advice for AI features inside the app: limit prompt length, cap output tokens, start with cheaper models.

> "Clearly it would be unacceptable for some students who were willing to pay higher prices to have an advantage in the class." — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "The costs of LLM coders".

#### 12. Same process record for hand-written code

A student may write all code by hand, but must still follow the incremental workflow and snapshot specifications and implementations with the staff-built LLM tool, so the process record exists either way. The tool can save an immutable snapshot of a file without calling the LLM. The process rubric (practice 14) applies to everyone, which keeps grading equal between students who use AI and students who do not.

> "If you prefer to write your code entirely by hand, you are welcome to do so, but you should still follow the incremental and reflective workflow, taking snapshots of versions of your specifications and implementations [...]" — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Must I code with an LLM?".

### Process evidence

#### 13. Immutable record of every LLM call

The staff-built LLM tool writes every call, its full context, and snapshots of every linked file into a repository folder that students must never edit and that graders inspect. The student writes a prompt as a Markdown file with links to specifications, code, and guidance documents; the tool assembles the context from these links. The repository has three areas: source code, design documents (notes, prompts, specifications, guidance documents), and the record folder. Students cite specific versions by linking to snapshots. Jackson's essay states the design goal: a complete provenance chain from inputs to outputs.

> "You should **never** modify, move, delete or rename any of the files in this area. They will comprise a complete record of your development history, with multiple useful purposes." — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Repository organization".

#### 14. Incremental work graded from snapshots

A rubric row checks that the record folder is intact and contains enough snapshots to show small, reflective steps. The course names failure to work incrementally as the most common cause of student frustration, made worse by LLMs that produce large volumes of code. Grading the record makes the process visible instead of judging only the final artifact.

> "Context area has not been corrupted or modified and includes snapshots that confirm that you worked in a reflective and incremental way." — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Rubric", row "Incremental work".

#### 15. Curated "interesting moments" with snapshot links

Students submit a design file with 5 to 10 pointers to notable moments in development, each with a couple of sentences and a link to an immutable snapshot, not to a file that may change. Examples given: a specification found wrong, a test exposing a subtle bug, unexpectedly good or bad LLM output, a simplification, editing a guidance document to stop a repeated LLM error. Moments without an LLM call are snapshotted with the tool's save option. Work is judged on the quality of these moments rather than on the number of modules finished.

> "a design file that explains changes that you made to the design of the application as a whole, and that includes 5-10 pointers to interesting moments (explained below) in your development, each with a couple of sentences explaining it." — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Deliverables".

#### 16. Design change log with rationale

Students record every significant design change and its reason while implementing, and at the end turn the notes into a one-to-two-page document on how the final design differs from the initial one. A design file per module and one for the whole app is required in the backend assignment; the completion assignment asks for the consolidated document with links to snapshots. The rubric penalizes notes that are unorganized, verbose, or superficial. The team project repeats this as a "Design summary".

> "you record any significant design changes in files in your repo also (as explained below), summarizing not only the changes but also your rationale for making them." — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Evolving your design".

#### 17. Single repository as notebook and portfolio

All individual work lives in one GitHub repository that serves as a design notebook during the term and a portfolio at the end, with a README that indexes all artifacts. Each submission is a commit hash. Non-code artifacts are Markdown with images. The team project uses two repositories (frontend and backend) with all non-code artifacts in the backend one.

> "All of your individual work for the term will be within a single GitHub repository that will act both as a design notebook and (when completed) as a portfolio of your work." — [Class Guide](https://61040-fa25.github.io/guide), "Student repositories".

#### 18. Design notebook and graded final reflection

Students are advised to keep a notebook of ideas, questions, and decisions from the design stage on, and the personal project ends with a graded half-to-one-page reflection where a rote text is a listed failure. One suggested notebook variant: record thinking as a dialog with an LLM. Reflection prompts include mistakes and how to avoid them, how each tool was used, and what role LLMs should have in software development.

> "we strongly recommend that you keep a design notebook throughout your project of your ideas, questions and decisions as you go along." — [Assignment 2](https://61040-fa25.github.io/assignments/assignment-2), "Keeping a design notebook".

> Failure: "The reflection document is rote and superficial, or makes generic observations that do not seem to reflect real learning." — [Assignment 4c](https://61040-fa25.github.io/assignments/assignment-4c), "Rubric".

### Working with the LLM

#### 19. Each step as a testable hypothesis

Students implement one operation of one module, test it, then move on, treating each step as a hypothesis that their understanding is correct. The suggested loop: generate code for one specification, generate tests, run them, adjust the design or specification, regenerate. For the frontend the same advice is "baby steps" per component.

> "work incrementally, one tiny bit at a time, treating each step as a hypothesis (that your understanding is correct) that you can test before you continue." — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Working incrementally".

#### 20. Explicit context and shared guidance documents

Students assemble the LLM context themselves from linked files, and when the LLM repeats a mistake they add or edit a guidance document that tells it not to and include it in later prompts. The staff provide guidance documents on the design method and its implementation pattern. Follow-ups are done by appending to the same prompt file (for example, pasting compiler errors) and re-running. When results are surprising, students open the recorded call and check what the context actually contained.

> "If this happens, you should add a background document instructing the LLM not to make this mistake, and include it in your context. Alternatively, you can edit the relevant background document." — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Updating background material".

#### 21. LLM as critic with the rubric in context

Students are advised to give the LLM the grading rubric and guidance documents and ask for a critique of their own specification or design, not only for generation. The design assignment says the LLM cannot generate specifications in the course's method reliably, but can review them when given the rubric and guide. Jackson's essay lists further modes: critique a hand-made solution, compare alternatives, build a refutation.

> "you can create a prompt that points to the backgrounds docs about concept design, and to the rubric, and that asks for a critique of a concept spec you’ve written." — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Exploit background materials as prompts".

#### 22. Independent modules for small LLM context

The course requires a design method whose modules are fully independent (no calls between them, no reading of each other's state), so that implementing one module needs only that module's specification in the LLM context, not the codebase. The rubric row "Modularity" grades independence. Jackson's essay adds that independence lets team members and coding agents work in parallel without interfering.

> "the modularity of concept design allows the contexts presented to the LLM in coding tasks to be dramatically smaller than in conventional developments." — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Context and concept design".

### Verification

#### 23. Specification kept consistent with code

Each module is submitted with a specification that must be complete and match the implementation, and outdated or vague specifications lower the grade even if the code works. The specification is the artifact the student controls and the LLM consumes, so it must be kept accurate as the design evolves. Students may use the LLM to review or help write specifications.

> "Your grade will suffer if you hand in specifications that are vague or out-of-step with the implementations, even if you have working implementations." — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Deliverables".

#### 24. Typical-scenario test plus variant scenarios

For each module, students submit programmatic tests: one sequence for the typical usage scenario and a few for less common cases, with every operation succeeding in at least one test. Tests must decide pass or fail in code and also print inputs and outputs so a human can follow the run; the console output is saved and submitted. Variant scenarios probe corners: undo by deletion, repeated operations, expected errors. State may be set up only through the module's own operations.

> "For each concept, you should have one test sequence for the operational principle, and 3-5 additional interesting scenarios. Every action should be executed successfully in at least one of the scenarios." — [Assignment 4a](https://61040-fa25.github.io/assignments/assignment-4a), "Testing concepts".

#### 25. Failure tests and validators for AI features

When students add an LLM-powered feature to their app, they must keep it usable without AI, write scenarios that try to make the AI fail, iterate on prompts, and add code validators that reject wrong LLM output. Deliverables: the original and augmented specification, sketches showing what context the LLM gets and how the user confirms results, three challenging scenarios with three prompt variants and a write-up of what remains broken, three plausible failure kinds with validators. The rubric also expects timeouts, retries, and cost control.

> "Devise some test cases that are more challenging and see if you can get the AI augmentation to fail. Then try to mitigate these failures by experimenting with variations of the prompt [...]" — [Assignment 3](https://61040-fa25.github.io/assignments/assignment-3), "Tasks".

> "add validators for them in your code, which check whether the LLM’s output has the issue and throws an error if it does." — same page.

### Pacing and checkpoints

#### 26. Non-postponable mid-assignment check-in

The two-week frontend assignment requires a check-in after one week, a one-paragraph user journey and a short screen recording of a rough working prototype, and late days cannot be used for it. The check-in gets a check, check-plus, or check-minus that feeds into the grade. The recording should take little effort; its purpose is to show progress.

> "To ensure that you are making good progress, you are required to submit a checkin half way through. [...] You may not use slack days to postpone this checkin, but you can use them for the final deliverable." — [Assignment 4b](https://61040-fa25.github.io/assignments/assignment-4b), "Due dates".

#### 27. Alpha and beta checkpoints with deployed app

At two team checkpoints, each team submits commit hashes, a public URL of the deployed app, a narrated screen recording of at most two minutes, and an updated development plan, with no lateness allowed on any team deliverable. Alpha must show a minimal viable product; beta must be near complete so the last week goes to user testing. The plan update states progress, what remains, and what changed.

> "Note that no lateness can be permitted in order to ensure that projects stay on track." — [Final Project](https://61040-fa25.github.io/assignments/final-project-main), "Due dates".

#### 28. Public deployment and demo with backend trace

Both projects end with the app deployed at a public URL and a narrated demo video, and for the personal project students also save the backend's console trace of incoming requests during the demo and submit it. The staff-built backend server prints every incoming request. The trace ties the video to real backend behavior and lets graders see that access control runs on the backend, not only in the frontend.

> "**Save the trace** of incoming actions to the back end by copy-pasting the console output to a file." — [Assignment 4c](https://61040-fa25.github.io/assignments/assignment-4c), "Make a final video".

#### 29. Minimum grade to join a team

A student below a C before the team project cannot join a team; the staff may offer a completion plan instead, finishing the individual assignments late with the final grade capped at C. Students cannot choose the completion plan themselves.

> "If, just prior to the team project, your class grade is not a C or better, you will not be able to join a project team." — [Class Guide](https://61040-fa25.github.io/guide), "Completion plan".

### Team project

#### 30. Division by area, not by activity

Teams may split work by area of the system, but every member must take part in every kind of activity: problem framing, design, coding. A member may oversee an activity while the others still contribute to it. All members get the same grade unless effort is very unequal; teams must report inequity early. The team contract and the development plan record how tasks are assigned.

> "you may not divide by activity: every member must be involved in problem framing, designing, coding, and so on." — [Final Project](https://61040-fa25.github.io/assignments/final-project-main), "Expectations".

#### 31. Private team contract

Before team work starts, each team writes a half-page contract on effort, goals, meetings, quality control, task assignment, missed deadlines, and decision making, and submits it through a form rather than storing it in the repository. The staff say contracts take little time and reduce derailment by misunderstandings. Quality options listed: code review, team review meetings, pair programming.

> "Because of its potentially personal nature, you should not place your team contract in your repo." — [Final Project](https://61040-fa25.github.io/assignments/final-project-main), "Team contract".

#### 32. Team-run mentor meetings with graded records

Each team meets its TA mentors weekly, prepares the agenda, progress report, design changes, and issues, writes down plans and decisions, and keeps a folder per meeting in the repository whose quality is graded. Every member attends every meeting. The mentor is a consultant, not a grader. Office hours stop when the team project begins.

> "It is your job to structure the meetings and make sure that they are helpful to you; you should think of your mentor as a consultant rather than a grader." — [Final Project](https://61040-fa25.github.io/assignments/final-project-main), "Project updates".

#### 33. Development plan with risks and fallbacks

The team's design includes a plan of which features ship at each stage, who is responsible, and the key risks with mitigations and fallback options, updated at each checkpoint. Advice: be ambitious but control risk; if a design depends on an uncertain API or technology, include a fallback; if an activity runs long, cut scope rather than push ahead.

> "a discussion of the **key risks** you face and how you will mitigate them (and your fallback option will be if something turns out to be unimplementable)." — [Final Project](https://61040-fa25.github.io/assignments/final-project-main), "Functional design".

#### 34. Peer critique graded on helpfulness

Each team makes a 3-minute pitch video shown in class, and each student individually critiques one other project in three sections ("I like", "I wish", "I wonder"), graded mainly on how helpful the critique would be. The critique is at most half a page. The critic reviews the video, problem framing, and design. Each project receives three or four critiques, delivered before the alpha checkpoint so teams can act on them.

> "In grading this, we will consider primarily how *helpful* your critique is likely to be the receiving team." — [Final Project](https://61040-fa25.github.io/assignments/final-project-main), "Peer critique".

#### 35. User testing before final submission

In the last week, each team runs one-hour sessions with two users from their domain, observes them using the app, and fixes usability issues before the final submission. Deliverables: a task list with rationale, and a summary of lessons per user. The beta checkpoint is timed to leave the last week free for this.

> "In the last week of the project, you will conduct some user tests in which you’ll observe people using your app, and you’ll be able to fix usability issues that arose prior to completing the project." — [Final Project](https://61040-fa25.github.io/assignments/final-project-main), "Activities".

#### 36. Ethical analysis in problem framing

The team's problem framing includes an analysis using the value sensitive design framework: stakeholders, impacts, possible harms of apps of this kind, and lessons for the team's own design. The design summary must say how the design addresses the concerns raised. The FAQ notes this year shifts emphasis from ethics toward design value compared with earlier years.

> "you’ll conduct an ethical analysis using a framework called *value sensitive design*, identifying some of the possible undesirable consequences of the kinds of app that address the problem you’re working on" — [Final Project](https://61040-fa25.github.io/assignments/final-project-main), "Activities".

#### 37. Cross-team module reuse with extra credit

Teams may reuse any module implemented by any student or by the staff, and a team that publishes a module on the forum gets extra credit if another team uses it. The staff share their own modules (authentication, file upload). Reuse with credit is allowed throughout the course; students must still write up their own work and name collaborators.

> "post a message about it on Piazza and you will receive extra credit if the concept is used by another team!" — [Final Project](https://61040-fa25.github.io/assignments/final-project-main), "Reusing and sharing concepts".

#### 38. Per-member reflection in the team report

The team's final report includes a design summary of changes since the initial design and a reflection on what was learned, with a subsection per team member. The reflection is the only individual text among team deliverables with a shared grade. The design summary draws on the mentor meeting notes.

> "a reflection on your experiences in the final project, focusing on what you learned from the experience, divided into a subsection for each team member." — [Final Project](https://61040-fa25.github.io/assignments/final-project-main), "Project report".

### Community

#### 39. Public project questions, non-anonymous feedback

Because every project is different, students are strongly encouraged to ask about their design and code publicly on the class forum, and course feedback is collected in every post-assignment survey and directly rather than through an anonymous line. Debugging questions must be specific to get an answer. For problem sets, which are the same for everyone, solutions may not be posted publicly. The guide argues that giving candid feedback is a skill to learn. Participation is not graded.

> "since all the assignments in this class involve working on projects that are chosen by students, there are no “answers” to give away. We therefore **strongly** encourage students to ask questions about their design and coding work in public on the forum." — [Class Guide](https://61040-fa25.github.io/guide), "Asking questions about your work".

## Instructor observations, reflection, and open questions

All items are instructor observations from Daniel Jackson's essay [LLMs are not calculators](https://groups.csail.mit.edu/sdg/pubs/2025/jackson-ai-education.pdf) (26 Dec 2025), unless marked otherwise. The essay says: "This piece is not a systematic analysis, but more a collection of personal reflections" and "We are about to embark on analyzing the results." No published analysis was found as of 2026-09-18.

- **Most students bypassed the controlled tool and did not notice the damage** (practices 9, 13, 20). The number is the author's impression, not a measurement. > "The temptation to skip the work of identifying the context proved irresistible, and almost 80% of the students seem to have succumbed and in so doing broke the underlying framework [...] these students apparently didn’t even notice that Cursor had messed up."
- **Very few students used the rubrics for self-critique** (practices 6, 21). > "even though we provided students with rubrics and suggested they be used to evaluate ongoing project work, very few students took advantage of this—which is especially surprising given that the grading depended on the same rubrics."
- **Students did not check LLM claims against documentation.** > "Students in our class insisted, for example, that the framework we told them to use lacked certain features, even though a Google search would have found these features immediately in publicly available documentation."
- **TAs named reading documentation as the skill that separated successful students.** > "they surprised me by pointing to rather a basic one: the ability to locate and read relevant documentation."
- **Forum engagement fell** (practice 39). > "Student engagement in our class forum was much lower this year than in previous years. Whether this is due in part to LLM use is unclear."
- **Students complained about waiting for the LLM.** Student self-report relayed by the instructor. > "Some of our students grumbled that using LLMs in coding means spending most of your time waiting for the LLM to respond."
- **Instructor's conclusion for tooling.** > "students should use tools that require them to specify query context explicitly. Ideally, tools should preserve a complete provenance chain, showing which inputs led to which outputs."
