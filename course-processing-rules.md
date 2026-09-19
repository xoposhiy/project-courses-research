# Rules for Processing One Course

This document explains how to turn the public materials of one university course into a list of teaching practices. The output is one Markdown file per course in `courses/`. The goal of the list is to let a reader who has never seen the course understand each practice and decide whether to adopt it.

## 1. What we extract

A **practice** is one concrete thing the course does to organize project work, assessment, or AI use. Examples: a rule, a required deliverable, a rubric for oral defense, a course structure decision, a tool the staff built, a recommendation the staff gives to students.

Include a practice when it meets all three conditions:

1. It is described in a primary course document (syllabus, guide, assignment page, rubric, policy page, staff-built tool docs) or in a published reflection by the course staff.
2. It concerns how students learn to build software in a project: structure, rules, process, evidence, assessment, teamwork, tooling, AI use.
3. Another course could adopt it on its own, without adopting the rest of the course.

Do not include:

- Course content (what topics are taught), unless the topic itself is a practice about process or AI use.
- General administration that is unrelated to project learning: room numbers, registration limits, disability accommodation, mental health resources.
- Generic late-work rules, unless they interact with project pacing (for example, no late days on team checkpoints).

One practice = one decision. If a paragraph describes two decisions that could be adopted separately, write two practices. If one rule cannot work without another, keep them in one practice and explain the link.

## 2. Collect sources first

Before writing, collect and save every primary document:

1. Course guide or syllabus, including the AI policy.
2. Every assignment or project page, including rubrics.
3. FAQ, schedule, and any "philosophy" or "how we teach" pages.
4. Staff reflections: essays, blog posts, papers, talks, published survey summaries.
5. Student-facing tools built by the staff (README of a repo, tool docs), if the course relies on them.

Save a plain-text or Markdown snapshot of each document in `sources/<course-id>/`. Course sites change or move after the term ends, so the snapshot is the stable reference. Make the filenames meaningful: they should tell the reader when to open them.

Read every document in full.

## 3. Course file layout

File name: `courses/<course-id>.md`, where `<course-id>` is `<university>-<code>-<term>-<short_name>` in lowercase, for example `mit-61040-fa25-software_design`.

The file has three parts, in this order.

### 3.1 Course card

A short block with these fields:

- **University and course**: official code and title.
- **Term**: when the course was taught, for example "Fall 2025 (September to December 2025)".
- **Level and audience**: year of study, prerequisites in one sentence.
- **Project format**: one or two sentences. Individual or team, size of teams, duration, whether students choose the topic.
- **Grade structure**: how the grade is split, if published.
- **Sources**: a short list of external links with meaningful titles. No tables. No links to local copies.

### 3.2 Practices

Group practices under a few headings that fit the course, for example "Course structure", "AI use rules", "Process evidence", "Verification", "Team project", "Assessment". Order groups roughly in the order a student meets them during the term. Inside a group, put the most distinctive practice first.

Heading levels: file sections (`## Course card`, `## Practices`, `## Instructor observations`) are level 2, practice groups are level 3, practices are level 4.

Each practice follows the template in section 4.

### 3.3 Instructor observations, reflection, and open questions

A short list of what the staff reported about how the practices worked. Mark each item as an instructor observation, a student self-report, or a measured result. Quote the source. End with one or two sentences on what was searched for and not found, and what was not reviewed.

## 4. Practice template

```
#### <Number>. <Practice name>

<First sentence: what is done and by whom, complete on its own. Then how the mechanism works. Two to five sentences in total.>

> "<Short verbatim quote from the source.>" — [<Document title>](<external link>), "<section name>".
```

A practice has three parts without labels: the name, one paragraph of details, and one or more quotes as block quotes. Rules for each part:

**Practice name.** The idea in a short noun phrase, at most ten words. It must make sense in a table with practices from other courses. Avoid course-specific words in the name. Do not repeat the name in the first sentence of the details paragraph.

**Details paragraph.** The first sentence states the practice completely: what students or staff do. It must be understandable without the course and without the name. The following sentences explain how the mechanism works. Numbers from the source matter only when they show how the mechanism works. Name the specific deliverable. If the course uses a special tool, say what the tool does in plain words. Do not describe the whole assignment, only what this practice needs. Do not start with background. Keep it short.

**Quotes.** Block quotes with verbatim text from the primary source, at most 40 words per quote. The quote has two jobs: it lets the reader find the fragment by text search, and it shows the words the course uses for the idea. Choose the sentence that states the rule, not a sentence that motivates it. Mark cuts with `[...]`. Do not fix grammar or spelling in the quote. Each quote ends with a link to the external document that contains it and the section name. If the practice is our synthesis of several places, give the quote for the most important place and add a second quote or a "see also" link for the others.

## 5. Writing rules

- Write in simple English. Prefer common words. Prefer active voice.
- Do not use the course's own terms outside quotes. Replace them with common software engineering terms: "module" for a course-specific unit of code, "specification", "composition rule", "coding agent", "staff-built LLM tool". If a term has no common equivalent, explain it in plain words inside the practice where it appears. There is no glossary.
- Use the same name for the same thing: the same name for the tool, the same name for each assignment, the same name for each role.
- Do not evaluate the practice inside the practice. Do not write "this is a good idea". Our opinion goes to the synthesis documents, not to the course file.
- Do not claim outcomes the source does not claim. A published rule shows that the rule exists. It does not show that students followed it or that learning improved.
- Separate what the course says from what we infer. Mark inferences.
- Keep each practice under about 150 words, excluding the quotes.

## 6. Quality check before finishing

Go through this list for the whole file:

1. Every practice has a name, one details paragraph, and at least one quote. The first sentence of the paragraph states the practice completely.
2. Every quote is verbatim and can be found by text search in the saved snapshot.
3. No course-specific term appears outside quotes without a plain-words explanation in the same practice.
4. No practice depends on reading another practice to be understood. Cross-references are allowed, but the practice must stand alone.
5. Practice names make sense without the course name.
6. The observations section says what reflection or outcome evidence was searched for and not found.
7. The course card has the term.

## 7. After processing

1. Add or update the course entry in `courses.md`: set the status to "processed" and link the course file.
2. If the course adds a practice that no other processed course has, note it in the commit message or in a short "New in this course" line at the end of the course file. This helps later synthesis.

## 8. Example

See `courses\example.md` for an example.
