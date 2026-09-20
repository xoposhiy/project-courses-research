// Builds presentation/project-courses-practices.pptx from the research files.
// Run: node build_deck.js
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 in
pres.author = "Pavel Egorov";
pres.title = "Teaching Software Projects with AI: Practices from 12 Courses";

const FONT = "Calibri";
const C = {
  ink: "1F2430",
  dark: "1F2430",
  muted: "6B7280",
  accent: "1D6F8B",
  faint: "E8F1F5",
  white: "FFFFFF",
  line: "D6DBE1",
};
const W = 13.333;
const M = 0.7; // side margin
const CW = W - 2 * M; // content width

function title(slide, text, opts = {}) {
  slide.addText(text, {
    x: M, y: 0.45, w: CW, h: 0.9,
    fontFace: FONT, fontSize: opts.size || 36, bold: true, color: C.ink,
    margin: 0, valign: "top",
  });
}

function caption(slide, text) {
  slide.addText(text, {
    x: M, y: 6.75, w: CW, h: 0.4,
    fontFace: FONT, fontSize: 14, color: C.muted, margin: 0, valign: "bottom",
  });
}

function body(slide, items, x, y, w, h, size = 22, gap = 10) {
  const runs = items.map((t, i) => {
    const parts = Array.isArray(t) ? t : [{ text: t }];
    return parts.map((p, j) => ({
      text: p.text,
      options: {
        bullet: j === 0 ? { indent: 22 } : undefined,
        color: p.color || C.ink,
        bold: !!p.bold,
        breakLine: j === parts.length - 1 && i < items.length - 1,
        paraSpaceAfter: gap,
      },
    }));
  }).flat();
  slide.addText(runs, {
    x, y, w, h, fontFace: FONT, fontSize: size, color: C.ink, margin: 0, valign: "top",
  });
}

function stat(slide, x, y, w, num, label) {
  slide.addText(num, {
    x, y, w, h: 1.2, fontFace: FONT, fontSize: 66, bold: true, color: C.accent,
    margin: 0, valign: "bottom",
  });
  slide.addText(label, {
    x, y: y + 1.25, w: w - 0.35, h: 0.9, fontFace: FONT, fontSize: 18, color: C.ink,
    margin: 0, valign: "top",
  });
}

// Course-count badge used on every practice slide.
function badge(slide, x, y, n, d = 1.0) {
  slide.addShape(pres.shapes.OVAL, {
    x, y, w: d, h: d, fill: { color: C.accent }, line: { color: C.accent },
  });
  slide.addText(String(n), {
    x, y, w: d, h: d, fontFace: FONT, fontSize: d >= 1 ? 30 : 24, bold: true,
    color: C.white, align: "center", valign: "middle", margin: 0,
  });
}

// One practice block: badge, name, definition, variants.
function practice(slide, { x, y, w, n, name, def, variants, nameSize = 30, defSize = 20, varSize = 18, nameH = 1.25, defH = 1.0 }) {
  badge(slide, x, y + 0.02, n, 0.85);
  slide.addText(name, {
    x: x + 1.05, y, w: w - 1.05, h: nameH, fontFace: FONT, fontSize: nameSize, bold: true,
    color: C.ink, margin: 0, valign: "top",
  });
  const defY = y + nameH + 0.15;
  slide.addText(def, {
    x, y: defY, w, h: defH, fontFace: FONT, fontSize: defSize, color: C.ink, margin: 0, valign: "top",
  });
  body(slide, variants, x, defY + defH + 0.15, w, 3.0, varSize, 8);
}

// Non-breaking hyphen and spaces keep a course code on one line.
function nb(name) { return name.replace(/-/g, "‑").replace(/ /g, " "); }
// PowerPoint breaks lines after a dash, so the course goes in brackets glued to the last word.
function course(name) { return { text: " (" + nb(name) + ")", color: C.accent }; }
function v(text, c) { return [{ text }, course(c)]; }

