# Development

## Installation

To install the necessary dependencies run:

```
nvm use
yarn
```

> Required software:
>
> - A NodeJS version manager e.g. [nvm](https://github.com/nvm-sh/nvm)
> - The [Yarn](https://yarnpkg.com/lang/en/) package manager

## Setup

After the initial setup of the repository and after pulling the repository you will need to build the system as some packages (e.g. `@salad-ui/icon`) require additional build steps.

```bash
yarn run build
```

## Storybook

The storybook is an area to view, develop and test the components in isolation. Stories are [React components](https://storybook.js.org/docs/guides/guide-react/#step-4-write-your-stories) that live in files named `*.stories.tsx` within the package folders.

To start the storybook run:

```bash
yarn start:storybook
```

Then browse to:

```
http://localhost:8100/
```

## Playground

The playground is a realistic application to test the system view, develop and test the components under life-like conditions.

To start the playground run:

```bash
yarn start:playground
```

Then browse to:

```
http://localhost:8200/
```

## Website

The website is the documentation for the system. The documentation is written using [MDX](https://mdxjs.com/) (an extension of [markdown](https://www.markdownguide.org/getting-started/)).

To start the website run:

```bash
yarn start:website
```

Then browse to:

```
http://localhost:8300/
```

## Appendices

### Setting up an <acronym title="Integrated Development Environment">IDE</acronym>

We recommend [VS Code](https://code.visualstudio.com/). After opening `salad-ui` VSCode will recommend a list of plugins to install.

### Versioning and publishing

Versioning packages is carried out automatically using [`changesets`](https://github.com/atlassian/changesets). When you're ready to create a Pull Request, run `yarn create-changeset` and follow the steps shown.
