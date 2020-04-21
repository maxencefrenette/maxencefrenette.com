---
title: My Frontend Tech Stack
date: 2020-04-18T00:00:00.000Z
tags:
  - Programming
  - Frontend
---
I'm a firm believer that the proper tech stack can help deliver higher quality applications faster. For my personal projects, I like to take this to the extreme and use every possible tool that can improve my development experience.

## Framework

### React

Where would the web be without React? I used to work in Angular and found it bloated with a lot of features I didn't need, like two-way binding. (Ugh, I should write that full article about React vs Angular.) React is great because it allows organizing frontend code in declarative components with a one-way data flow. It's a different way of thinking that reminds me of functional programming. It also plays well with typescript. Although I've never tried it, [Vue](https://vuejs.org/) seems promising, especially for the folks coming from a vanilla HTML or jQuery background.

## Code Quality

### Typescript

Who doesn't use [Typescript](https://www.typescriptlang.org/) in 2020, seriously? Yes, the main argument for using it is type safety, but I feel like the auto-completion alone is worth the time learning and setting it up. It makes me write code faster. Combined with Visual Studio Code, it also brings me type hints on hover and auto-imports which are also big time-savers.

### EditorConfig

[EditorConfig](https://editorconfig.org/) is a settings file supported by most IDEs that allows configuring basic code style settings such as the charset or the indentation style. Good code formatting tools such as Prettier also recognize and respect this configuration file.

### Prettier

Another no-brainer that I believe any project should use. The fact that I have no control over the formatting of my code gives me one fewer thing to worry about. I even set up a commit hook with

### ESLint

Since the [deprecation](https://github.com/palantir/tslint/issues/4534) of TSLint, I've come to learn and appreciate [ESLint](https://eslint.org/). It has a ton of rules and a healthy ecosystem of presets. I tend to use as many linting rules as it makes sense to so for a given project to keep my code as idiomatic as possible.

### Dependabot

Although there are many alternatives out there, this is the one I first found. It creates PRs on Github to keep my dependency up to date. With proper testing and/or deploy previews, they can be merged without much thinking.

## Hosting

I'm a fan of [Netlify](https://www.netlify.com/). I get deploy previews on PRs which is especially useful for Dependabot PRs. I also use the [Netlify CMS](https://www.netlifycms.org/) to write posts on this website. [ZEIT](https://zeit.co/) seems like a cool alternative. It seems to have very easy deployments and to also support deploy previews. It doesn't have an equivalent for the Netlify Identity/Netlify CMS combo, but it supports dynamic SSR websites as well as static ones.

## Conclusion

While some of these tools might not suit every workflow out there, I think most projects would benefit from having at least an equivalent to every tool I mentioned. Not only do they make me more productive, but they make programming fun because they automate away the boring parts. Have fun trying them out!