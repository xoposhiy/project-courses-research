# Harvard CS50 Introduction to Computer Science — Final Project, Fall 2025

## Course card

- **University and course**: Harvard University, CS50 *Introduction to Computer Science* (Computer Science 50). This file covers only the course's final project, the one part of the course where students build an open-ended piece of software and the one part where outside AI tools are allowed.
- **Term**: Fall 2025 (September to December 2025).
- **Level and audience**: introductory course for concentrators and non-concentrators, with or without prior programming experience; no prerequisites. Students reach the final project after ten weeks of problem sets in C, Python, SQL, and web technology.
- **Project format**: one student, or a group of two or three students, builds a piece of software of their own choosing, in a language of their own choosing, subject to staff approval. The project runs over the last four weeks of the term, through three graded checkpoints: a proposal, a status report, and a final implementation.
- **Grade structure**: the final project counts for 10% of the course grade. Like problem sets, it is scored as 2 × correctness + 2 × design + 1 × style (published weights for the whole course).
- **Sources**: [Final Project](https://cs50.harvard.edu/college/2025/fall/project/) (scope, milestones, AI policy, submission requirements), [Syllabus](https://cs50.harvard.edu/college/2025/fall/syllabus/) (academic honesty policy, grading weights, hackathon, CS50 Fair, lateness rules), David Malan (CS50 instructor), [Harvard Professor: CS50, What Matters More Than CS, Lecturing Well](https://www.developing.dev/p/harvard-professor-cs50-what-matters) (podcast interview, May 2026).

## Practices

### Project scope and team formation

#### 1. Staff-approved, student-chosen project topic

Students choose the topic, programming language, and infrastructure for their final project themselves, but the course staff must approve the choice before the project counts for credit. The only constraint on the topic is that it must draw on lessons from the course. A student may change their plan after it is approved, but any change also needs staff approval, and a project submitted without approval may not receive credit.

> "So long as your project draws upon the course’s lessons, the nature of your project is entirely up to you, albeit subject to the staff’s approval." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Final Project".

> "Projects submitted without approval may not receive credit." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Proposal".

#### 2. Team size scaled to project scope

Students may complete the final project alone or in a group of two or three classmates, and a group's project must be larger in scope than a single student's project by the same factor as the group's size. Every member of a group is expected to contribute equally to the design and implementation of the group's project. No more than three students may work on one project, though students outside the group may still be asked for advice within the limits of the honesty policy.

> "it is expected that the scope of a two- or three-person group’s project be, respectively, twice or thrice that of a typical one-person project." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Final Project".

> "it is expected that every student in any such group contribute equally to the design and implementation of that group’s project." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Final Project".

#### 3. Approval to merge a final project with another course's project

A student taking another course with its own final project may combine the two projects into one, but only after disclosing the plan to both courses and getting approval from both. The merged project must still satisfy each course's own requirements on its own terms; combining projects does not lower either course's bar.

> "Before pursuing a joint project, though, you must disclose to both courses and receive approval from both courses." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Combining Courses".

### AI use policy for the final project

#### 4. General-purpose AI tools allowed only for the final project

Students may use any general-purpose AI tool, such as ChatGPT, Claude, Copilot, or Gemini, while working on their final project, even though the same tools are banned everywhere else in the course. Everywhere else, only the course's own AI-based tool may be used. The final-project exception still requires that "the essence of the work" be the student's own; the tools are meant to speed up work the student already knows how to do, not to do the work in their place.

> "For your final project (and your final project only!) it is reasonable to use AI-based software other than CS50’s own [...], but the essence of the work must still be your own." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Implementation".

> "You’ve learned enough to use such tools as helpers. Treat such tools as amplifying, not supplanting, your productivity." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Implementation".

> "Using AI-based software other than CS50’s own (e.g., ChatGPT, Claude, Copilot, Gemini, et al.) that suggests or completes answers to questions or lines of code, except for your own final project." — [Syllabus](https://cs50.harvard.edu/college/2025/fall/syllabus/), "Not Reasonable".

### Milestones and deliverables

#### 5. Staged milestones with no extensions

The final project is split into three checkpoints on fixed dates: a proposal, a status report, and the final implementation, each submitted through the course's grading system. None of these deadlines can be extended except in an emergency, and the semester-long allowance that lets students turn in problem sets a little late does not cover any final-project checkpoint.

> "Extensions on the final project will not be granted." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Final Project".

> "Late work will not be accepted for quizzes, the test, or any milestone for the final project." — [Syllabus](https://cs50.harvard.edu/college/2025/fall/syllabus/), "Lateness".

#### 6. User-facing README as a required deliverable

Every final-project submission must include a Markdown file named README.md that works as a user manual for the software. Students may structure the file however they like, but it must make clear how to compile, configure, and use the project, and it must be several paragraphs long. The file should answer, in advance, any question the staff might have while testing the project, so that the staff does not need to contact the student after submission.

> "Documentation for your project in the form of a Markdown file called README.md. [...] This documentation is to be a user’s manual for your project." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Implementation".

> "It should not be necessary for us to contact you with questions regarding your project after its submission." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Implementation".

#### 7. Separate technical design document as a required deliverable

Every final-project submission must include a second Markdown file, named DESIGN.md, that explains the technical decisions behind the project and why the student made them. This file is different from the README: the README is a manual for using the finished software, while the design document is a technical walk-through of how the software is built inside. It must also be several paragraphs long.

> "A “design document” for your project in the form of a Markdown file called DESIGN.md that discusses, technically, how you implemented your project and why you made the design decisions you did." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Implementation".

> "Whereas your documentation is meant to be a user’s manual, consider your design document your opportunity to give the staff a technical tour of your project underneath its hood." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Implementation".

#### 8. Complete, commented source code as a required deliverable

Every final-project submission must include every file needed to run the software, and every file of source code must be commented throughout. This covers configuration files, build scripts, sample inputs, and any local databases the project needs, not only the code itself, so that the staff can run the project without asking the student for missing pieces.

> "Any and all files required to run your software [...], including source code as well as, if applicable, configuration files, Makefiles, sample inputs, SQLite databases, and so forth." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Implementation".

> "Needless to say, all source code should be thoroughly commented." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Implementation".

#### 9. Short public video demo as a required deliverable

Every final-project submission must include a video, no longer than three minutes, that presents the finished project to a general audience. The video may use slides, screenshots, voiceover, or live action, and the student is encouraged to appear in it. It must state the project's title and the student's name, and the finished video must be uploaded to a public video-hosting site and linked from the README.

> "A short video (that’s no more than 3 minutes in length) in which you present your project to the world, as with slides, screenshots, voiceover, and/or live action, ideally with you yourself appearing in the video." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Implementation".

> "Your video should somehow include your project’s title, your name and year, your dorm/house and concentration, and any other details that you’d like to convey to viewers." — [Final Project](https://cs50.harvard.edu/college/2025/fall/project/), "Implementation".

### Public demonstration and work sessions

#### 10. Optional overnight work session with self-set milestones

Between the proposal and status-report deadlines, the course runs an optional overnight session where students work on their final project alongside staff and classmates. A student who joins is asked to set three personal goals for the night: a goal they are sure to reach, a goal they think they can reach, and a stretch goal they hope to reach.

> "you’ll be asked to propose three milestones for yourself that evening: a “good” one that you intend to achieve no matter what; a “better” one [...] and a “best” one that you hope to achieve." — [Syllabus](https://cs50.harvard.edu/college/2025/fall/syllabus/), "CS50 Hackathon".

#### 11. Public fair to demo finished projects

The day after the implementation deadline, the course holds a public fair where every student demos their finished project to the wider campus community, including students, faculty, and staff from outside the course. Attendance at the fair is expected of all students, whether or not they demo their own work in person.

> "The CS50 Fair is an epic display of final projects." — [Syllabus](https://cs50.harvard.edu/college/2025/fall/syllabus/), "CS50 Fair".

> "it is an opportunity to mingle with students, faculty, and staff from across campus." — [Syllabus](https://cs50.harvard.edu/college/2025/fall/syllabus/), "CS50 Fair".

## Instructor observations, reflection, and open questions

- **Instructor observation: why the AI rule differs from the rest of the course.** In a podcast interview published in May 2026, CS50 instructor David Malan states that students may use general commercial AI tools on the final project even though the same tools are barred from the rest of the course's work.
  > "for CS50‘s final project, students are encouraged and welcome to use Claude or ChatGPT or Gemini or any number of off the shelf AI tools, though we don’t allow those through policy for the course’s assignments." — [Harvard Professor: CS50, What Matters More Than CS, Lecturing Well](https://www.developing.dev/p/harvard-professor-cs50-what-matters), interview around timestamp 31:38.
- **Instructor observation: reasoning for the general restriction.** Malan explains that the course wants a rule so simple that students can tell for themselves when they have crossed it, which is why the default rule bans outside AI tools rather than trying to limit how much they help.
  > "it was important to draw a clean line in the sand to students" [...] "And that to me is a very healthy line" — [Harvard Professor: CS50, What Matters More Than CS, Lecturing Well](https://www.developing.dev/p/harvard-professor-cs50-what-matters), interview around timestamp 33:23-33:50.
- **What was searched and not found.** The course-index entry noted "none found for the Fall 2025 final project policy" as of 2026-09-15; this file re-checked that claim. A 2024 SIGCSE paper co-authored by CS50 staff, "Teaching CS50 with AI" (dl.acm.org/doi/10.1145/3626252.3630938), describes the course's own AI-based coursework tool, but its full text is paywalled and secondary summaries of it do not mention the final-project AI-use exception, so it is not used above. No staff essay, blog post, or talk specific to the Fall 2025 final-project AI policy or its results was found. No published rubric for the final project, beyond the general 2×correctness + 2×design + 1×style formula in the syllabus, was found; the course's FAQ page and site navigation were checked and contain no separate rubric or grading page for the final project.