// ---------------------------------------------------------------- 1. Title
{
  const s = pres.addSlide();
  s.background = { color: C.dark };
  s.addText("Teaching Software Projects\nwith AI Tools", {
    x: M, y: 1.5, w: CW, h: 2.2, fontFace: FONT, fontSize: 48, bold: true,
    color: C.white, margin: 0, valign: "top",
  });
  s.addText("Practices from 12 university courses, academic year 2025/26", {
    x: M, y: 3.9, w: CW, h: 0.7, fontFace: FONT, fontSize: 26, color: "CFE3EC", margin: 0,
  });
  s.addText("Pavel Egorov  ·  September 2026", {
    x: M, y: 6.3, w: CW, h: 0.5, fontFace: FONT, fontSize: 18, color: "9FB3BE", margin: 0,
  });
  s.addNotes("Two parts: how the base was built and what came out of it. About 15 to 20 minutes.");
}

// ---------------------------------------------------------------- 2. Courses
{
  const s = pres.addSlide();
  title(s, "12 courses, 9 universities, one academic year");
  const colW = (CW - 0.4) / 2;
  s.addText("Courses about AI coding tools", {
    x: M, y: 1.6, w: colW, h: 0.5, fontFace: FONT, fontSize: 20, bold: true, color: C.accent, margin: 0,
  });
  body(s, [
    "Stanford — The Modern Software Developer",
    "Carnegie Mellon — AI Tools for Software Development",
    "Carnegie Mellon — Effective Coding with AI",
    "UC San Diego — Generative AI and Programming",
    "Maryland — Effective Use of AI Coding Assistants",
  ], M, 2.2, colW+0.2, 4.2, 18, 4);
  s.addText("Software engineering / ML courses", {
    x: M + colW + 0.6, y: 1.6, w: colW, h: 0.5, fontFace: FONT, fontSize: 20, bold: true, color: C.accent, margin: 0,
  });
  body(s, [
    "MIT — Software Design",
    "Washington — Software Engineering",
    "NUS Singapore — Software Engineering",
    "Carnegie Mellon — Principles of Software Construction",
    "Carnegie Mellon — Machine Learning in Production",
    "Cornell — Software Engineering",
    "Harvard — CS50, final project only",
  ], M + colW + 0.6, 2.2, colW, 4.2, 18, 4);
  s.addNotes("Eight universities in the USA and one in Singapore. Five courses are about AI tools themselves; seven are regular software engineering or design courses that allow AI. Eight courses have a team project; in seven, students choose the topic.");
}

// ---------------------------------------------------------------- 3. Method: what is a practice
{
  const s = pres.addSlide();
  title(s, "Method: each course becomes a list of practices");
  s.addText("Practice — one concrete decision about project work or assessment", {
    x: M, y: 1.7, w: CW, h: 1.0, fontFace: FONT, fontSize: 28, bold: true, color: C.ink, margin: 0, valign: "top",
  });
  body(s, [
    "Stated in course rules or staff reflection",
	"Rule, process, evidence, assessment, criteria, ...",
    "Adoptable by another course on its own",
  ], M, 3.2, CW, 3.2, 24, 12);
}

// ---------------------------------------------------------------- 4. Example practice
{
  const s = pres.addSlide();
  title(s, "Example of extracted practice");
  s.addText("Rationale section in each assignment", {
    x: M, y: 1.6, w: CW, h: 0.6, fontFace: FONT, fontSize: 26, bold: true, color: C.accent, margin: 0,
  });
  s.addText("For each assignments we explain why the staff require a particular way of working, before stating the requirements. ...", {
    x: M, y: 2.35, w: CW, h: 1.6, fontFace: FONT, fontSize: 20, color: C.ink, margin: 0, valign: "top",
  });
  s.addShape(pres.shapes.RECTANGLE, { x: M, y: 4.2, w: CW, h: 1.9, fill: { color: C.faint }, line: { color: C.faint } });
  s.addText([
    { text: "“Before explaining the very particular way in which we expect you to work on this assignment, we’d like to explain our rationale: what we’re trying to accomplish and why we believe this is a good approach.”", options: { italic: true, breakLine: true, paraSpaceAfter: 8 } },
    { text: "MIT 6.1040 Software Design, Fall 2025, Assignment 4a", options: { color: C.muted, fontSize: 16 } },
  ], { x: M + 0.4, y: 4.4, w: CW - 0.8, h: 1.5, fontFace: FONT, fontSize: 20, color: C.ink, margin: 0, valign: "top" });
  s.addNotes("The quote does two jobs: it lets a reader find the exact fragment, and it shows the words the course uses. The details paragraph uses common terms only.");
}

