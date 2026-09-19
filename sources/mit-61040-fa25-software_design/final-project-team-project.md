# Final Project

Due Dec 9, 2025 11:59 PM

## Overview

**Purpose**. The purpose of the final project is to give you an opportunity to deepen your skills and understanding of the ideas taught in the class by applying them again, this time in a team setting.

**Expectations**. All members of the team are expected to contribute roughly equally, and to engage in *all* activities. This means that you are welcome to divide responsibilities so that team members work on different areas of the project, but you may not divide by activity: every member must be involved in problem framing, designing, coding, and so on. At the same time, you may choose to assign primary *oversight* of a given activity to a single team member. For example, one team member might be responsible for overseeing the development of back-end code (so long as the other the other team members play their part in contributing code). All members of the team should expect to receive the same grade unless there are major inequities in effort; we hope this won’t happen and should be notified early on if it seems to be happening so that we can remedy it.

**Activities**. The activities that comprise the final project will be the same as the activities that you have already performed in the personal project, with the addition of (1) a few new activities related to team management, (2) a consideration of ethical issues, and (3) a user testing activity. For those activities that are not new, this document does not explain the activities and only specifies the deliverables; you can refer to the earlier assignment documents for guidance and advice on those activities. The new activities are as follows:

- **Team contract**. At the very start of your project, you’ll agree on a contract for how you’ll work together as a team to minimize the likelihood of misunderstandings.
- **Ethical analysis**. As part of your problem framing, you’ll conduct an ethical analysis using a framework called *value sensitive design*, identifying some of the possible undesirable consequences of the kinds of app that address the problem you’re working on, and extracting lessons that are relevant for your own design.
- **Pitches and critiques**. You will present your functional design not only as a document but also as a short video to be shared with the class, outlining the problem you’re addressing and the key concepts of your design. These videos will be shown in class, and every student in the class will provide a brief critique of one project, so that each project will receive three or four peer critiques.
- **Development plan**. As part of your functional design, you will include a plan that explains how you will develop the implementation incrementally; what risks you are most concerned about; and how you will mitigate them.
- **User testing**. In the last week of the project, you will conduct some user tests in which you’ll observe people using your app, and you’ll be able to fix usability issues that arose prior to completing the project.

**Advice**. We hope that this project will be a wonderful experience for you; that you’ll build an exciting app, do creative and thoughtful design work, and learn a lot. With that in mind, we offer the following advice:

