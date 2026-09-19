# Assignment 4c: Completing Your Personal Project

Due Nov 4, 2025 11:59 PM

## Overview

**The big picture.** In this assignment, you will make the finishing touches to your personal project. You’ll introduce synchronizations in your back end (which will lead to a few changes to the back-end API that you’ll need to accommodate in the front-end code); you’ll deploy your app so that it can be accessed by others; and you’ll summarize your design notes and reflect on your experience.

**What you’ll learn**. There are three goals for this assignment (1) learning why back-end syncs are needed and how to use them for authentication and other purposes; (2) learning how to deploy an app; (3) consolidating your learning over the whole project by reflecting on your experiences.

**Why back-end syncs?** If things went well, you have a mostly functioning web application at this point, so you may wonder why you need to change your back end at all. The lectures this week addressed this topic, but here’s a quick explanation. Your front end can effectively synchronize the actions of back-end concepts, by coordinating calls to the back end. But this is not secure, because the user can easily modify what calls the front end makes. Moreover, the syncs won’t be clear in your front-end code because Vue.js does not have a systematic way to declare them and organize them, and they may be scattered throughout the code. Moving syncs to the back end lets you make them both secure and more consistent.

## A new action server

This section explains how the concept server that we’re providing you with works, and how it minimizes the changes you’ll need to make. This action server extends the behavior of the previous concept server to accommodate syncs.

**The previous action server**. For your previous assignment, we gave you a simple server that automatically routed post requests that were sent to `/api/concept_c/action_a` to the action called `action_a` of the concept called `concept_c`. This allowed you to avoid having to define routes explicitly, since they were defined by the concepts and their actions.

**A new action server**. In this assignment, we’re providing you with a similar server, this time embodied in a special concept called *Requesting*. When this concept is instantiated, it starts up a server that takes requests and either passes them through (like the old server) directly to concepts, or turns them into request actions to be used in syncs. By default, requests are passed through (or “included”), so if you use the action server out of the box it will behave exactly like the old action server. For example, an HTTP request coming into the back end with the route `/api/concept_c/action_a` will by default call action `action_a` of concept `concept_c`.

Alternatively you can list an action as “excluded,” and it will then be turned into a request action. For example, if `/api/concept_c/action_a` is excluded, an HTTP request coming into the back end with that route will generate the action `Requesting.request` (that is, the `request` action of the special `Requesting` concept) with an argument (called `path`) set to the string `concept_c/action_a`. You can then write a sync on this action. If you don’t write a sync, there will be no reaction to the request and it will eventually time out and return an error.

You can also list an action as “included,” which doesn’t affect the behavior (since that’s the default) but records the fact that you *intend* it to be included so it will stop printing a warning message telling you that it’s been included by default.

**Why exclude actions**? Excluding a concept action means that calling `/api/concept_c/action_a` no longer directly causes `Concept_c.action_a` to occur. There are primarily two reasons for wanting this. One is that the action should only be permitted under certain conditions (such as when the user has been authenticated); you would implement this with a sync saying that *when* the request occurs and *where* some condition holds, *then* the action itself occurs. Note that in this case the call to `/api/concept_c/action_a` would likely have to be modified because the request action would include parameters (such as a session token) that the bare concept action does not.

A second reason is that the action is to be handled only by the back end and no longer be available to the front end at all. For example, in a social media app, a notification action might be excluded so that it can be executed automatically in response to a comment being added to a user’s post. Note that in this case the only likely change to the front end (if it was previously executing the notification explicitly) is that some calls are removed.

## Tasks

**Update your back-end repo**. The back-end template repository <https://github.com/61040-fa25/concept_backend> has been extended with some additional files for this assignment. Assuming you forked it, you should be able to update your fork by selecting the sync option in GitHub in your browser. Alternatively, you can just copy the new files. (Don’t be confused: GitHub sync has nothing to do with concept syncs!)

The updates include: (a) an engine for executing syncs; (b) a special *Requesting* concept that encapsulates HTTP requests; (c) a script that generates a code file that instantiates concepts and makes them ready to sync; and (d) new LLM prompts to help create syncs.

**Decide which actions to include and exclude**. After updating your repo, run the build command (`deno run build`) and then the command to start up the request server (`deno run start`). It will print to the console a list of “unverified” routes. These are the routes corresponding to the actions of your concepts. Now decide which of these should be included (that is, passed through directly) and which should be excluded (that is, turned into request actions for syncing). Specify these inclusions and exclusions in the code by updating the provided file that defines them, and restart your server to check that all routes are now appropriately listed. Now check that your front end continues to work with the updated back end; as it executes, you should see a trace of the incoming actions appearing in the console.