// ---------------------------------------------------------------- 5. Numbers
{
  const s = pres.addSlide();
  title(s, "What was collected");
  const cw = CW / 4;
  stat(s, M, 1.9, cw, "318", "web-pages downloaded");
  stat(s, M + cw, 1.9, cw, "280", "practices extracted,\n11 to 39 per course");
  stat(s, M + 2 * cw, 1.9, cw, "8/12", "courses contains staff reflection");
  stat(s, M + 3 * cw, 1.9, cw, "40", "instructor observations recorded from those reflections");
  body(s, [
    "Syllabi and AI policies, assignment pages and rubrics, staff-built tools, staff essays and interviews.",
  ], M, 4.6, CW, 1.4, 20, 10);
  s.addText("All is available here:", {
    x: M, y: 6.05, w: CW, h: 0.4, fontFace: FONT, fontSize: 18, color: C.muted, margin: 0, valign: "bottom",
  });
  s.addText("github.com/xoposhiy/project-courses-research", {
    x: M, y: 6.5, w: CW, h: 0.5, fontFace: FONT, fontSize: 24, bold: true, color: C.accent, margin: 0, valign: "top",
    hyperlink: { url: "https://github.com/xoposhiy/project-courses-research" },
  });
  s.addNotes("Only one course, MIT, has an instructor essay with personal observations. One, CMU 15-113, published student survey data. Four courses have no reflection at all. So the base tells us what courses do, rarely how it worked. Everything is public on GitHub as plain Markdown.");
}

// ---------------------------------------------------------------- 7. Ideas
{
  const s = pres.addSlide();
  title(s, "Five ideas that guide the analysis");
  const ideas = [
    ["Agency", "The student stops being responsible and becomes an observer. AI hides this problem behind good-looking results, creating illusion of competense"],
    ["Context", "The key AI skill is controlling the context. AI pushes toward more specs and documents."],
    ["LLM strengths to use", "Expanding the space of ideas, finding problems, RL-friendly tasks: coding, math, tools."],
    ["LLM weaknesses to control", "Fuzzy correctness, priorities, what is essential, long horizon of effect: architecture, choice of the project idea, etc."],
    ["Discovery", "Nobody knows yet how to use this well. Students must experiment and form their own opinions."],
  ];
  let y = 1.6;
  ideas.forEach(([h, d], i) => {
    badge(s, M, y + 0.02, i + 1, 0.6);
    s.addText(h, { x: M + 0.85, y, w: 4, h: 0.65, fontFace: FONT, fontSize: 22, bold: true, color: C.ink, margin: 0, valign: "middle" });
    s.addText(d, { x: M + 4.3, y, w: CW - 4.9, h: 0.9, fontFace: FONT, fontSize: 18, color: C.ink, margin: 0, valign: "top" });
    y += 1.0;
  });
  s.addNotes("These are our hypotheses about what matters. A practice was selected only when the course file states the mechanism and the link to the idea.");
}

