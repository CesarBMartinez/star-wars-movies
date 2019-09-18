# Star Wars Movies

A Star Wars Movies Catalog made with Vue and Swapi.

## Project setup

### Requirements:

- [Node](https://nodejs.org/) (LTS+)
- NPM (already included in Node)
- [Vue CLI](https://cli.vuejs.org/) (**optional**)

Vue CLI is an optional requirement because the project structure has already been created. Therefore the commands are provided by dev dependencies.

However if you need to add or remove a Vue CLI Plugin, you need to install the CLI as a global package.

```
npm i @vue/cli -g
```

### Install

Clone repository and install dependencies.

Commands:

```
git clone https://github.com/CesarBMartinez/star-wars-movies.git
cd star-wars-movies
npm install
```

## Run locally for development

Command:

```
npm run serve
```

This command starts a dev server that comes with hot-reloads for development.

A new tab will be opened at your browser.

[Command Docs](https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-serve)

## Build for production

Command:

```
npm run build
```

Produces a production-ready bundle in the `dist/` directory, with minification for JS/CSS/HTML and auto vendor chunk splitting for better caching. The chunk manifest is inlined into the `public/index.html`.

[Command Docs](https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-build)

## Deploy

A build preview has been deployed to Netlify.

URL: https://vue-sw-films.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/ffd38415-5ac3-4e92-aa03-0a4eb5b9bfc5/deploy-status)](https://app.netlify.com/sites/vue-sw-films/deploys)

## Unit tests

Unit tests are done with Jest and Vue Test Utils.

Command:

```
npm run test:unit
```

## Linter and Prettier - Code Quality

Using ESLint for code quality rules.

Using Prettier for code style.

Command:

```
npm run lint
```

#### Git Hooks

Using Git Hooks to ensure the code quality.

- pre-commit: run lint
- pre-push: run tests

### TODO - next versions

A TODO list for next versions:

- [ ] Improve layout
  - [ ] use CSS grid
  - [ ] better animations
  - [ ] better effects
- [ ] Search page
- [ ] Characters page
- [ ] Planets page
- [ ] Starships page
- [ ] Vehicles page
- [ ] Species page
- [ ] Persist Vuex state
- [ ] E2E Tests
- [ ] Improve Unit test coverage
