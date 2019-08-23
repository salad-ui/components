# Notes

## Principles

- single source of truth for all components, styles and docs and they're always compatible with each other

## Decision

### Why a monorepo

Because components, styles and docs are coupled together to form the final product. When you make a change to a component you want the styles and docs to be compatible and kept in sync and to do that you don't want to have to make changes across multiple repositories. Making it easier for people to keep things in sync makes it more likely to be kept in sync.

### Why Yarn instead of Lerna + NPM

Beacuse on a project like Atlaskit, Yarn reduced the install time from ~5min to ~1min.

### Why Gatsby?

- Build time rendered for SEO
- MDX without any build scripts
- highly configurable

### Why MDX?

Beacuse it gets compiled and build time and can use React components for composition of content enabling simple markup with more complex content where necessary.

https://www.gatsbyjs.org/docs/mdx/writing-pages

### Why split over multiple packages?

Versioning. Allowing teams to upgrade individual components as they want/need - not as they're forced to by bumping an all-in-one package.

### Why CSS-in-JS

Requires:
Ideally constrain design

Same thing can be achieved in css

### Jest

Hands down best test runner.

### @testing-library/react

Since it renders to the DOM, all the features of React are naturally supported unlike enzyme.

Leads to a pit of success rather than giving people millions of choices. Encourages people to test the component interface/behaviour rather than the internal component workings.

### Storybook

A good way to have a bunch of test cases setup for both development and manual testing.

v5.2 is going to be :awesome: https://medium.com/storybookjs/component-story-format-66f4c32366df

### Typescript

Documention
Type checking
Automatic prop type tables

TODO:

- prettier
- eslint
- typechecking
- versioning / changelogs @atlaskit/build-releases
