# Cornell CS 5150 Software Engineering, Spring 2026

## Course card

- **University and course**: Cornell University, CS 5150 *Software Engineering*.
- **Term**: Spring 2026 (January to May 2026).
- **Level and audience**: graduate (Master's-level), 4 credits. Prerequisites: CS 2110 or equivalent Java/C++ experience; CS 3110 or CS 4410/4414 strongly recommended. This course is included in this research base as a reference point, not as a model for an undergraduate curriculum: the course index describes it as a "graduate course (a reference point, not an undergraduate model)".
- **Project format**: one semester-long team project, teams of 4-5 students. Teams add a feature either to one of four staff-named open-source systems (Gerrit, Airflow, Mattermost, Zulip) or to a different system supplied by an external client. The project runs over four three-week sprints; the first sprint is reserved for understanding the existing codebase.
- **Grade structure**: project 60%, two in-class exams 20%, attendance/in-class activities 10%, assignments 10%. Within the project grade, five components are weighted roughly equally: client meetings, project reports, two presentations, peer evaluations, and code/product quality.
- **Sources**: [Syllabus](https://www.cs.cornell.edu/courses/cs5150/2026sp/syllabus.html) (grading, AI policy, academic integrity), [Projects](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects.html) (team rules, host systems, timeline, requirements), [Course homepage](https://www.cs.cornell.edu/courses/cs5150/2026sp/), [Project pitch](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/project-pitch.html), [Project plan](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/project-plan.html), [Internal project options](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/internal.html), [External project requirements](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/external.html), [Copyright for external projects](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/copyright.html), [Project report #1](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/report-1.html), [Project report #2](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/report-2.html), [Project report #3](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/report-3.html), [Midpoint presentation](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/presentation-1.html), [Final presentation](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/presentation-2.html), [Final delivery](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/final-delivery.html), [Schedule](https://www.cs.cornell.edu/courses/cs5150/2026sp/schedule.html).

## Practices

### Team and project setup

#### 1. Feature added to a real open-source system, not a staff-built starter app

Teams do not build a new system from scratch or start from a course-built template; instead, each team adds a feature to an existing, moderately large software system. For an internal project, the system is one of four staff-named open-source applications; the pitch rules forbid proposing a brand-new system and require the feature to attach to something that already exists, ideally with a user-facing part. The staff-named systems are themselves developer collaboration tools, chosen partly so every team already understands the kind of product it is extending.

> "It must be adding a feature to an existing open-source software system, ideally with a user interface (UI/UX) component." — [Project pitch](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/project-pitch.html), "Overview".

> "These host projects are all collaboration tools, allowing everyone to be familiar with the problem domain (this also allows you to incorporate dogfooding into your development process)." — [Projects](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects.html), "Internal projects".

#### 2. Pitch, ranking, and staff-assigned teams

Students first submit a one-to-two-page pitch for a feature, alone or with up to four teammates already grouped together, then every student ranks all accepted pitches, and the staff use these rankings and stated team preferences to decide each final team. A student is not guaranteed to end up working on the project they pitched. Team size is fixed at 4-5 students, and the staff, not the students, make the final call on team composition.

> "You may propose a project individually or as a team (up to 5 members)." — [Project pitch](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/project-pitch.html), "Considerations".

> "Based on your rankings and team preferences, we will assign teams to projects." — [Project pitch](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/project-pitch.html), "Project selection and assignment".

> "The course staff will make the final decisions regarding team compositions." — [Projects](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects.html), "Projects".

#### 3. Existing codebase must dwarf the added feature

Whether a team builds on one of the staff-named open-source systems or on a different system supplied by an outside client, the system it extends must be much larger than the feature it plans to add, so the semester is spent working inside a large system rather than writing most of the code from nothing. The course points teams to concrete evidence for this size gap: how many people have contributed to the existing code, how many lines of backend and test code already exist, or how many other services and how large an API surface a new service must talk to. The existing system must already have automated tests, or the team must add that testing capability itself as part of its scope.

> "As a rule of thumb, the existing code/context should be several times larger than what your project proposes to add." — [External project requirements](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/external.html).

> "The existing system should have tests that can be run in an automated way (or else you will need to add such a testing capability and include that in your project scope)." — [External project requirements](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/external.html).

#### 4. Signed copyright or license agreement for external clients

When a team's client is outside the course, the team must sign a written agreement with the client, attached to the project plan, that settles who owns the copyright to the code and documents the team produces. The team must either transfer copyright to the client or grant the client an unrestricted license to use and extend the work after the course ends. The course publishes two past agreements, using each of these two approaches, as templates for teams to adapt.

> "you must agree either to transfer your copyright to the client or to grant your client an unrestricted license to use your work." — [Copyright for external projects](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/copyright.html).

> "Included with your project plan should be a signed agreement between the client and your team addressing any relevant considerations." — [Projects](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects.html), "External projects".

### Understanding the existing codebase

#### 5. First sprint reserved for understanding the codebase

The first of four three-week sprints is set aside for the team to learn the system it will extend, before it writes any feature code. The course schedule labels this sprint "Understanding codebase architecture," and only the second sprint targets a first working prototype. Every team, whichever open-source system or external client it works with, gets this same dedicated reading-and-exploration period instead of guessing how the system works from assumptions.

> "Sprint 1: Feb 5 - Feb 26 (Understanding codebase architecture)" — [Projects](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects.html), "Sprint Dates".

#### 6. Architecture documentation of the pre-existing system as a first-sprint deliverable

At the end of the first sprint, each team must submit documentation of the architecture of the pre-existing system it is enhancing, as part of its first project report. This documentation must include a deployment diagram, showing how the system reaches client environments, and a component diagram, showing which services, components, or subsystems the team expects to touch to build its feature. Existing architecture diagrams for the host system may be referenced, but the team must produce its own diagrams made for this semester's project.

> "Document the architecture of the pre-existing system you are enhancing." — [Project report #1](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/report-1.html).

> "Component diagrams showing which services/components/subsystems you expect to be interfacing with or modifying in order to implement your enhancements" — [Project report #1](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/report-1.html).

### Client interaction

#### 7. Client-scored meetings each sprint, with a fixed reporting deadline

Teams must meet with their client at least once per three-week sprint, ideally weekly, and after every meeting the client fills out a scoring sheet rating individual team members on professionalism, participation, and preparedness. When the client is an outside organization rather than the course staff, that client must submit this score within three days of the end of each sprint or the team loses points, and it is the team's job, not the course staff's, to follow up with the client to keep this on schedule.

> "After each meeting, the client will submit a gradesheet scoring their interaction with the team members." — [Projects](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects.html), "Client Meetings".

> "For each sprint, the client must score the teams within three days of the end of the sprint. Otherwise, the team will lose points." — [External project requirements](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/external.html).

#### 8. Client-facing code review session using an open pull request

In the second and third sprints, each team must hold a dedicated code-review session with its client, walking the client through the code written so far, ideally using a pull request that is still open rather than already merged. The team then summarizes this session in its sprint report, including the feedback received and how the team plans to act on it. This turns code review into an event the client takes part in, not only an internal team practice.

> "For sprint 2 and 3, you should conduct a code review session with your client where you walk through the code you have written so far (ideally using an active pull request)." — [Project report #2](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/report-2.html), "Code Review (New)".

### Process evidence

#### 9. Public repository as the single system of record, with a fork for internal projects

Every team must use one public GitHub repository as the single place for version control, issue tracking, code review, and continuous integration for the whole project, and must add the course staff as members of that repository. When a team builds on one of the staff-named open-source systems, it does not own the original repository, so it creates its own fork of that repository and does all its work there instead of contributing straight to the upstream project.

> "We require you to use a public Github repository for version control, issue tracking, code review, and continuous integration." — [Projects](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects.html), "GitHub".

> "When working on an internal project, please create a "fork" of the repository and continue making changes there." — [Projects](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects.html), "GitHub".

#### 10. Per-sprint team roles table plus peer evaluation

Every sprint report must include a table listing each team member and the specific tasks that member was responsible for during that sprint, so a reader can check individual contribution sprint by sprint rather than only once at the end of the course. Separately, peer evaluations are collected from teammates and count as one of the five roughly equal components of the project grade. Together, these two mechanisms keep an individual's contribution to a group deliverable visible throughout the semester.

> "Team Roles: Add a table of team members and the tasks they were responsible for in this sprint." — [Project report #1](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/report-1.html).

> "Peer Evaluations: Your contributions evaluated by teammates" — [Syllabus](https://www.cs.cornell.edu/courses/cs5150/2026sp/syllabus.html), "Project Scoring Rubrics".

#### 11. Grading rewards consistent technique application over a merely working feature

The project counts for 60% of the course grade, and the syllabus states directly that consistent use of the taught techniques throughout the project counts for more than whether the delivered feature itself works. A team following the process to produce a "best-effort" deliverable is scored on that process, not judged only by whether the final feature ships. This standard is written into the grading description itself, not left implicit in a separate rubric document.

> "performance on the group project (that is, consistent application of the techniques taught in class towards a viable, best-effort deliverable) is the most significant factor." — [Syllabus](https://www.cs.cornell.edu/courses/cs5150/2026sp/syllabus.html), "Assessment/Grading".

### Testing and verification

#### 12. Test plan plus a coverage metric of the pre-existing system

By the third project report, each team must document a test plan describing what kinds of tests will cover its changes, how thoroughly, and where testing sits in the project schedule. Alongside this plan, the team must also report the current state of testing in the pre-existing system it is enhancing, giving a coverage metric for the parts of that system that can be tested automatically. This ties the team's own test plan to a measured baseline of the host system, not only to the new code the team writes.

> "A summary of the current state of testing in the pre-existing system you are enhancing; for automatable tests, report a coverage metric" — [Project report #3](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/report-3.html).

#### 13. Cross-team user testing pool

Before final delivery, each team must run a round of user testing on its interface changes with at least three participants who are not on the team, and the course lets students from other teams act as these test participants for each other. Each test task must be timed, and the team must summarize the issues found and its plan to address them. Recruiting for user testing must start as soon as a working prototype exists, not only near the end of the project.

> "Students from other teams can participate as users. Recruit at least 3 users for testing." — [Project report #3](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/report-3.html).

### Final delivery

#### 14. Interactive, unscripted live demo at both presentations

Both the midpoint and final presentations must include a live demonstration of the working system in front of the client and course staff, and the course explicitly rules out a pre-recorded demo at this stage. During the demonstration, the team must be ready to explore "what-if" scenarios that the client or staff raise on the spot, beyond a scripted walkthrough of prepared scenarios. Teams are also expected to be open about gaps or weaknesses instead of hiding them.

> "The demonstration should be interactive (not pre-recorded), and you should be prepared to explore “what-if” scenarios proposed by the client or course staff." — [Final presentation](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/presentation-2.html).

#### 15. Handover package: trunk merge, closed issues, user and maintainer manuals, signed license

At the end of the course, each team must merge its delivered code into the trunk branch of its repository, since code left on another branch does not count as delivered, and it must close every issue tied to the features it delivered. Along with the code, the team hands over a user's manual covering every user role and a maintainer's manual covering system design, test facilities, and deployment, plus a signed license agreement stating how the client may use the code afterward.

> "For internal projects, your delivered code must be merged to the trunk branch; code on other branches will not be considered “delivered.”" — [Final delivery](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/final-delivery.html), "Handover package".

> "A comprehensive maintainer’s manual documenting system design, test facilities, and deployment procedure." — [Final delivery](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/final-delivery.html), "Handover package".

#### 16. Demo video with a persistent public link

Beyond the live final presentation, every team must record a separate five-to-ten-minute video demonstrating the delivered features in a staging environment, filmed as a real interactive walkthrough rather than a slide deck. The video must be hosted on a platform with a persistent link, such as YouTube, and that link becomes part of the handover package; the course also links the video from its own website.

> "You must also prepare a short video (5-10 minutes) demonstrating the features you have delivered." — [Final delivery](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/final-delivery.html), "Demo Video".

> "It should be hosted on platform with persistent access (e.g., Youtube), and the link should be included in your handover package." — [Final delivery](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects/final-delivery.html), "Demo Video".

### AI use rules

#### 17. AI coding disclosure requirement

Students may use AI tools to help with coding on their project, but they must clearly state in their report which content came from AI, and all submitted work must still meet the course's normal academic-integrity standards. AI tools are not allowed during in-class exams or in-class activities unless the instructor explicitly permits their use for that activity. The rule does not set a specific disclosure format, only that the use must be disclosed.

> "You may use AI tools to assist with coding, but you must clearly disclose any AI-generated content in your report and ensure that all submitted work meets the course's academic integrity standards." — [Syllabus](https://www.cs.cornell.edu/courses/cs5150/2026sp/syllabus.html), "AI usage".

> "You may not use AI tools for any in-class exams or in-class activities unless explicitly permitted by the instructor." — [Syllabus](https://www.cs.cornell.edu/courses/cs5150/2026sp/syllabus.html), "AI usage".

## Instructor observations, reflection, and open questions

- **Staff remark that learning new tools is one of the most valued parts of the course** (student self-report, relayed by staff, no cohort data given). The projects page states this as a general, undated remark, not tied to a specific semester or survey: > "Some students report that the opportunity to learn new tools and technologies is one of the most valuable aspects of this course!" — [Projects](https://www.cs.cornell.edu/courses/cs5150/2026sp/projects.html), "Role of Course Staff".

No other staff reflection, published survey summary, blog post, paper, or talk about this course was found. A web search for the instructor's name together with the course, and for the four named open-source systems together with terms like "paper," "talk," or "retrospective," surfaced only the course's own syllabus and project pages across several years, a lecture slide deck, a student-made demo video for one project, and an unrelated, differently-numbered Cornell course (CS 5152, Open-Source Software Engineering). The private Canvas site, Ed Discussion board, and any internal grading rubrics beyond the syllabus's high-level rubric list were not reviewed, since they are not publicly accessible. This matches the earlier note in courses.md ("the project page has a general remark that some students value learning new tools; no cohort data"); the same conclusion still holds as of 2026-09-19.

New in this course, not seen in the other processed courses (MIT 6.1040, Stanford CS146S, CMU 17-316, UW CSE403, UC San Diego CSE190): working inside a real, pre-existing open-source system chosen from a short staff-curated list instead of a starter app or a course-built system (practice 1), a sprint entirely dedicated to understanding an existing codebase before writing any feature code (practice 5), a required architecture-documentation deliverable (deployment and component diagrams) for that existing system (practice 6), an explicit sizing rule that the existing codebase must be several times larger than the added feature (practice 3), and a client-scored gradesheet after every meeting with a fixed three-day submission deadline (practice 7).
