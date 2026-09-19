# Project Courses Research

A growing base of university courses that teach software engineering through projects with AI tools allowed, and the teaching practices they use.

## Layout

- `courses.md`: index of courses with term, description, links, and processing status. Start here.
- `course-processing-rules.md`: how to turn one course into a practice list.
- `courses/<course-id>.md`: one file per processed course, following the rules.
- `sources/<course-id>/`: text snapshots of the primary documents used, because course sites move after the term.
- `archive`: outdated historical files

## Adding a course

1. Add an entry to `courses.md` with status `candidate`.
2. Collect and snapshot the primary documents into `sources/<course-id>/`.
3. Write `courses/<course-id>.md` following `course-processing-rules.md`.
4. Set the status in `courses.md` to `processed` and link the file.
