# National University of Singapore CS2103 / CS2103T Software Engineering, AY2025/26 Semester 1

## Course card

- **University and course**: National University of Singapore, CS2103 / CS2103T *Software Engineering*. CS2103T is the version for students who also take a linked communication course (CS2101); the software-engineering rules are the same for both.
- **Term**: Academic Year 2025/26, Semester 1 (August to November 2025).
- **Level and audience**: undergraduate course. The course expects prior Java and object-oriented programming skill, which it does not teach directly.
- **Project format**: an individual project first (weeks 2 to 8), where each student builds a small command-line assistant program from a blank starting point. Then a team project (weeks 3 to 13), where teams of five students take over one shared existing codebase and extend it, delivering six versions on a fixed weekly schedule and ending with a peer testing exam.
- **Grade structure**: participation 5%, individual project 15%, team project 50%, final exam 30%.
- **Sources**: [Course Overview](https://nus-cs2103-ay2526s1.github.io/website/admin/courseOverview.html), [Individual Project: Overview](https://nus-cs2103-ay2526s1.github.io/website/admin/ip-overview.html), [Individual Project: Grading](https://nus-cs2103-ay2526s1.github.io/website/admin/ip-grading.html), [Team Project: Overview](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-overview.html), [Team Project: Expectations](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-expectations.html), [Team Project: Timeline](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-timeline.html), [Team Project: Constraints](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-constraints.html), [Team Project: Forming Teams](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-teams.html), [Team Project: Deliverables](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-deliverables.html), [Team Project: Grading](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-grading.html), [Team Project: Practical Exam](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-pe.html), [Team Project: Practical Exam Dry Run](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-ped.html), [Team Project: Supervision/Guidance](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-supervision.html), [Appendix A: Course Principles](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixA-principles.html), [Appendix B: Course Policies](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html), [Appendix C: FAQ](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixC-faq.html), [Standards/Conventions](https://nus-cs2103-ay2526s1.github.io/website/admin/standardsAndConventions.html), [Tools](https://nus-cs2103-ay2526s1.github.io/website/admin/tools.html), [Peer Evaluations](https://nus-cs2103-ay2526s1.github.io/website/admin/peerEvaluations.html), [Participation Marks](https://nus-cs2103-ay2526s1.github.io/website/admin/participation.html), [Grade Breakdown](https://nus-cs2103-ay2526s1.github.io/website/admin/gradeBreakdown.html), [Course Expectations](https://nus-cs2103-ay2526s1.github.io/website/admin/courseExpectations.html), [Semester archive (site root)](https://nus-cs2103-ay2526s1.github.io/website/).

Note on terms: "iP" is called "individual project" below, "tP" is called "team project", and "PE" is called "the practical exam". "AB3" is explained as "AddressBook-Level3" the first time it appears, in plain words.

## Practices

### Course structure

#### 1. A from-scratch project before a shared-codebase project

Each student first builds a small project alone from a blank starting point, then joins a team that takes over and extends one shared existing codebase. The individual project is a personal command-line assistant program that every student writes from nothing. The team project instead starts from AddressBook-Level3, a small but non-trivial contact-management program that the teaching staff wrote and that every team in the course extends in a direction it picks. Starting from existing code, instead of a blank page, is meant to copy how software is built in most jobs, where a new developer almost always joins a project that already has code and a design.

> "you will first ramp up your technical skills by doing a small individual project (greenfield) in which you will develop a personal assistant chatbot called Duke." — [Course Overview](https://nus-cs2103-ay2526s1.github.io/website/admin/courseOverview.html), "Course Overview".

> "you will move to a team project (brownfield) in which you will take over an existing project AddressBook-Level3 (AB3) [...] and enhance it into a better product or evolve it in a direction that you choose." — [Course Overview](https://nus-cs2103-ay2526s1.github.io/website/admin/courseOverview.html), "Course Overview".

#### 2. One allowed extension direction, chosen after measuring workload from a dropped alternative

Teams may only extend the shared starting codebase along one fixed direction: turning it into a more powerful or better-optimized version of the same kind of program, for a target user the team defines. A second direction, letting a team change the program into anything it wanted, was offered in earlier runs of the course but was removed for this run. The staff give a measured reason: that freer direction cost teams much more extra work than students expected when they chose it.

> "This direction is not available this semester, as it has been observed to increase tP workload beyond what students anticipate when making this choice (e.g., 40-50% more work than strictly needed by the tP)." — [Team Project: Overview](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-overview.html), "Direction".

### AI use and reuse policy

#### 3. AI coding tools allowed for productivity, not for producing submitted code from a description

Students may use AI coding tools such as autocomplete or chat assistants, but the policy states clear examples of use it counts as acceptable and use it counts as unacceptable. Acceptable use includes using a tool to autocomplete the next bit of code the student is already writing, or to generate an alternative implementation for comparison after the student has written their own. Unacceptable use is giving the tool a problem description, taking its generated code directly into the submission, and presenting it as the student's own work.

> "Use a tool such as GitHub co-pilot to increase the productivity of writing code" — [Appendix B: Course Policies](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html), "Policy on reuse".

> "Give the problem description to the tool and get it to generate the code for you, use it directly in your submission, and claim it as your own." — [Appendix B: Course Policies](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html), "Policy on reuse".

#### 4. AI-help disclosure location scales with how widely the tool was used

Students must disclose AI-assisted code, but where they disclose it depends on how much of the submission the tool touched. If a tool helped write only a few methods or classes, the student notes this in a code comment next to that code. If a tool was used more broadly, such as as an autocomplete tool through most of the coding, the student instead writes one disclosure statement naming the tool, who used it, and how much it was used, placed in the README file for the individual project or the Acknowledgements section of the Developer Guide (a document that explains the software's design to a future developer) for the team project.

> "If the use of the tool was localized into a few places (e.g., used it to write a few methods/classes only), cite its use in comments near where you used it." — [Appendix B: Course Policies](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html), "Policy on reuse".

> "If the use was more widespread (e.g., used it as an auto-complete tool during most of your coding), cite the usage (i.e., which tool, who used it, the extent of use)" — [Appendix B: Course Policies](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html), "Policy on reuse".

#### 5. In-code tag marks a copied block as reused, separate from a plain source comment

When a student copies a non-trivial block of code from elsewhere, possibly with small changes, the block must be wrapped with a special two-line tag that names the student and marks the block as reused, in addition to a comment naming the source. This is stricter than the rule for code the student wrote after only reading another solution for the approach, which only needs a plain comment citing the source. The tag format lets an automated script find and separately account for reused code when it measures how much a student wrote.

> "//@@author {yourGithubUsername}-reused" — [Appendix B: Course Policies](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html), "Policy on reuse".

#### 6. Public approval request before using any third-party library

A student or team must post a request in the class discussion forum and get staff approval before adding any third-party library or service to their project, and once one has been approved for any student, every other student may use it without asking again. This turns each approval into a shared, visible decision rather than a private one, and avoids repeated identical requests.

> "Always get permission from us before you reuse third-party libraries. Please post your 'request to use 3rd party library' in our forum." — [Appendix B: Course Policies](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html), "Policy on reuse".

#### 7. Automated plagiarism check against the current class and all past runs of the team project

After final submissions, staff run an automated check that compares every team's project code against other teams' code from the same run and from every earlier run of the course, to find reuse that was not credited. Cases the check flags are reported to the university for a formal investigation and can lead to failing the whole course.

> "We'll be using automated plagiarism checks to detect uncredited reuses of content from other CS2103 tP's [...] tP's done by other teams in this batch and all previous batches." — [Appendix B: Course Policies](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html), "Policy on reuse".

### Team project design

#### 8. Published checklist of product constraints so team projects stay comparable

Staff publish a fixed list of constraints that every team's product must follow, so that projects built by different teams stay comparable to each other and to each other's grading. The list includes rules such as keeping the product for one user only, storing its data in a plain text file a person can edit by hand, and changing the shared starting codebase only through small working steps rather than one large rewrite. The stated reason is to keep the projects similar enough that the course's learning goals apply equally to all of them, and so that peer testers (see practice 14) can fairly test any team's product.

> "Your project should comply with the following constraints. Reason: to increase comparability among projects and to maximize applicability of course learning outcomes in the project." — [Team Project: Constraints](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-constraints.html), "tP: Constraints".

> "The data should be stored locally and should be in a human editable text file." — [Team Project: Constraints](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-constraints.html), "tP: Constraints".

#### 9. Team composition rules that force language and nationality mixing

When teams are not fully assigned by staff, forming a team of a single nationality is not allowed unless English is the only language every member shares, and a team may have at most one exchange student. The stated reason is to train students to work in a mixed-culture team and to make sure English is the shared project language.

> "Teams of a single nationality are not allowed unless the only language common among all team members is English." — [Team Project: Forming Teams](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-teams.html), "tP: Forming Teams".

> "No more than one exchange students per team" — [Team Project: Forming Teams](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-teams.html), "tP: Forming Teams".

#### 10. Team-project effort target set below the individual project, to offset team overhead

The amount of implementation work expected from each team member in the team project is set at about half of the effort that member already put into the earlier individual project, even though the team project runs on top of an existing codebase and adds team coordination. The staff state this bar in two ways: as a fraction of individual-project effort, which is the main measure used for grading, and as a rough line-count target, used only as a secondary check.

> "The expected level of functionality is what you could achieve if each member puts in about 50% of the implementation effort they put into the iP" — [Team Project: Expectations](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-expectations.html), "tP: Expectations".

#### 11. Work divided by feature, not by code component, to keep individual credit clear

Team members are told to split up the team project's work by user-facing feature, where one person does all the work an enhancement needs from start to finish, rather than by splitting the codebase into components and having each person own one component that others then edit. Dividing by feature keeps each person's contribution traceable for grading and avoids one member's delay blocking everyone else's work.

> "we recommend that the work to be divided primarily based on features/enhancements rather than components." — [Team Project: Expectations](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-expectations.html), "tP: Expectations".

#### 12. Novelty is explicitly not rewarded; a smaller, well-built feature scores higher

The grading rules state directly that building a novel, unique, or exciting product does not earn extra marks, and that a plain feature built to a high standard scores better than a more original or difficult feature built poorly. This is stated to redirect student effort away from chasing originality and toward finishing a smaller set of features at high quality.

> "creating a novel/unique/interesting product will NOT earn you extra marks in this course." — [Team Project: Overview](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-overview.html), "Direction".

#### 13. Automated code-authorship tool cross-checked with a manual tag for individual credit

Because the team project shares one codebase among five people, staff run a tool that scans the shared Git history and attributes each block of code to the team member whose commits produced it, and publishes this attribution so each student can check it. When the tool's automatic attribution is wrong, for example because another member edited code after the original author wrote it, the student can add a manual tag in the code to fix the attribution used for grading.

> "We will be using a tool called RepoSense to make it easier for you to see (and learn from) code written by others, and to help us see who wrote which part of the code." — [Tools](https://nus-cs2103-ay2526s1.github.io/website/admin/tools.html), "Tool: RepoSense (for authorship tracking)".

### Peer testing exam

#### 14. Multi-phase peer testing exam with developer rebuttal and staff moderation

Before the team project's final grade is set, every student is assigned another team's product to test as an individual take-home exam, and the exam runs in four phases across more than a week: the tester finds and files bugs, the team being tested writes a response accepting or rejecting each bug, the tester can dispute that response, and staff make the final call on any disputed case. Both the quality of the bugs a student finds and the bugs found in a student's own product affect that student's grade.

> "The PE is divided into four phases, and is of the form 'take-home assignment'" — [Team Project: Practical Exam](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-pe.html), "tP: Practical Exam (PE)".

#### 15. Bug type-and-severity taxonomy used for both tester and developer credit

Every bug filed in the practical exam is classified into one of three types, a functionality bug, a documentation bug, or a feature flaw, and into one of four severity levels, and both the type and the severity decide how much credit the tester earns and how much the mark of the team being tested is reduced. This shared classification lets staff apply one consistent rule across every team's bug reports instead of judging each report case by case.

> "The penalty/credit for a bug varies based on the severity of the bug: severity.High > severity.Medium > severity.Low > severity.VeryLow" — [Team Project: Practical Exam](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-pe.html), "tP: Practical Exam (PE)".

> "The three bug types (i.e., type.FunctionalityBug, type.DocumentationBug, type.FeatureFlaw) are counted for three different grade components." — [Team Project: Practical Exam](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-pe.html), "tP: Practical Exam (PE)".

#### 16. Declared future work is immune from being reported as a bug

Teams may list up to a fixed number of specific fixes they plan to make later, in a "Planned Enhancements" section of their Developer Guide, and once listed, a tester who reports one of those exact flaws during the practical exam gets no credit and the team gets no penalty for it. This gives teams an incentive to admit known weaknesses honestly instead of hiding them and hoping testers miss them.

> "Enhancements listed in this section will be immune from the PE bug reporting i.e., they will not be penalized if reported as bugs during the PE." — [Team Project: Deliverables](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-deliverables.html), "Deliverable: Developer Guide (DG)".

#### 17. Ungraded rehearsal of the peer testing exam before the graded one

A week before the graded practical exam, students run through the same bug-reporting process as an ungraded "dry run" on an earlier version of another team's product, so that everyone practices the mechanics once before it counts. Bugs found in a student's own product during this dry run carry no grade penalty at all, only a small bonus for the tester who found them.

> "There is no penalty for bugs reported in your product. Every bug you find is a win-win for you and the team whose product you are testing." — [Team Project: Practical Exam Dry Run](https://nus-cs2103-ay2526s1.github.io/website/admin/tp-ped.html), "tP: Practical Exam Dry Run (PE-D)".

### Peer evaluation and supervision

#### 18. Staged peer evaluation rounds where only the last one is graded

Students rate their teammates several times during the team project, using the same set of questions each time, but only the final round's ratings are used for grading; an earlier, compulsory round is described to students as feedback for their own information only, so a low rating received early does not by itself affect the grade as long as it improves by the final round.

> "Submission is compulsory. However, ratings/responses you receive will not be considered for grading" — [Peer Evaluations](https://nus-cs2103-ay2526s1.github.io/website/admin/peerEvaluations.html), "Session: Prelim Peer Evaluation".

> "Any low ratings received in this session will not affect your marks, provided they do not remain low in the final peer evaluation." — [Peer Evaluations](https://nus-cs2103-ay2526s1.github.io/website/admin/peerEvaluations.html), "Session: Midterm Peer Evaluation".

#### 19. Only conduct ratings, not competency ratings, penalize participation marks

Teammates rate each other on two separate rubrics, professional conduct and technical competency, but only a low conduct rating actually reduces a student's participation mark; a low competency rating has no penalty. This keeps the grade from punishing a student simply for being less skilled than their teammates, while still penalizing conduct problems such as poor communication or missed commitments.

> "-1 for each professional conduct criterion in which you are rated low by team members." — [Participation Marks](https://nus-cs2103-ay2526s1.github.io/website/admin/participation.html), "Participation Marks".

> "No penalty for scoring low on competency criteria." — [Participation Marks](https://nus-cs2103-ay2526s1.github.io/website/admin/participation.html), "Participation Marks".

#### 20. Tutors give no ad-hoc feedback on ungraded project deliverables

Teaching assistants who supervise a team are explicitly barred from giving informal feedback on any project deliverable before it is graded, even a design decision a team is stuck on, so that submitted work reflects the students' own judgment and every team gets the same level of guidance. Students needing input are directed instead to ask a general question on the public class forum, where an answer can be shared with everyone.

> "The teaching team will not give ad-hoc feedback on project work connected to a component yet to be graded." — [Appendix B: Course Policies](https://nus-cs2103-ay2526s1.github.io/website/admin/appendixB-policies.html), "Policy on feedback for project work".

## Instructor observations, reflection, and open questions

No staff retrospective, survey summary, or measured outcome data was found for this course. This re-checks and confirms the course-index note "none found (2026-09-15)".

What was searched: the site's Appendix C (FAQ) page, which answers many "why" questions about the rules but reports staff reasoning, not measured results; the Course Principles appendix, which states philosophy, not evidence; the Course Overview, Course Expectations, and Tools pages; and every individual-project, team-project, grading, constraints, peer-evaluation, and practical-exam page listed in the course card, searched by text for words such as "reflect", "retrospect", "survey result", and "we found that". None of these turned up a staff-authored essay, blog post, paper, or published number about how the practices worked in this or any past run of the course.

What was not reviewed: the weekly schedule pages (13 separate week pages) and briefing videos, the linked online textbook "Software Engineering for Self-Directed Learners", the public GitHub forum where students and staff post (a discussion channel, not a staff publication), the dashboards that track project progress and code contribution, and Appendices D, E, F, and G (getting help, using GitHub, handling team issues, troubleshooting), which are logistics pages rather than reflection or policy pages.

New in this course, not seen in the four already-processed courses (MIT 6.1040, Stanford CS146S, CMU 17-316, UC San Diego CSE190/CSE291P): building a team project by extending one shared, staff-written existing codebase rather than a student-chosen topic (practice 1); an AI-disclosure rule whose required location changes with how widely the tool was used (practice 4); a special in-code tag for marking reused code blocks, checked by an authorship-tracking tool (practices 5, 13); an automated plagiarism check spanning the current class and every past run of the course (practice 7); the multi-phase peer "practical exam" with developer rebuttal and staff moderation, plus its own ungraded dry run (practices 14, 15, 17); and giving teams immunity from bug penalties for weaknesses they declare in advance (practice 16).
