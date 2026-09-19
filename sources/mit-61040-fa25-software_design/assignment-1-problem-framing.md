# Assignment 1: Problem Framing

Due Sep 7, 2025 11:59 PM

## Overview

- **Advice**. Read the advice section now!
- **Two projects**. You’ll do two projects this term: a first, during which you’ll learn the essential skills and try them out for the first time as a dry-run (individually), and a second, in which, with those skills solidified, you’ll apply them to a more ambitious project (in teams of four). The steps in each case will be the same.
- **Problem framing**. The first step, which is the subject of this assignment, will be to figure out what problem you’re trying to solve. Needless to say, this is a critical step that will have a huge impact on the success of your project and on the satisfaction you gain from doing it. You have the freedom to choose your own problem. In this assignment, you will focus only on identifying problems and proposing a few features. In the next assignment, you will construct a coherent design, and in the following assignments, you will implement it.

## Project Criteria

- **Usable and complete**. Your project should produce a usable app. It should be complete in the sense that all of its features are fully implemented and work correctly, and that it supports the intended workflows.
- **Authentic demand**. Your solution should fulfill some *authentic demand* (as discussed in class), bringing real value to its users. This means that your app has some likelihood of being adopted by some (perhaps small) number of users. Note that value is subjective; it doesn’t mean that your app is commercially viable, or that it solves some problem that everyone would agree is “important.”
- **Solution constraints**. There are some technical constraints on your solution to ensure that you will make good use of the skills taught in this class. It should be *dynamic*, meaning that the application stores state that evolves over time in response to actions by users (and in particular should not be a wrapper for a one-shot function that could be implemented as a local script).It should also not require extensive use of technologies that are not the subject of this class (such as blockchain/crypto, fine tuning of models, distributed algorithms, elaborate data visualization, etc).
- **Originality**. Your project does not have to be unprecedented in the sense that there are no other existing applications that address the same problem or have similar features. If your project is similar in function to an existing app, then make sure that it is innovative in terms of its particular combination of features, and in refinements that make it simpler, more flexible or easier to use.

## Tasks

Your assignment consists of a series of tasks. Each tasks is explained in outline, and followed by a list of deliverables. Note that the initial tasks involve a brainstorming phase in which you just list some domains and problems, and then a more focused ideation phase in which you explain them in more detail.

- **Domains**. From your social connections, activities, life experience, hobbies, interests, etc, identify ten domains (general problem areas) that you are interested in and might make promising subjects for a project. Then select the three that seem most promising and explain them.
  - A list of ten domains (with a short phrase for each)
  - For three of these, additionally, a few sentences explaining your interest in it
- **Problems**. For each of your three selected domains, identify three problems that might be worth solving. Now, from all these problems (nine in total), select three that seem to you most worth pursuing, and explain them. Justify your decision to include these and to exclude each of the others. Suitable justifications might be: that you believe the problem is more or less serious or widespread; that you have a particular insight about it; that a solution would likely be very hard, or might require significant non-software elements; that it would make a more enjoyable project for some reason; etc.
  - A list of three problems in each of three domains with a short phrase for each
  - For three selected problems, a title and a few sentences explaining it, and why you included it
  - For the unselected problems, a sentence or two explaining why you excluded them
- **Stakeholders**. For each of your three selected problems, identify at least three stakeholders (both direct users and non-users) who might need to be considered in judging the effectiveness of solutions to these problems, and comment on the impact the problem might have on them.
  - Three stakeholders for three problems, each with a name and a phrase defining them; and then for each problem, a few sentences saying which stakeholders might be affected and how.
- **Evidence**. For each of your three selected problems, compile some evidence for or against it (how much it matters, how many users might be affected, etc), and a list of comparables (related or prior attempts at solving the problem) and their limitations. Each piece of evidence or comparable should have an associated citation link. Suitable sources include Wikipedia articles, newspaper articles, blog posts, Q&A forums. Quantitative measures are especially helpful but are not required. LLM output per se does *not* constitute evidence.
  - For each of three problems, at least 5 pieces of evidence or comparables with a sentence or two explaining each, and links if available.
