# University of Maryland, CMSC398Z Effective Use of AI Coding Assistants and Agents, Fall 2025

## Course card

- **University and course**: University of Maryland, College Park, CMSC398Z *Effective Use of AI Coding Assistants and Agents*.
- **Term**: Fall 2025 (September to December 2025), Fridays 2-4pm.
- **Level and audience**: undergraduate practicum, first offering of the course. Prerequisite: a minimum grade of C- in CMSC320 or CMSC330, plus permission of the computer science department. One credit, aimed at juniors and seniors. Taught jointly by a computer science professor and a journalism instructor.
- **Project format**: no single semester-long project. Each Friday session centers on one small coding project done mostly in pairs during the two-hour class, moving from short Python exercises, through noisy real-world data and calls to language models, to work inside large existing codebases: a stale open-source data-parsing tool with real open bug reports, a small application built twice with two different architectures, and a real, currently running production web application.
- **Grade structure**: 40% weekly written reflection and check-in, 40% class participation, 20% code submitted for review. The lowest grade in each of the three categories is dropped, and no A+ is given.
- **Sources**: [Course description and logistics](https://www.cs.umd.edu/class/fall2025/cmsc398z/), [Grading](https://www.cs.umd.edu/class/fall2025/cmsc398z/grading.html), [Course details and readings](https://www.cs.umd.edu/class/fall2025/cmsc398z/details.html), [GitHub repository](https://github.com/billpugh/cmsc398z-student-downloads) (weekly notes and starter projects), [Week 1 class notes](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week1/README.md), [Coach-mode instructions for the AI assistant](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week1/playWordle/.github/copilot-instructions.md), [Week 8: Simple Greenfield development - wordSearch](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/wordSearch.md), [Week 8: Modifying the IDLE editor](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/modifyingIdle.md), [Week 9 class notes](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week9/README.md), [Week 13: Week 1 goal](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week13/GOAL-WEEK1.md), Bill Pugh, [A Mini-Course to Get CS Students Up to Speed: Effective use of AI Coding Tools](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/AICSEPAR2026.md) (conference slides, AICSEPAR 2026), Derek Willis, [Making Scraping Better with AI Assistance](https://thescoop.org/archives/2025/08/01/making-scraping-better-with-ai-assistance/) (instructor blog post, 1 Aug 2025), Bill Pugh, [Week 1 Learnings: Dequeue Operation Analysis](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week14/BILLS-LEARNINGS-WEEK1.md), Bill Pugh, [Zion Database Analysis](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week14/ANALYSIS-2025-12-09.md), [Discussion Summary: Developing UPDATING_CONVERSATIONS.md](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week14/DISCUSSION_SUMMARY.md).

Note on terms: the two required weekly written assignments are called "learning log and check-in" in the course materials; below they are described in plain words as a written reflection. "Quuly" is a real web application, built years earlier by former students, that manages queues for course office hours at the university; it is used in the last two weeks of the course as a case-study codebase. "Zion" is the name of that application's backend code.

## Practices

### Course structure

#### 1. Class time is pair coding and discussion, not lecture

Most weekly class sessions run as a discussion section or a hackathon instead of a lecture: students sit in small groups at tables and split the two-hour period between talking through their projects and readings and writing code together in pairs. Only the very first class of the term is mainly lecture. Students are expected to have already read or watched the assigned material before class, so class time itself is spent applying it.

> "Most weeks, much of the 2-hour window for class will be more like a discussion section or hackathon, with students discussing projects and readings around each table and doing pair coding." — [Course description and logistics](https://www.cs.umd.edu/class/fall2025/cmsc398z/), "Course description".

#### 2. Programming work stays inside class time

Students are expected to complete nearly all required coding work during the scheduled class session rather than at home. The only work expected between sessions is the assigned reading and two short written reflections. This removes the need for a student to get stuck alone on a coding problem outside of class, since the two-hour session provides direct access to peers and staff.

> "It is expected that most or all of the required work on programming tasks can be completed during class." — [Course description and logistics](https://www.cs.umd.edu/class/fall2025/cmsc398z/), "Course description".

#### 3. Peer help as the primary way to get unstuck, with informal recognition

Students are told to rely mainly on each other, not on staff office hours, when they get stuck on a coding problem. The course states this design choice directly: because office hours cannot reach every student quickly enough, other students are expected to fill that role instead. To reinforce it, staff say they will watch for students who are especially helpful to others during the term and find a way to recognize them publicly, separate from the graded participation score.

> "Rather than depend solely upon office hours for that, we will expect that other students will generally be able to help students get unstuck." — [Course description and logistics](https://www.cs.umd.edu/class/fall2025/cmsc398z/), "Student expectations".

> "We will be looking to identify some heroes who have been particularly helpful to others in the course and find a way to recognize them." — [Course description and logistics](https://www.cs.umd.edu/class/fall2025/cmsc398z/), "Creating a supportive environment".

#### 4. Give access to several competing AI tools, budgeted by the student

Students are asked to sign up for more than one commercial AI coding tool, rather than the whole class standardizing on a single one, and to personally budget for the cost. The course names five specific services, spanning an IDE-integrated assistant, a general-purpose chatbot, and command-line coding agents, and tells students to plan on paying about $20 a month for a couple of months, while noting that some access is available for free through student programs.

> "Students will sign up for services such as Copilot Pro, Open AI, Gemini, Claude and Cursor." — [Course description and logistics](https://www.cs.umd.edu/class/fall2025/cmsc398z/), "Student expectations".

> "Students might find it useful to plan to pay for several months of service at $20/month over the course of the semester." — [Course description and logistics](https://www.cs.umd.edu/class/fall2025/cmsc398z/), "Student expectations".

#### 5. Address AI vendor data-use policy up front, and call it low stakes for coursework

Before students pick which tools to use, staff proactively explain that some free AI tools let the vendor use a student's usage data to improve their products, giving a specific free tool as an example. The staff guidance is that students should not worry about this for their coursework, since they are not using the tools on sensitive or high-value work in this class, and that paid accounts usually allow opting out of data sharing if a student prefers.

> "My advice is not to worry about that for your use of AI tools in this class, where you are not expected to be using them on your $1B start-up idea or anything sensitive." — [Course description and logistics](https://www.cs.umd.edu/class/fall2025/cmsc398z/), "Student expectations".

### Written reflection between sessions

#### 6. Two-part written reflection due between every pair of classes

Each week, students submit two separate short written assignments instead of one combined write-up: one due the Tuesday after class, covering the work just done, and one due the Friday before the next class, responding to that week's assigned reading. Splitting the reflection this way gives students a distinct look-back on the previous session and a separate look-forward that prepares them for the next one.

> "One due by noon the following Tuesday, and another and due at noon on Friday, 2 hours before class." — [Grading](https://www.cs.umd.edu/class/fall2025/cmsc398z/grading.html), "Learning Log and check-in".

> "The one due on Tuesday will cover what you worked on the previous class, the one due on Friday will be on the assigned reading for that upcoming class." — [Grading](https://www.cs.umd.edu/class/fall2025/cmsc398z/grading.html), "Learning Log and check-in".

#### 7. Reflection graded on thoughtful completion, with a check-in for a low score

The two weekly written reflections are graded on how thoughtfully a student completed them, not on whether their answers are correct. Each is scored on a 1-to-6 scale, and any score of 4 or below leads staff to talk with that student directly rather than just record the low grade. Late submissions lose points on a fixed schedule that grows with how late the submission is.

> "They are graded on thoughtful completion, not on correctness." — [Grading](https://www.cs.umd.edu/class/fall2025/cmsc398z/grading.html), "Learning Log and check-in".

> "Any grade of 4 or less will be promptly discussed with the student." — [Grading](https://www.cs.umd.edu/class/fall2025/cmsc398z/grading.html), "Learning Log and check-in".

### Directing an AI coding assistant

#### 8. Coach-mode custom instructions file stops the assistant from just answering

For early Python exercises, staff give students a project-level configuration file for the AI coding assistant that tells it to act as a coach instead of writing finished code on request. The file instructs the assistant to ask what a function should return before implementing it, to require a plain-English description of the intended logic before writing anything longer than a few lines, and to mark places where the student should write code themselves with a specific comment marker. Staff strengthened these rules mid-course after finding the assistant still wrote complete functions from just a function name and signature.

> "In student-driven Python projects, the agent must always act as a coach, never as a solution provider." — [Coach-mode instructions for the AI assistant](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week1/playWordle/.github/copilot-instructions.md), "Be a coach, not an over eager intern".

> "Do not write complete functions or solutions unless the student has provided a detailed, step-by-step English description of the logic and expected output." — [Coach-mode instructions for the AI assistant](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week1/playWordle/.github/copilot-instructions.md), "Be a coach, not an over eager intern".

#### 9. Design document before code, with required notes on any deviation

When starting a new small project with an AI coding agent, students first ask it to write a design document containing no code, before asking for any implementation. If the resulting code ends up differing from that design, the agent must record what changed and why, so the design document does not go stale once real code exists. The same pattern of design document, then code, then a note on deviations, is repeated later on a larger, unfamiliar codebase.

> "Ask Claude to develop a design for implementing the project in python, and put the design in design.md." — [Week 8: Simple Greenfield development - wordSearch](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/wordSearch.md).

> "Tell it that if it needs to make any changes from the initial design, it should document those changes." — [Week 8: Simple Greenfield development - wordSearch](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/wordSearch.md).

#### 10. Structured student review of the assistant's design and code

After an AI agent produces a design and an implementation, the student must write a short review of both, guided by a fixed list of questions rather than an open-ended reaction. The questions ask whether the student actually understands the design and code, whether the code would behave incorrectly anywhere, whether any part is too terse to follow, and whether the agent added unneeded complexity, such as handling errors that realistically cannot occur.

> "Do you see anything where the code would do the wrong thing?" — [Week 8: Simple Greenfield development - wordSearch](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/wordSearch.md).

> "Coding models are notorious for writing explicit code to catch and log all kinds of exceptions that are unlikely to occur, or if they occur, there is nothing to do but give up." — [Week 8: Simple Greenfield development - wordSearch](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/wordSearch.md).

#### 11. Restrict the assistant's edit scope inside a large, unfamiliar codebase

When students work inside a large real codebase they did not write, staff tell them to explicitly limit which part of it the AI agent may change before asking it for any design or code. In one project, students clone the full source tree of a real open-source project but tell the agent up front that only one specific subdirectory is in scope for edits, even though the agent may still read the rest of the tree for context.

> "Tell Claude that we are only going to be making changes to '@Lib/idlelib'." — [Week 8: Modifying the IDLE editor](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/modifyingIdle.md).

#### 12. Reuse one generated project-context file instead of regenerating it

Rather than have every student separately run the AI assistant's project-scanning command on a large codebase, staff generate that context file once and give it to students to drop into place. This saves setup time, since generating the file is slow on a codebase of that size. Staff also flag that the generation step is not repeatable: running the same command twice on the same codebase produced two different files.

> "using '/init', like any LLM use, is nondeterministic. I tried using it twice, and got different files, one longer than the other" — [Week 8: Modifying the IDLE editor](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week8/modifyingIdle.md).

#### 13. Submit the AI chat transcript as part of the graded work

For coding projects done with an AI assistant, students save the full chat conversation to a file and submit it alongside their code, not only the resulting program. This gives staff a record of how the work was actually produced, not just what the final code looks like.

> "Save your chat transcript at chat.md" — [Week 1 class notes](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week1/README.md), "Project 1a - Playing wordle".

> "Submit your Python code and chat.md to the submit server" — [Week 1 class notes](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week1/README.md), "Project 1a - Playing wordle".

### Working in real, unfamiliar codebases

#### 14. Choose a project with fuzzy, unwritten requirements to teach requirement discovery

For one multi-week project, staff deliberately picked a real tool whose correct behavior is not fully written down anywhere, so students must decide what the right behavior should be rather than just match a bug fix to a spec. The tool converts government record files into structured data, and its output format has no formal schema; when a specific bug report comes in, students are told to look for the same problem elsewhere in the data and propose a general rule, not only patch the one reported case.

> "The congressional-records project is an example of something you will often see in the real world: a project with fuzzy requirements." — [Week 9 class notes](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week9/README.md), "Projects with fuzzy requirements".

#### 15. Delegate bulk data inspection to the assistant instead of manual review

When students need to check something across many output files, they are told to ask the AI assistant to analyze the files directly and summarize the result, instead of opening and reading a large number of files themselves. This moves a repetitive, high-volume inspection task from the student to the agent, while the student still decides what question to ask and what to do with the answer.

> "Generally, you shouldn't need to look at a lot of json files yourself. You can download the json files for some dates, and then ask Claude to analyze them [...]" — [Week 9 class notes](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week9/README.md), "Projects with fuzzy requirements".

#### 16. Group students by table around one shared issue, with a mid-session share-out

Students working on the same real bug report sit together at one table so they can compare approaches as they go, instead of each working alone on a separate copy of the same problem. Partway through the session, staff stop everyone at a table and have them describe what they have found and how they think the issue should be fixed before work continues.

> "We are going to ask you to organize by table, with all the students sitting at a table working on the same issue." — [Week 9 class notes](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week9/README.md), "Work in class".

> "We will have places where we ask all students at a table to stop work and share what they have learned and their thoughts about how to address the issue." — [Week 9 class notes](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week9/README.md), "Work in class".

#### 17. Merge to one credited pull request per issue after staff review

Even when several students work on the same reported bug, only one pull request per issue is submitted for it, and that single pull request names every student who contributed and wants public credit. Staff review the finished work before any of it is proposed to the real open-source project, rather than letting students submit directly.

> "Eventually, we want to submit only one pull request per issue, but that pull request should mention the help from all students who worked on that issue and want to be publicly named." — [Week 9 class notes](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week9/README.md), "Work in class".

#### 18. Practice the pull-request workflow on a private mirror before optionally going public

Students do their bug-fixing work in a private, university-hosted git repository that mirrors the real open-source project, following the same branch-and-pull-request steps they would use on the public project but without a public audience. Only after staff review the finished work can a student choose to resubmit it as a real pull request to the original public repository.

> "Doing this for real involves making a public pull request, which we cannot ask you to do for a class project." — [Week 9 class notes](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week9/README.md), "Work in class".

> "after Derek and I have had a chance to review your work, you can choose to make a public pull request to merge your changes into the github repository." — [Week 9 class notes](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week9/README.md), "Work in class".

#### 19. Frame exploration of a live production system as a code review, not a build task

For a multi-week project using a real, currently running web application, staff frame the whole exercise as a code review of someone else's system rather than a coding assignment. Students trace one specific operation through the code and its data stores, look for bugs and inconsistencies, and write up their findings as if reporting back to the developer who built the feature. Students first use the running application from an end user's perspective before reading any of its code.

> "Treat this like a real code review. The code may have bugs or edge cases. Be skeptical." — [Week 13: Week 1 goal](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week13/GOAL-WEEK1.md), "Code Review Mindset".

> "Write this as if you were doing a code review for a colleague who added this feature and asked you to verify the consistency guarantees are correct." — [Week 13: Week 1 goal](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week13/GOAL-WEEK1.md), "Deliverable: LEARNINGS-WEEK1.md".

### Assessment

#### 20. Grade submitted code on effort and time on task, not on working correctly

Code that students submit for review each week is graded mainly on whether they made a genuine, sustained effort on the assignment, not on whether the resulting program actually works. A student whose code fails to achieve the intended result can still receive the top grade for that submission if the attempt was made in good faith over a reasonable amount of time.

> "Grading will be based on an assessment of whether students made a good faith attempt to work on the assignment with an appropriate amount of time on task" — [Grading](https://www.cs.umd.edu/class/fall2025/cmsc398z/grading.html), "Code submitted for review".

> "A good faith attempt that wasn't successful at achieving the desired functional outcomes can still get a top grade." — [Grading](https://www.cs.umd.edu/class/fall2025/cmsc398z/grading.html), "Code submitted for review".

#### 21. Grade participation from directly observed pair and group behavior

Class participation is graded live by staff watching how a student works with others during pair and group activities in class, rather than from any written submission. The scale runs from 0, for no participation, to 10, for working well with a pair or group, with specific point levels defined in between for being significantly off task or not engaging productively with others.

> "Graded each class based on instructor observation in the classroom during pair and group work." — [Grading](https://www.cs.umd.edu/class/fall2025/cmsc398z/grading.html), "Classroom participation and engagement".

#### 22. Drop the lowest grade in each graded category

Across the term, a student's single lowest score in each of the three graded categories, reflection, participation, and submitted code, is dropped from the grade calculation for that category. This means one bad week, or one unavoidable miss, does not have to weigh down a student's grade in that category for the rest of the term.

> "In each category, the lowest grade will be dropped." — [Grading](https://www.cs.umd.edu/class/fall2025/cmsc398z/grading.html), "Graded assignments".

#### 23. No top grade tier, because open-ended work resists objective ranking

The course does not award its highest possible letter-grade tier at all, because staff say the design of the course, built around open-ended small projects rather than uniform tests, gives them no reliable way to single out one piece of work as clearly exceptional compared to merely good work.

> "No A+ grades will be given. Given the design of the course, we don't have a way to objectively identify exceptional work." — [Grading](https://www.cs.umd.edu/class/fall2025/cmsc398z/grading.html), "Grading curve".

## Instructor observations, reflection, and open questions

- **Instructor observation: course materials go stale within a single semester.** Bill Pugh writes that the tools changed faster than the course could track, even during the term itself. > "If I taught the same course again this semester, I would significantly revise it" and > "due to how much AI coding tools have changed in six months" — [A Mini-Course to Get CS Students Up to Speed](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/AICSEPAR2026.md), "Materials from my course are already out of date".

- **Instructor observation: getting the assistant to act as a coach instead of an answer machine took heavy manual tuning, and only partly worked.** This is reported for both the early Python exercises and the later full-stack project. > "Put a lot of work into providing guidance so that Claude would work as a tutor, rather than an answer machine" and > "Needed a lot of tuning, sort of a game on rails" — [A Mini-Course to Get CS Students Up to Speed](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/AICSEPAR2026.md), "Building a social media app with AI tutoring" and "Future Work: AI coding tools as personal tutors".

- **Instructor's personal report on his own coding practice (his own use, not a claim about students).** Bill Pugh reports that on his own outside project work he no longer writes or reviews source code directly. > "I no longer type source code, or even review it" — [A Mini-Course to Get CS Students Up to Speed](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/AICSEPAR2026.md), "I'm not saying we can stop teaching coding".

- **Instructor observation: the closing case-study system was picked because it was real, unmaintained, and unfamiliar.** > "Software hadn't been touched in years, no one at UMD felt qualified to update it" and > "Written in unfamiliar frameworks: React and Go with GraphQL and Redis" — [A Mini-Course to Get CS Students Up to Speed](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/AICSEPAR2026.md), "Course Wrap up, weeks 13-14".

- **Instructor demonstration, not a report on student results.** Bill Pugh published his own worked answer to the week-13 codebase-tracing assignment, including problems he found beyond the assigned questions, for example: > "When a student requeues a conversation, they don't have an option to switch rooms" (referring to the office-hours queue application, not to course enrollment) — [Week 1 Learnings: Dequeue Operation Analysis](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week14/BILLS-LEARNINGS-WEEK1.md), "More bugs found". He separately published a full write-up of exploring that same application's production database with an AI assistant, shared with students as an example rather than as a required deliverable — [Zion Database Analysis](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week14/ANALYSIS-2025-12-09.md).

- **Instructor demonstration: a worked example of using an agent for iterative design ends with explicit lessons for students.** A summary of one staff design conversation with the AI assistant lists takeaways including > "Question assumptions", > "Look for race conditions", and > "Verify with real data" — [Discussion Summary: Developing UPDATING_CONVERSATIONS.md](https://github.com/billpugh/cmsc398z-student-downloads/blob/main/week14/DISCUSSION_SUMMARY.md), "Key Takeaways for Students". This is a staff-authored teaching example published alongside the case study, not a report on how students actually performed.

- **Co-instructor self-report, published before the course started.** Derek Willis, describing the personal scraping project that led him to join as co-instructor, reports the assistant needed active supervision and sometimes exceeded what he asked for. > "occasionally it tried to go beyond the boundaries of what I requested" and > "I also have learned to ask for written plans in advance and wrap-up documents at the end of the process as a way of keeping track of my expectations and what actually changed." — Derek Willis, [Making Scraping Better with AI Assistance](https://thescoop.org/archives/2025/08/01/making-scraping-better-with-ai-assistance/), 1 Aug 2025. This personal practice appears to foreshadow the design-document-then-review pattern used later in the course (practices 9 and 10).

Searched and not found: a systematic staff retrospective or published survey summary of student outcomes for this Fall 2025 offering. The learning-log and survey responses (submitted through Google Forms and the UMD submit server) are private student data and were not available. The course's Zulip chat archive and its YouTube playlist of class recordings were not reviewed. A short LinkedIn announcement post by Bill Pugh, posted before the semester, was checked and adds nothing beyond the course description already cited above. No independent, published outcome study of this specific offering was found as of 2026-09-19.

New in this course, not seen in the other processed courses (MIT 6.1040, Stanford CS146S, CMU 17-316, CMU 15-113, UW CSE403, NUS CS2103, UC San Diego CSE190/CSE291P): grading code submissions on good-faith time-on-task rather than on working results (practice 20), dropping the single lowest score in every graded category (practice 22), explicitly declining to award a top grade tier because open-ended work cannot be ranked objectively (practice 23), and treating an unfamiliar real production system as a pure code-review exercise before any code is changed (practice 19).