// ---------------------------------------------------------------- 8. Funnel
{
  const s = pres.addSlide();
  title(s, "Sort, group, generalize");
  const steps = [
    ["280", "practices extracted from 12 courses"],
    ["97", "practices that address one of the ideas above"],
    ["21", "generalized practices: similar practices merged, sorted by number of courses"],
    ["13", "of them used by 4 or more courses"],
  ];
  // Funnel: each stage is a bar narrower than the one above, centered on the slide.
  const widths = [CW, CW * 0.8, CW * 0.6, CW * 0.42];
  const tints = ["E8F1F5", "CFE1E9", "A9CBD8", "1D6F8B"];
  const barH = 1.05, gap = 0.15;
  steps.forEach(([n, d], i) => {
    const w = widths[i], x = (W - w) / 2, y = 1.6 + i * (barH + gap);
    const last = i === widths.length - 1;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w, h: barH, fill: { color: tints[i] }, line: { color: tints[i] } });
    s.addText(n, {
      x: x + 0.3, y, w: 1.7, h: barH, fontFace: FONT, fontSize: 40, bold: true,
      color: last ? C.white : C.accent, margin: 0, valign: "middle",
    });
    s.addText(d, {
      x: x + 2.1, y, w: w - 2.4, h: barH, fontFace: FONT, fontSize: 18,
      color: last ? C.white : C.ink, margin: 0, valign: "middle",
    });
  });
  s.addNotes("The 35 percent selection rate is expected: many practices are about teamwork, grading logistics, or tooling that does not touch the ideas. Thirteen of the 97 are marked as an inferred link: the course states the mechanism but gives no AI reason. Borderline cases are listed with a reason for exclusion.");
}

// ---------------------------------------------------------------- 9. Table
{
  const s = pres.addSlide();
  title(s, "Generalized practices used by 4 or more courses");
  const rows = [
    ["1", "The student is the author and answers for the result; AI assists", "8"],
    ["2", "The student does the task by hand before AI may help", "6"],
    ["3", "Specification or design document before code generation", "5"],
    ["4", "Reflections, reviews, and design documents are written without AI", "5"],
    ["5", "The student reviews and tests every generated output", "5"],
    ["6", "Architecture and module boundaries stay under human control", "5"],
    ["7", "An existing codebase must be understood before it is changed (inferred link)", "5"],
    ["8", "Oral check: the student explains the submitted work to staff", "4"],
    ["9", "The student controls the context the AI sees", "4"],
    ["10", "How the student directed the AI is graded, not only the result", "4"],
    ["11", "Written comparison of the student's own work with the LLM's output", "4"],
    ["12", "The student writes and defends an own opinion on how to use AI", "4"],
    ["13", "Guided experiment with a new AI workflow, plus a written report on the outcome", "4"],
  ];
  const tableRows = rows.map(([n, name, c]) => [
    { text: n, options: { color: C.muted, align: "right" } },
    { text: name },
    { text: c, options: { bold: true, color: C.accent, align: "center" } },
  ]);
  s.addTable(tableRows, {
    x: M, y: 1.45, w: CW, colW: [0.6, CW - 0.6 - 1.2, 1.2],
    fontFace: FONT, fontSize: 17, color: C.ink, rowH: 0.4,
    border: { type: "none" }, margin: [2, 6, 2, 6], valign: "middle",
  });
  s.addText("courses", { x: M + CW - 1.2, y: 1.08, w: 1.2, h: 0.35, fontFace: FONT, fontSize: 13, color: C.muted, align: "center", margin: 0 });
  s.addNotes("Practice 7 is marked as an inferred link: the courses justify it with industry practice, not with AI. Eight more generalized practices are used by one to three courses: selecting from LLM-generated lists, limits on agent autonomy, LLM as critic, project idea checked by people, small steps, re-prompting only, a personal floor on each kind of work, and the student survey report. The next slides go through all thirteen.");
}

// ---------------------------------------------------------------- Practice slides
const P = [];

// P1
{
  const s = pres.addSlide();
  practice(s, {
    x: M, y: 0.6, w: CW, n: 8,
    name: "The student is the author and answers for the result; AI assists",
    nameSize: 34, defSize: 22, varSize: 20,
    def: "A policy or a rubric row separates two uses of AI: assisting the student's own work is allowed, producing the work from a description with the student as observer is not.",
    variants: [
      v("You own the code that is merged and shipped, no blaming of the AI", "Stanford"),
      v("Failure: Over-relies on AI-generated text with little personalization, or submits uncritical/unmodified LLM output.", "MIT"),
      v("Describe the decision and how much you feel YOU made it, vs an agentic coding tool", "UCSD"),
    ],
  });
  s.addNotes("Eight of twelve courses. The most common form is a policy statement; MIT and UCSD turn it into a graded item.");
}

