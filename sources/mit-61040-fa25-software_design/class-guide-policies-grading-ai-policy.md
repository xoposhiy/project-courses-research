# Class Guide

This guide tells you the main things you need to know about the class and how it runs. Please read it carefully! We will **not** be using class time to explain this, but we’ll be happy to answer any questions you may have on the class forum.

## Admin details

**Prereqs and credits.** 6.104 is a 15-unit junior/senior level class, and offers AUS2, DLAB2, and II credit. You can use the class to provide all of these credits at once. Prerequisites are 6.1020 Software Construction (6.031) and 6.1200\[J\] Mathematics for Computer Science (6.042). From 6.1020 (6.031), we rely on the ability to think about a program in an abstract and code-independent way (using notions such as specifications, interfaces, representation independence, abstraction functions and invariants), and on some practical skills (knowledge of JavaScript, basic familiarity with Node/Express, and programming maturity, notably the ability to deal with sometimes messy and under-documented frameworks). From 6.1200, we rely on the ability to understand structures in terms of sets, relations and graphs (which is especially important for designing data models for databases). We don’t enforce the prerequisites strictly but students are warned that without the background they provide this class can be extremely challenging.

**Lectures**. There are two 80-minute lectures each week, from 2:35pm to 3:55pm on Mondays and Wednesdays in room 1-190. Lectures will focus on fundamental ideas and skills. During each lecture, there will be short exercises and class discussions to help you solidify your understanding. Regular in-person lecture attendance is expected, and video recordings will not be made available except in extenuating circumstances where it is impossible for a student to attend a class. We ask that students do not use **laptops or phones** in class. Research suggests that students who do so unwittingly spend much of the time surfing the internet leading to worse [educational outcomes](https://www.scientificamerican.com/article/students-are-better-off-without-a-laptop-in-the-classroom/), and that [taking notes by hand](https://bpb-us-w2.wpmucdn.com/sites.udel.edu/dist/6/132/files/2010/11/Psychological-Science-2014-Mueller-0956797614524581-1u0h0yu.pdf) is much more effective. You may use laptops during class exercises, and you may use a tablet to take notes.

**Recitations**. There is one 50-minute recitation each week. Recitations are taught by teaching assistants, and most will be centered on teaching a particular technology. Recitations are optional, and you can choose which to attend (but you should stick to the same time from week to week as much as possible, so you get to know your recitation instructor).

**Preps**. To help you get up to speed with platforms and tools, there will be short “preps” that you are required to do in **advance** of some of the recitations.

**Problem sets.** There are a few problem sets that students will work on individually, whose purpose is to inculcate some important skills that might not otherwise be acquired in the context of project work.

**Projects.** There are two projects in the term: a first, during which students learn the essential skills and try them out for the first time as a dry-run, and a second more ambitious project to apply the skills at a larger scale, and having learned the lessons of the first project. The steps for both projects will be the same. The first project will be done individually, and the second in teams of four. Students will be able to choose their own teams, and devise their own projects (subject to a few important constraints).

**Readings**. [*The Essence of Software*](https://essenceofsoftware.com/), which explains the key ideas of concept design, is a *recommended* but not required text.

**Listeners**. Listeners for the class are welcome and will have access to all the materials. Listeners cannot join project teams or submit work for grading.

**Office hours.** The TAs will be available for consultation during open hours each week at times that will be posted on the website. These are likely to change in response to student demand, so be sure to check when you make your plans for the week. Office hours are intended to provide a place where several students and TAs will be working so that you can get help as you need it. Office hours will be phased out when the team project begins; after that, TA meetings will be made by appointment. Please note that because TAs have limited time, they cannot spend time explaining material from lecture or recitation, so before you come to office hours make sure you have reviewed the necessary material.

**Lecturer chats.** The lecturers will be happy to discuss the ideas they introduced in class with you, to chat about software design in general, and to hear thoughts and ideas about the class. Lecturer chats are by appointment; please email the lecturers to arrange.

## What the class is about

This class is about *design*. You’ll learn how to design software that is fit for purpose: that fulfills the needs of users, and is flexible, powerful and easy to use. Design happens at the meeting point of technology and people. It’s not just about the user interface, though; much of the class is about how to shape the underlying functionality that the user experiences.

The design material taught in the class includes some classic material on (1) user interface design (eg, on user centered computing and the role of conceptual models), (2) state-and-action/data modeling, (3) modularity; and more cutting-edge material on (4) function design (with concepts), (5) designing software using LLMs, (6) generating code with LLMs, and (7) incorporating AI agents as components.

Although the focus of the class is not technology, you’ll learn all the tools you need to be a proficient web stack developer. These include: GitHub for maintaining a repository and GitHub Pages for hosting a static website; Node/Express for backend development; Heroku, for deploying Node.js; Figma, for wireframing; MongoDB, for persistent storage; and a frontend reactive framework (TBD, but probably Vue).

## Does the class meet industry standards?

Students sometimes ask if the design approach that we teach in the class is the standard approach used in industry. Of course it isn’t! If it was, you could learn it on the job and you wouldn’t need an MIT degree. Or to put it another way: the role of education is to shape the future (including yours!), not to reiterate the past.

The class will indeed teach you several of the most effective techniques currently used in industry but it would be a pretty poor class if that was all. In particular, we teach [concept design](https://essenceofsoftware.com) to empower you to be a better designer than you could ever be just by learning on the job, or by taking a UX bootcamp.

MIT classes have a long tradition of teaching new approaches coming out of research that are adopted in industry sometimes only decades later. One of your lecturers was a TA for the original 6.170 class, in which the programming language was CLU, one of the first object-oriented languages (invented by Barbara Liskov, for which, amongst other things, she won the Turing Award). At the time, very few programmers knew about objects, and it wasn’t until decades later that languages started to have the features CLU had back then. Even when Java came along, its design had flaws (such as a distinction between “primitive” and “object” types) that CLU had eliminated twenty years before!

That lecturer also taught sections in 6.001 when the textbook was *Structure and Interpretation of Computer Programs*. Some students complained that the class was taught in Scheme, a functional language that nobody used, rather than a “practical” language like C. It’s amazing to think that Scheme is now about 50 years old (and LISP is even older), and only in the last few years have functional languages become the ones that all cool programmers want to know and use.

There’s another take on this. While most people in industry haven’t learned concept design, the very best have been using ideas like these for a long time. Concept design emerged from a detailed study of hundreds of apps, extracting the lessons for what makes some apps so good and others so bad, and in that way codifies and makes explicit best practices which people in industry may come to only after many years of learning by trial and error.

## A learning community

**Goals**. Our goal is for this class to for you to acquire skills, insights and sensibilities that will serve you well for your entire life. Knowing how to build a web app may help you get a summer job, but remember that’s not why you’re taking this class.

**Community**. To make the class as effective as possible, we want it to be a *learning community*. We have explicitly designed the class so that you do not feel you are in competition with one another. Great design is a social activity: it happens when you’re inspired by someone else’s work, remix it into your own, or when someone else offers a generous and constructive critique of your work to help push it further.

**No tricks**. A healthy learning community is also centered on *trust*. We, the staff, will treat you, the students, as grownups. We won’t play tricks to get you to come to class, penalize you for small mistakes, or assign work just for the sake of it. Everything we ask you to do will be for your benefit and the benefit of your peers.

**Class participation**. In line with this approach, class participation is not graded. We hope that students in the class will be generous in sharing their knowledge and understanding with each other, by asking and answering questions in the forum. We are also happy for students to help each other with their assignments, and to discuss their design and coding ideas with each other. We do expect each student to write up their assignments themselves.

**Asking questions about your work**. Note that there is one particular major difference between this class and most MIT classes. In most classes, students are not encouraged to ask for help in the class forum on assignments. But since all the assignments in this class involve working on projects that are chosen by students, there are no “answers” to give away. We therefore **strongly** encourage students to ask questions about their design and coding work in public on the forum. Just bear in mind that questions that ask for help with debugging are unlikely to be answered if they’re vague (“I wrote this 100 line file but it doesn’t seem to work. Can you tell me why?”). You’re welcome to ask for help with debugging, but you should formulate a clear question (“I thought this query on my database would produce this result, but it doesn’t. Can you tell me why?”). For the exercises, which involve the same questions for all students, we do ask that students not post tentative solutions in public, but the TAs will be happy to provide feedback privately.

Some students are reluctant to ask questions on the forum for fear of looking bad. This is a mistake. Realize that if you have a question, it’s likely that other students have the same one, and they’ll appreciate your asking it. In our experience, MIT students often miss out on opportunities for guidance and feedback, and the ones who ask questions are more likely to succeed and receive better grades.

**Class feedback**. Some classes provide a way for students to offer feedback anonymously (and indeed, we’ve done that in this class in the past). But we believe that anonymous feedback is not a great idea, because it gives the impression that the class is an impersonal product and the students are consumers, rather than the students and teachers embarking on a shared journey. We also believe that it’s an important skill for students to learn how to provide candid and constructive feedback. So although we won’t be providing an anonymous feedback line, we strongly encourage you to share your thoughts with the lecturers and TAs. We will also be asking for regular feedback about the assignments. We will be very grateful for your ideas, suggestions and even your criticisms and complaints!

## Attendance

Recitations are optional, but lecture attendance is required. We don’t track you, but we expect you to commit to attending lectures. Of course things come up, so we’ll understand if you miss one or two.

Why do we insist on this? First, we’ve found that students who attend lecture do better: they learn more, they’re happier, and they get better grades. Second, when students don’t attend lectures they often become a burden to the staff because, when the assignment comes and they discover they are unprepared, they try to learn the lecture ideas in office hours and by asking questions online.

We put a lot of work into making lectures engaging and educational, and we believe there is no substitute for being there in person, joining your peers on class activities, and participating in discussions. If you have suggestions for how to improve lectures, we will be glad to hear them.

## Collaboration

Design is all about collaboration, so we encourage it in all aspects of the class. You can talk with anyone about anything; you can share ideas; and you can use other people’s ideas in your own submissions with appropriate credit. The only constraint is that you must write up your work by yourself (this ensures that you really understand it!) and note the set of people you collaborated with.

The class will run on an honor code. We will assume that you are not cheating by copying text or code from other students in the class or from work submitted in previous terms. If we discover that you have violated the honor code, you may fail the class and have a complaint deposited with the Committee on Discipline.

You are free to use any third-party code, whether as libraries or code fragments, and to adopt any idea you find online or in a book, so long as it is publicly available and appropriately cited (see the [section on code](http://integrity.mit.edu/handbook/writing-code) in the MIT [handbook](https://integrity.mit.edu) on academic integrity for details).

## Using LLMs

You are encouraged to use an AI agent or LLM in any of your work in the class, although if you do, you must briefly describe in the assignment survey saying how you used it (just as you would for a human collaborator).

## Student repositories

All of your individual work for the term will be within a single GitHub repository that will act both as a design notebook and (when completed) as a portfolio of your work. You will maintain a README file that at all times provides a convenient index into your work artifacts. To submit each assignment, you will commit it in your repo, **and** submit its specific Google form provided on the assignment page, which will ask you for the URL of the last Git commit where you edited the assignment.

## Grading and lateness policy

Your grade is allocated as follows:

- **Personal project**: 45%, comprising seven assignments.
- **Team project**: 30%, comprising six assignments.
- **Problem sets**: 20%, comprising two individual problem sets worth 10% each.
- **Preps**: 5%, comprising a few technology preps done in advance of recitations.

Except in unusual circumstances, all team members (for the second project) will receive the same grade.

**Late penalties**. Submissions submitted late but within a week of the due date will be penalized by 20%. So if you submit an assignment or exercise late that would have been worth 95% had you submitted it on time, you will receive 75% instead. Submissions more than a week late will not receive credit.

**Slack submission**. Each student has three “slacks” that allow you to hand in an assignment or problem set three days late (eg, on Friday night rather than Tuesday night) without penalty. You do not need to notify us when you plan to take a slack. You cannot take less than one slack on a deadline (ie, fewer than three days) or more than one slack (ie, more than three days), and you cannot use slacks for the team project deliverables. If you anticipate trips or conflicting commitments, you should expect to use slacks to cover them.

**Extenuating circumstances**. In the case of emergencies, illness or other extenuating circumstances that are unanticipated, we will obviously grant extensions. **It is your responsibility to obtain a letter from an [Student Support Services](https://studentlife.mit.edu/s3) (S3) dean that specifies explicitly how many days extension they believe you should be granted.** Please note that participation in clubs, conferences, sports events, job recruiting, etc, are not grounds for extensions, but should be accommodated by slacks.

**Completion plan**. Sadly, some students find that even with extensions they are unable to make adequate progress. If, just prior to the team project, your class grade is not a C or better, you will not be able to join a project team. In this case, we may offer you the option to use the rest of the term to complete the individual assignments, which must be handed in one week before the end of term. Your final grade will be one letter grade lower than what it would have been if all your assignments had been submitted on time, and will be no better than a C. Students may not elect to take this option unilaterally.

## Advice

Some general advice:

- **Get started early**. We know that 6.104 isn’t your only obligation. You’re busy and have to juggle many other classes and other responsibilities. But don’t underestimate the time 6.104 assignments will take. They can look deceptively straightforward, and thinking through a design often requires some elapsed time. It’s amazing how just having a problem in the back of your mind will make it easier to solve, as ideas will spontaneously occur to you when you’re walking, showering, etc. So don’t wait until the day an assignment is due to start thinking about it. That will (a) make you stressed, (b) give you few chances to get help, and (c) lose the advantage of mulling a problem over in the back of your mind. So try and get started early on, and figure out what you’ll need to do, and what help you might need.
- **Ask for help**. Don’t be shy to ask the staff for help in office hours, or to post questions on the class forum. In our experience, students who ask for help enjoy the class more, learn more, and get better grades.

## Getting Help

Do make good use of all the resources the class offers. We’re here to help you!

- For **administrative questions** (eg, regarding due dates or interpreting assignment instructions); for **technical questions** about programming or the various platforms; for **questions about ideas** taught in lecture; for **larger questions** about design whether or not directly related to lecture content; for **questions and feedback about the pedagogy** of the class; for **clarifications about assignments and exercises**; for **detailed design and implementation questions about project work**: post publicly in the appropriate category in the class forum.
- For help when you’re **feeling confused** on a design or programming issue, and can’t formulate a question, or would like advice on your design or code: go to TA office hours or faculty office hours. Please do not email the TAs individually to ask for help.
- For a **personal issue** about grading, attendance, or team issues: post a private question for the staff in Piazza.
- For an **S3 extension**, cc the staff email list (address available on Piazza) in your email to S3.
- For a personal problem or for **friendly life advice**: email a lecturer. We’d be delighted to find a time to chat with you.

Students are sometimes wary of posting basic questions in the class forum, but bear in mind:

- If you have a question or are confused about something, other students almost certainly are too, and you will be doing them a service by articulating a question.
- Learning how to be straightforward about what you don’t understand, and where you need help, is an important professional skill. People who confidently ask for help are better team members than those who struggle silently.

## Life at MIT

Life at MIT is intense, fast-paced and exciting. But it can also be exhausting, and almost all students have times when they feel demoralized or frustrated. And a campus can be a lonely place even when you’re surrounded by others.

MIT is committed to helping students deal with the pressures and challenges of student life. A good place to start is [ask.mit.edu](https://ask.mit.edu), which has pointers to many useful resources. If you are dealing with a personal or medical issue that is impacting your ability to attend class, complete work, or take an exam, you should contact a dean in [Student Support Services](https://studentlife.mit.edu/s3) (S3). S3 is here to help you.

The staff of this class is deeply committed to making your experience this term one that will not only give you valuable skills and insights, but will also bring you confidence and joy in your work. We hope that if the class does not live up to our aspirations of supporting you effectively in any way, you will let us know. The lecturers are also keen to engage with students individually, so be in touch if we can help.

You might find Daniel Jackson’s book [Portraits of Resilience](https://portraitsofresilience.com) helpful. It includes stories of MIT students who have experienced serious challenges in their life at MIT and how they handled them.