- **Engage with us**. Your teaching staff are here to help, so make good use of us! Come to your mentoring meetings with your TAs well prepared with a clear articulation of the problems you’re currently facing, the issues you’d like advice on, and your plans going forward. When hard design questions arise, feel free to post questions on Piazza. The lecturers are also available and eager to help.
- **Be ambitious but control risk**. This project is a chance to do something exciting, so be ambitious. But work hard from the start to keep your project focused and avoid including non-essential features: better to have one great feature than a dozen mediocre ones. If your design involves some aspect that might fail (for example, use of an API or a technology that might not work as expected), make sure to include a fall-back option in your design.
- **Stick to your schedule**. Don’t let your team get behind. If you find that some activity is taking much longer than expected, then revisit your plan and consider cutting back rather than forging ahead.
- **Collaborate fully**. Take the time to meet with your team mates in person, and to stay in regular contact. You can assign tasks and do them independently so long as you sync up frequently, but you might also consider working together in the space so you can bounce ideas off each other.
- **Agile implementation**. In the personal project, since you were learning the technologies one at a time, we had you build the back end first, and only then move onto the front end. This is not unrealistic, and in large projects back-end and front-end developers are usually on different teams working separately. And as before, you will develop your front end and back end in two separate repositories. But when there is uncertainty about the problem and the design, it is easier and more effective to develop front-end components and back-end concepts hand-in-hand, and to construct your app not in “waterfall style” but in a series of agile “sprints,” each resulting in running version of the app, so you can experiment with existing features before adding new ones. Your project has two intermediate checkin deadlines marked as “alpha” and “beta” to ensure that you are on track. For the first, you are expected to have a “minimal viable product” running, which means that the most basic features of your app are working and can be demonstrated. For the second, you are expected to have a version of the app that is near completion, so that the remaining week can be spent on user testing and refinements.
- **Implementation technologies**. You are required to use the framework that we have taught in the class so far: TypeScript, Deno (or Node), MongoDB, Vue.js, the concept server and sync engine. This framework is designed to make it as easy as possible to construct your project; the concept server and sync engine in particular eliminates the need for a routing layer and provide simple automatic tracing in the console. You are welcome to augment (but not replace) these with additional technologies. For example, you are free to use CSS frameworks, file uploading services, Google Maps, etc.
- **Using LLMs**. You are encouraged to use LLMs in all aspects of your project work, but you may also choose not to use them if you prefer. We recommend that you use the Context tool (with Obsidian or with Terry’s Visual Studio plugin) for generating, critiquing and implementing concept specifications and synchronizations, and that you configure it to use the **gemini-2.5-pro model** which seems to work much better on coding tasks. We recommend that you do *not* use a generic agentic tool (such as Copilot or Cursor) for the back end as it will tend to violate the concept conventions and complicate the structure. If you have not become comfortable using the Context tool, you may want to take this opportunity to do so (and we stand ready to help and advise). For the front end, you are welcome to use the LLM tool of your choice, but bear in mind that should you choose to use an agentic tool we cannot provide you with additional credits.
- **Using Context for design work**. For your problem framing and design activities, we encourage you to use the Context tool along with the concept design background documents for brainstorming and analysis. You may also find it helpful to use Obsidian for these documents since it provides a better environment for markdown editing than Visual Studio.
- **Reusing and sharing concepts**. We encourage you to reuse any artifacts from your personal projects in your team project, including concepts that were implemented by any student in the class or by the teaching staff (eg, the authentication and file uploading concepts shown in lecture recently and available in a class repo). If you develop a concept in the course of your team project that you think might be of interest to other teams, post a message about it on Piazza and you will receive extra credit if the concept is used by another team!

## Due dates

The class schedule only includes the major deadlines, so a fuller list is provided here. Note that no lateness can be permitted in order to ensure that projects stay on track. All deadlines are at 11:59pm on the specified day (except problem framing, which is due at noon due to the holiday the day before).

| Deliverable       | Deadline | Notes                                  | Grade |
|-------------------|----------|----------------------------------------|-------|
| Team contract     | Nov 7    | Prior to start of team work            | 2%    |
| Project updates   | Weekly   | By arrangement with your mentors       | 8%    |
| Problem framing   | Nov 12   | Includes ethical analysis              | 15%   |
| Project pitch     | Nov 16   | To be shown in class the next day      | 5%    |
| Functional design | Nov 18   | Includes development plan              | 20%   |
| Peer critique     | Nov 21   | Written individually, but in team repo | 5%    |
| Checkpoint: Alpha | Nov 25   | First running version of app           | 10%   |
| Checkpoint: Beta  | Dec 2    | Near complete running version of app   | 10%   |
| User testing      | Dec 7    | Testing completed                      | 5%    |
| Full demo         | Dec 9    | Demo of final version of running app   | 10%   |
| Project report    | Dec 9    | All remaining deliverables             | 10%   |

Note that the user testing activity will require that you schedule one-hour sessions with two users who are appropriate to your domain, so you will want to plan this in advance.

## Repos & submissions

**Repositories**. Each team should create two GitHub repositories, one from the front end and one for the back end. Each repository should be owned by one of the team members, with the other team members as collaborators. The other team members can then clone the repo and push changes to it. We recommend that you use a separate branch for each task or feature, making regular commits, which are pushed to the central repo; then you can open pull requests to merge from the feature branch into the main branch.

**Where to place documents**. All non-code artifacts (including the visual design study) should be placed in the back-end repository, including the peer critiques written by individual team members about other team projects.

**Document format**. All non-code artifacts should be in markdown format, with any diagrams or screenshots inserted as linked images.

**Submission form**. As before, you will complete a form for each submission, but only a single form should be submitted for the entire team at each deadline. The form will ask for your Git commit hash as before, and your grader will assume that all work to be considered is in the main branch of the repository.

