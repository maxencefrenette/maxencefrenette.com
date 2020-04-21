---
title: My Frontend Tech Stack
date: 2020-04-18
tags:
  - Programming
  - Frontend
---

I'm a firm believer that the proper tech stack can help deliver higher quality applications faster. For my personal projects, I like to take this to the extreme and use every possible tool that can improve my development experience.

## Framework

### React

Where would the web be without React ? I used to work in Angular and found it bloated with a lot of features I didn't need, like two-way binding. Let me stop right there, I should really write a full article about React vs Angular. React is great because it allows to organise frontend code in declarative components with a one-way data flow. It's a really different way of thinking that reminds me of functionnal programming. It also plays well with typescript. Although i've never tried it, [Vue](https://vuejs.org/) seems promising, especially for the folks coming from a bare HTML or jQuery background.

## Code Quality

### Typescript

Who doesn't use Typescript in 2020, seriously. Yes, the main argument for using it is type safety, but I feel like the autocompletion alone is worth the time learning and setting it up. It makes me code faster. Combined with VS Code, it also brings me type hints on hover and auto-imports which are also big time-savers.

### Prettier

Another no-brainer that I believe any project should use. The fact that I have no control over the formatting of my code gives me one less things to worry about.

### Eslint

Since the [deprecation](https://github.com/palantir/tslint/issues/4534) of TSLint, I've come to learn and appreciate ESLint. It has a ton of rules and a healthy ecosystem of presets. I tend to use as many linting rules as it makes sense to so for a given project to keep my code as idiomatic as possible.

### Dependabot

Although there are many alternatives out there, this is the one I first found. It creates PRs on Github to keep my dependency up to date. With proper testing and/or deploy previews, they are really easy to merge.

## Hosting

I'm a fan of [Netlify](https://www.netlify.com/). I get deploy previews on PRs which is especially useful for Dependabot PRs. [ZEIT](https://zeit.co/) seems very good too, possibly better because it supports dynamic websites as well.