- **Features**. For each of your three selected problems, suggest three features of a possible solution, explaining what it does, and why it would contribute to addressing the problem (referring when appropriate to the stakeholders you defined). These features do not have to be consistent with each other (in fitting together in an application); they are just starting points for solutions.
  - Nine features, each with a title and a few sentences explaining it

## Examples

To illustrate, here are some examples of each of the elements requested. Note in particular that a problem is a difficulty experienced by a user in a domain that is independent of any particular solution; it is *not* a flaw in an existing application.

- **A domain**:

  > Watching movies: I enjoy watching movies, usually with family. We tend to watch on Netflix or Amazon Prime and have had short-lived subscriptions to other channels. I enjoy arty movies and drama, and appreciate good cinematography. I rarely rewatch movies. I feel that I don’t really have my act together with movies, and suspect I’m missing lots of good ones, especially classics. I’d like to be more selective but I haven’t found the time to figure out how.

- **A problem**:

  > Finding movies: Every week or so, I find myself wanting to watch, but not having a movie in mind. I waste too much time browsing Netflix and end up compromising and watching something that isn’t great. When I hear about a movie from a friend or in an article, I add it to a list I keep in a plain text file; I also scan best-of lists in the NYT and other places. But I still have the feeling that I’m missing out, spending too much time searching, and not getting to see the movies that I would enjoy.

- **A selection**:

  > Remembering movies I’ve watched: I chose not to select this problem, because I don’t think it’s likely that I’ll find opportunities for addressing it that are better than standard general tools for journaling and notetaking. I’m also not convinced that many people really care so much about this; even if say they’d like to keep a record of the movies they’ve watched, they’re unlikely to want to put in much effort and a simple list of movies watched (which you can extract from your viewing history in apps like Netflix) might be enough.

