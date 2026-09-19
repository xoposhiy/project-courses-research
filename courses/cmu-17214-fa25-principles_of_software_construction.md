# Carnegie Mellon 17-214/17-514 Principles of Software Construction, Fall 2025

## Course card

- **University and course**: Carnegie Mellon University, 17-214/17-514 *Principles of Software Construction: Objects, Design, and Concurrency*.
- **Term**: Fall 2025 (August to December 2025).
- **Level and audience**: undergraduates take 17-214, graduate students take the 17-514 section of the same course. Prerequisites: two semesters of programming experience (15-122 or 15-211) and a discrete-mathematics course (15-151 or 21-127).
- **Project format**: homework assignments are done individually, not in teams. A shared board-game project (a two-player strategy game called Santorini, played by moving workers and building towers on a grid) recurs at two points in the term: once for an initial design-and-implementation milestone with peer review, and again later to add a graphical interface and extra character powers. Every other homework uses a separate, unrelated codebase — a flashcard app, a static website generator, and a face-analysis web service — chosen to fit the skill it teaches (testing, refactoring, concurrency).
- **Grade structure**: 50% assignments (1000 points total, each assignment weighted differently), 30% exams (two midterms at 7.5% each, final exam 15%), 10% labs, 10% participation and quizzes.
- **Sources**: [Course Syllabus, Schedule, and Policies, Fall 2025](https://web.archive.org/web/20251117092403/https://cmu-17-214.github.io/f2025/index.html) (archived copy; the live page returned a 404 error when this file was written), [Course Learning Goals](https://web.archive.org/web/20251108042523/https://cmu-17-214.github.io/f2025/learninggoals.html), [Homework 1: Warm-Up with Flash Cards](https://web.archive.org/web/20251108042907/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw1.md), [Homework 2: Santorini (Part 1)](https://web.archive.org/web/20251108042740/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw2.md) (design and peer review), [Homework 3: Unit Testing](https://web.archive.org/web/20251108042637/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw3.md), [Homework 4: Design and Testability Improvement of a Static Website Generator](https://web.archive.org/web/20251108042539/https://github.com/CMU-17-214/f2025/blob/main/assignments/hw4.md) (refactoring), [Homework 5: Concurrency](https://web.archive.org/web/20251108042640/https://github.com/CMU-17-214/f2025/blob/main/assignments/hw5.md), [Labs Overview and Grading](https://web.archive.org/web/20251108042640/https://github.com/CMU-17-214/f2025/blob/main/labs.md).

## Practices

### Course structure

#### 1. One shared project for design work, separate codebases for other skills

The course reuses one project, the board-game project, at two separate points in the term: first for an initial design-and-implementation milestone with peer review, then months later to add a graphical interface and extra character powers. Every other homework assignment uses a different, unrelated piece of code — a flashcard app, a website generator, and a web service that analyzes faces in pictures — chosen to fit the skill that assignment teaches. Students see one project grow in stages for design and interface work, while other skills are practiced on separate, one-off codebases.

> "In Homework 6, we will revisit the game and extend it with god cards and with a GUI." — [Homework 2: Santorini (Part 1)](https://web.archive.org/web/20251108042740/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw2.md), assignment introduction.

#### 2. Trial design milestone graded but not counted until after peer feedback

The first design submission is graded right away, but only a later, revised version determines the grade for that work. Students submit an initial design and implementation, receive staff and peer feedback, and then resubmit a revised version that is graded with the same rubric; only the revised score counts toward the final grade. This removes the pressure of getting the design fully right on the first attempt, since the feedback loop happens before the score that counts.

> "Milestone 2a will be graded but will not count toward your final grade; instead we will regrade your design in Milestone 2c." — [Homework 2: Santorini (Part 1)](https://web.archive.org/web/20251108042740/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw2.md), "Milestone 2a: Design and Implementation".

### Design

#### 3. Design decisions justified with named principles and rejected alternatives

Students must justify each of two required design decisions by naming a specific design principle and by describing the alternatives they rejected. For each decision (where to store game state, and how to check and perform a build action), students write a short document stating the decision, naming the design goal, principle, or pattern that supports it, and discussing the trade-offs of the alternatives considered. Grading checks that the stated design vocabulary actually matches the choice made, not only that some vocabulary is present.

> "provide a justification (with reference to design goals/principles/heuristics) for your responsibility assignment for state; discuss the alternatives you had considered and the trade-offs they entailed that led you to choose this particular design" — [Homework 2: Santorini (Part 1)](https://web.archive.org/web/20251108042740/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw2.md), "Milestone 2a: Design and Implementation, Deliverable 5".

#### 4. Core logic kept independent of the user interface at design time

The game logic must work completely on its own, callable through plain method calls, with no dependency on any user interface. Students design and test the game by calling methods directly, and design diagrams are not supposed to model interface elements at all. This separation is required from the first design milestone, well before any interface exists, so an interface can be added later without changing the tested core.

> "The core logic of your solution must be testable and completely independent from your solution’s eventual graphical user interface (GUI)." — [Homework 2: Santorini (Part 1)](https://web.archive.org/web/20251108042740/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw2.md), assignment learning goals.

> "Model only the core of the game, not GUI elements or test code." — [Homework 2: Santorini (Part 1)](https://web.archive.org/web/20251108042740/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw2.md), "Milestone 2a: Design and Implementation, Deliverable 4".

### Peer review

#### 5. Anonymous peer review of classmates' designs through a fixed rubric

A few days after the design milestone is due, each student receives two or three classmates' design documents, with names removed, to review; staff sometimes mix in their own designs that have known problems. Reviewers do not know whose work they are reviewing, and authors do not know who reviewed them. Reviews go through the course's online peer-review tool using a fixed rubric, rather than as free-form comments.

> "Reviews are anonymous (reviewers will not know the authors of the solutions and authors will not know the identity of the reviewers)." — [Homework 2: Santorini (Part 1)](https://web.archive.org/web/20251108042740/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw2.md), "Milestone 2b: Peer Review".

> "Your reviews should be conducted through the Canvas peer review system with the rubric, not simply as comments for each assigned review." — [Homework 2: Santorini (Part 1)](https://web.archive.org/web/20251108042740/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw2.md), "Milestone 2b: Peer Review".

#### 6. Peer reviews graded on whether the critique is accurate

Staff grade each peer review by checking whether it correctly identifies real design problems, not just by checking that a review was submitted. A review that invents a problem in a well-designed solution counts against the reviewer, the same as a review that misses a real problem. Each review is expected to take about an hour, keeping the exercise proportionate to a design milestone that itself carries limited weight.

> "We will evaluate whether your reviews correctly point out design problems that exist or incorrectly point out problems where code is well designed." — [Homework 2: Santorini (Part 1)](https://web.archive.org/web/20251108042740/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw2.md), "Milestone 2b: Peer Review".

> "We do not expect you to spend more than 1 hour per review." — [Homework 2: Santorini (Part 1)](https://web.archive.org/web/20251108042740/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw2.md), "Milestone 2b: Peer Review".

### Testing

#### 7. Specification tests must not fail correct but unspecified behavior

A test that checks a specification must not reject a correct implementation just because it behaves one way on a point the specification never mentions. Students are told to write tests only for behavior the specification actually states, and to leave any behavior the specification leaves open untested, even if one choice looks more natural than another. Staff check this by running each test suite against several different implementations that all satisfy the specification, and count how many the suite wrongly rejects.

> "Do not test what is not specified. [...] if it is not in the specification, it should not be tested." — [Homework 3: Unit Testing](https://web.archive.org/web/20251108042637/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw3.md), "Part 2: Specification-base testing (TypeScript)".

#### 8. Grade test suites by injecting bugs and by injecting valid changes

Test-suite quality is measured, not just assumed, by running each student's tests against deliberately broken and against validly modified versions of the same program. Staff insert about twenty bugs into an otherwise correct implementation and check that each bug makes at least one test fail; separately, staff apply changes that stay within the specification and check that the test suite still passes on those. Students are told they can run the same kind of check on their own tests before submitting.

> "We will evaluate the quality of your tests by injecting bugs into the implementations to see whether your tests catch them." — [Homework 3: Unit Testing](https://web.archive.org/web/20251108042637/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw3.md), "Part 2: Specification-base testing (TypeScript)".

> "We will also inject allowed changes to the implementation that do not violate the specification to see whether your tests still pass as expected." — [Homework 3: Unit Testing](https://web.archive.org/web/20251108042637/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw3.md), "Part 2: Specification-base testing (TypeScript)".

#### 9. Specification-based and coverage-based testing taught as separate tasks

The same assignment splits testing into two distinct tasks against two implementations of one program: writing tests from the specification alone in one language, and writing tests aimed at full branch coverage of the code in another language. Students see that the two approaches ask different questions — does the code do what the specification says, versus does every branch of the code run — using the same program in two languages so the comparison is direct.

> "you will perform structural testing for the Java implementation and specification testing for the TypeScript implementation in your Homework 1 repo." — [Homework 3: Unit Testing](https://web.archive.org/web/20251108042637/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw3.md), assignment introduction.

#### 10. Required written comparison of two testing strategies used

After finishing both kinds of tests, students write a short reflection naming which test-design strategy they used and comparing their experience with specification-based testing against structural testing, using concrete examples from their own work. The reflection is graded on whether it is grounded in the student's actual experience rather than generic statements. A separate, optional section of the same document lets students describe any AI-tool use on the assignment.

> "In section Specification vs structure testing briefly reflect on your experience with the two different testing approaches." — [Homework 3: Unit Testing](https://web.archive.org/web/20251108042637/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw3.md), "Part 4: Documentation and Reflection".

### Refactoring

#### 11. Refactor an unfamiliar codebase with planted design flaws, not the student's own code

Students practice refactoring on a codebase they did not write and have never seen before, one built with specific, intentional design flaws, rather than on code from an earlier assignment of their own. The codebase is a working but poorly designed static website generator; students spend most of the assignment reading and understanding it before changing anything. The assignment states that this mirrors joining an existing team's codebase on the job, where most code was written by someone else and is rarely well documented.

> "you will work with an existing non-trivial code base that has several design and testability flaws. This mirrors a common setting in practice where you will join a team that has already a code base to work with [...]" — [Homework 4: Design and Testability Improvement of a Static Website Generator](https://web.archive.org/web/20251108042539/https://github.com/CMU-17-214/f2025/blob/main/assignments/hw4.md), assignment introduction.

#### 12. Each design fix tracked as an issue linked to the commit that closes it

Every refactoring change starts as a written issue describing the specific problem and its location in the code, and ends with that issue closed by a message linking to the commit that fixed it. Students open one issue per design problem before touching the code, so the reasoning behind a change is recorded separately from the change itself. Grading checks both the issue text and that the linked commit actually contains the described fix.

> "Create a GitHub issue using our provided template with the design problem in the title [...]. The issue text should point out a specific problem at a specific location in the code and explains why the specific code is problematic" — [Homework 4: Design and Testability Improvement of a Static Website Generator](https://web.archive.org/web/20251108042539/https://github.com/CMU-17-214/f2025/blob/main/assignments/hw4.md), "Improve design".

> "Close the issue with a message that explains how you fixed the issue and link the issue to the commit that fixed it." — [Homework 4: Design and Testability Improvement of a Static Website Generator](https://web.archive.org/web/20251108042539/https://github.com/CMU-17-214/f2025/blob/main/assignments/hw4.md), "Improve design".

#### 13. Verify a refactoring preserved behavior by diffing generated output

Because the tests provided with the codebase are too weak to catch broken behavior, students check that a refactoring changed nothing observable by generating the program's output before and after the change and comparing the two with a diff tool. The assignment states plainly that this only checks the one example that was run, not every possible input, but treats that as still useful evidence that nothing was obviously broken.

> "While comparing the output on one example is not guaranteeing that the refactoring is behavior-preserving for all inputs, it provides assurance that nothing obvious was broken." — [Homework 4: Design and Testability Improvement of a Static Website Generator](https://web.archive.org/web/20251108042539/https://github.com/CMU-17-214/f2025/blob/main/assignments/hw4.md), "Appendix: Technical Hints, Testing".

### AI use rules

#### 14. AI use allowed, but the student stays responsible for anything it produced

Students may use AI assistants such as Copilot or ChatGPT on homework and labs, but staying correct is the student's job, not the tool's. The rule covers written text too: a student may have an AI assistant draft or help draft the written justification for a design decision, as long as the student checks that the justification is correct before submitting it. Using an AI assistant does not excuse a wrong answer, and the policy warns that such tools often produce answers that look right but are not.

> "Using ChatGPT to write or help write justifications in homework assignments, while checking the correctness of the answer." — [Course Syllabus, Schedule, and Policies, Fall 2025](https://web.archive.org/web/20251117092403/https://cmu-17-214.github.io/f2025/index.html), "Collaboration policy and academic integrity".

> "you are still fully responsible for the correctness of your solution and complying with licenses." — [Course Syllabus, Schedule, and Policies, Fall 2025](https://web.archive.org/web/20251117092403/https://cmu-17-214.github.io/f2025/index.html), "Collaboration policy and academic integrity".

#### 15. Some assignments require students to disclose and reflect on AI use

On top of the general rule that AI use is allowed, individual assignments can require a short write-up of how AI tools were used and what the experience was like. For example, the testing assignment asks students to add an open-ended section describing which AI tools they tried and whether they found them useful, separate from the main technical reflection.

> "When you use AI assistants in homework, some assignments may require you to briefly describe their use and your experience with the homework submission." — [Course Syllabus, Schedule, and Policies, Fall 2025](https://web.archive.org/web/20251117092403/https://cmu-17-214.github.io/f2025/index.html), "Collaboration policy and academic integrity".

> "If you used AI tools such as ChatGPT or Copilot for any part of homework 3, add a section AI Tools describing what you tried them for and whether you found them useful (open ended)." — [Homework 3: Unit Testing](https://web.archive.org/web/20251108042637/https://raw.githubusercontent.com/CMU-17-214/f2025/refs/heads/main/assignments/hw3.md), "Part 4: Documentation and Reflection".

#### 16. Automated plagiarism detection run every semester

Every submission is checked by an automated plagiarism-detection system, and staff report that it catches cheating almost every term. The course states this track record directly to students as part of explaining the integrity policy, rather than only listing the penalty for cheating.

> "We use automated systems to detect software plagiarism. These automated systems are highly effective and, so far, have detected software plagiarism almost every semester." — [Course Syllabus, Schedule, and Policies, Fall 2025](https://web.archive.org/web/20251117092403/https://cmu-17-214.github.io/f2025/index.html), "Collaboration policy and academic integrity".

### Assessment and pacing

#### 17. Milestones that feed peer review excluded from flexible late days

Students get a bank of free late days for homework deadlines, but the milestones that feed a fixed peer-review schedule are excluded from that flexibility. The design submission that classmates will review, the peer review itself, and the final graphical-interface milestone must land on time because other students' work depends on the schedule, while every other deadline can be shifted using banked late days or a per-day penalty.

> "For homework deadlines, you have 5 free late days for the semester. [...] This policy applies to all homework deadlines except HWs 2a, 2b, and 6b." — [Course Syllabus, Schedule, and Policies, Fall 2025](https://web.archive.org/web/20251117092403/https://cmu-17-214.github.io/f2025/index.html), "Grading and Deadlines".

#### 18. One no-penalty resubmission per student, regraded as the first submission

Each student may redo and resubmit exactly one graded homework milestone after seeing its grade, and the resubmission is regraded as though it were the original submission, restoring any lost points. This is separate from the late-day bank and can be used only once per student in the semester, giving every student one guaranteed second attempt somewhere in the course.

> "For a single homework deadline during the semester (except HWs 2a, 2b, and 6b), you can redo and resubmit your work after it was graded." — [Course Syllabus, Schedule, and Policies, Fall 2025](https://web.archive.org/web/20251117092403/https://cmu-17-214.github.io/f2025/index.html), "Grading and Deadlines".

> "It will be regraded as if it was the first submission and you can regain all lost points. Each student can only do this once." — [Course Syllabus, Schedule, and Policies, Fall 2025](https://web.archive.org/web/20251117092403/https://cmu-17-214.github.io/f2025/index.html), "Grading and Deadlines".

#### 19. Regrade requests must cite the rubric, not just disagreement

A student who disagrees with a grade must point to a specific mismatch between the rubric and the score received, not simply state disagreement. Regrade requests that lack this justification are closed without further action, which pushes students to re-read the rubric before appealing rather than appeal first and explain later.

> "Regrade requests need a justification, explaining why our assessment is inconsistent with the rubric. Regrade requests without such justification will be closed." — [Course Syllabus, Schedule, and Policies, Fall 2025](https://web.archive.org/web/20251117092403/https://cmu-17-214.github.io/f2025/index.html), "Grading and Deadlines".

#### 20. Looser collaboration rules for low-stakes labs than for graded homework

Weekly labs, which are pass/fail and worth little of the final grade, allow students to work together and even copy solutions, while homework does not. For labs, a student may look at or copy another student's solution or a reference solution, but must still present and explain that solution to a teaching assistant in person to get credit; homework has no such exception. This lets students learn collaboratively on low-stakes practice work while keeping graded homework individual.

> "In contrast to homework assignments, we have a very relaxed collaboration policy for labs." — [Labs Overview and Grading](https://web.archive.org/web/20251108042640/https://github.com/CMU-17-214/f2025/blob/main/labs.md), "Collaboration policy".

> "you may look at other students’ solutions and reference solutions and even copy them. However, you will have to present and explain your solution to the TA on your own." — [Labs Overview and Grading](https://web.archive.org/web/20251108042640/https://github.com/CMU-17-214/f2025/blob/main/labs.md), "Collaboration policy".

## Instructor observations, reflection, and open questions

No published staff reflection, retrospective, or outcome data about this offering was found. This re-checks and confirms the course-index note of "none found (2026-09-15)". The search covered: the instructor's personal site (course listing page only, no linked essay or blog post), a general web search for the instructor's name together with the course number and terms like "reflection," "retrospective," and "AI," and a search of the course's own site for any staff-written retrospective page. None turned up a reflection specific to this course or this offering.

One primary document could not be retrieved: Homework 6 ("Santorini: User Interface" and "Santorini: God Cards"), the assignment that revisits the board-game project to add a graphical interface and extra character powers. The live course site returned a 404 error by the time this file was written, and the Wayback Machine's only crawl of the site (November 2025) ran before Homework 6 was published, so no snapshot of it exists. Its content is known only indirectly, through the forward reference in Homework 2 and the two schedule entries naming it.
