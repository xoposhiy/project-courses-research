# Problem Set 2: Composing Concepts

Due Sep 21, 2025 11:59 PM

## Overview

- **Purpose**. The purpose of this problem set is to give you practice in reading and writing concepts and syncs. Whereas the previous problem set focused on individual concepts, this one focuses on how they are composed together. As before, you’ll first read some examples and answer questions about them, and then you’ll construct some examples of your own. To make it clear which parts are tasks for you and which are background material, all tasks are marked with numbered bullets.

- **Collaboration**. In contrast to your assignment work, we request that you do not collaborate on this assignment so that you learn the ideas well. But make sure to ask for help from the staff if you get stuck!

## Concepts for URL Shortening

Consider the task of designing a URL shortening service. We might define three concepts: *URLShortening*, which maintains mappings between the short URLs and their expansions; *NonceGeneration*, which generates the unique strings that the shortener uses; and *ExpiringResource*, which manages the relinquishing of resources that have finite lifetimes. Here are some abbreviated specifications of the concepts:

  **concept** UrlShortening\
  **purpose** shorter or more memorable way to link\
  **principle** after registering a short url, lookup will return the original url\
  **state**\
    a set of Shortenings with\
      a targetUrl String\
      a shortUrl String\
  **actions**\
    register (shortUrlSuffix, shortUrlBase, targetUrl: String): (shortUrl: String)\
      **requires** no shortening exists for shortUrlBase/shortUrlSuffix\
      **effect** forms and saves a new short URL by appending suffix to base\
        and associates it with targetUrl\
    lookup (shortUrl: String): (targetUrl: String)\
      **requires** a shortening exists for shortUrl\
      **effect** returns the target URL associated with a short URL\
    delete (shortUrl: String)\
      **requires** a shortening exists for shortUrl\
      **effect** deletes a short URL and its association with a target URL

**Note**: The *register* action of *UrlShortening* takes a base URL; this ensures that the concept is not hardwired to a particular domain (such as tinyurl.com), and would allow the service to support user-specific domain names.

  **concept** NonceGeneration \[Context\]\
  **purpose** generate unique strings within a context\
  **principle** each generate returns a string not returned before for that context\
  **state**\
    a set of Contexts with\
      a used set of Strings\
  **actions**\
    generate (context: Context) : (nonce: String)\
      **effect** returns a nonce that is not already used by this context and adds it to this context’s used set

  **concept** ExpiringResource \[Resource\]\
  **purpose** expire resources automatically to manage costs\
  **principle** after setting expiry for a resource, the system will expire it after the given time\
  **state**\
    a set of Resources with\
      an expiry DateTime\
  **actions**\
    setExpiry (resource: Resource, seconds: Number)\
      **effect** associates an expiry seconds from now with resource\
    **system** expireResource () : (resource: Resource)\
      **requires** expiry for some resource is in the past\
      **effect** returns the resource, and removes it from the set

**Note**: The *expireResource* action of *ExpiringResource* is a system action, performed spontaneously when its precondition is true (namely when the expiry time for some resource, which it returns, has arrived).

## Concept Questions

Read the concept specifications carefully and answer these questions:

1.  **Contexts**. The *NonceGeneration* concept ensures that the short strings it generates will be unique and not result in conflicts. What are the contexts for, and what will a context end up being in the URL shortening app?
2.  **Storing used strings**. Why must the *NonceGeneration* store sets of used strings? One simple way to implement the *NonceGeneration* is to maintain a counter for each context and increment it every time the generate action is called. In this case, how is the set of used strings in the specification related to the counter in the implementation? (In abstract data type lingo, this is asking you to describe an *abstraction function*.)
3.  **Words as nonces**. One option for nonce generation is to use common dictionary words (in the style of [yellkey.com](http://yellkey.com), for example) resulting in more easily remembered shortenings. What is one advantage and one disadvantage of this scheme, both from the perspective of the user? How would you modify the *NonceGeneration* concept to realize this idea?

## Synchronizations for URL Shortening

Here are three of the synchronizations that might be included in a full design of the URL shortening application:

  **sync** generate\
  **when** Request.shortenUrl (shortUrlBase)\
  **then** NonceGeneration.generate (context: shortUrlBase)

  **sync** register\
  **when**\
    Request.shortenUrl (targetUrl, shortUrlBase)\
    NonceGeneration.generate (): (nonce)\
  **then** UrlShortening.register (shortUrlSuffix: nonce, shortUrlBase, targetUrl)

  **sync** setExpiry\
  **when** UrlShortening.register (): (shortUrl)\
  **then** ExpiringResource.setExpiry (resource: shortUrl, seconds: 3600)

**Notes**

- **Request concept**. The second sync uses the pseudo “request” concept explained in class. The idea is that syncs can describe not only how an action of one concept leads to an action of another, but also how actions of concepts are initially produced in response to requests from users. These are modeled by treating all requests from users as actions of a special concept called *Request*, with an action corresponding to each kind of request, and the arguments of the action representing the information that is provider by the user (or more accurately the front-end of the application) along with the request.
- **Completions and invocations**. In the synchronization language, actions referred to in the when clause always correspond to action *completions*, and actions in the then clause to action *invocations*.
- **Named arguments and results**. The arguments and return values of actions are *named* (they’re represented in the code simply as dictionaries), so, for example, the first sync invokes in its then clause the generate action of the *NonceGeneration* concept with the argument named *context* bound to *shortUrlBase*.
- **Bound variables**. The when clause can bind variables used in the other clauses; for example, the return of expireResource in the last sync says that the return value given by the return name *resource* is bound to the variable *shortUrl*. This bound variable is then passed as an argument to the delete action in the then clause.
- **Omitted names**. By convention, it is not necessary to include both the argument name and the bound variable name when they are the same (writing *x: x*), and mentioning the name once is short for this. So the mention of *targetUrl* in the when clause of the second sync is short for *targetUrl: targetUrl*, and binds the variable *targetUrl* to the argument called *targetUrl* of the request action.

### Synchronization Questions

Read the synchronizations carefully and answer these questions:

1.  **Partial matching**. In the first sync (called *generate*), the *Request.shortenUrl* action in the when clause includes the *shortUrlBase* argument but not the *targetUrl* argument. In the second sync (called *register*) both appear. Why is this?
2.  **Omitting names**. The convention that allows names to be omitted when argument or result names are the same as their variable names is convenient and allows for a more succinct specification. Why isn’t this convention used in every case?
3.  **Inclusion of request**. Why is the *request* action included in the first two syncs but not the third one?
4.  **Fixed domain**. Suppose the application did not support alternative domain names, and always used a fixed one such as “bit.ly.” How would you change the synchronizations to implement this?
5.  **Adding a sync**. These synchronizations are not complete; in particular, they don’t do anything when a resource expires. Write a sync for this case, using appropriate actions from the *ExpiringResource* and *URLShortening* concepts.

## Extending the design

URL shortening services often provide analytics (see, for example, the offerings from [Bitly](https://bitly.com/pages/products/analytics) and [TinyURL](https://tinyurl.com/app/features/link-analytics)) in addition to the basic service, which allows users to see how short links are used. Your task is to extend our design to include this feature. Your analytics need only provide counts of the number of accesses (and not other metadata such as location). Analytics should not be public but should be viewable only by the user who registered the shortening.

1.  Design a couple of additional concepts to realize this extension, and write them out in full (but including only the essential actions and state). It should *not* be necessary to make any changes to the existing concepts.
2.  Specify three essential synchronizations with your new concepts: one that happens when shortenings are created; one when shortenings are translated to targets; and one when a user examines analytics. (Hint: for the last one, you can simplify by assuming a request for analytics that just asks for the number of lookups for a particular short URL, but that ensures that the result is not visible to everyone.)
3.  As a way to assess the modularity of your solution, consider each of the following feature requests, to be included along with analytics. For each one, outline how it might be realized (eg, by changing or adding a concept or a sync), or argue that the feature would be undesirable and should not be included:
    - Allowing users to choose their own short URLs;
    - Using the “word as nonce” strategy to generate more memorable short URLs;
    - Including the target URL in analytics, so that lookups of different short URLs can be grouped together when they refer to the same target URL;
    - Generate short URLs that are not easily guessed;
    - Supporting reporting of analytics to creators of short URLs who have not registered as user.

## Submission process

Submitting your work is a 3-step process:

1.  Create one or more files in your GitHub porfolio that contain your responses, written in Markdown. Include a link to your assignment in the main README. Make sure your work is committed and pushed **by the assignment deadline** and save the commit hash.
2.  Fill in the [submission form](https://forms.gle/i7WdBj1WDVp32aez8) with your GitHub repo link and commit hash **by the assignment deadline**.
3.  Fill in the [survey form](https://forms.gle/Es8H9pWoXu17rGC97) **within 24 hours after the assignment deadline**.

## Advice

- **Formatting concepts in markdown**. For tips on how to do this, see [this resource](../resources/formatting-concepts-markdown).
- **Be succinct**. The concept notation is pretty minimal, so try and keep your concept specifications short and to the point. Include only the essential actions. Any additional commentary that you might want to include should be in a notes section at the end of the concept specification.
- **Rubric**. You can use the concept design rubric as a checklist for your concepts: [here in PDF](../pages/concept-rubric.pdf) and [here in Markdown](../resources/concept-rubric).
- **State notation guide**. There is an overview of the state declaration notation [here](../resources/state-notation).
- **Using LLMs**. You are welcome to use an LLM to help you with this problem set, but you should not expect an LLM to have sufficient knowledge of concept design to generate correct concepts reliably. You can use the rubric and guide documents in your prompts (for example when asking an LLM to review your concept models).
