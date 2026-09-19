# Problem Set 1: Reading and Writing Concepts

Due Sep 14, 2025 11:59 PM

## Overview

- **Purpose**. The purpose of this problem set is to give you practice in reading and writing concept specifications, so you will be able to use concepts confidently in your design work.
- **Collaboration**. In contrast to your assignment work, we request that you do not collaborate on this assignment so that you learn the ideas well. But make sure to ask for help from the staff if you get stuck!

## Exercise 1: Reading a concept

To help you understand some of the subtleties in concept design (and how seemingly small concept design decisions can have major implications for users), this exercise asks you to read a mostly complete concept and answer some questions about it.

The concept is *GiftRegistration*, which is widely used for wedding and other gifts. Many department stores offer gift registration; so do online stores such as Amazon; and there are specialized services (such as [Zola](https://www.zola.com/wedding-registry)). The idea in short is that someone (typically celebrating some occasion like a wedding or birthday) creates a shopping list of items they would like to receive. Their friends can then see which items are on the list, and purchase them for them. Here is the concept definition:

  **concept** GiftRegistration \[User, Item\]\
  **purpose** track purchases of requested gifts\
  **principle**\
    a recipient creates a registry, and adds items to it indicating the number of each requested;\
    opens the registry so it becomes publicly visible;\
    then givers can view which items are still available and purchase them;\
    and finally the recipient closes the registry, after which it is no longer publicly visible\
    but the recipient can see which items were purchased and by whom.\
  **state**\
    a set of Registrys with\
      an owner User\
      an active Flag\
      a set of Requests

    a set of Requests with\
      an Item\
      a count Number\
      a set of Purchases

    a set of Purchases with\
      a purchaser User\
      an Item\
      a count Number\
  **actions**\
    create (owner: User): (registry: Registry)\
      **effects** create a new registry with this owner, active set to false and no requests

    addItem (registry: Registry, item: Item, count: Number)\
      **requires** registry exists and count is greater than zero\
      **effects** if a request for this item exists, add the count\
      otherwise create a new request for the item with this count and add to registry

    removeItem (registry: Registry, item: Item)\
      **requires** a request for this item exists in the registry\
      **effects** remove the request from the registry

    open (registry: Registry)\
      **requires** registry exists and is not active\
      **effects** make registry active

    close (registry: Registry)\
      **requires** registry exists and is active\
      **effects** make registry not active

    purchase (purchaser: User, registry: Registry, item: Item, count: Number)\
      **requires** registry exists, is active and has a request for this item with a count no less than the sum of the count of this purchase and the sum of the counts of all previous purchases of the item; count is greater than zero\
      **effects** create a new purchase for this purchaser, item and count

## Questions

1.  **Invariants**. What are two invariants of the state? (*Hint*: one is about aggregation/counts of items, and one relates requests and purchases; ignore the obvious invariant that counts must be greater than zero). Say which one is more important and why; identify the action whose design is most affected by it, and say how it preserves it.
2.  **Fixing an action**. Can you identify an action that potentially breaks this important invariant, and say how this might happen? How might this problem be fixed?
3.  **Inferring behavior**. The operational principle describes the typical scenario in which the registry is opened and eventually closed. But a concept specification often allows other scenarios. By reading the specs of the concept actions, say whether a registry can be opened and closed repeatedly. What is a reason to allow this?
4.  **Registry deletion**. There is no action to delete a registry. Would this matter in practice?
5.  **Queries**. What are two common queries likely to be executed against the concept state? (*Hint*: one is executed by a registry owner, and one by a giver of a gift.)
6.  **Hiding purchases**. A common feature of gift registries is to allow the recipient to choose not to see purchases so that an element of surprise is retained. How would you augment the concept specification to support this?
7.  **Generic types**. The User and Item types are specified as generic parameters. The Item type might be populated by SKU codes, for example. Explain why this is preferable to representing items with their names, descriptions, prices, etc.

**Deliverables**: Succinct answers to each of the questions.

## Exercise 2: Extending a familiar concept

In this exercise, you’ll complete the description of a familiar concept: authentication of users with passwords. You’ll also use this concept specification in the next exercise.

  **concept** PasswordAuthentication\
  **purpose** limit access to known users\
  **principle** after a user registers with a username and a password,\
    they can authenticate with that same username and password\
    and be treated each time as the same user\
  **state**\
    a set of Users with …\
  **actions**\
    register (username: String, password: String): (user: User)\
      …\
    authenticate (username: String, password: String): (user: User)\
      …

### Questions

1.  Complete the definition of the concept state.
2.  Write a requires/effects specification for each of the two actions. (*Hints*: The register action creates and returns a new user. The authenticate action is primarily a guard, and doesn’t mutate the state.)
3.  What essential invariant must hold on the state? How is it preserved?
4.  One widely used extension of this concept requires that registration be confirmed by email. Extend the concept to include this functionality. (*Hints*: you should add (1) an extra result variable to the register action that returns a secret token that (via a sync) will be emailed to the user; (2) a new confirm action that takes a username and a secret token and completes the registration; (3) whatever additional state is needed to support this behavior.)

**Deliverables**: Succinct answers to each of the questions with the required additional specification fragments.

## Exercise 3: Comparing concepts

One way to improve your understanding of concept design is to compare related concepts, and try to determine (and then articulate) how and why they differ. Confusion between related concepts can be a design flaw in itself, when the designer fails to convey (through the user interface and support materials) what concept is being offered in a particular situation.

> For example, X/Twitter used to have a feature called “favorites,” but it wasn’t clear if this was an instance of an Upvoting concept (which collected votes from users for popularity ranking) or a Favoriting (or Bookmarking) concept (which let users save favorite tweets). In 2015, Twitter renamed “favorites” to “likes” and replaced the yellow star icon with a red heart, explaining in a press release “We are changing our star icon for favorites to a heart and we’ll be calling them likes… We know that at times the star could be confusing, especially to newcomers. You might like a lot of things, but not everything can be your favorite.” Needless to say, this didn’t help explain what concept was actually at play, and in 2017, Melania Trump famously “liked” a tweet that taunted her husband, presumably believing that she was bookmarking it, when in fact her “like” was shown publicly as a gesture of approval. In 2018, Twitter finally added a Bookmark concept.

> In this case, it seems possible that the confusion was intentional, since public likes, unlike private bookmarks, serve the company’s business goals of increasing visible user engagement (and indeed, even after they were added, the bookmarking actions were buried in the user interface and far harder to access than the upvoting actions). In other cases, confusion between concepts is simply a consequence of poor design, and even with good design it is not possible to ensure complete clarity for all users given their diversity of background and assumptions.

### Passwords vs. Personal Access Tokens

GitHub offers a form of authentication called [personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). This is described as “an alternative to using passwords.” [Creating a token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) sounds very much like creating a password with a strong password helper: you click a button to create a token, and get an obscure string which you can then save. [Using a token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#using-a-personal-access-token-on-the-command-line) appears to be the same as using a password: you enter a username and the token string, and will then be authenticated if the string matches the one that was generated when the token was created. Moreover, at the very start of the [article](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) we are told “Treat your access tokens like passwords.”

So what exactly is the difference between the standard *PasswordAuthentication* concept and the *PersonalAccessToken* concept? Skim the Github page, extracting (and reading carefully) the relevant parts, and write a minimal specification of the *PersonalAccessToken* concept, paying particular attention to the purposes and operational principle. Now consider how the two concepts differ. Finally, say briefly whether you think the GitHub page could be improved, and if so how.

*Note*: The Github page actually describes two different kinds of tokens: “classic” and “fine-grained”. You should consider *only* the classic kind, which is the kind that is closer to passwords. (The fine-grained tokens are different from passwords in a more obvious way, because they limit access to particular assets owned by a user.)

**Deliverables**: a concept specification for *PersonalAccessToken* and a succinct note about how it differs from *PasswordAuthentication* and how you might change the GitHub documentation to explain this.

## Exercise 4: Defining familiar Concepts

Concepts can be designed and understood entirely independently of one another, even if eventually they will be composed with other concepts in a larger application context. Designing and evaluating individual concepts is thus an important skill.

In this exercise, you’ll define concepts for some common functionality that you’re hopefully familiar with. For each one, you should provide all the standard elements of a concept (name, purpose, operational principle, state and actions), and explain any subtleties of your definition in a brief notes section at the end.

Pick *three* of the following:

### URL Shortener

Define a concept for the essential function of a URL shortening service such as [tinyurl.com](tinyurl.com) or [bit.ly](http://bit.ly). Your concept should support both user-defined and autogenerated URL suffixes.

### Billable Hours Tracking

Many companies that bill clients for work by the hour use tracking software to help automate record keeping. Define a concept that handles the core functionality. Assume that, in the application that uses this concept, an employee marks the beginning of a session by selecting a project and entering a string describing the work to be done, and then marks the end of the session with another interaction. Think about how to handle a case in which someone forgets to end a session.

### Conference Room Booking

Define a concept for the essential function of a service for booking conference rooms in a company or university department, like CSAIL’s [room booking system](https://tig.csail.mit.edu/events-reservations/reserve/). Note: you do not need to include recurring bookings.

### Electronic Boarding Pass

Define a concept for the essential function of the kind of electronic boarding pass that airlines typically provide, which can be inserted into a digital wallet on a phone, and which is updated in realtime to reflect new gate assignments and modified departure times. Here is [an article](https://help.passkit.com/en/articles/4042095-creating-boarding-passes-for-apple-google-wallet#need-further-customisation) about creating boarding passes using Apple’s Passkit API which might be helpful, but note that it does not cover the functionality in full and includes many user interface details that are not conceptual.

### Address Verification

A variety of applications use address verification, in which the identity of a user is authenticated by asking them to provide some or all of their mailing address. For example, online credit card transactions typically require that the user enter a full address; gas station purchases with credit cards often ask users to enter their zipcode; the NextDoor social network obtains the billing address record associated with a user’s phone number to ensure that they are within the catchment area of a particular forum. Define address verification as a concept, taking into account an important difference from password authentication: when address verification fails, a record of a failed transaction is saved.

### Time-Based One-Time Password (TOTP)

Multifactor authentication schemes improve on simple password-only schemes. One common scheme uses an app that runs on the user’s phone (or computer) that generates time-based tokens that are then entered by the user as part of the authentication process. Define a concept for this scheme.

*Hints*: TOTP is not the same as the scheme in which a token is sent by email or text message; an important property of TOTP is that there is no need to send any token to the user at authentication time. You can find an algorithmic outline of TOTP on [Wikipedia](https://en.wikipedia.org/wiki/Time-based\_one-time\_password), but note that you should not include in your concept any cryptographic details, but can just assume the existence of a cryptographic function that you can refer to in your concept specification.

**Deliverables**: three concept specifications, with any subtleties explained in brief additional notes.

## Submission process

Submitting your work is a 3-step process:

1.  Create one or more files in your GitHub porfolio that contain your responses, written in Markdown. Include a link to your assignment in the main README. Make sure your work is committed and pushed **by the assignment deadline** and save the commit hash.
2.  Fill in the [submission form](https://forms.gle/PrjgUtsoXMac1GqZ6) with your GitHub repo link and commit hash **by the assignment deadline**.
3.  Fill in the [survey form](https://forms.gle/RQiTgCpqcAkp8ESQA) **within 24 hours after the assignment deadline**.

## Advice

- **Formatting concepts in markdown**. For tips on how to do this, see [this resource](../resources/formatting-concepts-markdown).
- **Be succinct**. The concept notation is pretty minimal, so try and keep your concept specifications short and to the point. Include only the essential actions. Any additional commentary that you might want to include should be in a notes section at the end of the concept specification.
- **Rubric**. You can use the concept design rubric as a checklist for your concepts: [here in PDF](../pages/concept-rubric.pdf) and [here in Markdown](../resources/concept-rubric).
- **State notation guide**. There is an overview of the state declaration notation [here](../resources/state-notation).
- **Using LLMs**. You are welcome to use an LLM to help you with this problem set, but you should not expect an LLM to have sufficient knowledge of concept design to generate correct concepts reliably. You can use the rubric and guide documents in your prompts (for example when asking an LLM to review your concept models).