## Deliverables

In the personal project assignments, we gave you detailed guidelines about how much to write for each part. In the final project, we expect you to make reasonable decisions for yourselves about what is appropriate (with the exception of the deliverables for the new activities, which are described in more detail). Your work will be judged on quality and not quantity. We encourage you to be as succinct and simple in your explanations as possible, and to make good use of formatting so that a reader can easily see the structure of each document, navigate it easily, and recognize the most important parts. But make sure not to confuse brevity with superficiality: we expect you to address interesting aspects of your design thoughtfully and comprehensively.

The remainder of this document outlines the deliverables associated with each deadline.

### Team contract

Before you begin your work as a team, we ask you to agree on a “team contract.” We’ve found that such contracts take only a little time, but reduce the chance that projects are derailed by misunderstandings and disagreements. The team contract should be the result of an open and candid discussion amongst team members about your individual aspirations and commitments. Be brief and to the point; approximately half a page should suffice.

You should address the following questions:

- The expected level of achievement and effort for each team member (what grades do you expect to get? how much time do you plan to put in?);
- Personal goals for each team member (building a great app? learning a particular skill?);
- Frequency, length and location of team meetings;
- How quality of work will be maintained (reviewing each others’ code? team review meetings? pair programming?);
- How tasks will be assigned, and what to do if deadlines are missed;
- How decisions will be made and any disagreements resolved.