// P2
{
  const s = pres.addSlide();
  practice(s, {
    x: M, y: 0.6, w: CW, n: 6,
    name: "The student does the task by hand before AI may help",
    nameSize: 34, defSize: 22, varSize: 20,
    def: "The AI should amplify a skill the student already has, not replace the moment where the skill is learned.",
    variants: [
      v("AI is banned on problem sets, allowed only in the final project", "Harvard"),
      v("Write the specification without AI before the coding agent sees it", "CMU 15-113"),
      v("Acceptable AI use includes to autocomplete the next bit, or to generate an alternative implementation for comparison", "NUS"),
    ],
  });
}

// P3 + P10
{
  const s = pres.addSlide();
  const colW = (CW - 0.7) / 2;
  practice(s, {
    x: M, y: 0.6, w: colW, n: 5,
    name: "Specification or design document before code generation",
    def: "A written document is the input to the AI should become a part of repository.",
    nameSize: 26, defSize: 18, varSize: 17, nameH: 1.5, defH: 1.05,
    variants: [
      v("Spec per module, graded for consistency with the code", "MIT"),
      v("Spec sections: goal, definitions, plan, source files to change, test cases, edge cases, what is out of scope, likely future extensions", "Stanford"),
      v("Ask Claude to develop a design doc and commit it", "UMD"),
      v("Late requirement change with a written report of design impact", "UCSD"),
    ],
  });
  practice(s, {
    x: M + colW + 0.7, y: 0.6, w: colW, n: 5,
    name: "Architecture and module boundaries stay under human control",
    def: "The course treats architecture as a place where LLM output is unreliable.",
    nameSize: 26, defSize: 18, varSize: 17, nameH: 1.5, defH: 1.05,
    variants: [
      v("Architecture and design document written without AI", "UW"),
      v("Generated architecture sections must be checked for internal contradictions", "CMU 17-316"),
      v("The design template lists the only files a change may touch", "Stanford"),
    ],
  });
}

// P5 + P6
{
  const s = pres.addSlide();
  const colW = (CW - 0.7) / 2;
  practice(s, {
    x: M, y: 0.6, w: colW, n: 5,
    name: "The student reviews and tests every generated output",
    def: "Generated code, design, or specification is not accepted until the student checked it against an explicit standard. The depth of the review is graded.",
    nameSize: 26, defSize: 18, varSize: 17, nameH: 1.5, defH: 1.45,
    variants: [
      v("Line-by-line review of every agent change on a branch; fixes explained in commit messages", "Stanford"),
      v("Fixed review questions: do you understand it, where would it do the wrong thing, what is unneeded complexity", "UMD"),
    ],
  });
  practice(s, {
    x: M + colW + 0.7, y: 0.6, w: colW, n: 4,
    name: "Oral check: the student explains the submitted work to staff",
    def: "Part of the grade depends on an in-person conversation. AI generation is tolerated if student can explain the result.",
    nameSize: 26, defSize: 18, varSize: 17, nameH: 1.5, defH: 1.45,
    variants: [
      v("Standing right to ask any student to explain any submission at any time", "CMU 15-113"),
      v("A fixed share of points on every assignment is earned only in an office-hours defense", "CMU 17-445"),
      v("Grade stays “pending” until an interview covers the code, the design, and what was AI-generated", "UCSD"),
    ],
  });
}