**Refine your syncs and update your front end**. Now refine your synchronizations to handle authentication and to make any other changes you think improve the design, and update your front end accordingly. We recommend that you do this incrementally, checking each change as you go. Record your design ideas and the rationale for your syncs as you work.

**Polish your app**. Play with your app, adding some plausible data. Make whatever changes seem desirable to you, in visual aspects or behavior. Feel free to modify the syncs and even the concepts themselves. Record any significant changes and their rationale as you work.

**Deploy your app**. Using Render (see instructions in the [resource guide](https://61040-fa25.github.io/resources/render)), deploy your app so that it can be accessed at a public URL.

**Make a final video**. Make a short video (up to 3 minutes in length) showing your app in use, and highlighting its key features, with an audio narration throughout. You should show at least some intelligible user journey (for example the one you used before) and can also point to features without demonstrating them fully. **Save the trace** of incoming actions to the back end by copy-pasting the console output to a file. (The console log is available in your Render dashboard.)

**Complete your design document**. Turn your design notes (recording your ideas, changes, and observations) into a coherent document of **one to two pages** in length that summarizes how your final design differs from your initial concept design in Assignment 2 and your visual design in Assignment 4b. Be succinct and to the point, and use bullets and subheadings to make it easy to navigate. Feel free to use diagrams and screenshots to illustrate your points if helpful. To refer to particular versions of concept specifications and prompts, use links to the immutable snapshots.

**Reflect on your experience**. Reflect on your experience in this project. Some questions you might consider: What was hard or easy? What went well? What mistakes did you make, and how would you avoid making them in the future? What skills did you acquire and which do you feel you still need to develop further? How did you use the Context tool? How did you use an agentic coding tool? What conclusions would you draw about the appropriate role of LLMs in software development? Write your reflections down, in a half to one page. Be succinct and to the point, and use bullets and subheadings to make it easy to navigate.

## Submission

**Deliverables**. Your submission should include:

- **Your front-end and back-end codebases**. Your back-end codebase should include the context directory (with the snapshots showing the history of your LLM use and files you chose to save) and the design directory (with your prompts and concept specifications).
- **Your design document**.
- **Your video and the associated trace of incoming actions**.
- **Your reflections document**.

The design document, reflection document, link to your demo video, and trace of incoming actions from the demo video should be in one or more markdown files, placed in the back end repository, and clearly linked from the README.

Submit [this Google form](https://forms.gle/aMgQJuvf11CBuy9K7) with *two* commit hashes (one for the front-end repo and one for the back-end repo), the URL of your deployed app, and a link to your demo video. Fill in the [survey form](https://forms.gle/qok1tAtDVoc8yx528) **within 24 hours after the final assignment deadline**.

## Rubric

| Component | Description (what good work looks like) | Common Failures (examples of falling short) |
|----|----|----|
| **Functionality** | The app fulfills its intended purpose, supporting all the necessary functionality. | Some needed functionality is missing or broken. |
| **Authentication** | Actions are authenticated and access is controlled appropriately using back-end synchronizations. | Authentication or access control guards are missing or are implemented only in the front end. |
| **Syncs** | Syncs are formulated and used well, and are factored out to ensure consistency and minimize duplication. | Some obvious syncs are missing (eg, with the front end being used for a sync that should be in the back end); syncs contain needless duplications or other complications. |
| **Deployment** | The app is deployed and running at a public URL. | The app only runs locally, or the app fails to run when its public URL is accessed. |
| **Video** | Video demonstrates a compelling user journey and illustrates the key features of the app. | Video is hard to follow, doesn’t convey an intelligible user journey, or fails to explain the key features of the app. |
| **Design** | The design document describes a thoughtful process, documents reasonable changes and corresponds to the final app. | The design document is uneven, fails to explain important decisions, or does not properly document the final state of the app. |
| **Reflection** | The reflection document includes insightful comments about your experience that demonstrate real learning. | The reflection document is rote and superficial, or makes generic observations that do not seem to reflect real learning. |

## Advice

**Layout of your repository**. For more details on how the back-end repo is organized, see this [background document](https://github.com/61040-fa25/concept_backend/blob/main/design/background/architecture.md).

**Generating syncs**. For guidance on writing syncs, see the relevant [background document](https://github.com/61040-fa25/concept_backend/blob/main/design/background/implementing-synchronizations.md). And feel free, of course, to ask Context to generate syncs for you using this.

**Prompting an agentic coder**. To update the front end, the most systematic approach would be to update your back-end API to account for the changes you made and then ask your agentic coding engine to adapt the front end to the new API. But in practice it will probably be easier to prompt it in a more ad hoc way. For example, you might tell it that certain back end routes are now authenticated and that the session token should be passed to them. To check that the front end is using the correct parameter names, you can look at the trace in the console of the back end and examine the incoming actions.