Because of its potentially personal nature, you should not place your team contract in your repo. Instead, you should create a markdown file (which you can store on your local repo if you like, hidden with .gitignore) and upload the content of the markdown as text in the [submission form](https://forms.gle/h5MgSkqRvFpLqjfMA). The form will ask you for a team name, so agree on that before you submit.

### Project updates

You will meet with your TA mentors weekly to get advice and feedback on the progress of your project. Every team member is expected to attend every meeting.

It is your job to structure the meetings and make sure that they are helpful to you; you should think of your mentor as a consultant rather than a grader. For each meeting, you should come prepared with: a brief report on your progress since the last meeting; a list of problems or issues you want help with; an agenda for the meeting (what order you want to discuss things in, and how long each will take). At the meeting, you should write down your plan for the following week and any decisions you made.

*Deliverables associated with each meeting*:

- **Agenda**: timing for meeting
- **Progress report**: how last week went, alignment to development plan
- **Design changes**: what changes were made to the design since the last meeting
- **Issues**: list of problems and issues to address with a sentence or two explaining each
- **Plans & decisions**: plans for next week and decisions made

You should have a separate folder in your repo for each mentor meeting containing these items. There is no official submission, but the quality of these deliverables will be taken into account at the end in determining a portion of your team’s grade.

### Problem framing

The problem framing is like the one you did for the personal project, augmented with the ethics analysis, which subsumes the stakeholder analysis. In your personal project, you listed only 3 features. For your team project, we encourage you to brainstorm a longer list from which you can draw the most promising in your functional design. Since the ethical analysis is new, a full explanation of the steps involved is provided in a [separate document](./final-project-ethical-analysis).

We are also providing guidance on what makes a suitable project [here](./final-project-guidance).

*The deliverables are:*

- **Domain**: a description of the general domain you’re interested in.
- **Problem**: an outline of the problem your app will address.
- **Evidence**: evidence that the problem is real and experienced by others.
- **Comparables**: notes about existing solutions to the problem or related problems.
- **Features**: possible features to address the problem.
- **Ethical analysis**: an identification of stakeholders and the impacts they might experience.

One person on the team fill out this [submission form](https://forms.gle/mZwyAPRiPUpXi6wo8).

### Project pitch

Each team will create a 3-minute video to be shown to all students in class. This will form the basis of your peer critiques. Your video should focus on the updated problem framing prepared for your functional design submission. It is up to you what to include; the idea is to present a compelling argument for why the problem you’re addressing matters and why your approach to solving it is likely to be a good one. Your video does not need to be narrated slides; you could interview team members, draw on a whiteboard, etc.

*The deliverables are:*

- **Pitch**: 3 minute video.

One person on the team fill out this [submission form](https://forms.gle/zgkXUnQqN6in7kcE8).

### Functional design

The functional design is like the one you did for the personal project, augmented with the development plan.

*The deliverables are:*

- **Problem framing**: A revision of your problem framing to reflect your latest understanding
- **Concept design**: A collection of concept specifications and syncs; include a **note** section in each concept and sync to explain any non-obvious design decisions or to mark issues to be resolved.
- **User journey**: a narrative that follows a single stakeholder as they encounter the problem and use your designed app to address it.
- **UI sketches**: low-fidelity sketches of your user interface that show the primary user interface elements and their rough layout, annotated with pointers or comments to explain anything that might not be obvious.
- **Visual design study**: two slides (which can be inserted into markdown as images) that establish the *“look and feel”* of your app by assembling a range of sources and annotating them to establish a visual style with typographic, color and layout.
- **Design summary**: A summary of the overall design: how the concepts work together to solve the problem; how the design addresses any concerns that your ethics analysis raised; which issues remain unclear.
- **Development plan**: A table showing **which features** you expect to deliver at various stages, including at least the two checkpoints; an **assignment of responsibilities** to team members; a discussion of the **key risks** you face and how you will mitigate them (and your fallback option will be if something turns out to be unimplementable).

Submit [here](https://forms.gle/fXdCJbzcgARCbQgW6).

### Peer critique

Each team member will be assigned another project to critique. They should review the project pitch video, read the problem framing and functional design documents, and then offer some critique in three sections as indicated below.

*The deliverables are, a review by each team member of another project, comprising*:

- **I like**. Some aspects of the project that you like, and why.
- **I wish**. Some aspects of the project that you wish were different in some way.
- **I wonder**. Some aspects you are wondering about; perhaps some suggestions for a simplification, a different approach, or whatever.

You should expect to each spend no more than two hours on this, and to write no more than half a page in total for each critique. Your comments can be aimed at any aspect of the project, from the problem being addressed to the detailed design of the concepts. In grading this, we will consider primarily how *helpful* your critique is likely to be the receiving team.

Note that each team has been assigned one team to critique. However, every individual must complete their own critique and copy-paste their responses into the form below.

Submit [here](https://forms.gle/1bcfVEL8Y1z1wCGm7).

### Checkpoints: Alpha and Beta

For each checkpoint, in addition to submitting the code (as Git commit hashes for front end and back end repos), you will submit (1) a public URL pointing to your deployed app; (2) a screen recording showing the current state of your app, with an audio narration explaining some key features, and (3) a new version of the development plan explaining what progress you’ve made, what remains to be done, and how your plans might have changed.

*The deliverables are*:

- **Source code**: for front and back ends
- **Screen recording**: max 2 mins in length
- **Development plan update**: comments on progress and changes

Submit alpha [here](https://forms.gle/tvC4SdSEjCNYPfRi6).

Submit beta [here](https://forms.gle/sQZEpEF55ttGtE8W7).

### User testing

Since user testing is a new activity, a full explanation of the steps involved is provided in a [separate document](./final-project-user-test).

*The deliverables are*:

- **Task list**: instructions and rationale
- **Summary of lessons**: reports on each user, key flaws/opportunities

Submit [here](https://forms.gle/PUp1bZtoNTYzNidZ7).

### Full demo

For your final project demo, you should make a video with an audio narrative that includes a brief explanation of the problem your app addresses and a screen recording that shows it in action. Make sure to populate your app in advance so that the data shown in the recording appears realistic, simulating how the app would appear once successful and widely deployed.

*The deliverables are*:

- **Demo video**: max 3 minutes in length

### Project report

In your final submission, your work to date will be reviewed, including final versions of your source code, design documents, concept specs and mentoring meeting records.

*There are two additional deliverables*:

- **Design summary**: a succinct but thoughtful summary of the changes you made to your design since the original proposal in your functional design submission. Your mentoring meeting notes should help in reminding you of all the changes you made.
- **Reflection**: a reflection on your experiences in the final project, focusing on what you learned from the experience, divided into a subsection for each team member.

Final submission [here](https://forms.gle/AQpx4JMQigNVX8J86).