// P4 + P9
{
  const s = pres.addSlide();
  const colW = (CW - 0.7) / 2;
  practice(s, {
    x: M, y: 0.6, w: colW, n: 5,
    name: "Reflections, reviews, and design documents are written without AI",
    def: "AI is allowed for code but banned for the prose about the work.",
    nameSize: 26, defSize: 18, varSize: 17, nameH: 1.5, defH: 1.45,
    variants: [
      v("Six reflection essays during the term, defended in class", "CMU 17-316"),
      v("The AI-disclosure statement itself must be human-written; “honest bullet points with typos” preferred", "CMU 17-445"),
      v("Everything except code: requirements, design, status reports, reflections", "UW"),
    ],
  });
  practice(s, {
    x: M + colW + 0.7, y: 0.6, w: colW, n: 4,
    name: "Comparison of the student's own work with the LLM's output",
    def: "Own version first, then the LLM's version, then a written verdict. Students build their own map of LLM strengths and weaknesses from their own cases.",
    nameSize: 26, defSize: 18, varSize: 17, nameH: 1.5, defH: 1.45,
    variants: [
      v("Own cust-dev interview summary written and set aside before prompting; then compare", "CMU 17-316"),
      v("Own code review compared with an AI review per pull request, with written trust heuristics", "Stanford"),
      v("Curated “interesting moments”: unexpectedly good or bad LLM output", "MIT"),
    ],
  });
}

// P7 + P8
{
  const s = pres.addSlide();
  const colW = (CW - 0.7) / 2;
  practice(s, {
    x: M, y: 0.6, w: colW, n: 4,
    name: "The student controls the context the AI sees",
    def: "Which files, documents, and rules the AI works from.",
    nameSize: 26, defSize: 18, varSize: 17, nameH: 1.5, defH: 1.45,
    variants: [
      v("A staff-built tool forces explicit context selection and records every call with its full context", "MIT"),
      v("Repository guidance files for agents, iterated like a prompt", "Stanford"),
      v("Do not paste the assignment brief into the AI; write your own requirements", "CMU 15-113"),
    ],
  });
  practice(s, {
    x: M + colW + 0.7, y: 0.6, w: colW, n: 4,
    name: "How the student directed the AI is graded, not only the result",
    def: "The record of prompts and interventions is a deliverable with its own rubric criteria.",
    nameSize: 26, defSize: 18, varSize: 17, nameH: 1.5, defH: 1.45,
    variants: [
      v("Every LLM call saved in a record the student cannot edit; the record must show small, reflective steps", "MIT"),
      v("Graded both prompt and it's generated code.", "Stanford"),
      v("Every intervention during a hands-off agent build is logged as evidence of specification quality", "CMU 15-113"),
    ],
  });
}

// P7: existing codebase (inferred link)
{
  const s = pres.addSlide();
  practice(s, {
    x: M, y: 0.6, w: CW, n: 5,
    name: "Extending an existing codebase",
    nameSize: 34, defSize: 22, varSize: 20,
    def: "The student works in code someone else built.",
    variants: [
      v("Continue a classmate's unfinished AI-built game in one hour; at least 75% of the original code must stay", "CMU 15-113"),
      v("Every team extends the same staff-written program; a smaller feature built well scores higher than an original one built poorly", "NUS"),
      v("The first of four sprints produces no feature code: the team documents the architecture of the open-source system it will extend", "Cornell"),
      v("Refactoring is practiced on an unfamiliar program with planted design flaws; most of the assignment is reading", "CMU 17-214"),
      v("A multi-week project on a live production system is framed as a code review, not a build task", "UMD"),
    ],
  });
}

// P12 + P13
{
  const s = pres.addSlide();
  const colW = (CW - 0.7) / 2;
  practice(s, {
    x: M, y: 0.6, w: colW, n: 4,
    name: "The student writes and defends an own opinion on how to use AI",
    def: "The student states, repeatedly, what they think about working with AI, grounded in their own experience. Depth and concreteness are graded, not agreement with the staff.",
    nameSize: 26, defSize: 18, varSize: 17, nameH: 1.5, defH: 1.45,
    variants: [
      v("Six essays during the term, each on a different question from a shared bank, presented and defended in a class discussion", "CMU 17-316"),
      v("The final reflection asks what role LLMs should have in software development", "MIT"),
      v("Two short reflections every week; a low score leads to a conversation with staff", "UMD"),
    ],
  });
  practice(s, {
    x: M + colW + 0.7, y: 0.6, w: colW, n: 4,
    name: "Guided AI-workflow experiment with a written report",
    def: "Staff set up an experiment with a way of working they do not fully understand either. The deliverable is a concrete report: which manual steps disappeared, what broke, which strategy got furthest.",
    nameSize: 26, defSize: 18, varSize: 17, nameH: 1.5, defH: 1.45,
    variants: [
      v("Weekly assignments raise agent autonomy step by step: prompts only, then an editor, then an agent, then several agents, then an app generator", "Stanford"),
      v("Several agents at once on independent tasks; report what concurrency “gained, risked or broke”", "Stanford"),
      v("One hour to build a game with a self-chosen prompting strategy; next week the class compares which strategy got furthest", "CMU 15-113"),
    ],
  });
}

