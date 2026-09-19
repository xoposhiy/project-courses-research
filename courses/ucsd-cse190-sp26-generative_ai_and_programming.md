# UC San Diego CSE190 / CSE291P Generative AI and Programming, Spring 2026

## Course card

- **University and course**: University of California, San Diego, CSE190 / CSE291P *Generative AI and Programming*. The course site's URL uses the numbers "cse-115-215", but every page and the syllabus itself use CSE190 (undergraduate) and CSE291P (graduate) as the course numbers.
- **Term**: Spring 2026 (31 March to 9 June 2026).
- **Level and audience**: undergraduate (CSE190) and graduate (CSE291P) students attending the same lectures; no prerequisites are stated on the public pages beyond course enrollment.
- **Project format**: four sequential assignments, done solo or in pairs, each adding one new way of using generative AI (text pipelines, then multimodal document extraction, then tool-using agents, then an open-ended final project of the student's choice). Pair membership must change between most assignments. Each assignment runs an initial submission, an in-person peer review, and a revision or final submission.
- **Grade structure**: two graded components, assignments and peer review/feedback, each needs its own minimum share of points to reach a given letter grade (A ≥85%, B ≥75%, C ≥60%); falling below the C threshold in either component caps the grade at F/No Pass. Lecture participation (in-class handouts) adds or removes a +/- modifier.
- **Sources**: [Syllabus and Logistics](https://ucsd-cse-115-215.github.io/sp26/index.html), [A1: Social Media Monitor](https://ucsd-cse-115-215.github.io/sp26/assignments/social-media-monitor-assignment.html), [A2: Document Scanner](https://ucsd-cse-115-215.github.io/sp26/assignments/doc-scanner-assignment.html), [A3: Agents](https://ucsd-cse-115-215.github.io/sp26/assignments/agent-assignment.html), [A4: Student Choice](https://ucsd-cse-115-215.github.io/sp26/assignments/a4-assignment.html), [Lecture: Live-Clauding a Document Scanner](https://ucsd-cse-115-215.github.io/sp26/lectures/02-document-scanner.html) (instructor worked example), [Lecture: Getting Confidence in Agentic Code](https://ucsd-cse-115-215.github.io/sp26/lectures/04-correctness.html) (instructor worked example).

Note on terms: the course's staff-run peer-review sessions are called "review day"; below they are called "peer review sessions" outside quotes. "vmcheck", "vmalloc.c" and similar are project-specific code names from one instructor's worked example and are kept only inside quotes.

## Practices

### Course structure

#### 1. Assignment sequence that adds one AI capability at a time

Four assignments are ordered so each adds one new way of using generative AI on top of the last: a text-classification pipeline, then multimodal document extraction, then a tool-using agent, then an open final project that can reuse any of the earlier three. The agents assignment explicitly frames itself as extending the "tokens in, tokens out" pattern of the earlier assignments. This ordering is our inference from reading all four assignment pages together; no single page states the four-stage plan as one rule.

> "So far our GenAI systems have been pure "tokens in, tokens out" [...] Agents extend that pattern by letting the LLM's output be interpreted as tool calls that the surrounding system then executes — running shell commands, editing files, calling APIs." — [A3: Agents](https://ucsd-cse-115-215.github.io/sp26/assignments/agent-assignment.html), "LLMs Meet the Real World".

#### 2. Three-deadline cycle per assignment: submit, review, revise

Every assignment has three deadlines in order: an initial submission, a deadline for peer reviews of other teams' work, and a post-review deadline for revising the submission in response to that feedback. The same three-step cycle repeats across all four assignments, so students practice responding to feedback, not just receiving a grade.

> "Each assignment will have three deadlines – an initial deadline, a deadline for reviews, and a post-review deadline." — [Syllabus and Logistics](https://ucsd-cse-115-215.github.io/sp26/index.html), "Assignments and Reviews".

#### 3. Final project proposal locked in by staff feedback

For the open-ended final assignment, students submit a project proposal (topic, planned technologies, first deliverable, and a goal list) before building anything, and staff respond by confirming, expanding, or narrowing that plan; the confirmed plan becomes what the student is later held to at final submission, when they must mark each proposal item as implemented, changed, or dropped.

> "We will give you feedback on your proposal and "lock in" what your expectations are." — [A4: Student Choice](https://ucsd-cse-115-215.github.io/sp26/assignments/a4-assignment.html), "Project Proposals".

### AI use rules

#### 4. Exported AI chat transcripts as required submission evidence

Every assignment submission must include a `transcripts/` folder with several exported chat logs from the AI assistants the student used during development, alongside the code. The requirement names specific tools (GitHub Copilot's chat export, Claude Code's `/export` command) so students know how to produce the files, and revisions must add further transcripts covering the AI-assisted work done to address review feedback.

> "transcripts/ folder that contains 3 interesting exported chat logs from any AI assistants (Claude, Copilot, Gemini, etc.) you used during development." — [A1: Social Media Monitor](https://ucsd-cse-115-215.github.io/sp26/assignments/social-media-monitor-assignment.html), "Deliverables".

#### 5. Design-decision authorship disclosure

Each submission includes a DESIGN.md file that names three specific design decisions made during the assignment and states, for each one, how much the student feels they made the decision versus an AI coding tool. This turns AI-use disclosure into a per-decision judgment call rather than a single yes/no checkbox.

> "DESIGN.md a file that includes descriptions of 3 cases where a design decision was made. Describe the decision and how much you feel YOU made it, vs an agentic coding tool." — [A1: Social Media Monitor](https://ucsd-cse-115-215.github.io/sp26/assignments/social-media-monitor-assignment.html), "Deliverables".

#### 6. AI allowed for code, banned for human-to-human writing

Students are encouraged to use agentic coding tools for all programming work, but must not use generative AI to write the prose meant for another person to read: peer-review comments, forum posts, and reflection documents such as DESIGN.md. The syllabus gives the reason as a matter of respect for the reader, not a testing or academic-honesty concern.

> "You are highly encouraged to use agentic coding or other generative tools for the programming parts of this course." — [Syllabus and Logistics](https://ucsd-cse-115-215.github.io/sp26/index.html), "Generative AI Use".

> "You should not use generative AI to create messages you send as part of reviews, as part of Piazza posts, in reflections like your DESIGN documents, and other human-to-human communication." — same page, same section.

### Peer review process

#### 7. Triads of teams review each other live in three rounds

On each in-class review day, three teams are seated together for the full session and rotate through three rounds of about 20 minutes: in each round, one team demos and the other two review it directly on the presenting team's laptop, so every team presents once and reviews twice per session.

> "Structure: 3 rounds of ~20 minutes each. Each round, one team presents while the other two review. You will present once and review twice." — [A1: Social Media Monitor](https://ucsd-cse-115-215.github.io/sp26/assignments/social-media-monitor-assignment.html), "Review Day".

#### 8. Reviews and design decisions filed as GitHub issues

Reviewers file their feedback as a GitHub Issue on the reviewed team's repository using a staff-provided template, then copy the same text into the grading system; presenting teams likewise open a "session log" issue before the session with a pre-filled section describing what they plan to show. Using issues keeps review threads attached to the code they discuss and linkable from later commits.

> "For each project you review, file a GitHub Issue using the review template by Friday, 11:59pm." — [A1: Social Media Monitor](https://ucsd-cse-115-215.github.io/sp26/assignments/social-media-monitor-assignment.html), "Reviews".

#### 9. Escalating penalty for missing a review day

Missing a live review day requires a recorded makeup session with another absent team, following the same review script; the first missed session in the course carries no grade penalty, but every missed session after that caps the assignment grade at 3 out of 4, even if the makeup is completed on time, because repeated absence affects other students' reviewers and reviewees, not just the absent student.

> "The first makeup carries no grade penalty. Starting with the second, your assignment grade is capped at 3/4 even if the makeup is completed on time." — [Syllabus and Logistics](https://ucsd-cse-115-215.github.io/sp26/index.html), "Missed and Late Work".

#### 10. Written response to each piece of feedback received

After revising, each team writes a FEEDBACK-RESPONSE.md that copies in the text of every review issue it received, including any instructor feedback, and states for each one whether it was fixed, partially addressed, or declined, with a link to the commit that shows the change. This makes the response to feedback itself a graded, checkable artifact.

> "for each GitHub Issue you received, copy the text of the reviews you received, including instructor feedback, state what you did (fixed, partially addressed, or declined) and why, with links to relevant commits." — [A1: Social Media Monitor](https://ucsd-cse-115-215.github.io/sp26/assignments/social-media-monitor-assignment.html), "Revision".

#### 11. Asynchronous pre-review pass before the live review day

For the final project, staff add an extra review step before the in-person review day: several days earlier, each team is assigned two other teams' repositories to try out and comment on asynchronously, filing a pre-review issue, so that every team has already seen written feedback before the live session starts.

> "we're going to assign pre-reviews before review day — a new category of work, distinct from the reviews you've done on past assignments." — [A4: Student Choice](https://ucsd-cse-115-215.github.io/sp26/assignments/a4-assignment.html), "Review Feedback & Staff Feedback".

### Verification and evaluation

#### 12. Required gold-labeled eval harness for LLM pipelines

Students building an LLM-based classification pipeline must construct their own labeled dataset of at least 50 examples and build a harness that measures the pipeline's precision, recall, and dollar cost on it, then use that harness to compare prompting techniques and model choices before picking a final configuration. The dataset must be built by the student because the classification task is unique to their chosen project.

> "You will need a gold dataset of at least 50 labeled examples to measure quality." — [A1: Social Media Monitor](https://ucsd-cse-115-215.github.io/sp26/assignments/social-media-monitor-assignment.html), "Evaluation and Tuning".

#### 13. AI-extraction logic testable without the full application

The part of an application that calls a generative AI model to extract structured data must be runnable and testable on its own, separate from the graphical interface, so that example documents can be fed through it and checked in an automated way without starting the whole program.

> "the data extraction part of the system should be separately testable [...] without starting up the whole program." — [A2: Document Scanner](https://ucsd-cse-115-215.github.io/sp26/assignments/doc-scanner-assignment.html), "Engineering and Testing".

#### 14. Pass@k comparison across agent configurations

Students evaluating an agent must report a pass@k-style metric for a small evaluation set of scenarios and compare it across at least two different configurations of the same agent, such as different models, system prompts, toolsets, or guardrail policies, rather than reporting a single pass/fail number for one fixed setup.

> "a table with pass@k metrics for at least two different agent configurations." — [A3: Agents](https://ucsd-cse-115-215.github.io/sp26/assignments/agent-assignment.html), "Metadata and Initial Submission".

#### 15. LLM-as-judge scoring, spot-checked by hand

When a task has no single correct answer to compare against, such as judging a summary's quality or a tutoring reply's helpfulness, students are allowed to score it with another LLM call acting as judge, but are told to manually check the judge's verdicts on a handful of examples before trusting its scores at scale, because judges carry their own biases.

> "one possible practical scorer is another LLM call — "LLM-as-judge". This is fine, but judges have their own biases and inconsistencies, so spot-check the judge's verdicts on a handful of examples before trusting it at scale." — [A3: Agents](https://ucsd-cse-115-215.github.io/sp26/assignments/agent-assignment.html), "Engineering and Testing".

#### 16. Three-tier guardrail taxonomy for agent actions

Every student-built agent must sort its own operations into three categories: actions it may take with no confirmation (reading data), actions that require the user to confirm first (editing code, posting publicly), and actions that are explicitly disallowed even if the agent's tools make them possible (fabricating a citation when a search returns nothing). Naming the disallowed category forces students to design a negative case, not just a happy path.

> "An operation that your agent can take safely on its own with no user confirmation [...] An operation that requires user confirmation [...] An operation that is disallowed" — [A3: Agents](https://ucsd-cse-115-215.github.io/sp26/assignments/agent-assignment.html), "Requirements".

#### 17. Grade "pending" plus an oral check-in interview

Instead of giving a 0-4 score directly, staff may mark any assignment as "pending" for a given student, which means the student must come to a check-in interview and walk staff through their code, their design decisions, and what was AI-generated versus their own contribution, before a final grade is assigned.

> "The course staff may assign a student a grade of pending instead of 0-4 on any assignment. If we do, that means we want to have a check-in interview with you about the work." — [Syllabus and Logistics](https://ucsd-cse-115-215.github.io/sp26/index.html), "Check-in Interviews".

### Assessment

#### 18. Independent grade floors for assignments and for reviews

The course has two separately graded components, assignment work and peer review/feedback work, and a student must reach the same percentage floor in both components to earn a given letter grade; scoring well in one component does not compensate for falling below the floor in the other.

> "The two components of the course has a minimum achievement level to get an A, B, or C in the course. You must reach that achievement level in all of the categories." — [Syllabus and Logistics](https://ucsd-cse-115-215.github.io/sp26/index.html), "Grading".

#### 19. Graded lecture participation via paper handouts

Each lecture has a paper handout with review questions that is collected during class; credit is given for any reasonable answer, and students may discuss the questions with people sitting near them, since the handout is meant to check engagement, not to test correctness.

> "In each lecture, we'll have a paper handout for review questions [...] You get credit for answering questions on the handout with any reasonable answer; full correctness is not required." — [Syllabus and Logistics](https://ucsd-cse-115-215.github.io/sp26/index.html), "Lecture Participation".

## Instructor observations, reflection, and open questions

No staff retrospective, survey summary, or outcome data for this Spring 2026 offering was found as of 2026-09-18. The course's two published "lecture notes" pages are first-person, in-class worked examples by one instructor (Joe Politz) building a project live with a coding agent; they are treated here as instructor observations, not as primary policy documents.

- Instructor observation: an agent's default is to rush toward implementing, and the instructor deliberately pushed back on this default and had the agent write its design to a file checked into the repository instead of the agent's own private memory store, so the design survives across machines and teammates. "I pushed back on Claude's bias towards implementing. Not only do I not want it to do so here, but I don't want it to do so in general on this project!" — [Lecture: Live-Clauding a Document Scanner](https://ucsd-cse-115-215.github.io/sp26/lectures/02-document-scanner.html), "Pushing Back".
- Instructor observation: when running an orchestrating ("outer") agent that dispatches coding ("sub") agents, the instructor worried about reward hacking — the coding agent tampering with the tests meant to verify it — and addressed this by having the outer agent independently rerun the verifiers rather than trust the sub-agent's own report. "My worry [...] was "reward hacking", where the agent might (in auto mode) start editing tests or other verification steps in conjunction with coding and actually undermine the correctness guarantees I cared about." — [Lecture: Getting Confidence in Agentic Code](https://ucsd-cse-115-215.github.io/sp26/lectures/04-correctness.html), "Meta-Prompting".
- Instructor observation: standard compiler sanitizers (AddressSanitizer, UndefinedBehaviorSanitizer) give much more useful, localized diagnostics on agent-written low-level code than a bare crash, which helps both the human and the agent debug faster. "ASan turns that into a clean diagnostic naming the line that did it." — [Lecture: Getting Confidence in Agentic Code](https://ucsd-cse-115-215.github.io/sp26/lectures/04-correctness.html), "Catching What vmcheck Misses: ASan and UBSan".

Not reviewed: the other four lecture-notes pages (introduction, semantic text processing, agents, grounding) linked from the syllabus, the linked example repositories (BlueSky poetry detector, receipt scanner, git-bot), and the private Piazza forum. No search was made for a Fall offering or a prior-year version of this course.

New in this course, not seen in the three already-processed courses (MIT 6.1040, Stanford CS146S, CMU 17-316): LLM-as-judge scoring with a required human spot-check (practice 15), the three-tier agent guardrail taxonomy (practice 16), the "pending" grade plus mandatory check-in interview (practice 17), independent grade floors across two separately graded course components (practice 18), and the outer-agent/sub-agent verification pattern with independent verifier rerun to guard against reward hacking (instructor observation).
