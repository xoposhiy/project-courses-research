# Carnegie Mellon University 15-113 Effective Coding with AI, Spring 2026

## Course card

- **University and course**: Carnegie Mellon University, 15-113 *Effective Coding with AI*.
- **Term**: Spring 2026 (12 Jan to 24 Apr 2026). This was the first offering of the course.
- **Level and audience**: undergraduates who have finished the intro programming sequence. Prerequisite: 15-112 *Fundamentals of Programming and Computer Science*.
- **Project format**: individual work throughout, no team project. About ten weekly homework assignments plus three larger projects: a personal portfolio website, a creative web app, and a capstone. One homework assignment briefly pairs each student with another student's unfinished code for a hand-off exercise. Students build one portfolio website in week 1-2 and keep adding every later project to it for the rest of the term; it also serves as the place students point staff to for later submissions.
- **Grade structure**: homework (about 10 assignments) 20%, participation 20%, big projects (about 3) 40%, exams and quizzes 20%.
- **Sources**: [Course archive, Spring 2026](https://www.cs.cmu.edu/~mdtaylor/113/S26/) (description, schedule, grading, policies), [HW2: Crossy Road](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw2.html), [HW3: Explore an API](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw3.html), [HW4: Frontend + Backend](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw4.html), [HW6: Build a Database App](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw6.html), [HW7: Code Handoff](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw7.html), [HW8: The Agentic Build](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html), [HW9: Your First Mobile App](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw9.html), [Project 1: Personal Portfolio Website](https://www.cs.cmu.edu/~mdtaylor/113/S26/project1.html), [Project 2: Creative Web App](https://www.cs.cmu.edu/~mdtaylor/113/S26/project2.html), [Project 3: The Capstone](https://www.cs.cmu.edu/~mdtaylor/113/S26/project3.html), Mike Taylor, [Best Practices and Lessons Learned](https://www.cs.cmu.edu/~mdtaylor/113/S26/bestPractices.html).

## Practices

### Course structure

#### 1. Single growing portfolio site as project home

Each student builds one personal portfolio website in the first two weeks and keeps adding every later project to it for the rest of the term. The site is deployed on a free static hosting service (GitHub Pages). It is also how a student reports where a later project lives, so staff do not need a separate submission page for most work. By the end of the course each student has one link that shows all their work in one place.

> "Your webpage will also be how you submit your future projects to us for 15-113." — [Project 1: Personal Portfolio Website](https://www.cs.cmu.edu/~mdtaylor/113/S26/project1.html), "Why This Matters".

#### 2. Minimum new-work floor when reusing earlier code

For each larger project, a student may start from code written for an earlier assignment, but the course still requires a set number of new hours of work on top of it, shown through commits made during the project period. This lets a student go deeper on an idea they already understand instead of starting from zero every time, while stopping a student from submitting old work unchanged.

> "You may reuse and/or improve upon code from earlier assignments, but we still expect ~5–6 hours of *new* work for this project." — [Project 2: Creative Web App](https://www.cs.cmu.edu/~mdtaylor/113/S26/project2.html), "Grading".

#### 3. No extensions on major project deadlines

Deadlines for the larger projects are fixed, and extensions are granted only for serious, documented emergencies. The rule exists because these deadlines are followed immediately by scheduled check-ins and presentations that involve staff and peers, so moving one student's deadline would disrupt that shared schedule.

> "Due dates are firm to allow for presentations and peer review." — [Course archive, Spring 2026](https://www.cs.cmu.edu/~mdtaylor/113/S26/), "Late Policy".

### AI use policy

#### 4. AI policy built on disclosure, not banning tools

Instead of banning specific AI tools, the course requires students to document significant AI use, explain AI-generated code in their own words, and test and modify what the AI produces rather than copy it unchanged. Violations are about hiding or misrepresenting AI use, not about using AI itself.

> "Philosophy: Transparency and learning over restriction." — [Course archive, Spring 2026](https://www.cs.cmu.edu/~mdtaylor/113/S26/), "AI Usage Policy".

#### 5. Standing right to orally verify any submission

At any time, staff can ask a student to explain any part of their submitted code, describe how they built it, or discuss trade-offs and alternatives they did not take. This is a general policy that applies to every deliverable in the course, not only to a scheduled presentation, so a student must be ready to defend any submitted work on short notice.

> "The instructor may ask you to explain any part of your submitted code, your process for creating it, or possible trade-offs and alternatives." — [Course archive, Spring 2026](https://www.cs.cmu.edu/~mdtaylor/113/S26/), "AI Usage Policy".

#### 6. Collaboration test: can they redo it alone afterward

Students may discuss ideas, debug together, and review each other's code, but one student may not simply hand another the finished answer. The course gives a concrete test for the difference: collaboration is acceptable only if the helped student could recreate the work alone afterward, without notes or the original.

> "If you can teach them how to do it, great! If you're just giving them the answer, or if they can't recreate the work on their own without referencing notes or the original, you aren't collaborating." — [Course archive, Spring 2026](https://www.cs.cmu.edu/~mdtaylor/113/S26/), "Collaboration Policy".

### Process evidence

#### 7. Required log of verbatim prompts, not summaries

Every deliverable that involves AI use must include a text file listing the AI tools used and the key prompts that shaped the work, and the file must contain the actual prompt text, not a paraphrase or a summary written after the fact. The requirement repeats across the whole term because staff found summaries hide what really happened during development.

> "share your actual prompts, verbatim, and not just summaries (AI generated or otherwise)." — [HW9: Your First Mobile App](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw9.html), "What You Must Submit".

#### 8. Process reflection written without AI help

After the larger AI-assisted projects, each student writes a short reflection on their own process, tool choices, and what changed compared to how they worked before the course, and this reflection must be written entirely without AI assistance. The rule keeps one deliverable in every project unmistakably the student's own analysis of their own work.

> "Be honest and specific; there are no wrong answers here, but you must write this yourself, without AI." — [Project 3: The Capstone](https://www.cs.cmu.edu/~mdtaylor/113/S26/project3.html), "Reflection".

#### 9. Grading checks documentation against the delivered code

Staff read each student's README and prompt log against the code actually submitted, and they lower a grade when the documentation is generic AI-generated text that does not match what was built. The rule targets a specific failure staff observed: a student pastes an early, AI-written draft of the documentation and never updates it to reflect the finished project.

> "we've recently seen some really nonsensical ones that were clearly AI-generated at an early stage in the project, and do not reflect the code that was actually given to us." — [HW6: Build a Database App](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw6.html), "Grading".

#### 10. Keep the assignment brief out of the AI's context

Students are told not to paste the assignment instructions into the AI as context before starting an assignment. The rule exists so students practice writing their own requirements and talking to the AI about what they want, instead of letting the staff-written brief do that thinking for them, because real project work will rarely come with such a precise specification already written.

> "do not immediately provide this document to the AI as context. [...] we have noticed a lack of prompt sophistication due to overreliance on the specifications we've already given you." — [HW6: Build a Database App](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw6.html), "Grading" (note).

### Verification

#### 11. Required in-person progress check-in mid-project

Partway through each larger project, every student must meet in person with a TA or the instructor to show their progress and get feedback before continuing. Missing this checkpoint costs graded points, separate from the credit for the finished project itself, so a student cannot skip feedback and only turn something in at the deadline.

> "There will be one required in-person check-in (similar to what we did for Project 1) roughly halfway through the project so you can receive feedback and adjust direction." — [Project 2: Creative Web App](https://www.cs.cmu.edu/~mdtaylor/113/S26/project2.html), "What You Must Submit".

#### 12. Short in-person presentation on how AI was used

After a project, a student gives a brief in-person presentation to a TA and a small group of peers, focused on the process used to build the work, specifically what the AI contributed and where it did not help. This presentation carries its own points on the grading rubric, separate from the quality of the finished project.

> "Brief, informal 5-minute presentation to a TA and small group of peers focusing on the process used to create the website, how AI helped, and any areas where it did not." — [Project 1: Personal Portfolio Website](https://www.cs.cmu.edu/~mdtaylor/113/S26/project1.html), "Grading Rubric".

#### 13. In-person oral exam on the final project

For the capstone project, staff hold an oral exam in the final week where each student must show they understand and can explain what every part of their own code is responsible for. Unlike the shorter presentations after earlier projects, this exam happens after the project checkpoint and must take place in person rather than by video or text.

> "there will be an oral exam in the last week where we will expect you to understand and be able to explain what each part of the code is responsible for." — [Project 3: The Capstone](https://www.cs.cmu.edu/~mdtaylor/113/S26/project3.html), "Assignment Overview".

> "These must be done in-person." — [Project 3: The Capstone](https://www.cs.cmu.edu/~mdtaylor/113/S26/project3.html), "What You Must Submit".

### Code handoff exercise

#### 14. Paired code handoff with a minimum code-retention rule

Each student spends about 30 minutes in class starting a small game, documents it, and stops; staff then send that unfinished repository to a different student, who spends one focused hour reading, understanding, and continuing it without starting over. A rule caps how much of the original code the second student may delete or comment out, so the exercise stays about working with someone else's code rather than replacing it.

> "You must retain at least 75% of the original code. You may reorganize, refactor, add to, and fix the code, but you cannot simply delete or comment out most of it and start over." — [HW7: Code Handoff](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw7.html), "Phase 2 Instructions".

### Specify-delegate-review workflow

#### 15. Write the specification alone before the coding agent sees it

Before touching an AI coding agent, a student writes a detailed specification of the software to build, covering required behavior, data format, error cases, and a checklist of acceptance criteria, and this specification must be written without AI help. The course frames this step as the most important one, because a vague specification is expected to produce a poor result from the agent no matter how the agent is used afterward.

> "Write this spec yourself, without AI assistance. The whole point of this assignment is to see how the quality of your planning affects the quality of the AI's output." — [HW8: The Agentic Build](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html), "Detailed Instructions".

#### 16. Hands-off agent build with every intervention logged

Once the specification is written, the student hands it to a coding agent and lets it build with as little interference as possible, accepting the agent's file and command actions rather than directing each step. Any time the student does step in, to fix something, clarify something, or redirect the agent, that intervention must be written down in the prompt log, so the number and kind of interventions becomes part of the evidence of how well the specification worked.

> "Track your interventions. If you do need to step in (to fix something, clarify something, or nudge it in a different direction), note each intervention in your log." — [HW8: The Agentic Build](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html), "Detailed Instructions".

#### 17. Independent code review from a fresh agent session

After the agent finishes building, the student opens a brand-new chat session with the agent and asks it to review the code against the specification, without giving this second session any memory of the first session's conversation. Starting fresh keeps the reviewing agent from simply defending choices it already made as the builder, so the review is closer to an independent check.

> "Open a new Copilot Chat session (click "+" to start fresh — this is important so the reviewer doesn't have the builder's context)." — [HW8: The Agentic Build](https://www.cs.cmu.edu/~mdtaylor/113/S26/hw8.html), "Phase 3: The AI Review".

### Continuous improvement

#### 18. Recurring student survey turned into a public best-practices report

After each assignment, staff survey the class about satisfaction, how much of the code they understood, and their AI workflow, and collect free-response advice. At the end of the course, staff publish these results as one report, grouping the recurring advice into themes and ranking how many students supported each one, so the practices a class discovers itself can carry over to the next cohort instead of being lost.

> "we're finally close to being able to synthesize those into a set of student-driven best practices that you can carry forward, and that other students will benefit from in future semesters." — [Best Practices and Lessons Learned](https://www.cs.cmu.edu/~mdtaylor/113/S26/bestPractices.html), "An important note from Mike".

## Instructor observations, reflection, and open questions

All items below come from [Best Practices and Lessons Learned](https://www.cs.cmu.edu/~mdtaylor/113/S26/bestPractices.html). The instructor states his own framing for the whole document: "this preliminary report is mostly generated with Claude Opus 4.7, with subsequent manual revisions" and "one should still approach these conclusions with a somewhat critical eye." He also says he plans to write a separate, "carefully validated" personal summary later, which was not found as of 2026-09-18. The report itself draws on about 320 free-response comments across nine post-assignment surveys plus Likert-style ratings (1-7 or 1-5 scales); all numbers below are self-reported by students, not measured by staff through independent testing.

- **Student self-report, dominant theme across four assignments**: writing a detailed plan or specification before touching the AI was the most consistently repeated piece of advice in the survey data. > "This is the most consistently-reinforced habit in the entire dataset. [...] By HW9, students were calling the spec 'the most important thing you can do with your time.'"
- **Student self-report, named by the instructor as "the most important critique"**: several students said that writing a specification and handing it to an agent made them stop reading the code they submitted. > "I found this way of working caused me to not read my code at all. [...] I would've preferred finding the bugs myself through physical testing rather than just trusting the bug existed and then trusting the AI solved it." [S24, HW8]
- **Measured (self-reported survey averages), not staff-verified**: the database assignment (HW6) had the highest self-reported "read the code" and "understood" scores of the term (5.0/7 and 4.8/7), while the two agentic-workflow assignments (HW8, HW9) had among the lowest "read the code" scores (3.2/7 and 2.9/7) despite comparable or higher satisfaction scores.
- **Student self-report on the code hand-off assignment**: leaving a README with a to-do list for the next student was named by, in the report's words, "well over a third of responses" as the single highest-leverage thing a student could do for their successor.
- **Student self-report, deployment and infrastructure**: students reported that getting a backend deployed, or getting a phone-app build environment working, cost more time and frustration than writing the application code itself, on both HW4 and HW9. > "Platform setup was harder than coding." [...] "The most difficult part was setting up the expo and the novelty of tools working with. The agentic part and prototyping and testing was not that difficult." [S15, HW9]
- **Student self-report, tool adoption over the term**: use of IDE-integrated coding agents (Cursor, GitHub Copilot in agent mode) rose across the semester, reaching over 80% of the class on at least one IDE-integrated agent by HW8, while browser-based chat tools (Gemini, ChatGPT) that were dominant early in the term declined in reported use.

What was searched for and not found: no controlled study comparing student outcomes with and without these practices; no other staff-authored retrospective besides this preliminary, largely AI-generated report (the instructor's own promised follow-up essay was not yet published as of 2026-09-18); no capstone-project data, since the report itself states it was written before the capstone was due and would be updated once that feedback arrived, and no updated version was found.