// ---------------------------------------------------------------- Bold experiments
// Re-prompting only
{
  const s = pres.addSlide();
  practice(s, {
    x: M, y: 0.6, w: CW, n: 2,
    name: "Generated output may be changed only by re-prompting, never by hand",
    nameSize: 34, defSize: 22, varSize: 20,
    def: "Every change goes through the AI. The quality of the student's prompts and specification becomes the only lever, so weak prompting is visible.",
    variants: [
      v("Whole team project from the frontend milestone on: code and diagrams only by re-prompting, with prompt templates taught in class", "CMU 17-316"),
      v("Final slides and postmortem must also be LLM-generated, with a signed statement that they were edited only by prompting", "CMU 17-316"),
      v("One assignment: hands-off agent build from a student-written specification, every intervention logged", "CMU 15-113"),
    ],
  });
  s.addShape(pres.shapes.RECTANGLE, { x: M, y: 5.6, w: CW, h: 1.05, fill: { color: C.faint }, line: { color: C.faint } });
  s.addText([
    { text: "The counter-evidence from the same base. ", options: { bold: true } },
    { text: "In the CMU 15-113 survey, the two agentic assignments had the lowest “read the code” scores of the term, 3.2 and 2.9 of 7, with satisfaction as high as elsewhere. “I found this way of working caused me to not read my code at all.”" },
  ], { x: M + 0.3, y: 5.65, w: CW - 0.6, h: 0.95, fontFace: FONT, fontSize: 16, color: C.ink, margin: 0, valign: "middle" });
  s.addNotes("The most radical experiment in the base: the student is deliberately made an operator, not an author. The same base contains the counter-evidence: students in the hands-off assignment stopped reading their code.");
}

// ---------------------------------------------------------------- Closing
{
  const s = pres.addSlide();
  s.background = { color: C.dark };
  s.addText("How to read these practices", {
    x: M, y: 0.6, w: CW, h: 0.9, fontFace: FONT, fontSize: 36, bold: true, color: C.white, margin: 0,
  });
  s.addText([
    { text: "A record of what courses do, not of what works.", options: { bullet: { indent: 22 }, breakLine: true, paraSpaceAfter: 18 } },
    { text: "Popular does not mean right.", options: { bullet: { indent: 22 }, breakLine: true, paraSpaceAfter: 18 } },
    { text: "Next offerings will show which practices survived and which appeared.", options: { bullet: { indent: 22 } } },
  ], { x: M, y: 1.9, w: CW, h: 3.4, fontFace: FONT, fontSize: 26, color: "E6EDF1", margin: 0, valign: "top" });
  s.addText("github.com/xoposhiy/project-courses-research", {
    x: M, y: 6.1, w: CW, h: 0.6, fontFace: FONT, fontSize: 26, bold: true, color: "8FD0E6", margin: 0,
    hyperlink: { url: "https://github.com/xoposhiy/project-courses-research" },
  });
  s.addNotes("Three caveats: the base records rules, not outcomes; frequency is not evidence of correctness; tracking the same courses over the next years will show what was dropped, what replaced it, and what new practices appeared.");
}

pres.writeFile({ fileName: process.argv[2] || "project-courses-practices.pptx" }).then((f) => console.log("written", f));
