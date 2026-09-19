# MIT 6.1040 Software Design, Fall 2025

## Course card

- **University and course**: Massachusetts Institute of Technology, 6.1040 *Software Design*.
- **Term**: Fall 2025.
- **Level and audience**: junior and senior undergraduates. Prerequisites: a software construction course (specifications, invariants, JavaScript, Node) and discrete mathematics.
- **Project format**: two projects with the same steps. First an individual project, then a project in teams. Students choose their own problems. AI is encouraged in all work.
- **Grade structure**: personal project 45%, team project 30%, two individual problem sets 20%, technology preps 5%. Team members get the same grade unless effort is very unequal.
- **Sources**: [Class Guide](https://61040-fa25.github.io/guide) (policies, AI policy, grading), [Assignments list](https://61040-fa25.github.io/assignments), [Assignment 1: Problem Framing](https://61040-fa25.github.io/assignments/assignment-1), [Assignment 2: Functional Design](https://61040-fa25.github.io/assignments/assignment-2), [Assignment 3: An AI-Augmented Concept](https://61040-fa25.github.io/assignments/assignment-3), [Assignment 4a: Backend Concept Coding](https://61040-fa25.github.io/assignments/assignment-4a) (LLM workflow), [Assignment 4b: Frontend UI Coding](https://61040-fa25.github.io/assignments/assignment-4b) (coding agent), [Assignment 4c: Completing Your Personal Project](https://61040-fa25.github.io/assignments/assignment-4c), [Final Project](https://61040-fa25.github.io/assignments/final-project-main) (team project), [Problem Set 1](https://61040-fa25.github.io/assignments/problem-set-1), [FAQ](https://61040-fa25.github.io/faq), Daniel Jackson, [LLMs are not calculators](https://groups.csail.mit.edu/sdg/pubs/2025/jackson-ai-education.pdf) (instructor essay, Dec 2025).

## Practices

### Course structure

#### 1. Individual project before the team project

Each student completes a full project cycle alone, then repeats the same cycle in a team of four on a more ambitious problem. The cycle covers problem framing, design, implementation, design document, and reflection. The team project adds a team contract, an ethical analysis, and user testing. The guide calls the first project a dry-run whose lessons are applied in the second.

> "The steps for both projects will be the same. The first project will be done individually, and the second in teams of four." — [Class Guide](https://61040-fa25.github.io/guide), "Projects".

#### 2. Problem sets for skills the project may skip

Two individual problem sets, without collaboration, train the core design skills that project work might not force every student to practice. The sets ask students to read a given specification, find invariants, fix an operation, write a specification, and compose modules. They are due before the design assignment. The general AI policy still applies, so "individual" does not mean "without AI".

> "There are a few problem sets that students will work on individually, whose purpose is to inculcate some important skills that might not otherwise be acquired in the context of project work." — [Class Guide](https://61040-fa25.github.io/guide), "Problem sets".

> "we request that you do not collaborate on this assignment so that you learn the ideas well." — [Problem Set 1](https://61040-fa25.github.io/assignments/problem-set-1).


### Community

#### 3. Public project questions, non-anonymous feedback

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
