# Assignment 3: An AI-Augmented Concept

Due Oct 5, 2025 11:59 PM

## **Overview**

**An AI augmentation**. In your last assignment, you created a functional design for your project, defining a set of concepts to deliver that functionality. You may not have assumed that any of these concepts would rely on AI for their implementation. To get you moving along the path to designing AI-augmented applications, this assignment gives you an opportunity to explore an AI augmentation of one of your concepts. You will be able to use this augmented version in your personal project, or to use the manual version, or to use a version that combines the two; it’s up to you.

**What you’ll do**. You’ll pick one of your concepts and consider how it might be made more powerful or useful with the help of AI. You’ll come up with an idea for how to use an LLM in the concept implementation, and you will then prototype this idea in code. This will give you experience using an LLM API so that it will be easy to incorporate additional LLM-based features in your concept code.

**Minimal prototyping**. Your implementation need be only a rather minimal prototype to experiment with AI augmentation. You are *not* required to implement the concept in full, with all the state and actions that you defined in the previous assignment, but you should include whatever actions and state are needed to explore the AI augmentation that you have in mind. The goal is to implement enough to be able to learn from using the LLM API and to experience its power and limitations. The advice section below gives some examples of some concepts and how they might be augmented.

## **Tasks**

- **Augment the design of a concept.** Choose one of the concepts from your functional design that is suitable for AI augmentation, and produce a new version of its specification that includes your AI augmentation. You will likely need at the very least to add an LLM-powered action (that calls an LLM to perform some behavior on the user’s behalf; see examples in Advice section below), and to expand the operational principle accordingly. You may also extend or adjust the state or other actions if you discover that is needed to make your augmentation possible. Your augmented version should preserve the functionality of the original version, so that it can be used without the AI component as well (albeit without the automation, thus requiring additional help from the user).

  *Deliverable: your original concept specification (unchanged), and an AI-augmented version.*

- **Design the user interaction.** Make some low-fidelity sketches of an envisioned interaction that shows what the user will experience from the AI augmentation. Annotate your sketches to show what context the LLM gets (which may be as simple as an arrow pointing to user input, or some words in a text bubble describing the context), and how the user might confirm or revise outcomes. Write one short paragraph describing the user journey associated with these sketches. (Note that you are *not* required to implement any confirmation or editing steps in this assignment!)

  *Deliverable: some annotated sketches of user interactions and a brief user journey.*

- **Implement your concept.** Concept implementations require only back end code; you will not be implementing a front end for this assignment, but will simply execute the concept by calling its actions in test cases. Implement the augmented concept and write some basic test cases to make sure that it works, formatting any output printed to the console to make it readable. We are providing a sample repo for you which you can use as a starting point; see advice below.

  *Deliverable: a code repo containing (1) your augmented concept, (2) a driver to execute test cases, and (3) the concept specification in a separate file.*

- **Explore richer test cases and prompts**. Devise some test cases that are more challenging and see if you can get the AI augmentation to fail. Then try to mitigate these failures by experimenting with variations of the prompt that you are presenting to the LLM as guidance for performing the augmented action.

  *Deliverable: 3 test cases, each comprising a full scenario that involves a sequence of user actions followed by one of more LLM-based actions, and 3 prompt variants motivated by the test cases. A short paragraph for each of your experiments describing: what your approach was; what worked, what went wrong, what issues remain.*

- **Add validators to your code.** Even with a very well-specified prompt and capable model, it is often likely that LLMs will produce logical issues that you need to check for. Identify several plausible issues, and add validators for them in your code, which check whether the LLM’s output has the issue and throws an error if it does. (For example, in the scheduling example in the starter repo, we check that the LLM did not schedule conflicting activities, place activities in non-existent times lots, or hallucinate activities that weren’t requested.)

  *Deliverable: A brief paragraph describing 3 plausible issues, and corresponding validators in your code.*

## Submission process

