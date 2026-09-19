# CMU 17-316 / 17-616 AI Tools for Software Development, Fall 2025

## Course card

- **University and course**: Carnegie Mellon University, 17-316 / 17-616 *AI Tools for Software Development* (undergraduate / graduate cross-listing). First offering. Instructors Andrew Begel and Austin Henley, Software and Societal Systems Department.
- **Term**: Fall 2025.
- **Level and audience**: no prerequisites, but the syllabus expects experience with Python, setting up development environments, reading documentation, and learning new libraries. A 12-unit course, about 12 hours of work a week.
- **Project format**: teams of 2-3 students, assigned by the instructors, build one web application over the whole term in six two-week sprints (requirements, specification, frontend, backend, testing, deployment), ending in a final demo and postmortem. Each team picks an existing startup and builds an imitation of its main product. AI is used for nearly all project work; six individual written reflections are the one deliverable done without AI.
- **Grade structure**: approximately 46% in-class activities, 42% course project, 12% homework essays (reflections).
- **Sources**: [Syllabus](https://ai-developer-tools.github.io/syllabus/) (policies, grading, AI policy, academic honesty), [Overview](https://ai-developer-tools.github.io/overview/) (course structure), [Teamwork Practices](https://ai-developer-tools.github.io/teamwork/), [Staff](https://ai-developer-tools.github.io/staff/), [Reflection 1 (HW1)](https://ai-developer-tools.github.io/assignments/HW1/), [Reflection 2 (HW2)](https://ai-developer-tools.github.io/assignments/HW2/), [Reflection 3 (HW3)](https://ai-developer-tools.github.io/assignments/HW3/), [Reflection 4 (HW4)](https://ai-developer-tools.github.io/assignments/HW4/), [Reflection 5 (HW5)](https://ai-developer-tools.github.io/assignments/HW5/), [Reflection 6 (HW6)](https://ai-developer-tools.github.io/assignments/HW6/), [Project 1: Requirements Engineering](https://ai-developer-tools.github.io/project/p1/), [Project 2: Development Specification](https://ai-developer-tools.github.io/project/p2/), [Project 3: Frontend Development](https://ai-developer-tools.github.io/project/p3/), [Project 4: Backend Development](https://ai-developer-tools.github.io/project/p4/), [Project 5: Testing](https://ai-developer-tools.github.io/project/p5/), [Project 6: Deployment](https://ai-developer-tools.github.io/project/p6/), [Project 7: Final Demo and Postmortem](https://ai-developer-tools.github.io/project/p7/), Marylee Williams, [CMU Students Put AI Coding Tools to the Test](https://www.cs.cmu.edu/news/2025/ai-tools-for-software) (CMU School of Computer Science news, 14 Oct 2025), Austin Henley, [Assessing students in the era of AI](https://austinhenley.com/blog/aihomework.html) (10 Aug 2025, written before the course).

## Practices

### Course structure

#### 1. Two-week cycle alternates pair work, mob work, and a project sprint milestone

The term is organized as a repeating two-week block: the first Monday has a pair-programming activity, the first Wednesday has a team meeting, a mini-lecture and a mob-programming activity, homework is a reflection essay; the second Monday repeats team meeting, lecture and mob programming, the second Wednesday is for student presentations and discussion, and the two-week block ends with a project sprint milestone. There are no exams; the final exam slot is used for final project presentations.

> "The course calendar follows a two-week cycle: Monday: Pair programming activity. Wednesday: Team meeting, mini-lecture, and mob programming activity. Homework: Reflection essay. [...] Project: Two-week sprint milestone." — [Overview](https://ai-developer-tools.github.io/overview/), "Course Structure".

#### 2. Team project imitates an existing startup's product chosen by the team

Each team builds a web application over the whole term that copies the main product of a real startup of the team's choosing, instead of inventing an original idea. The first project deliverable asks the team to state that startup's big idea, problem, and solution, then compare a human-written and an LLM-written value proposition for the team's own version of the product.

> "You and your team will be spending the rest of the semester building all of the features that are present in the main product of the startup you have chosen." — [Project 1: Requirements Engineering](https://ai-developer-tools.github.io/project/p1/), "Project Context".

#### 3. Grade split across in-class activities, project, and homework, with a guest-lecture attendance penalty

The course grade is about 46% in-class activities, 42% the team project, and 12% homework reflection essays, with no exams. Attendance at guest lectures is mandatory and an unexcused absence lowers the overall course grade, separately from the three main components.

> "Evaluation will be based on the following approximate distribution: 46% in-class activities, 42% course project, and 12% homework essays. [...] Attendance is required for guest lectures. Absences during guest lectures (without previously arranged accommodations) will result in a deduction in your overall course grade." — [Syllabus](https://ai-developer-tools.github.io/syllabus/), "Grading".

#### 4. Fixed instructor-assigned teams graded as a unit, with an override for uneven effort

Teams of two or three are assigned by the instructors, not chosen by students, and stay fixed for the course project and in-class activities. Team assignments are normally graded as one team grade, but the staff reserve the right to override that grade or switch to peer grading when a team's contribution is uneven.

> "Teams of 2-3 students will be assigned by the instructors to work on the course project as well as in-class activities. Some assignments will be graded as a team, although we reserve the right to override these grades or to institute peer grading in problematic situations, as detailed in the Team Policy." — [Syllabus](https://ai-developer-tools.github.io/syllabus/), "Teamwork".

### AI use rules

#### 5. Individual written reflections banned from AI, unlike nearly everything else in the course

Six individual homework essays, reflecting on the student's own experience with AI tools that term, must be written without any AI, generative AI, or LLM assistance; only grammar-only proofreading tools are allowed. This is the one deliverable that excludes AI, set against a course where AI is expected in almost all other work. Students must also be ready to defend the opinions in the essay during in-class activities, so the writing must reflect what they actually believe, not a generated draft.

> "You should not use any AI, GenAI, or LLM to write this essay. You may use any tool you wish to proofread your essay for grammar, but do not use any tool that creates or changes the meaning of what you have written." — [Reflection 1 (HW1)](https://ai-developer-tools.github.io/assignments/HW1/), "AI Constraints".

> "We do not allow AI to be used for the writing of the reflection assignments. These are to be completed without AI assistance of any kind (based on your experience from using the AI tools)." — [Syllabus](https://ai-developer-tools.github.io/syllabus/), "Use of AI".

#### 6. Team project deliverables may be changed only by re-prompting the LLM, never by hand-editing

From the frontend milestone onward, students may not directly edit any code, diagram, or graphic that an LLM generated for the team project; every change has to be made by writing a new or follow-up prompt. The same sentence recurs in the frontend, backend, testing, and deployment assignments, so the constraint applies to the whole implementation phase of the project, not just one milestone.

> "Remember, use the LLMs as much as possible to generate the deliverables. You may not modify any generated graphics or code directly, only by prompting the LLM." — [Project 3: Frontend Development](https://ai-developer-tools.github.io/project/p3/), "Project Context".

> "You may not modify any generated code directly, only by prompting the LLM. You should use formalized LLM prompts, such as those we introduced in class." — [Project 6: Deployment](https://ai-developer-tools.github.io/project/p6/), "Project Context".

#### 7. Final-project artifacts require a signed statement that everything was LLM-generated

For the final milestone, the slide deck and the written postmortem must both be produced by prompting an LLM and revised only through further prompting, and the submission must include a short statement certifying that every artifact was AI-generated and edited only by prompting, alongside the prompts themselves.

> "All slides must be generated using LLMs and refined only through prompting." [...] "This document must be drafted entirely with LLM support." — [Project 7: Final Demo and Postmortem](https://ai-developer-tools.github.io/project/p7/), "2. Slide Deck" and "3. Postmortem Write-Up".

> "A short statement verifying that all artifacts were LLM-generated and edited only via prompting" — [Project 7: Final Demo and Postmortem](https://ai-developer-tools.github.io/project/p7/), "4. Turn-In Instructions".

### In-class collaborative activities

#### 8. Pair and mob programming rehearse each week's tool before the team uses it on the project

Every week has an in-class pair-programming activity and a "mob" programming activity, where the class calls out instructions to one student who types them into an open AI tool; both are explicitly meant to practice the technique or tool that the team will then apply to its own project, and every student must lead at least one mob session during the term. A CMU news article quotes instructor Andrew Begel describing the intended progression: as mobbing continues through the semester, students get better at turning a classmate's request into a command they give the LLM.

> "In-class programming activities. We will have pair programming activities and 'mob' programming activities. These will be for learning techniques and tools that you will then use for your group project. Each student will lead at least one mob session." — [Overview](https://ai-developer-tools.github.io/overview/), "Course Structure".

#### 9. Team presentations built from individual reflections drive in-class discussion

After each individual reflection essay is due, groups turn the ideas in those essays into a short presentation, present it to the class, and lead a discussion. This links the one AI-free written deliverable in the course to a graded in-class speaking and discussion component.

> "In-class presentations and discussions. Based on the reflections, groups will create short presentations, present them to the class, and lead a short discussion." — [Overview](https://ai-developer-tools.github.io/overview/), "Course Structure".

### Homework: reflection essays

#### 10. Shared question bank caps how many students can answer the same reflection prompt

For each of the six reflection essays, students pick one question from a shared spreadsheet of reflection questions and write their name next to it; at most three students may pick the same question. This spreads answers across the question bank instead of letting everyone default to the easiest prompt.

> "Write a 500-word essay on a reflection question of your choice from this Google Sheet. Up to 3 class members may choose the same reflection question. Write your name down in the Sheet next to the question you have chosen." — [Reflection 1 (HW1)](https://ai-developer-tools.github.io/assignments/HW1/), "The task".

#### 11. Concrete-example bar for essay quality, stated with explicit good and bad examples

The reflection assignment page tells students directly what separates a good essay from a bad one: a good essay gives a concrete example in an "it did x but I expected y in the context of z" shape, while a bad essay uses vague, generic statements. Giving the bad-example phrasing verbatim makes the standard checkable by the student before submission, not just by the grader afterward.

> "Good essays have concrete examples, e.g., it did x but I expected y in the context of z. Bad essays are vague and employ generic sentiments, like 'I like it!', or 'It's helpful.'." — [Reflection 1 (HW1)](https://ai-developer-tools.github.io/assignments/HW1/), "The task".

### Team project: requirements and planning

#### 12. Side-by-side human vs. LLM value proposition, with a required verdict

For the first project deliverable, students write their own value proposition for the team's product without AI, then separately ask an LLM to write one, then state in writing which version is more compelling and why. Writing the human version is explicitly required to happen before, and without, the LLM version, so the comparison is not biased by having seen the AI's phrasing first.

> "What is/are the value proposition(s) for your product? Do not use an LLM for this part. [...] Ask an LLM to describe the value proposition(s) for your product [...] What is the difference between the human and LLM-generated value propositions? Which one is more compelling?" — [Project 1: Requirements Engineering](https://ai-developer-tools.github.io/project/p1/), "1. Initial value proposition/product description".

#### 13. Mandatory live human interviews; LLM interviews explicitly rejected

Each team must hold at least four user-discovery conversations with real people who are engaged in the product's problem area, using a list of ten questions the team wrote beforehand; the assignment states plainly that interviews conducted with an LLM standing in for a person will not be accepted. This keeps the discovery data grounded in real users even though the rest of the milestone leans on AI.

> "Have four or more conversations with real people (not LLMs) who are somewhat engaged in your product's area of focus. [...] You must interview real humans for this assignment. Interviews with LLMs will not be accepted." — [Project 1: Requirements Engineering](https://ai-developer-tools.github.io/project/p1/), "2b. Measure/demonstrate that people want the product".

#### 14. Blind human-then-LLM summary comparison of interview data

As an optional extra step, students first summarize their interview transcripts using only their own judgment, set that summary aside, and only then ask an LLM to summarize the same transcripts; both summaries are turned in side by side. Writing the human summary first and setting it aside before prompting the LLM is what keeps the comparison from being contaminated by the AI's framing.

> "Summarize the interviews using only human brain power. Put away your original summary, and then ask the LLM to summarize the lessons you learned from the transcripts." — [Project 1: Requirements Engineering](https://ai-developer-tools.github.io/project/p1/), "2c. Summarize what you learned".

#### 15. User stories fully authored and triaged by the LLM, with mandatory human sign-off reasons

Students may not write the user stories themselves at all; an LLM must generate ten stories in a fixed template, estimate each one's size, and check each against the INVEST framework, after which the five lowest-ranked stories are discarded and the LLM prioritizes and schedules the remaining five into a five-sprint backlog. For each kept or dropped story, the student must still write a paragraph stating why they agree with the LLM's call, so the delegation of authorship does not remove the requirement to justify the outcome.

> "In this section, you will create user stories that correspond to the primary use cases of the product. However, you may not write the user stories themselves. You have to use an LLM to do this for you." — [Project 1: Requirements Engineering](https://ai-developer-tools.github.io/project/p1/), "3. User Stories".

> "Ask the LLM to evaluate the user stories according to the INVEST framework we learned in class. Throw out the 5 lowest ranked user stories." — [Project 1: Requirements Engineering](https://ai-developer-tools.github.io/project/p1/), "3. User Stories".

#### 16. Full LLM chat logs required as turn-in evidence for every project milestone

Every one of the seven project milestones requires the team to submit the complete chat log of every LLM interaction used for that milestone, alongside the produced artifacts, and later milestones also ask for the name and version of the LLM used. This makes the prompting process itself part of the graded record, not just the final output.

> "Turn in your chat log with the LLM." — [Project 1: Requirements Engineering](https://ai-developer-tools.github.io/project/p1/), "Turn-in instructions".

> "Copy-paste logs of all LLM interactions you used during this sprint. Identify the name and version of the LLM used." — [Project 4: Backend Development](https://ai-developer-tools.github.io/project/p4/), "Turn-in Instructions" (repeated with the same wording in Projects 5 and 6).

#### 17. Fixed technical-artifact checklist for three interdependent user stories, with a named LLM failure mode to catch

For the specification milestone, the LLM must expand three user stories into a full development specification, each covering the same thirteen fixed sections (architecture diagram, class diagram, list of classes, state diagrams, flow chart, risks, stack, APIs, interfaces, data schemas, security and privacy, and more); two of the three stories must be independent of each other while the third is deliberately made dependent on one of them, forcing the team to reconcile two connected specs. The staff warn students in advance about a specific LLM failure mode: the generated sections can disagree with each other (for example, more classes drawn than listed), and finding and fixing that inconsistency before submission is part of the assignment.

> "Your team must produce a spec for each of the 3 that includes the following sections with enough detail that you (or someone else) could implement it" — [Project 2: Development Specification](https://ai-developer-tools.github.io/project/p2/), "Deliverables".

> "We noticed that it's easy for the LLM to create inconsistencies between the sections in the dev spec. For example, there may be more classes shown in the class diagram than described in the List of Classes. That's something you'll have to look for and fix before turning in your assignment." — [Project 2: Development Specification](https://ai-developer-tools.github.io/project/p2/), "Deliverables".

### Team project: implementation

#### 18. Full UI-state Figma mockups with layout annotations required before generating frontend code

Before any frontend code is generated, students must build high-fidelity Figma mockups that cover every state of the interface (empty, loading, error, success, and so on) and annotate behavior such as how the layout should change when the window is resized, so that a developer, and later an LLM, has enough detail to implement the CSS and layout without guessing.

> "Include all states of the interface: e.g., empty state, loading, error, success, etc. [...] please annotate the design with the behavior you want to see." — [Project 3: Frontend Development](https://ai-developer-tools.github.io/project/p3/), "1. UI Mockups in Figma".

#### 19. Narrated, two-screen-size screen recording as the required proof that generated frontend code works

The frontend milestone's evidence of correctness is a screen recording, not a written test report: students must record themselves testing the generated interface with voiceover narration, resizing the browser to demonstrate two different screen sizes using the browser's own debugger to set exact dimensions, and upload the recording to YouTube for grading.

> "Screen record yourself testing the frontend implementation in a web browser (include appropriate voiceover narration so we can follow what you're trying to show). It should display correctly at your two different screen sizes. [...] Upload the screen recording to YouTube." — [Project 3: Frontend Development](https://ai-developer-tools.github.io/project/p3/), "2. Frontend Implementation".

#### 20. Backend spec must harmonize two independently generated architecture diagrams into one shared backend

Because the frontend milestone generated two user stories' specs somewhat independently, the backend milestone opens by asking the LLM to merge their two architecture diagrams into one consistent architecture, on the reasoning that both stories are ultimately served by a single backend. Only after that harmonization does the team break the unified architecture into modules and specify each one.

> "First, if you haven't done it yet, have the LLM harmonize the two architecture plans and diagrams to ensure that the LLM knows you are building a single backend for the application that can support both user stories." — [Project 4: Backend Development](https://ai-developer-tools.github.io/project/p4/), "Project Context".

#### 21. Explicit small-scale concurrency target bounds backend design effort

The backend only has to support ten simultaneous frontend users, and the assignment tells students directly not to try to make it scale beyond that. Naming a small, fixed concurrency number keeps the backend design scoped to what a two-week sprint can build and test, instead of an open-ended scalability goal.

> "Make sure your backend supports 10 simultaneous frontend users. Simultaneity means that all of those users' frontend UIs are talking to the backend at the same time. Do not attempt to make your backend scale to more users." — [Project 4: Backend Development](https://ai-developer-tools.github.io/project/p4/), "Project Context".

### Team project: verification and release

#### 22. LLM writes a function-by-function test specification with a fixed coverage target before any test code exists

Before generating a single unit test, the LLM must produce an English-language test specification listing every function in the two chosen frontend files and two chosen backend files, with a table of test inputs and expected outputs per function, aimed at 80% coverage of each function's execution paths. Grading explicitly checks whether the student prevented the LLM from hallucinating tests for functionality that does not exist or from generating duplicate, overlapping test cases.

> "A test specification is an English-language document that describes the purpose of each function to be tested along with every program path that should be tested with a unique unit test. [...] Your goal should be 80% code coverage." — [Project 5: Testing](https://ai-developer-tools.github.io/project/p5/), "Deliverables".

> "You will be graded on how well you prevent the LLM from hallucinating nonsensical test cases or creating duplicate or significantly overlapping test cases." — [Project 5: Testing](https://ai-developer-tools.github.io/project/p5/), "2. Create your unit tests".

#### 23. One-test-at-a-time prompting rule, stated as a lesson from staff's own experience

Students are told to have the LLM generate only one unit test per prompt rather than asking for a whole test suite at once, because the staff found in their own use that a single "generate everything" prompt produces incorrect output. Stating the failure mode and its fix as something the staff observed themselves, not just a stylistic preference, gives the rule a concrete reason to follow.

> "We strongly suggest that you use the LLM to generate only one unit test at a time. We have learned from experience that trying to get the LLM to do the entire thing in one prompt will lead to incorrect output." — [Project 5: Testing](https://ai-developer-tools.github.io/project/p5/), "2. Create your unit tests".

#### 24. CI status must be shown green on an actual run, not just committed workflow files

It is not enough to write and commit the GitHub Actions YAML files for testing; the turn-in requires a link to an actual workflow run that shows a passing (green) result after real code was committed, and the assignment walks students through reading a failed run's log to diagnose and fix it. The same run-and-show-green requirement is repeated for the separate frontend and backend test workflows.

> "If you have a green checkmark next to a workflow run, that means it worked! If there is a red cross, then it did not. [...] Fix the problem and try again until each of your two GitHub actions run successfully." — [Project 5: Testing](https://ai-developer-tools.github.io/project/p5/), "5. Automate your tests".

#### 25. Branch protection blocks merges to main until review and CI pass, paired with automatic deploy-on-merge

Students must turn on a branch protection rule on their GitHub repository that blocks direct, unreviewed pushes to the main branch and requires the CI test workflows to pass before a pull request can be merged; once that gate is in place, a separate GitHub Actions workflow automatically redeploys the backend and frontend every time a change lands on main. The assignment frames the protection rule as a defense against both accidental mistakes and intentional bad changes, not only as a process formality.

> "In this assignment, you must block merges to main until your code is reviewed and passes CI." — [Project 6: Deployment](https://ai-developer-tools.github.io/project/p6/), "7. Adopt good GitHub hygiene".

> "After getting hands on experience with each service, you will use a Github action to deploy updates automatically on each push to your main branch." — [Project 6: Deployment](https://ai-developer-tools.github.io/project/p6/), "8. Use Github actions to automatically deploy on each push to main".

#### 26. Real cloud deployment with a capped budget and a named incident procedure

Teams deploy their backend and frontend to real AWS services rather than a simulated environment, and the assignment bounds the financial risk of that decision explicitly: it states that past teams have spent at most 20-30 cents total, and instructs any team billed close to one dollar to immediately shut down their deployed application and contact the instructors. Giving a concrete dollar trigger and a concrete first action turns "use a real cloud account safely" into a checkable rule instead of a general caution.

> "Be assured that whenever we've done this before, we've spent at most 20-30 cents total. If you find that AWS has billed you anywhere near USD $1, immediately turn off any applications you have already deployed and reach out to the instructors for help." — [Project 6: Deployment](https://ai-developer-tools.github.io/project/p6/), "Deliverables".

### Team project: final demo and postmortem

#### 27. Fixed three-part timed structure for the final talk, ending in a structured postmortem

The final presentation is fixed at twelve minutes per team, split into a six-minute live demo, a two-minute explanation of the testing and deployment pipeline, and a four-minute postmortem covering successes, failures and surprises, an evaluation of the team's process (did AI-driven development help, did the branching workflow work, how did testing evolve), and lessons for future projects. Fixing both the total time and the minutes per part forces the team to rehearse rather than improvise the talk.

> "Your presentation must follow this structure: (1) Live Demo (6 minutes) [...] (2) Testing & Deployment Process (2 minutes) [...] (3) Postmortem (4 minutes)" — [Project 7: Final Demo and Postmortem](https://ai-developer-tools.github.io/project/p7/), "1. Final Presentation (12 minutes per team)".

### Team practices

#### 28. Rotating team roles assigned at the start of every assignment

For each assignment, teams agree on four roles: a coordinator who sets the agenda and keeps the meeting on task, a scribe who documents agreed tasks and deadlines, a monitor who checks everyone understands the solution and watches the time, and a checker who double-checks and submits the result. The roles rotate every assignment so that no one student is stuck with the same job all term.

> "group work is most successful when groups designate clear roles, such as coordinator, scribe, monitor, and checker for each assignment. Agree on roles at the beginning of each assignment. Rotate these roles for each assignment to ensure fairness." — [Teamwork Practices](https://ai-developer-tools.github.io/teamwork/), "Working effectively".

#### 29. Scribe-logged protocol with a silence-is-agreement rule and a visible history

The scribe writes down each meeting's agreed tasks and deadlines and shares them with the whole team; a team member who does not object to what was communicated is treated as having agreed to it, and the log of these agreements stays visible to every member with its full history, not just the latest version. This turns an informal verbal plan into a record the team can point back to if a disagreement comes up later.

> "The scribe documents the agreed tasks and deadlines and communicates them to everybody. Not objecting to the communicated protocol constitutes acceptance. Make agreements visible to every team member, with transparent history of the log." — [Teamwork Practices](https://ai-developer-tools.github.io/teamwork/), "Working effectively".

#### 30. Written escalation and "firing" procedure for a non-contributing teammate

When a team cannot resolve a contribution problem on its own, the course gives a specific written escalation path: the team first meets with the instructors, then may notify the uncooperative member in writing (copying the instructors) that they are at risk of being removed, and if nothing improves, notify them in writing that they are no longer on the team. The removed student then meets with the instructors to discuss options such as joining another team, finishing the work alone, or receiving zero credit on remaining assignments; a student who did not contribute is also not to be listed as an author on the submitted work.

> "the cooperating team members may notify the uncooperative member in writing that he/she is in danger of being fired, sending a copy of the memo to the instructor. If there is no subsequent improvement, they should notify the individual in writing (copy to the instructor) that he/she is no longer with the team." — [Teamwork Practices](https://ai-developer-tools.github.io/teamwork/), "Preventing and dealing with problems".

## Instructor observations, reflection, and open questions

- **The course explicitly bans students from writing project code by hand, framing AI use as a skill to manage rather than a shortcut.** Instructor observation, quoted in CMU's news coverage of the first week of class, not in the syllabus itself. > "We've told the students, you will not write actual code in this class. Instead, you will tell the large language model (LLM) to do everything for you. If it generates incorrect code, you need to be able to read it and tell the LLM how to fix it, but you won't code the fix yourself." — Andrew Begel, quoted in Marylee Williams, [CMU Students Put AI Coding Tools to the Test](https://www.cs.cmu.edu/news/2025/ai-tools-for-software), 14 Oct 2025.
- **Instructor's working definition of "vibe coding," used to contrast with the course's goal.** Instructor observation, same source. > "coding with the hope that the output will work flawlessly without testing or training." The article adds that students in the course "vibe code a lot, but rather than hoping, they're learning how to apply a software engineering mindset to make AI tools more reliable" (author's paraphrase, not a direct instructor quote).
- **First-day in-class result offered as a descriptive anecdote, not a measured outcome.** Reported by the same news article, not verified independently. > "It took a room full of Carnegie Mellon University students 13 minutes to build something similar to Instagram. And no one wrote a line of code."
- **The course is explicitly framed by department leadership as a teaching experiment with an admittedly unclear method.** Instructor observation from Michael Hilton, S3D's associate department head for education, in the same article. > "It's a bit unusual to pitch a class and essentially say, 'We don't really know what we're doing, and we're going to figure it out as we go along.' But I think we're at a unique moment in time and this is one of the only ways to approach it."
- **A co-instructor's stated motivation traces the course to internal AI adoption pressure at his prior employer, not to a classroom problem.** Instructor observation from Austin Henley, same article. > "I thought up a course like this when I saw the push internally at Microsoft to use AI products for our own day-to-day work. We were using AI to build AI."

Austin Henley's pre-course blog post, [Assessing students in the era of AI](https://austinhenley.com/blog/aihomework.html) (10 Aug 2025), was published before the term started and surveys options other instructors were discussing; it is not a report on this course and none of its options are attributed to 17-316/616 specifically, so it is not used as a source of practices above.

Searched for and not found: a staff-authored retrospective, survey summary, or grade/outcome data for the Fall 2025 offering, published as of 2026-09-18. Not reviewed: the Team Policy document referenced but not linked from the syllabus, Canvas-hosted materials (slides, the reflection-question Google Sheets, the Design Doc and dev-spec templates), Slack discussion, and the Gradescope rubrics beyond what appears on the public assignment pages.

New in this course: team project topic fixed to imitating a real startup's product (2); mandatory prompt-only editing of all generated project code (6); signed AI-generation compliance statement for final deliverables (7); role rotation with a scribe-logged, silence-is-agreement team protocol (28, 29); written escalation and "firing" procedure for a non-contributing teammate (30); blind human-then-LLM summary comparison of the same data (14); user stories entirely authored and triaged by the LLM under the INVEST framework (15); harmonizing two independently generated architecture diagrams before backend design (20); named staff-observed LLM failure modes with a stated fix (spec inconsistency in 17, one-test-at-a-time prompting in 23); capped-budget real cloud deployment with an incident procedure (26).
