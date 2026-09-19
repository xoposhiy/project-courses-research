# University of Washington, Seattle, CSE403 Software Engineering, Winter 2026

## Course card

- **University and course**: University of Washington, Seattle, CSE403 *Software Engineering*.
- **Term**: Winter 2026 (January to March 2026).
- **Level and audience**: undergraduate. Prerequisites: CSE 331 and CSE 332.
- **Project format**: one team project that runs the whole quarter, in teams of about 4 to 6 students, with nine weekly milestones (proposal, requirements, architecture and design, testing and CI, beta release, a second interim release, peer review, final release, individual retrospective). Students pitch their own project ideas; staff forms the final teams from student rankings of the pitches.
- **Grade structure**: 60% project milestone deliverables, 15% in-class exercises, 15% exam, 10% participation. An individual's grade on milestone deliverables can be adjusted for their contribution.
- **Sources**: [Syllabus](https://courses.cs.washington.edu/courses/cse403/26wi/syllabus.html) (course description, format, AI policy, grading), [Course project](https://courses.cs.washington.edu/courses/cse403/26wi/project/index.html) (project logistics), [Project proposal](https://courses.cs.washington.edu/courses/cse403/26wi/project/01_pitch.html), [Requirements & plan](https://courses.cs.washington.edu/courses/cse403/26wi/project/02_requirements.html), [Architecture and design](https://courses.cs.washington.edu/courses/cse403/26wi/project/03_arch_design.html), [Testing and continuous integration](https://courses.cs.washington.edu/courses/cse403/26wi/project/04_testing_ci.html), [Beta release](https://courses.cs.washington.edu/courses/cse403/26wi/project/05_beta_release.html), [Gamma release](https://courses.cs.washington.edu/courses/cse403/26wi/project/06_gamma_release.html), [Peer project review](https://courses.cs.washington.edu/courses/cse403/26wi/project/07_peer_review.html), [Final release](https://courses.cs.washington.edu/courses/cse403/26wi/project/08_final_release.html), [Individual retrospective](https://courses.cs.washington.edu/courses/cse403/26wi/project/09_reflection.html), [How to give a demo presentation](https://courses.cs.washington.edu/courses/cse403/26wi/project/demo.html).

Note on terms: the course calls its second iterative release "gamma release"; below it is called "the second release milestone" outside quotes, with "gamma" explained in plain words where it first appears.

## Practices

### Pitch and team formation

#### 1. Investor-style pitch document with fixed format and time limit

Students write a short proposal document and slide deck for a project idea before any team is formed, framed as pitching to investors and to future teammates rather than to the course staff. The document follows a fixed outline: problem statement, current practice, proposed solution, impact, technical approach, and the single biggest risk. The slide deck is capped at four content slides, and in class each group gets about three minutes to present before staff cut them off. Grading looks at the quality of the material and presentation, not at whether the idea gets picked to move forward.

> "You want to convince a venture capitalist that your product is worth funding, as well as convince other software engineers that they should sign up to build it with you." — [Project proposal](https://courses.cs.washington.edu/courses/cse403/26wi/project/01_pitch.html), "Create your pitch".

> "You will have about 3 minutes. The staff will cut you off at that time if you have not finished." — [Project proposal](https://courses.cs.washington.edu/courses/cse403/26wi/project/01_pitch.html), "Present your proposal, and listen to other proposals".

#### 2. Students rank projects and teammates; staff assigns teams

After every pitch is presented, each student individually ranks all proposed projects by preference and may name preferred teammates, and staff use these rankings, not the original pitch authors, to form the final project teams. A teammate request only counts if it is mutual: both students must name each other. Students do not have to work on the project they pitched, and a student's grade on the pitch does not depend on whether their idea is chosen.

> "You may request your preferred teammates. This must be a mutual request, in other words, preferred teammates must request you." — [Project proposal](https://courses.cs.washington.edu/courses/cse403/26wi/project/01_pitch.html), "Rank your preferences".

> "Your grade is not based upon whether your project is chosen (by other students or by the 403 staff) to be implemented." — [Project proposal](https://courses.cs.washington.edu/courses/cse403/26wi/project/01_pitch.html), "FAQ".

### Requirements and design document

#### 3. One living document graded by weighted sections

Teams keep a single shared document that grows across every milestone instead of writing a new report each week, and the assignment for each milestone states the point weight of each of its sections so students know where to put effort first. For the requirements milestone alone, the six sections carry weights from 10% up to 30% each. Because the document is meant to keep changing, sections written for an earlier milestone must be revised again later as project decisions change, not left untouched as a historical record.

> "This is the first iteration of a living document, and you'll be asked to update it during the development cycle." — [Requirements & plan](https://courses.cs.washington.edu/courses/cse403/26wi/project/02_requirements.html), "Overview".

#### 4. Every team member writes one individually authored use case

Each requirements document must describe the product's unique functional requirements as a set of formal use cases, and every team member is required to personally write and be named as the author of at least one of them, so a group deliverable still carries individual accountability. Each use case follows the same fixed template: goal, actors, triggers, preconditions, postconditions, steps, extensions, and failure conditions. Teammates review each other's use cases before submission, and features common to almost any product, such as logging in, are excluded so each use case shows something specific to this product.

> "Each team member must come up with and describe at least one formal use case of your product, following this template as described in class and the readings" — [Requirements & plan](https://courses.cs.washington.edu/courses/cse403/26wi/project/02_requirements.html), "3. Use cases (functional requirements) (30%)".

> "Name of team member who created the use case" — [Requirements & plan](https://courses.cs.washington.edu/courses/cse403/26wi/project/02_requirements.html), "3. Use cases (functional requirements) (30%)".

#### 5. Fixed baseline requirements applied to every project regardless of topic

Regardless of what a team's product does, staff add the same four requirements to every project: the system must handle invalid input without crashing, it must be installable or reachable through a URL, it must be buildable from source by someone else with the help of documentation, and its planned scope must match the number of team members assigned to build it. Teams must restate these requirements in their own words, specialized to their product, rather than copy the staff wording directly into their document.

> "The product must be robust against errors that can reasonably be expected to occur, such as invalid user input." — [Requirements & plan](https://courses.cs.washington.edu/courses/cse403/26wi/project/02_requirements.html), "5. External requirements (10%)".

> "Make sure that these requirements are specialized to your project and included in your document; do not copy and paste the above requirements verbatim." — [Requirements & plan](https://courses.cs.washington.edu/courses/cse403/26wi/project/02_requirements.html), "5. External requirements (10%)".

#### 6. Architecture decisions must show a rejected alternative

For two of the decisions behind their software architecture, teams must name a specific alternative they did not choose and explain that alternative's pros and cons compared to the choice they made. This turns the architecture section from a plain description of the final design into a recorded comparison, which makes an unexamined or unjustified choice visible to a reader.

> "For each of two decisions pertaining to your software architecture, identify and briefly describe an alternative. For each of the two alternatives, discuss its pros and cons compared to your choice." — [Architecture and design](https://courses.cs.washington.edu/courses/cse403/26wi/project/03_arch_design.html), "1. Software architecture (40%)".

#### 7. Coding style guide must be adopted, not invented

For every programming language used in the project, the team must link to an existing, published coding style guideline and follow it, rather than write its own house rules from scratch. The team briefly states why it picked that guideline and how it plans to enforce it, for example through a linter or a code-review checklist.

> "For each programming language that you will use in the implementation of your project, provide a link to a pre-existing coding style guideline that the members of your project will follow. Do not try to make up your own guidelines." — [Architecture and design](https://courses.cs.washington.edu/courses/cse403/26wi/project/03_arch_design.html), "3. Coding guidelines (10%)".

#### 8. Risk register with likelihood, impact, evidence, and mitigation, revisited each milestone

Each team keeps one table of project risks with a fixed set of columns: likelihood, impact, supporting evidence, steps taken to reduce or detect the risk, and a mitigation plan. The table starts with three risks at the requirements milestone and grows to five risks at the architecture milestone, so it is revised rather than replaced. Because the same table carries forward, a risk that later occurs can be checked against what the team predicted about it earlier in the quarter.

> "Update your risk assessment to now identify five risks to successful completion of your project. Provide this information in a table format, for easy reference and tracking over the lifetime of your project." — [Architecture and design](https://courses.cs.washington.edu/courses/cse403/26wi/project/03_arch_design.html), "i. Risk assessment".

### Testing and CI

#### 9. Minimum example test set required before a full suite exists

Instead of requiring a complete test suite immediately, the testing milestone asks teams to set up their test-automation tooling and continuous integration (CI) pipeline with only a small number of example tests, at least five, each covering a different part of the code written so far. The documented process for adding a new test must work for someone outside the team, since the teaching assistant is expected to try adding one using only the team's instructions.

> "You are not expected to provide an extensive test suite for your project at this point. Rather, the goal is to have the test infrastructure and CI set up with a few existing, example tests" — [Testing and continuous integration](https://courses.cs.washington.edu/courses/cse403/26wi/project/04_testing_ci.html), "2. Set up your test-automation infrastructure and chosen CI service (60%)".

#### 10. Code-coverage tool required inside the CI pipeline

By the beta-release milestone, each team's continuous-integration pipeline must run a code-coverage tool automatically as part of every build, not just the test suite by itself, so coverage is measured continuously rather than produced as a one-time report. This follows an earlier in-class exercise where students ran a coverage tool by hand, so by this milestone they are expected to have wired the same kind of tool into their automated build.

> "We expect a code-coverage tool to be part of your CI flow." — [Beta release](https://courses.cs.washington.edu/courses/cse403/26wi/project/05_beta_release.html), "1. Solidify your toolchain, processes, and instructions (40%)".

### Milestone and release mechanics

#### 11. Same unaddressed defect penalized twice

If a team's project shows the same problem in two milestones in a row, for example because the team did not act on the teaching assistant's earlier feedback, the course subtracts points from both the earlier and the later submission, not only the later one. The rule is meant to make ignoring feedback costlier than fixing it, since the penalty compounds instead of resetting each week.

> "If your project suffers the same defect two weeks in a row (for example, you did not adequately address the TA feedback), then you will lose points from both submissions." — [Course project](https://courses.cs.washington.edu/courses/cse403/26wi/project/index.html), "Revisions".

#### 12. Version-control tag marks each release milestone

At each release milestone — beta, a second interim release the course calls "gamma", and the final release — the team creates a Git tag that identifies the exact commit making up that release, and records the tag in the repository's README. This gives staff, and any later reader of the repository, a reproducible way to check out the exact code that was graded at a given milestone, instead of guessing from commit timestamps.

> "A GitHub tag (id) for this release. This is an identifier to use to on a "git checkout" to get the commits that comprise the beta release of your software." — [Beta release](https://courses.cs.washington.edu/courses/cse403/26wi/project/05_beta_release.html), "1. Solidify your toolchain, processes, and instructions (40%)".

#### 13. Fixed six-part structure required for every project demo

Every in-class demo, whether it is an earlier release or the final one, follows the same six-part structure: introduce and motivate the product, demo the system, discuss challenges met so far (only for an earlier demo, not the final one), show an architecture diagram, discuss the implementation approach, and reflect on the experience. The guidance singles out the reflection part as more than a courtesy closing slide. Every team member must take part in the beta and final demos, and each presentation is time-boxed, for example nine minutes total for the final release including audience questions.

> "Demo your system. (This should occupy half, or a bit more, of your talk slot.)" — [How to give a demo presentation](https://courses.cs.washington.edu/courses/cse403/26wi/project/demo.html).

> "Reflect on your experience. (This should be more than one slide and is a crucially important part of your presentation.)" — [How to give a demo presentation](https://courses.cs.washington.edu/courses/cse403/26wi/project/demo.html).

#### 14. Fixed-section weekly status report committed to the repository

Every week, each team commits a status report as a file inside a dedicated folder in its own repository, and the report must use five fixed sections: a one-line high-level goal, a copy of last week's "goals for next week" section, progress and issues, questions for the teaching assistant, and this week's goals for next week with a time estimate for each item. Copying last week's goals section forward lets one report double as a running record of what was promised against what was delivered.

> "Original goals for the week. This section should be an exact copy of the last section from last week (i.e., goals from a week ago)." — [Course project](https://courses.cs.washington.edu/courses/cse403/26wi/project/index.html), "Weekly status reports".

### Teamwork and process evidence

#### 15. Per-milestone individual status and peer-contribution rating

With every group milestone, each team member privately submits a short individual status describing their own contribution and separately rates every teammate's contribution to that same milestone, using a staff-provided form. The course replaced an earlier, less frequent survey with this per-milestone rating specifically so staff can notice and respond to uneven contribution while the milestone is still fresh, rather than only at the end of the quarter.

> "This method of continuous feedback replaces surveys used in prior quarters, and allows the staff to better assist and reward student engagement in a timely fashion." — [Course project](https://courses.cs.washington.edu/courses/cse403/26wi/project/index.html), "2. Individual status and contribution reviews".

#### 16. Teaching assistant plays both customer and manager in weekly meetings

In the weekly project meeting, the same teaching assistant can be asked to act as the customer or product owner, judging whether requirements and prototypes are compelling, or as a senior manager who helps resolve team conflicts and gives process advice, and the team may ask the assistant to switch between the two roles within one meeting. The guidance explicitly warns against hiding problems from either role, since both roles exist to give the team a safe way to surface problems instead of concealing them.

> "As customer/product owner, the TA can help you to determine what a reasonable set of requirements are, and whether your documents and prototypes are compelling." — [Course project](https://courses.cs.washington.edu/courses/cse403/26wi/project/index.html), "Weekly project meetings".

> "It is a bad idea to try to hide information from your customer/product owner." — [Course project](https://courses.cs.washington.edu/courses/cse403/26wi/project/index.html), "Weekly project meetings".

### Peer review

#### 17. Cross-team review filed as issues in the reviewed team's own tracker

Each team is assigned another team's repository to review, must build and run it by following that team's own documentation, and records every problem it finds as an issue filed directly in that team's issue tracker, not only in the review document handed in for grading. If a reviewer gets stuck following the instructions, it must open a blocking issue right away, and the team being reviewed must resolve that blocking issue immediately so the review is not stalled.

> "If you are blocked while trying to do these things, open an issue immediately indicating that you are blocked. If another team opens such an issue on your repository, resolve it immediately." — [Peer project review](https://courses.cs.washington.edu/courses/cse403/26wi/project/07_peer_review.html), "1. Review your assigned project and file issues for any encountered problems".

#### 18. Required praise issue alongside critical feedback

Beyond filing issues for problems and suggestions, the reviewing team must also open one issue on the reviewed repository that only points out something the other team did well, so the mandatory feedback is not only a list of complaints. Every team member must personally contribute at least one issue, comment, or pull request to the review, and the finished review document is later shared with the team that was reviewed.

> "Also open one issue with praise: point out aspects of their project that you appreciated or found to be well-done." — [Peer project review](https://courses.cs.washington.edu/courses/cse403/26wi/project/07_peer_review.html), "Feedback (50%)".

### Reflection and retrospective

#### 19. Team retrospective on four fixed topics, capped at two pages

At the final-release milestone, the whole team writes one retrospective, capped at two pages, that must address four fixed topics: which features were completed or cut and why, how roles and responsibilities actually played out compared to the original plan, whether a formal development process was useful and how it changed, and how much time went to testing versus code review. Staff frame the deliverable around lessons the team would carry into a future project, not simply a record of what happened.

> "You should include what were the main lessons learned that you would take forward to your next project." — [Final release](https://courses.cs.washington.edu/courses/cse403/26wi/project/08_final_release.html), "3. Conduct a team project retrospective (20%)".

#### 20. Individual retrospective plus a separate, partly research-linked survey

Apart from the team retrospective, every student separately writes their own two-page individual retrospective and also completes a required survey about their experience with code review in the course; a student can choose whether their survey answers may also be used in a university research study on the same topic. The individual write-up must stand on its own because more than one staff member may read and grade it without other context.

> "The reflection should stand on its own as multiple staff members may be reading and grading it." — [Individual retrospective](https://courses.cs.washington.edu/courses/cse403/26wi/project/09_reflection.html).

> "The survey is a required submission, however, you will have the option of whether to include your answers in the UW CSE research on this topic." — [Individual retrospective](https://courses.cs.washington.edu/courses/cse403/26wi/project/09_reflection.html).

### AI use rules

#### 21. AI allowed only for project code, code review, and AI features

Students may use AI tools to help write and review the source code of their group project and to build any AI-powered features of the product itself, but not for any other part of a milestone deliverable or class assignment, such as the requirements document, design document, status reports, or reflections. The same boundary is repeated on most milestone pages rather than stated once and assumed, so students revisit it at each new deliverable.

> "You may use AI tools to assist with the coding (and source code review) of your group project milestone deliverables and for any AI-assisted features of your group project milestone deliverables." — [Syllabus](https://courses.cs.washington.edu/courses/cse403/26wi/syllabus.html), "Use of AI Tools".

> "However you may not use AI tools for any other parts of the milestone deliverables or class assignments." — [Syllabus](https://courses.cs.washington.edu/courses/cse403/26wi/syllabus.html), "Use of AI Tools".

#### 22. Team consent and written disclosure required for any AI use

Before any team member uses an AI tool on a permitted part of the project, every member of the group must agree to that use, and the team must clearly state in the turned-in material that AI was used, for example by crediting it in the final release's README file. The rule ties permission to the whole team, so one member cannot introduce AI-assisted work without the others agreeing to it first.

> "If you use AI tools (1) your group members must all agree to the use; and (2) you must clearly disclose the use in the turned-in material." — [Syllabus](https://courses.cs.washington.edu/courses/cse403/26wi/syllabus.html), "Use of AI Tools".

> "If you used genAI to help with coding or code reviews, be sure to provide attribution here." — [Final release](https://courses.cs.washington.edu/courses/cse403/26wi/project/08_final_release.html), "1. Finalize your product (50%)".

## Instructor observations, reflection, and open questions

No staff retrospective, published survey summary, or outcome data for this Winter 2026 offering was found. The saved pages are the syllabus, calendar, and project-assignment pages written for students; none of them contains a staff reflection on how these practices worked in a past offering. Not reviewed: the private Canvas site, the Ed discussion board, the individual-status-and-contribution form, and the Code Reviews Survey instrument linked from the individual retrospective page, since these either require course enrollment or are only a data-collection form rather than a published finding. This matches the earlier note in courses.md ("none found", checked 2026-09-15); the same conclusion still holds as of 2026-09-18.

New in this course, not seen in the other processed courses (MIT 6.1040, Stanford CS146S, CMU 17-316, UC San Diego CSE190/CSE291P): the teaching assistant deliberately role-playing both customer/product-owner and senior-manager during the same meeting (practice 16), the double point penalty for a defect left unaddressed across two milestones (practice 11), the required "praise issue" inside an otherwise critical peer review (practice 18), and the individual retrospective paired with an opt-in research survey about code review (practice 20).
