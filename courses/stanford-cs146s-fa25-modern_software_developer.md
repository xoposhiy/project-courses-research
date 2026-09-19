# Stanford CS146S The Modern Software Developer, Fall 2025

## Course card

- **University and course**: Stanford University, CS146S *The Modern Software Developer*. First offering; instructor Mihail Eric (adjunct lecturer, industry AI lead), two teaching assistants.
- **Term**: Fall 2025 (22 September to 10 December 2025).
- **Level and audience**: undergraduates and graduate students, 3 units. Prerequisite: systems programming (CS111) or equivalent experience; AI or machine learning courses recommended. The interview cited below says more than 100 students enrolled.
- **Project format**: two tracks in parallel. Nine weekly individual assignments (eight published), each on a staff-provided starter application and a specific AI tool. One open-ended team project across the whole term with four milestones and a demo day. Students choose the project topic. AI tools are the subject of the course and are expected in all work.
- **Grade structure**: final project 80%, weekly assignments 15%, class participation 5%.
- **Sources**: [Course site, Fall 2025 archive](https://themodernsoftware.dev/fall2025) (description, schedule, grading, FAQ; the Fall 2025 text is in the [Wayback Machine copy of 1 Dec 2025](http://web.archive.org/web/20251201160649/https://themodernsoftware.dev/)), [Assignment deadlines sheet](https://docs.google.com/spreadsheets/d/1-485SLHw_zn7A-UXiz88Dgjy_qUGx87Am6HUwQrKsN8/edit?gid=0), [Assignments repository](https://github.com/mihail911/modern-software-dev-assignments) with [Week 1: Prompting Techniques](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week1/assignment.md), [Week 2: Action Item Extractor](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week2/assignment.md), [Week 3: Build a Custom MCP Server](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week3/assignment.md), [Week 4: The Autonomous Coding Agent IRL](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/assignment.md), [Week 5: Agentic Development with Warp](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week5/assignment.md), [Week 6: Scan and Fix Vulnerabilities with Semgrep](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week6/assignment.md), [Week 7: Exploring AI Code Review Using Graphite](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week7/assignment.md), [Week 8: Multi-Stack AI-Accelerated Web App Build](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week8/assignment.md), and the write-up templates and task lists next to them; [Lecture 1 slides](https://docs.google.com/presentation/d/1zT2Ofy88cajLTLkd7TcuSM4BCELvF9qQdHmlz33i4t0/edit) (course logistics), [Lecture 3 slides](https://docs.google.com/presentation/d/11pQNCde_mmRnImBat0Zymnp8TCS_cT_1up7zbcj6Sjg/edit) (specs and agent guidance files), [Lecture 4 slides](https://docs.google.com/presentation/d/19mgkwAnJDc7JuJy0zhhoY0ZC15DiNpxL8kchPDnRkRQ/edit) (agent management), [Lecture 7 slides](https://docs.google.com/presentation/d/1NkPzpuSQt6Esbnr2-EnxM9007TL6ebSPFwITyVY-QxU/edit) (code review), [Design Doc Template](https://drive.google.com/file/d/1MZ0Qx68Vzw4x5x_XcV8XiPLp7fFDe1LJ/view), [Stanford Bulletin entry](https://bulletin.stanford.edu/courses/2274401), Mihail Eric, [interview in EO magazine](https://www.eomag.io/article/stanford-mihail-eric) (4 Mar 2026).

## Practices

### Course structure

#### 1. Term-long open-ended team project worth most of the grade

Students spend the term on one team project of their own choice, which gives 80% of the grade, while nine short weekly assignments on given starter code give 15%. The weekly assignments each practice the tool or technique from that week's lecture. The final project is where students apply the principles from the course to a system they design. The detailed project handout was distributed through the course learning platform and is not public.

> "9 assignments (1x/week) focusing on lecture material practice [...] 1 final open-ended project in which you will exercise AI coding principles we cover [...] 80/15/5 breakdown for project/assignments/participation" — [Lecture 1 slides](https://docs.google.com/presentation/d/1zT2Ofy88cajLTLkd7TcuSM4BCELvF9qQdHmlz33i4t0/edit), slide "Course Logistics".

> "Through real-world engineering tasks and a team-based project, you'll learn not just how to use the latest AI-powered workflows, but also when and why to trust them." — [Stanford Bulletin entry](https://bulletin.stanford.edu/courses/2274401), course description.

#### 2. Four project milestones including an LLM integration plan and a task backlog

The team project is due in four steps on Wednesdays across the term: a project proposal in week 2, a technical specification with a plan for how the product will use LLMs in week 4, an alpha release with a backlog of remaining tasks in week 7, and a final release with a report and presentation after the last lecture. A class demo day is held near the end. The milestone rows in the shared deadline sheet are marked as final project items, separate from the weekly assignments that are due on Sundays. The content requirements of each milestone were not found in public materials.

> "Project Proposal [...] Technical Spec  & LLM Integration Plan [...] Alpha Release & Task Backlog [...] Final Release, Report & Presentation" — [Assignment deadlines sheet](https://docs.google.com/spreadsheets/d/1-485SLHw_zn7A-UXiz88Dgjy_qUGx87Am6HUwQrKsN8/edit?gid=0), rows marked "FINAL PROJECT".

> "Demo Day Confirmation [...] for details about our class demo day." — [Week 8: Multi-Stack AI-Accelerated Web App Build](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week8/assignment.md), "Demo Day Confirmation".

#### 3. Weekly assignments increase agent autonomy step by step

The weekly assignments move from hand-written prompts, to an AI editor with chat, to an agent mode for small tasks, to an autonomous coding agent with custom automations, to several agents running at once, and finally to a full app generator. Week 1 has students write prompts only. Week 2 uses an AI editor and reserves its agent mode for two small end-to-end tasks. Week 4 asks students to build automations for an autonomous terminal agent, week 5 runs several agents in parallel, and week 8 generates whole applications from prompts.

> "TODO 4: Use Agentic Mode to Automate Small Tasks" — [Week 2: Action Item Extractor](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week2/assignment.md), "Exercises".

> "Week 4 — The Autonomous Coding Agent IRL" — [Week 4: The Autonomous Coding Agent IRL](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/assignment.md), title.

> "Build the same functional web application in 3 distinct technology stacks." — [Week 8: Multi-Stack AI-Accelerated Web App Build](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week8/assignment.md), "Assignment Overview".

#### 4. One small starter application reused across several weeks

The staff provide one small full-stack starter application (a notes and action-items web app with a Python backend, a static frontend, a SQLite database, tests, and formatters) and reuse it as the playground for weeks 4, 5, 6 and 7. Each week's copy is a slightly changed version: week 7 is the week 5 app with added timestamps, pagination and partial updates. Students already know the code, so each week's work is about the tool, not about learning a new codebase. Week 8 lets students rebuild the same app or pick a new one.

> "Use the app in `week5/` as your playground. This week mirrors the prior assignment but emphasizes the Warp agentic development environment" — [Week 5: Agentic Development with Warp](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week5/assignment.md), introduction.

> "Slightly enhanced full‑stack starter (copied from Week 5) with a few backend improvements." — [Week 7 README](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week7/README.md).

#### 5. Task backlog with difficulty labels as the menu for agent work

Each starter application ships with a task list in its docs folder, and students pick tasks from the list as the work they delegate to agents. The week 5 list has eleven tasks labelled easy, medium or complex, for example a search endpoint with pagination (medium) or a frontend migration to a build tool (complex). Students must state the difficulty of each task they chose in the write-up. Week 7 fixes the choice: four named tasks, one pull request each.

> "Select tasks from `week5/docs/TASKS.md` to implement." [...] "For each selected task, note its difficulty level." — [Week 5: Agentic Development with Warp](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week5/assignment.md), "Part I: Build Your Automation".

> "## 1) Migrate frontend to Vite + React (complex)" — [Week 5 task list](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week5/docs/TASKS.md).

#### 6. Guest lecture by the builder of the tool used that week

The Friday lecture of most weeks is a talk by a founder or lead of the company whose tool the week's assignment uses: the creator of the terminal coding agent in week 4, the CEO of the terminal in week 5, the CEO of the static analysis tool in week 6, the product lead of the code review tool in week 7, and the head of AI at the hosting company in week 8. The Monday lecture by the instructor covers the concept and history. Attendance is part of the participation grade (5%).

> "Guest lectures from founders leading top AI developer startups today [...] Don’t miss these talks!" — [Lecture 1 slides](https://docs.google.com/presentation/d/1zT2Ofy88cajLTLkd7TcuSM4BCELvF9qQdHmlz33i4t0/edit), slide "Course Logistics".

> "Guest Lecture - 10/24/25 CEO of Warp, Zach Lloyd" — [Lecture 5 slides](https://docs.google.com/presentation/d/1Djd4eBLBbRkma8rFnJAWMT0ptct_UGB8hipmoqFVkxQ/edit), slide 2.

#### 7. Vendor education programs give students free tool access

The staff arrange free access to each commercial tool through the vendor's student or education program, and the assignment page gives the redemption steps. Week 2 uses a free student year of the AI editor, week 7 a course code for the code review tool, and week 8 emailed promotion codes for the app generator with a warning to cancel before billing starts. The course FAQ says the course will provide access or alternatives where a tool needs a subscription.

> "After the 30 days, you can use code **CS146S** to claim free Graphite under their education program." — [Week 7: Exploring AI Code Review Using Graphite](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week7/assignment.md), "Get Started with Graphite".

> "You’ll receive 3 months of Bolt Pro for free. A credit card is required to activate the trial." — [Week 8: Multi-Stack AI-Accelerated Web App Build](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week8/assignment.md), "Claim your Bolt Credits".

#### 8. Explicit course stance stated in the first lecture

The instructor opens the course with a stated position and four takeaways that later assignments refer back to: the course is not about generating code without understanding; the developer's job is to manage agents and keep the skills AI does not replace; an LLM's output is only as good as the context and codebase it gets; students should read and review a lot of code and experiment aggressively because no patterns are settled. The same two first points were sent to students in the introductory email before the term (reported by a third party).

> "This is not the “vibe coding” class" — [Lecture 1 slides](https://docs.google.com/presentation/d/1zT2Ofy88cajLTLkd7TcuSM4BCELvF9qQdHmlz33i4t0/edit), slide 8.

> "LLMs are only as good as you are [...] Good context leads to good code [...] If you can’t understand your codebase, neither will an LLM" — [Lecture 1 slides](https://docs.google.com/presentation/d/1zT2Ofy88cajLTLkd7TcuSM4BCELvF9qQdHmlz33i4t0/edit), slide "The Takeaway".

> "Read and review a lot of code [...] Experiment aggressively [...] There are no established software patterns yet" — [Lecture 1 slides](https://docs.google.com/presentation/d/1zT2Ofy88cajLTLkd7TcuSM4BCELvF9qQdHmlz33i4t0/edit), slide "The Takeaway".

### Assignment evidence and grading

#### 9. A fixed write-up template is the graded document

Every weekly assignment ships a Markdown write-up template with the same header (name, student ID, citations, hours spent) and one section per required item, each marked with a placeholder to fill in. Grading is based on the write-up, with the code as supporting evidence. The submission checklist tells students to search the file for remaining placeholders, push the repository, and submit through the grading platform.

> "We will be grading based on the contents of the write-up." — [Week 2: Action Item Extractor](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week2/assignment.md), "Exercises".

> "Citations: **TODO**" [...] "This assignment took me about **TODO** hours to do." — [Week 2 write-up template](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week2/writeup.md), "Submission details".

#### 10. Prompts are graded next to the code they produced

For each exercise students submit the prompt they used and the location of the generated code, and mark generated parts with comments in the code. In week 2 each part is worth 20 points, split equally between the generated code and the prompt. In week 1, where students only write prompts, each completed prompt is worth the same 10 points. Code changes are listed by file and line numbers in the write-up.

> "20 points per part 1-5 (10 for the generated code and 10 for each prompt)." — [Week 2: Action Item Extractor](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week2/assignment.md), "Evaluation rubric".

> "For each exercise, please include what prompts you used to generate the answer, in addition to the location of the generated response. Make sure to clearly add comments in your code documenting which parts are generated." — [Week 2 write-up template](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week2/writeup.md), "Your responses".

#### 11. Grading from the student's Git repository

Students work in their own private copy of the assignments repository, add the two teaching assistants as collaborators, push all changes, and then submit on the grading platform. The graders read the repository itself, including agent configuration files, commits and pull requests, not an uploaded archive. Week 7 goes further and asks for pull requests with AI review comments visible on them.

> "Make sure you've added both brentju and febielin as collaborators on your assignment repository." — [Week 6: Scan and Fix Vulnerabilities with Semgrep](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week6/assignment.md), "Submission Instructions".

> "Make sure you have all changes pushed to your remote repository for grading." — [Week 4: The Autonomous Coding Agent IRL](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/assignment.md), "Submission instructions".

### Prompting and local models

#### 12. Prompt-only exercises checked by a fixed test script

In the first assignment students may change only the prompt placeholders in six given Python scripts, one per prompting technique (few-shot, chain-of-thought, tool calling, self-consistency, retrieval, reflection), and iterate until the script's own test passes. The model, the code and the test are fixed. The deliverable is the final prompt and output for each script.

> "Design and run prompts (look for all the places labeled `TODO` in the code). That should be the only thing you have to change (i.e. don't tinker with the model)." [...] "Iterate to improve results until the test script passes." — [Week 1: Prompting Techniques](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week1/assignment.md), "Deliverables".

#### 13. Local open-weight models for LLM exercises

The first two assignments run open-weight models on the student's own machine through a local model runner, so students can call an LLM from code without API keys or cost. Week 1 uses two named small models for the prompting scripts. Week 2 has students add an LLM-based feature to the starter app that calls the local runner and uses its structured-output mode to get a JSON array.

> "We will be using a tool to run different state-of-the-art LLMs locally on your machine" — [Week 1: Prompting Techniques](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week1/assignment.md), "Ollama installation".

> "that utilizes Ollama to perform action item extraction via a large language model." — [Week 2: Action Item Extractor](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week2/assignment.md), "TODO 1".

### Specifications and codebase context

#### 14. Written specification before a complex agent task

The staff teach that for anything beyond a simple change the student acts as a product manager and writes a specification before prompting the agent. The lecture lists the sections: goal, definitions the LLM needs, plan, source files to change and why, test cases, edge cases, what is out of scope, and likely future extensions so the agent does not take shortcuts. A design document template is linked from the schedule; it adds requirements, design decisions with rationale, a phased implementation plan, testing, observability and rollout, and requires listing the only files the change may touch. The technical specification milestone of the final project (practice 2) is where this is applied, though the milestone handout is not public.

> "For more complex tasks, you’re going to become a product manager [...] Carefully crafted specs doc" — [Lecture 3 slides](https://docs.google.com/presentation/d/11pQNCde_mmRnImBat0Zymnp8TCS_cT_1up7zbcj6Sjg/edit), slide "Best practices".

> "Explicitly mention which files will be impacted/created in this change. [...] These should be the ONLY files impacted in the change." — [Design Doc Template](https://drive.google.com/file/d/1MZ0Qx68Vzw4x5x_XcV8XiPLp7fFDe1LJ/view), "Files Changes".

#### 15. Agent guidance files and a codebase readable by agents

Students write repository guidance files for coding agents (a file the agent reads at the start of every session) as one of the automation options in week 4, and the lecture frames codebase legibility as a requirement for agent work: the repository should document orientation, file structure, setup, style, access patterns and API contracts so both a human and an agent can follow it. The staff warn that agents treat these files as guidance, not as rules, and advise iterating on the file like a prompt.

> "Optimize your codebase so that a human and an agent could understand what’s going on" — [Lecture 3 slides](https://docs.google.com/presentation/d/11pQNCde_mmRnImBat0Zymnp8TCS_cT_1up7zbcj6Sjg/edit), slide "Best practices".

> "Iterate on `CLAUDE.md` like a prompt, keep it concise and actionable, and document custom tools/scripts you expect Claude to use." — [Week 4: The Autonomous Coding Agent IRL](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/assignment.md), "B) `CLAUDE.md` guidance files".

#### 16. Generated documentation as a deliverable, checked against the running code

Students use the AI editor to generate a README from the codebase with required sections (overview, setup, endpoints, how to run tests) as one of the week 2 exercises. In later weeks the task backlog includes keeping an API document in sync with the live OpenAPI description after each change, and one suggested automation reads the OpenAPI output and reports drift. The stated goal is to learn what AI can produce from code context and where it drifts.

> "Use Cursor to analyze the current codebase and generate a well-structured `README.md` file." — [Week 2: Action Item Extractor](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week2/assignment.md), "TODO 5: Generate a README from the Codebase".

> "After each change, verify docs match actual OpenAPI (`/openapi.json`)" — [Week 4 task list](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/docs/TASKS.md), "7) Docs drift check".

### Agent automations (weeks 4 and 5)

#### 17. Build automations first, then use them on real tasks

Students build at least two developer automations for the coding agent (custom slash commands, guidance files, role-specialized subagents, or tool servers) in part one of the assignment, then in part two use those automations to extend the starter app and report how each was used. Before building, students read the vendor's best-practice documents and must cite what inspired each design. The write-up has one block per automation with design, inputs and outputs, steps, and the use on the app.

> "Your automations should meaningfully improve a developer workflow – for example, by streamlining tests, documentation, refactors, or data-related tasks. You will then use the automations you create to expand upon the starter application found in `week4/`." — [Week 4: The Autonomous Coding Agent IRL](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/assignment.md), introduction.

> "Design inspiration (e.g. cite the best-practices and/or sub-agents docs)" — [Week 4 write-up template](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/writeup.md), "Automation #1".

#### 18. Before-and-after description of the workflow

For each automation students describe the manual workflow it replaces and the automated workflow after it, in the write-up. The comparison is required in both automation weeks (4 and 5). It makes the student name the concrete steps saved rather than claim a general speed-up.

> "Before vs. after (i.e. manual workflow vs. automated workflow)" — [Week 4: The Autonomous Coding Agent IRL](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/assignment.md), "Deliverables".

#### 19. Run instructions, expected output, and rollback notes per automation

Each automation must come with the exact commands to run it, what output to expect, and notes on how to undo it or what is unsafe about it. The staff tips ask for focused commands with arguments, idempotent steps, an allowlist of safe tools, and headless mode for repeatability. The rollback note treats an agent automation like any script that changes a repository.

> "How to run it (exact commands), expected outputs, and rollback/safety notes" — [Week 4: The Autonomous Coding Agent IRL](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/assignment.md), "Deliverables".

> "Keep commands focused, use `$ARGUMENTS`, and prefer idempotent steps. Consider allowlisting safe tools and using headless mode for repeatability." — [Week 4: The Autonomous Coding Agent IRL](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/assignment.md), "A) Claude custom slash commands".

#### 20. Report of the autonomy level used for each task

For each task done with an agent, students write which permissions they gave the agent to change code, why they chose that level, and how they supervised the run. The report sits in the week 5 write-up next to the automation design. The lecture that week frames autonomy as a spectrum from an agent that asks clarifying questions to unattended runs.

> "Autonomy levels used for each completed task (which code permissions, why, and how you supervised)" — [Week 5: Agentic Development with Warp](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week5/assignment.md), "Deliverables".

#### 21. Concurrent agents on independent tasks, with a report on coordination failures

Students run several agents at the same time in separate terminal tabs, each on an independent task from the backlog, and are challenged to find how many they can keep working at once. The staff suggest separate Git worktrees so agents do not overwrite each other's files. The write-up asks for roles, the coordination strategy, and what concurrency gained, risked or broke.

> "Run a multi‑agent session where separate agents in different Warp tabs handle independent tasks concurrently." [...] "Challenge: how many agents can you have working simultaneously?" — [Week 5: Agentic Development with Warp](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week5/assignment.md), "B) Multi‑agent workflows in Warp".

> "Multi‑agent notes: roles, coordination strategy, and concurrency wins/risks/failures" — [Week 5: Agentic Development with Warp](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week5/assignment.md), "Deliverables".

#### 22. Quality gates ship with the starter code

Every starter application comes with tests, a formatter and a linter wired into pre-commit hooks, and make targets to run them, so students have a check to run after every agent change. The first item in the task backlog is to enable the hooks and fix what they flag. The lecture calls these the backstops that make agent autonomy acceptable and adds two staff recommendations: label every diff an agent made, and commit often as checkpoints.

> "Minimal tests (pytest) [...] Pre-commit (black + ruff)" — [Week 4: The Autonomous Coding Agent IRL](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week4/assignment.md), "Explore the Starter Application".

> "You need careful backstops [...] Tests in codebase [...] CI/CD best practices [...] Label every diff made by an agent" — [Lecture 4 slides](https://docs.google.com/presentation/d/19mgkwAnJDc7JuJy0zhhoY0ZC15DiNpxL8kchPDnRkRQ/edit), slide "Best practices".

### Tool building (week 3)

#### 23. Wrap a real external API as an agent tool server, graded mostly on reliability and developer experience

Students build a tool server for the open agent tool protocol around a real external API of their choice with at least two tools, and the rubric gives more weight to reliability and documentation than to feature count: functionality 35 points, reliability (validation, error handling, logging, rate limits) 20, developer experience (setup docs, easy local run, folder structure) 20, code quality 15. Remote deployment and authentication earn extra credit. Copying the protocol's official quickstart example is not allowed.

> "Design and implement a Model Context Protocol (MCP) server that wraps a real external API." — [Week 3: Build a Custom MCP Server](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week3/assignment.md), introduction.

> "Reliability (20): Input validation, error handling, logging, rate-limit awareness." [...] "You may not submit this exact example." — [Week 3: Build a Custom MCP Server](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week3/assignment.md), "Evaluation rubric" and "Helpful references".

### Security and verification (week 6)

#### 24. Scan with static analysis, fix three findings with AI, explain each mitigation

Students run a static analysis scanner over a starter app seeded with vulnerabilities, pick three findings, fix them with an AI coding tool of their choice, and for each fix report the file and lines, the rule flagged, the risk, the change with the AI tool usage, and why the change removes the risk. The app must still run and its tests must still pass after the fixes.

> "Pick any 3 issues identified by Semgrep and fix them using an AI coding tool of your choice." [...] "Important: Ensure the app still runs and tests still pass after your fixes." — [Week 6: Scan and Fix Vulnerabilities with Semgrep](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week6/assignment.md), "Task".

#### 25. Justify ignored findings and re-scan after every fix

The findings overview in the write-up must name the scanner rules the student decided to ignore as false positives or noise and say why. The staff also tell students to run the scanner again after each fix to confirm the finding is gone and nothing new appeared. Together these make triage, not just fixing, a graded part of the work.

> "Note any false positives or noisy rules you chose to ignore and why." — [Week 6: Scan and Fix Vulnerabilities with Semgrep](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week6/assignment.md), "Deliverables".

> "Re‑run Semgrep after each fix to confirm the finding is resolved and no new ones were introduced." — [Week 6: Scan and Fix Vulnerabilities with Semgrep](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week6/assignment.md), "Tips".

### Code review (week 7)

#### 26. One-shot prompt, then line-by-line manual review on a branch per task

For each of four tasks the student creates a branch, has an AI tool implement the task from a single prompt, then reads every changed line, fixes what is wrong, and explains fixes in commit messages. Students may swap with a classmate and review each other's agent output instead of their own. The depth of the manual review notes is a graded criterion.

> "Implement the task with your AI tool using a 1-shot prompt." [...] "Manually review the changes line-by-line. Fix issues you notice and add explanatory commit messages where helpful. You may also pair with a classmate to review each other’s code instead of reviewing your own changes." — [Week 7: Exploring AI Code Review Using Graphite](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week7/assignment.md), "For each task".

#### 27. Pull request description with a testing summary and trade-offs

Each task ends in a pull request whose description states the problem and approach, summarizes the testing done with the commands and their results, lists added or updated tests, and names trade-offs, limitations and follow-ups. The pull request is the unit of submission and the object of the AI review in the next step.

> "Description of the problem and your approach." [...] "Summary of testing performed (include commands and results) and any added/updated tests." [...] "Notable tradeoffs, limitations, or follow-ups." — [Week 7: Exploring AI Code Review Using Graphite](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week7/assignment.md), "For each task".

#### 28. Compare own review with an AI review and write trust heuristics

After the manual review, students run an AI code review tool on each pull request and write a reflection that classifies their own comments (correctness, performance, security, naming, test gaps, API shape, and so on), compares them with the AI comments per pull request, cites examples where the AI review was better or worse, and states how far they will trust AI reviews and when. The reflection is worth 20 of 100 points.

> "When the AI reviews were better/worse than yours (cite specific examples)" [...] "Your comfort level trusting AI reviews going forward and any heuristics for when to rely on them." — [Week 7: Exploring AI Code Review Using Graphite](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week7/assignment.md), "Deliverables".

#### 29. Stated ownership rule: the student owns merged code

The code review lecture ends with a rule that the person who merges code is responsible for it and cannot blame the AI, and that review matters more with AI-written code, not less. The rule is stated as a course position, not as a graded policy; no honor-code or AI-disclosure text specific to the course was found in public materials.

> "Code review is more important now than ever with AI coding systems [...] You own the code that is merged and shipped, no blaming of the AI" — [Lecture 7 slides](https://docs.google.com/presentation/d/1NkPzpuSQt6Esbnr2-EnxM9007TL6ebSPFwITyVY-QxU/edit), slide "Limitations".

### App generation (week 8)

#### 30. The same application in three stacks, one from an AI app generator, one in a non-JavaScript language

Students build one application with a fixed minimum scope (create, read, update and delete for one resource, persistence, validation, a working UI, run instructions) three times in three different technology stacks. At least one version must come from an AI app generation platform and at least one must use a non-JavaScript language on the frontend or backend. Each version gets its own folder and README. The rubric gives the same 20 points to each version and 10 points each to the scope, the stack diversity, the generator and the non-JavaScript requirement.

> "Build the same functional web application in 3 distinct technology stacks." [...] "At least one version must use a non-JavaScript language for either the frontend or backend (e.g., Django, Ruby on Rails)." — [Week 8: Multi-Stack AI-Accelerated Web App Build](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week8/assignment.md), "Assignment Overview".

#### 31. Log of manual fixes after generation and time-to-first-run metrics

For each generated version students record what they had to fix by hand after generation, known issues and deviations from the shared concept, what in the prompts needed extra guidance, and rough numbers for time to first run and time to each feature. These notes go in the version's README and in the write-up. The metrics make the comparison between stacks and generators concrete.

> "Notes on deviations, known issues, and any manual fixes after generation" — [Week 8: Multi-Stack AI-Accelerated Web App Build](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week8/assignment.md), "Deliverables".

> "Approximate time-to-first-run and time-to-feature metrics" — [Week 8 write-up template](https://github.com/mihail911/modern-software-dev-assignments/blob/master/week8/writeup.md), "Version #1 Description".

## Instructor observations, reflection, and open questions

No staff retrospective, survey summary or outcome analysis of the Fall 2025 offering was found as of 2026-09-18. The items below come from an interview with the instructor published on 4 March 2026 ([EO magazine](https://www.eomag.io/article/stanford-mihail-eric)), from the instructor's posts on X, and from the repository metadata. All are instructor observations or descriptive facts, not measured learning results.

- **The strongest students went past the requirements of the final project** (practice 1). Instructor observation. > "the difference starts to arise when someone already hits 100% on the requirements but still wants to keep going, not because they want the grade, but because they're invested in building the most complex thing because they want to solve a problem."
- **Some teams kept working on the project after the course ended.** Instructor observation, no numbers. > "The students that did the best are literally now building startups around their projects because they see something there and they're rolling with it. The class ended, but they're still working on the same thing because they think there's more to build."
- **The common beginner mistake with agents is scale, not skill** (practices 20, 21). Instructor observation about learners in general, given in the same interview. > "Trying to do too much too soon. Someone will hear that Boris from Claude does 10 agents at once and think they should start doing 10 agents at once and that's the wrong outcome to emphasize. I always teach people to build it up piecemeal."
- **Demand.** The interview's editorial introduction says the course "filled up with over 100 students within hours of enrollment opening." Not verified against enrollment data.
- **Reach of the materials.** All assignments were published openly on 30 December 2025 ([post on X](https://x.com/mihail_eric/status/2006111197364641889)); the repository had about 3,960 stars on 2026-09-18. This measures interest, not learning.

Searched for and not found: the final project handout and rubrics (proposal, technical specification and LLM integration plan, alpha release, final report, presentation, demo day), the participation grading rule, any course-specific AI use or academic honesty policy, a late policy, team size, and any student survey or grade data. These were distributed through the course learning platform. Not reviewed: guest lecture slides (Cognition, Anthropic, Warp, Graphite, Vercel, Resolve), the starter application source code and week 1 Python scripts, and the Fall 2026 offering, which has a different syllabus and grading (the current course site lists open-source partner projects; a third-party guide reports 30% of the grade for open-source contributions).

New in this course: guest lecture by the builder of each week's tool (6), vendor education programs for tool access (7), autonomy-level and supervision report per task (20), concurrent agents with a coordination failure report (21), scan-and-fix with justified ignored findings (24, 25), own review versus AI review with trust heuristics (28), same app in three stacks including an app generator (30), time-to-first-run metrics and post-generation fix log (31).
