# Carnegie Mellon 17-445/17-645/17-745/11-695 Machine Learning in Production, Spring 2026

## Course card

- **University and course**: Carnegie Mellon University, 17-445/17-645/17-745 *Machine Learning in Production* / 11-695 *AI Engineering* (one course taught under four numbers).
- **Term**: Spring 2026 (January to May 2026).
- **Level and audience**: open to undergraduate and graduate students, a mixed cohort. No formal prerequisites are enforced, but the course expects basic exposure to machine learning and basic programming skills; it does not require prior software-engineering coursework. The PhD-level 17-745 number replaces two individual assignments with a mandatory independent research project.
- **Project format**: a team project (teams of 3 to 6, assigned by the instructor) in which every team builds, deploys, and operates the same kind of movie-recommendation web service against a shared, simulated production workload of about 1 million users, across four graded milestones and a final presentation. Alongside the team project, students complete four individual assignments and eleven weekly labs.
- **Grade structure**: 35% individual assignments, 30% group project, 25% midterms and participation (15% midterms / 10% participation if a student opts into graded participation, otherwise 25% midterms only), 10% labs. No final exam.
- **Sources**: [Course archive, Spring 2026](https://mlip-cmu.github.io/s2026/) (syllabus, policies, schedule, grading), [Group Project: Movie Recommendations](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), [Individual Assignment 1: Building LLM-enabled Features for a Product](https://github.com/mlip-cmu/s2026/blob/main/assignments/I1_llm_features.md), [Individual Assignment 2: Risks and Mitigations](https://github.com/mlip-cmu/s2026/blob/main/assignments/I2_risk.md), [Individual Assignment 3: Agent Security and Safety](https://github.com/mlip-cmu/s2026/blob/main/assignments/I3_agent_security.md), [Individual Assignment 4: Explainability](https://github.com/mlip-cmu/s2026/blob/main/assignments/I4_explainability.md), [Research Project (17-745)](https://github.com/mlip-cmu/s2026/blob/main/assignments/research_project.md), [Lab 1: Calling, Building, and Securing APIs](https://github.com/mlip-cmu/s2026/blob/main/labs/lab01.md), Christian Kästner and Eunsuk Kang, [Teaching Software Engineering for AI-Enabled Systems](https://arxiv.org/abs/2001.06691) (instructor essay, Jan 2020).

## Practices

### Course structure and prerequisites

#### 1. Anonymous self-check quiz before the term, not a graded gate

Before the course starts, students can take an anonymous, ungraded quiz to check whether their background is sufficient. The quiz asks ten machine-learning questions through a web form, then points the student to specific readings or exercises for any gap it finds. Nobody's score is recorded or used to admit or reject them; it is only a private signal to the student.

> "We have set up a prerequisite knowledge check as a Google Form, where we ask 10 questions on machine learning, which help you assess your background [...] this is set up as an anonymous and ungraded quiz" — [Course archive, Spring 2026](https://mlip-cmu.github.io/s2026/), "Logistics and People, Prerequisites".

#### 2. Teams assigned by staff, not chosen by students

Every student is placed into a team by the instructor rather than picking teammates or a project topic themselves. Because team composition is not self-selected, the course pairs this with staff-run teamwork support: a mentor for each team and in-class content on how to work in a new team. All teams then work on the same fixed project (a movie-recommendation service), so there is no choice of topic to make either.

> "Teams will be assigned by the instructor. A TA will serve as a mentor for each team." — [Course archive, Spring 2026](https://mlip-cmu.github.io/s2026/), "Course Syllabus and Policies, Teamwork".

#### 3. Independent research project replaces two homework assignments for PhD students

Students enrolled under the PhD-level course number do a self-directed research project in the second half of the term instead of two of the individual assignments that other students complete. The project must ask a real research question relating software engineering and machine learning (a case study, an empirical study, a technical evaluation, a literature survey, or a replication), deliver a short paper and presentation, and can build on the student's existing PhD research if there is enough new content.

> "Students enrolled in the PhD-level version of this course 17-745 [...] will do a research project in the second half of the semester, instead of individual assignments 3 and 4." — [Research Project (17-745)](https://github.com/mlip-cmu/s2026/blob/main/assignments/research_project.md), "Overview".

### AI use rules

#### 4. Unrestricted AI-tool and external-code use, full responsibility stays with the student

Students may use any content-generation tool and reuse any external code without asking permission or crediting the source, but they alone are responsible for the correctness of what they submit. The policy names specific tools (ChatGPT, Claude, Claude Code, Co-Pilot, Cursor) as explicitly allowed and warns that such tools often produce answers that look right but are wrong, so using one does not excuse a wrong answer or reduce the student's accountability for it.

> "We place no restrictions on the use of content generation tools, such as ChatGPT, Claude, Claude Code, Co-Pilot, or Cursor. [...] you will be solely responsible for the correctness of the solution." — [Course archive, Spring 2026](https://mlip-cmu.github.io/s2026/), "Course Syllabus and Policies, Use of content generation AI tools and external sources".

#### 5. Mandatory usage-tracking extension for AI coding tools, independent of a separate research opt-out

Any student who uses an AI coding assistant inside a specific code editor must install a usage-monitoring extension for it, and this requirement is separated from the course's optional research study: a student can decline the research (so their data is not analyzed) but must still install the extension as a plain assignment requirement. At the end of the term each student who used it gets a personal report on their AI usage with improvement suggestions.

> "If you decide to use any forms of AI coding assistants in Visual Studio Code, we ask you to install a usage monitoring extension plugin. [...] you are still required to install the extension as an assignment requirement." — [Individual Assignment 1: Building LLM-enabled Features for a Product](https://github.com/mlip-cmu/s2026/blob/main/assignments/I1_llm_features.md), "A word on scope and difficulty and AI coding tools".

#### 6. Per-assignment file disclosing whether and how AI coding tools were used

Every individual assignment requires a short file in the submitted repository stating whether an AI coding tool was used and, if so, which one. If the tool was used inside the tracked code editor, the usage-monitoring extension already records it; if it was used elsewhere, the student must instead export and submit the raw prompt or chat log. One rubric item is graded pass/fail purely on whether this disclosure is present and consistent with one of the three allowed cases.

> "An ai.md file in the root directory of the repository explains whether, which, and how AI coding tools were used." — [Individual Assignment 1: Building LLM-enabled Features for a Product](https://github.com/mlip-cmu/s2026/blob/main/assignments/I1_llm_features.md), grading list.

> "an AI coding tool was used outside of VSCode and prompts/chat logs are shared in the ai_logs folder." — [Individual Assignment 1: Building LLM-enabled Features for a Product](https://github.com/mlip-cmu/s2026/blob/main/assignments/I1_llm_features.md), grading list.

#### 7. AI-disclosure write-up must be written by the student, not generated by AI

The short statement describing a student's AI use on an assignment must itself be written by the student, without AI help. The instructions call out that a rough, honest note is preferred to smooth AI-written prose, so the one part of the submission explicitly meant to be a personal account cannot be delegated to the tool it is describing.

> "We ask you not to use GenAI for creating this statement (e.g., a few honest bullet points with typos would be preferred over AI-generated slop)." — [Individual Assignment 1: Building LLM-enabled Features for a Product](https://github.com/mlip-cmu/s2026/blob/main/assignments/I1_llm_features.md), "AI use".

### Individual assignments and oral defense

#### 8. Every individual assignment ends with a graded oral defense at office hours

After submitting each individual assignment, every student must meet one-on-one with a staff member during office hours, within two weeks, and explain their solution. Staff can ask about the implementation and about a written reflection prompt included in the assignment; a fixed share of the assignment's points (10 out of 100 on each of the four assignments) is earned only if the student convinces staff, in that conversation, that they understand their own solution. This is separate from and in addition to the written deliverables.

> "Explanation/reflection: Within 2 weeks of submitting the assignment meet with a member of the course staff during office hours to explain your solution." — [Individual Assignment 2: Risks and Mitigations](https://github.com/mlip-cmu/s2026/blob/main/assignments/I2_risk.md), "Explanation/reflection".

> "10 points: You can convince the course staff during office hours within 2 weeks of submitting your solution that you understand your solution and can plausibly justify why your solutions provide guarantees" — [Individual Assignment 3: Agent Security and Safety](https://github.com/mlip-cmu/s2026/blob/main/assignments/I3_agent_security.md), grading list.

#### 9. Security fix must guarantee the failure cannot happen, not just make it less likely

For a security assignment, a student's code change is graded on whether it provably rules out four named bad behaviors of an AI agent, not on whether it merely makes them less probable. Students must assume an attacker can fully control the language model's output at every step, so prompt wording alone cannot satisfy the requirement; the fix has to change the surrounding code (the agent, the interface, or the tool it calls) so the bad behavior is structurally impossible.

> "The change provides a guarantee, not just decreases the likelihood of the problem." — [Individual Assignment 3: Agent Security and Safety](https://github.com/mlip-cmu/s2026/blob/main/assignments/I3_agent_security.md), grading list.

#### 10. Same artificial backdoor implanted for every student, to standardize the attack

Rather than asking each student to discover their own working prompt-injection attack, the assignment plants one fixed, artificial backdoor phrase in the system prompt of the provided code, which every student can trigger the same way. This removes the time cost of searching for an attack and lets staff grade everyone's defense against a common, known exploit; a defense that only searches for the specific backdoor phrase is explicitly disallowed as too narrow.

> "we introduced an artificial backdoor in the system prompt: When the message contains the token ##MAGIC## the model will likely ignore policy instructions" — [Individual Assignment 3: Agent Security and Safety](https://github.com/mlip-cmu/s2026/blob/main/assignments/I3_agent_security.md), "Appendix: Prompt Injection Backdoor".

#### 11. Build a small LLM tool to scale a risk-analysis method, then manually curate its output

Students must first practice a multi-step risk-analysis method by hand on a few examples, then build their own LLM-based tool to automate part of it (finding stakeholders, goals, and requirements), and finally use their own judgment to select a small, curated subset of the tool's output rather than keeping everything it generates. The assignment treats full reliance on the automation as a failure mode in itself, separate from whether the automation's suggestions were correct.

> "Do not fully rely on LLM-generation [...] use your judgment to actively curate a small number of results that will be the most important to developers of the system." — [Individual Assignment 2: Risks and Mitigations](https://github.com/mlip-cmu/s2026/blob/main/assignments/I2_risk.md), "Analysis Steps, Automation".

#### 12. Explainability deliverable written as a compliance memo to a named audience

One assignment asks students to write their explainability documentation not as a generic report to the instructor, but as a short memo addressed to a specific non-technical stakeholder (for example, a compliance or legal team), in language that stakeholder could act on. The task frames the exercise as if the student's job depends on that audience being convinced the product can be released, which shifts the writing target from "what did I do" to "what does this reader need to decide."

> "Write this as if you were submitting a short report to a compliance/legal team in your company to convince them that your product complies and can be released." — [Individual Assignment 4: Explainability](https://github.com/mlip-cmu/s2026/blob/main/assignments/I4_explainability.md), "Compliance".

### Lab demonstrations

#### 13. Lab credit requires a live demonstration and short defense to a TA

A lab is not graded from submitted files; a student earns credit only by showing their running solution to a teaching assistant in person during the lab session and answering questions about it. Each deliverable inside a lab is graded pass/fail on the spot, and if a solution does not yet meet the bar the student keeps working on it in the same session until it does, rather than resubmitting later.

> "To receive credit for this lab, show your work to the TA during recitation." — [Lab 1: Calling, Building, and Securing APIs](https://github.com/mlip-cmu/s2026/blob/main/labs/lab01.md), introduction.

> "Typically showing your work involves showing source code, demoing executions, and verbally answering a few questions to demonstrate your understanding." — [Course archive, Spring 2026](https://mlip-cmu.github.io/s2026/), "Course Syllabus and Policies, Labs".

#### 14. Free collaboration and copying allowed on labs, but each student must explain the solution alone

Labs, unlike homework, allow students to work together and even to look at or copy another student's solution. The permission stops at the demonstration step: to get credit, each student must still present and explain the solution to a TA on their own, so copying without understanding does not earn the pass/fail grade.

> "While we do not recommend it, you may look at and even copy other solutions. However, you will have to present and explain your solution to the TA on your own." — [Course archive, Spring 2026](https://mlip-cmu.github.io/s2026/), "Course Syllabus and Policies, Labs".

### Team project structure

#### 15. One shared, semester-long service built by every team against a common simulated workload

Every team builds the same kind of product, a movie-recommendation service for a fictional streaming company with about 1 million users and 20,000 movies, rather than choosing its own project topic. Because all teams face the identical scenario, the course can compare teams' technical choices directly and, at the final presentation, let each team skip explaining the basics to an audience that already knows the task.

> "An extended group project focuses on building, deploying, evaluating, and maintaining a robust and scalable movie recommendation service under somewhat realistic “production” conditions with 1 million active users." — [Course archive, Spring 2026](https://mlip-cmu.github.io/s2026/), "What to Expect...".

#### 16. Live data stream and read-only APIs feed the project instead of a static dataset

Instead of handing teams a fixed training dataset, the course streams live simulated user events (movie plays, ratings, recommendation requests) to each team through a message queue, plus read-only web APIs for querying user and movie records. Teams must build their own pipeline to pull, clean, and reuse this continuously arriving data, which forces the same data-engineering problems a live product would create.

> "We provide an event stream (Apache Kafka) of a streaming service site that records server logs, which include information about which user watched which video and ratings about those movies." — [Group Project: Movie Recommendations](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), "Overall mechanics and infrastructure, Provided data".

#### 17. Written team contract created at the first milestone and revisited at every later one

At the very first project milestone, each team must write down explicit agreements on communication channels, response times, task division, and what happens if a member becomes unresponsive. At every later milestone the team must either submit an updated contract with a stated reason for the change, or explicitly declare that the contract is unchanged, so the agreement stays a living document rather than a one-time exercise.

> "If your team decided, after the last debriefing or based on experiences during this milestone, to revise the team contract [...] include the updated contract and describe the reason for the change, otherwise just state "no update to team contract"." — [Group Project: Movie Recommendations](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), "Milestone 2".

#### 18. Meeting notes showing who does what by when required as graded evidence

A team's first milestone report must include a screenshot or link to the actual notes taken during a team meeting, showing how the work was divided between members and by what deadline. The rubric checks for this concrete evidence directly; a report that only describes the process in general terms, without the notes themselves, loses the point for this item even if the rest of the description is well written.

> "Include a screenshot of (or link to) notes taken at team meetings that describe how work was divided for this milestone: who was responsible for what, by when." — [Group Project: Movie Recommendations](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), "Milestone 1".

### Team meetings with a mentor

#### 19. Mandatory 30-minute team debrief with an assigned mentor after every milestone

Every team is assigned one teaching assistant as a mentor, who has completed the same project themselves in a past term, and the team must schedule a 30-minute meeting with that mentor within a week after each of the four milestones. In the meeting the team must convince the mentor that they understand their own solution and have considered alternatives, and must also discuss how the team is working together; a fixed share of points on each milestone (10 points on the first three, 20 on the last) is earned only through this meeting, graded per student.

> "Each team must schedule a 30 minute meeting with their team mentor in the week after every milestone to discuss their solution, debrief on teamwork, and explore possible strategies to improve teamwork." — [Course archive, Spring 2026](https://mlip-cmu.github.io/s2026/), "Course Syllabus and Policies, Teamwork".

> "The team members can convince the mentor that they understand their solution and that they have thought about alternatives" — [Group Project: Movie Recommendations](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), "Milestone 1, Grading".

#### 20. Bonus points for working outside one's comfort zone, checked by the mentor against commit history

A team can earn bonus points each milestone if members deliberately take on project parts outside their existing strengths instead of always assigning work to whoever is already best at it. To confirm this happened, the mentor may look at the team's commit logs and ask follow-up questions, and expects every member to be able to roughly explain the parts of the project that teammates, not they themselves, implemented.

> "Your project mentor may check commit logs and will ask follow up questions to check your claims and probe your understanding." — [Group Project: Movie Recommendations](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), "Bonus: Beyond the Comfort Zone".

### Assessing operation, not just building

#### 21. Live traffic metrics count directly toward the milestone grade

From the first milestone onward, part of a team's grade depends on how the running service actually performs against live simulated traffic, not on a code review of the implementation alone. Staff check the public event log for evidence that the deployed service answered a minimum number of real requests correctly and within a time limit, and that a meaningful share of its answers were personalized rather than identical for every user.

> "The prediction services successfully answers at least 2000 recommendation requests in the 24 hours before or after submission. To be successful, the answer must be well-formed and arrive within the time limit." — [Group Project: Movie Recommendations](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), "Milestone 1, Grading".

#### 22. Uptime measured against real traffic over a multi-day window, with a bonus tier for near-continuous operation

Starting at the third milestone, a team's service must stay running across a fixed 72-hour window before submission and a 96-hour window after, and staff measure actual downtime from the public log rather than trusting a team's own report. A team passes with 70% availability in that window while performing at least two live model updates, and can earn a bonus for reaching 99% availability under the same conditions.

> "The recommendation service is at least 70% available in the 72 hours before the submission and the 96 hours after (i.e., max downtime of 50h), while at least two updates are performed in that time period." — [Group Project: Movie Recommendations](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), "Milestone 3, Grading".

#### 23. Staff inject real bias, attacks, and feedback loops into the running service for teams to detect

For the fairness and security milestone, staff do not just ask teams to imagine risks; they actually introduce bias into the data, build feedback-loop mechanisms into the shared infrastructure, and launch attacks against each team's live service, without telling teams what was introduced. Teams analyze their own telemetry to check whether a chosen risk is actually occurring, and receive full credit for a rigorous analysis regardless of whether they happen to find the specific issues staff planted.

> "We may have introduced some bias in the data, introduced mechanisms for specific feedback loops in our infrastructure, and are injecting attacks on your service." — [Group Project: Movie Recommendations](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), "Milestone 4, Technical details".

#### 24. Token economy softens an otherwise strict pass/fail rubric

Because every rubric item is graded pass/fail with no partial credit, a team or individual can lose many points for missing one small part of a requirement. To offset this, every student gets 8 individual tokens and every team gets 8 separate team tokens for the term, which can be spent on a one-day extension, a full resubmission of already-graded work (regaining 90% of the point difference), or a late/redone lab, so the harsh pass/fail scheme comes with a built-in recovery mechanism.

> "Every student receives 8 individual tokens that they can spend throughout the semester" — [Course archive, Spring 2026](https://mlip-cmu.github.io/s2026/), "Course Syllabus and Policies, Late work policy and resubmissions".

#### 25. Peer ratings of team citizenship feed an individual grade adjustment after every milestone

After each milestone, every team member rates every other member on being an active, cooperative teammate, using a fixed procedure and scale (from "good team citizen" down to "no show"). These peer ratings translate into an individual grade adjustment on top of the shared team grade, so two members of the same team can end up with different final scores for the same milestone.

> "We will regularly check in about teamwork with a mandatory survey and perform peer grading to assess team citizenship of individual students after every milestone" — [Group Project: Movie Recommendations](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), "Overall mechanics and infrastructure, Teamwork".

### Final presentation

#### 26. Final reflection graded only on honesty and depth, not on the quality of the decisions it describes

At the final presentation, each team reflects on the whole project, including what they would do differently, but staff explicitly grade only how honest and concrete that reflection is, not whether the technical or teamwork decisions being reflected on were actually good ones. The instructions single out generic, AI-sounding reflection as something to avoid, in contrast to reflection grounded in the team's specific experience.

> "Good reflections are grounded in concrete experience and the specifics of the project. They avoid mere superficial statements, truisms, and AI slop." — [Group Project: Movie Recommendations](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), "Final Presentation, Technical details".

> "we grade only the quality of the reflection, not the quality of the technical decisions or teamwork described in the reflection." — [Group Project: Movie Recommendations](https://github.com/mlip-cmu/s2026/blob/main/assignments/project.md), "Final Presentation, Technical details".

## Instructor observations, reflection, and open questions

This re-checks and replaces the course-index note of "none found (2026-09-15)": one staff-published retrospective exists, though it covers the course's first offering, six years before this Spring 2026 term.

- **Instructor observation (Fall 2019, first offering, 12 graduate students).** Mixing students with only ML background or only software-engineering background in one class forced staff to repeat concepts for whichever group lacked them. > "students actually taking the course often have gaps in either area so that we need to repeat many concepts." The authors recommend separate tracks by background for future offerings. — Christian Kästner and Eunsuk Kang, [Teaching Software Engineering for AI-Enabled Systems](https://arxiv.org/abs/2001.06691), "4 Experience, Focus and prerequisites".
- **Instructor observation (Fall 2019).** The scale of the simulated production workload in the first offering (160,000 users, about 70 events per second) was too low to force real engineering tradeoffs. > "resulting sometimes in rather superficial engineering tradeoffs with obvious answers [...] it may be worth scaling the simulator to many more users." The Spring 2026 sources describe a workload of about 1 million users, consistent with staff having since scaled up the simulation, though no source states this change was a direct response to the 2019 observation. — [Teaching Software Engineering for AI-Enabled Systems](https://arxiv.org/abs/2001.06691), "4 Experience, Simulator engineering".
- **Instructor observation (Fall 2019).** Standard tools for teaching fairness and explainability were immature at the time. > "we struggled with finding standard techniques or mature tools for emerging topics such as fairness and explainability." — [Teaching Software Engineering for AI-Enabled Systems](https://arxiv.org/abs/2001.06691), "4 Experience, Tooling".

No later staff reflection on this course, or on the specific practices in this file (the oral-defense mechanic, the mentor debriefs, the AI-usage-monitoring extension, or peer grading), was found. The search covered the course's own site and GitHub organization, Christian Kästner's personal site, a general web search for the instructors' names together with the course name and terms like "reflection," "retrospective," "survey," and "outcomes," and a check for a joint paper by Kästner, Le Goues, and Nadia Nahar (the research contact listed in the syllabus). One paper describing a different, similarly designed course at another university (inspired by this one) was found but is not evidence about this course. No published survey data, no measured outcomes, and no staff comment specific to any Spring 2026 practice were found.
