# Statistics of the Research Base

Numbers as of 2026-09-19. All counts come from the files in this folder: `courses.md`, `courses/*.md`, `sources/*/`, `ideas.md`, `practices_by_idea.md`, and `generalized_practices.md`. `courses/example.md` is a shortened copy of the MIT file and is not counted.

## Headline numbers

| Measure | Value |
|---|---|
| Courses processed | 12 |
| Universities | 9 (8 in the USA, 1 in Singapore) |
| Course offerings taught in 2025 / 2026 | 7 / 5 |
| Source snapshots saved | 318 files, 8.2 MB, in 12 folders |
| Courses with published staff reflection | 8 of 12 |
| Practices extracted, total | 280 |
| Practices per course: mean / min / max | 23 / 11 (Harvard) / 39 (MIT) |
| Practices selected as relevant to the ideas | 97 of 280 (35%), of which 13 with an inferred link |
| Generalized practices | 21, covering all 97 selected practices |
| Generalized practices used by 4 or more courses | 13 of 21 |

## Courses

### By university

| University | Courses | Course codes |
|---|---|---|
| Carnegie Mellon | 4 | 17-316/616, 15-113, 17-214/514, 17-445/645/745 |
| MIT | 1 | 6.1040 |
| Stanford | 1 | CS146S |
| University of Washington | 1 | CSE403 |
| National University of Singapore | 1 | CS2103/T |
| UC San Diego | 1 | CSE190/291P |
| University of Maryland | 1 | CMSC398Z |
| Harvard | 1 | CS50 (final project only) |
| Cornell | 1 | CS5150 |

### By term

| Term | Courses |
|---|---|
| Fall 2025 | 6 (MIT, Stanford, CMU 17-316, CMU 17-214, UMD, Harvard) |
| Aug to Nov 2025 (NUS AY2025/26 Semester 1) | 1 (NUS) |
| Winter 2026 | 1 (UW) |
| Spring 2026 | 4 (CMU 15-113, CMU 17-445, UCSD, Cornell) |

All offerings are from one academic year, 2025/26. This is the first year in which coding agents were widely available, so most courses describe a first or second attempt at the rules, not a settled practice.

### By course type

| Type | Courses |
|---|---|
| The course is about AI coding tools | 5 (Stanford CS146S, CMU 17-316, CMU 15-113, UCSD CSE190, UMD CMSC398Z) |
| A software engineering or design course that allows AI | 7 (MIT 6.1040, UW CSE403, NUS CS2103, CMU 17-214, CMU 17-445, Cornell CS5150, Harvard CS50 final project) |

### By level

| Level | Courses |
|---|---|
| Undergraduate only | 6 (MIT, CMU 15-113, UW, NUS, UMD, Harvard) |
| Mixed undergraduate and graduate sections | 5 (Stanford, CMU 17-316, CMU 17-214, CMU 17-445, UCSD) |
| Graduate only | 1 (Cornell, included as a reference point) |

### By project format

| Format | Courses |
|---|---|
| Has a team project | 8 (MIT, Stanford, CMU 17-316, CMU 17-445, Cornell, NUS, UW, Harvard with optional groups of 2 to 3) |
| Individual project first, then team project | 2 (MIT, NUS) |
| Individual or pair work only | 4 (CMU 15-113, CMU 17-214, UCSD, UMD) |
| Students choose the project topic | 7 (MIT, Stanford, UW, Harvard, CMU 15-113 capstone, UCSD final assignment, CMU 17-316 picks a startup to imitate) |

## Practices per course

| Course | Practices | Instructor observations | Source files | Selected practices |
|---|---|---|---|---|
| MIT 6.1040 | 39 | 7 | 15 | 15 |
| Stanford CS146S | 31 | 5 | 41 | 18 |
| CMU 17-316 | 30 | 5 | 19 | 18 |
| CMU 17-445 | 26 | 3 | 42 | 8 |
| UMD CMSC398Z | 23 | 7 | 34 | 8 |
| UW CSE403 | 22 | 0 | 28 | 1 |
| CMU 15-113 | 21 | 6 | 26 | 15 |
| CMU 17-214 | 20 | 0 | 16 | 3 |
| NUS CS2103 | 20 | 0 | 52 | 3 |
| UCSD CSE190 | 20 | 3 | 7 | 5 |
| Cornell CS5150 | 17 | 1 | 34 | 2 |
| Harvard CS50 | 11 | 3 | 4 | 1 |
| **Total** | **280** | **40** | **318** | **97** |

Practices are the `#### ` headings in a course file. Instructor observations are the list items under `## Instructor observations`. Selected practices are the distinct (course, practice number) pairs named in the idea sections of `practices_by_idea.md`; the course-stance note under 5-discovery (MIT 5 and MIT 7) is not counted, because it describes the course position, not a practice that addresses an idea, and MIT 7 is listed in "Borderline, not included". Thirteen of the 97 selected practices are marked "inferred link" in `practices_by_idea.md`: the course states the mechanism but gives no AI reason, and the link to the idea is our reading.

Update of 2026-09-19: four practices were added to the course files (CMU 15-113 practices 4, 15, 20; UCSD practice 14) and nine already extracted practices were added to the selection after a comparison with an independent second pass over the same courses. Two single-course generalized practices were dropped as not useful (UMD 15, delegate bulk data inspection; UCSD 16, LLM-as-judge with a manual spot-check). The numbers above include these changes.

## Staff reflections

| Kind of reflection | Courses |
|---|---|
| Instructor essay with personal observations | 1 (MIT, Daniel Jackson, Dec 2025) |
| Synthesis of student survey data | 1 (CMU 15-113, about 320 comments from 9 surveys) |
| Conference slides or case-study write-ups | 1 (UMD) |
| Interview or news article with instructor quotes | 3 (Stanford, CMU 17-316, Harvard) |
| Worked examples or remarks inside course pages | 2 (UCSD lecture notes, Cornell project page) |
| None found | 4 (UW, NUS, CMU 17-214, CMU 17-445) |