**Creating a new repo**. In the [prep](https://61040-fa25.github.io/preps/prep-2) for this week’s recitation, you should have cloned the [DayPlanner repo](https://github.com/61040-fa25/intro-gemini-schedule). This repo is setup with the correct structure that you should use for your assignment, namely the `config.json` and `.gitignore files`. We’re going to copy over the contents of this repo into a new repo that is owned by you.

1.  Create a new, empty repo under your GitHub account. Leave the default for the configurations: visibility public, no template, no README, no .gitignore, no license.

2.  cd into your cloned copy of the intro-gemini-schedule repo on your local machine.

3.  Enter the command `git remote remove origin`. This will disconnect your local copy from the GitHub repo owned by the course staff.

4.  Enter the following commands:

``` highlight
git remote add origin <GitHub link of your new repo>
git branch -M main
git push -u origin main
```

This will link your local copy to the new GitHub repo owned by you. Now you can commit and push any changes, and it will be updated in your GitHub repo. **This is the repo link that you will submit for this assignment.**

This repo will include all the code for your submission. **In the README of this repo, you will write up your answers to the questions and sketches.**

(Note that this is equivalent to just creating an empty repo, and manually copying over all the files in the prep repo. You can do this instead if you’re having trouble with the steps above.)

**Handling the API key**. Make sure your uploaded code does **not** contain your Gemini API key. The prep repo handles this correctly (`config.json` is in the `.gitignore`). Make sure your code runs using `npm start`, after we enter our own API key in `config.json`. So long as this continues to work, you can modify the code in the repo in any way you choose. But be aware that code that doesn’t run will receive no credit.

Submitting your work as usual is a 3-step process:

1.  Make sure your work is committed and pushed in this new repo (not your earlier portfolio repo) **by the assignment deadline** and save the commit hash.
2.  Fill in the [submission form](https://forms.gle/YSBy3LJzdBvdFfWB6) with your GitHub repo link and commit hash **by the assignment deadline**.
3.  Fill in the [survey form](https://forms.gle/yVKjKBqUZ8FZss9B8) **within 24 hours after the assignment deadline**.

## Rubric

| Skill | Description (what good work looks like) | Common Failures (examples of falling short) |
|----|----|----|
| Concept Selection & Fit for AI Augmentation | Creatively identifies a feature where AI genuinely increases capability or usability in a substantial, non-trivial way. Clearly and thoughtfully explains why LLMs might help (grounded in ideas discussed during class). | Picks a concept where AI adds little value, limited or simplistic rationale for using an LLM. |
| Augmented Specification Quality | Compelling concept spec for both a manual and an AI-augmented version. The augmented version embeds the AI appropriately in new actions and operational principle (and if necessary in state too). Requires/effect and action arguments make clear expectations of AI augmentation. | Only high-level prose; missing the original spec; augmented spec is vague about what the LLM does, what it consumes/returns; does not preserve original functionality. |
| UX Sketches & Journey | Low-fidelity sketches show end-to-end user interaction, including where/when the LLM-based functionality is used, what context is passed, how users confirm/edit outcomes, and how errors or uncertainty are surfaced; includes a crisp user-journey paragraph. | Sketches have minimal indication of LLM’s role. User journey is generic (“user clicks go…”) without describing states, edge cases, or user control. |
| Implementation Correctness (Backend Only) | Working code that cleanly separates concept logic, LLM wrapper, and tests; uses the provided starter structure; runs with `npm start`; secrets handled via config (no API key in public repo). Processes LLM’s output (in the way you would if there was a front-end you were sending it to) and nicely prints it to console. | Code doesn’t run, or requires manual tweaking; repo leaks secrets; monolithic file with mixed concerns. |
| Validation & Guardrails | Implements validators that catch realistic failures; validators fail with actionable errors; summary explains each validator and its rationale. LLM wrapper includes timeouts, retries with backoff, idempotency where appropriate, and clear error messages | Validators are superficial or missing; only checks JSON parse; silently ignores LLM inconsistencies; summary does not connect validators to plausible failure modes. |
| Test Scenarios & Prompt Iteration | Provides 3 full scenarios with sequences of actions leading to LLM calls; each probes different edge cases; includes 3 meaningful prompt variants and a short write-up per scenario explaining what changed, what improved, and what remains broken. | Scenarios are toy/single-step; prompt variants are cosmetic (word swaps) without analysis; no discussion of residual issues or trade-offs. |
| Reproducibility & Submission Hygiene | Repo link works; `npm start` runs end-to-end with staff-provided key; instructions are minimal and correct; outputs are printed clearly; no large assets (e.g. photos or videos with file sizes over a few megabytes). | Broken scripts; hidden setup steps; non-deterministic behavior without explanation; noisy logs; missing or outdated instructions. |

## **Advice**

**Obtaining Gemini credits**. Every student in this class will receive \$50 of credits from Google for the Gemini API. You will receive an email containing a special link to retrieve youre credits, and this week’s prep will explain how to install them.

**Gemini API guide**. [Here](https://ai.google.dev/gemini-api/docs/quickstart#javascript) is a guide to using the Gemini API in JavaScript code.

**Sample repository.** We have provided an example codebase, showing simple usage of an LLM, without a UI [here](https://github.com/61040-fa25/intro-gemini-schedule). This simple program has tests that add user input (which might otherwise have come from a front-end UI), processes it, sends it to an LLM, receives output, parses it, and prints to the console for easy viewing. In a full version of this app, there would be a front-end in which the user provides input, and which displays the LLM’s parsed output. For this assignment, that is omitted.

**Control your costs.** Your Gemini credits should cover a substantial amount of LLM inference if used correctly, but could go extremely quickly if you make mistakes or have bugs in your code that explode input or output length. LLM costs are posted publicly by Google and depend on how many tokens are in your input and output. Be careful to keep your prompt lengths reasonable. Add checks in your codebase to catch any bugs that might result in an exploding input length. Always use the `maxOutputTokens` param to prevent exploding output lengths. Finally, you can often get away with using cheaper and smaller models, such as `gemini-2.5-flash-lite` . Start with cheaper models and only switch to more expensive ones if you’re unsatisfied with the output. Google has many webpages discussing their available models, such as https://ai.google.dev/gemini-api/docs.

**Experiment with different models and pipelines.** Remember that certain models will be better at some tasks than others. For instance, in our scheduling demo below, the task requires non-trivial critical thinking and math. A reasoning model would be much less likely to make errors. Or we could have tried a multi-stage pipeline, such a series of chained LLM calls in which we asked a model to only schedule one event at a time. Depending on your augmentation, you may need to experiment with several approaches.

**Examples of AI augmentation**. Here are some examples of AI augmentation of concepts:

- **Titling blog posts**. Suppose you have a blog post concept in which posts have contents and titles. In the manual version, the concept might require a title to be provided in the action that creates a post, or perhaps if no title is provided simply omits it. An AI-augmented version might generate a suitable title automatically from the post’s contents.
- **Social media moderation**. A moderation concept might have actions for classifying posts as acceptable or offensive. An AI-augmented version might include an action that automatically classifies a post, taking as an argument not only a reference to the post but also its content, which is then passed to an LLM for analysis.
- **Movie selection**. A concept might allow movie watchers to select movies to watch from a list of available movies based on personal preferences with some kind of faceted search). An AI-augmented version might have an action that takes some natural language text in which the user describes their interests, and then infers search settings from this text.
- **Friend suggestion**. A conventional friending concept typically makes friend recommendations by seeing who the friends of a user’s friends are. An AI-augmented version might maintain additional state that includes profiles of each user, and then has an LLM compute a similarity rating between pairs of users, and then recommends the most similar users as potential friends. This example illustrates a pitfall, since if designed naively it would require a quadratic number of LLM calls, which would be extremely costly.
- **Investment allocation**. A concept summarizes the breakdown of a customer’s investments into categories (stocks, bonds, cash, etc). An AI-augmented version might include an action that takes the age of the customer and a brief description of financial goals, and generates an analysis of whether the investments reflect an appropriate strategy in line with the goals.
- **Daybook scheduling**. A concept for organizing one’s schedule might include actions to add activity descriptions and, separately, to assign the activities to particular times in the day. An AI-augmented version might offer an action that assigns activities automatically, relying on a hardwired or user-provided prompt that captures preferences about when certain kinds of activities should be scheduled. A simple implementation of this example is available [here]().

**Beyond augmenting a concept**. It’s possible that an AI augmentation that you have in mind doesn’t fit easily within an existing concept, and requires the definition of a new concept. You are welcome to pursue this if your idea seems to demand it, but do ask about this in Piazza first.

**Brainstorm possible augmentations in an LLM**. In your favorite chatbot (eg, ChatGPT, Claude, Gemini), you can ideate on potential augmentations. Try providing the model with as much context as you can about what you’re building, and ask it to help you come up with possible AI-powered augmentations. Think critically about its suggestions, push back and ask questions.

**Prototype your augmentation**. Begin by testing your ideas in a chatbot using manually created example scenarios and prompts. Create diverse test cases that represent typical user inputs as well as edge cases to evaluate how well the AI handles different situations. This exploratory phase will help you understand the capabilities and limitations of various models before implementing your chosen augmentation in code. Think creatively about how AI might augment your user experience, and critically about what might go wrong. Context can make a huge difference in model capabilities. Experiment with providing models with useful data in your prompt, and with examples of good and bad output. If by changing context etc you can’t get it to work well, then consider another augmentation.

**Consider using an LLM to generate test data.** For instance, in the scheduling demo above, we used ChatGPT to generate the action sequence test cases. In a full version of the app, these actions would havee been provided by the user directly from the front-end.