- **A citation for evidence**:

  > [You’re wasting 110 hours a year just scrolling for something to watch](https://fortune.com/2024/12/24/find-something-to-watch-netflix-youtube-hulu-peacock-hbo-max-streaming/): An article that reports on a survey of 2,000 American streaming service subscribers finding that the average person spends 110 hours a year scrolling through streaming websites trying to find movies or shows to watch.

- **A citation with a comparable**:

  > [Letterboxd • Social film discovery.](https://letterboxd.com): Letterboxd is a web service for sharing movie recommendations, remembering what you’ve seen and noting what you’d like to see. It seems to focus more on what’s popular and social-media-style following rather than sharing with friends. Movie search will sort by rating and length, but doesn’t offer faceted search (so you can’t ask for highly rated short movies, eg).

- **A feature**:

  > Wish List: You can add a movie that you’ve heard about and want to see (but maybe missed when it was in theaters) to a wish list, and when it opens on a streaming platform that you’ve subscribed to, you’ll get a notification that it’s now available.

- **Stakeholders**:

  > Selector (the user who leads the selection of the movie and interacts with the app); Partner (someone who tends to watch movies with them); Friend (someone who user exchanges movie recommendations with); Reviewer (professional movie reviewer); Streamer (owner of streaming service); Studio (people involved in funding/making/distributing movie). Impacts: Both Selector and Partner suffer from poorly chosen movies, but Selector mostly suffers inconvenience of search. Friend might benefit from their discoveries and guidance. Reviewer has interest in their reviews guiding selections. Streamer may have interest in Selector not finding movies more easily, since that might mean less time on the platform, less influence on selection, and greater likelihood of choosing movies on other platforms. Studio might prefer viewers to find movies as soon as available.

## Submission process

Submitting your work is a 3-step process:

1.  Create one or more files in your GitHub portfolio that contain your work for the assignment. Include a link to the relevant files in the main README. Make sure your work is committed and pushed **by the assignment deadline** and save the commit hash.
2.  Fill in the [submission form](https://forms.gle/FUEAo4kYP7mpRLvu9) with your GitHub repo link and commit hash **by the assignment deadline**.
3.  Fill in the [survey form](https://forms.gle/BdnYae4Hr1u3kbQv9) **within 24 hours after the assignment deadline**.

## Rubric

| Skill | Description (what good work looks like) | Common Failures (examples of falling short) |
|----|----|----|
| **Breadth of Ideation** | Student generates a broad set of domains, showing creativity and variety across personal, social, and professional interests. | Produces only a few domains, or all from the same narrow area (e.g., all related to academic work); domains are too broad (“sports”); domains are all popular and unsurprising. |
| **Depth of Domain Selection** | For three domains, explains interest thoughtfully, connecting to personal experience and showing awareness of why it could lead to a promising project. | Gives only superficial reasons (“I like this topic”) or generic statements with no evidence of reflection. |
| **Problem Identification** | Problems are framed clearly as solvable issues rather than vague frustrations, and represent real problems for the user, not just technology limitations. | Lists problems that are too vague (“school is hard”), trivial, or restating the domain itself; confuses problems with proposed solutions (“grading is not automatic”). |
| **Justification of Choices** | Provides clear reasons for selecting and excluding problems, considering seriousness, feasibility, personal insight, or project value. | Selection seems arbitrary (“I just like this one”), or no justification is provided. |
| **Stakeholder Analysis** | Identifies at least three distinct stakeholders per problem, with meaningful commentary on how each is impacted. | Provides only end-users, or fails to explain how stakeholders are affected. |
| **Evidence Gathering** | Collects at least 5 pieces of relevant, cited evidence/comparables per problem, with explanatory notes that connect back to the problem’s significance. | Minimal or irrelevant evidence (or evidence only vaguely supports the existence of the problem); generic citations; just a list of links without clear explanations of their significance. |
| **Feature Ideation** | Proposes at least three distinct features per problem, each tied to user needs and stakeholder concerns, showing creativity. | Features are generic (“a better UI”), disconnected from the problem, or all essentially the same. |
| **Clarity and Organization** | Submission is well-structured, with clear titles, succinct prose, and logical flow that makes ideas easy to follow. | Work is disorganized, rambling, or excessively wordy, making it hard to understand. |
| **Critical Use of Tools** | Demonstrates thoughtful use of LLMs and external resources, but applies personal judgment and insight rather than copying output. | Over-relies on AI-generated text with little personalization, or submits uncritical/unmodified LLM output. |

## Advice

- **Getting started**. In real life, you’d have much more time to frame your problem. In this class, all the steps are necessarily compressed. But don’t underestimate how challenging this first step is, and how much easier it will be (and how much better the results) if you’re able to mull your ideas over in your mind for a while. We therefore recommend very strongly that you **get started as soon as you can** and start thinking about it, even if you don’t do the bulk of the tasks until later.
- **Quality over quantity**. Don’t expect to write a lot for this assignment; what matters is that you brainstorm broadly and creatively, and distill your ideas thoughtfully. Be aware that grading will favor submissions that are well organized and clear, and gratuitous length will be counted against you.
- **Presentation advice**. Make sure each item (domain, problem, stakeholder, feature) has a pithy title and an explanation. For a stakeholder, a short phrase is a sufficient explanation; for the other items, a few sentences is needed. Your report should have a very clear structure so it’s easy for a reader to assimilate the key ideas quickly, and to explore more deeply if they want to. Feel free to include screenshots, diagrams and other illustrations if they add real value. Make sure to be succinct and to the point: writing more is not usually better and needless words will likely damage your grade.
- **Using LLMs**. We encourage you to use LLMs in a thoughtful and critical way to expand your analysis and reduce the time it takes you to produce it. In particular, an LLM may help identify common problems and marshal evidence for them, find comparables, pick good names, and more. Don’t let the LLM substitute for your own personal judgments, though, especially in drawing lessons and insights from your own experience, and in motivating selections from problems and features.
