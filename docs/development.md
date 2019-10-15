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
http://localhost:8200/
```

## Appendices

### Setting up an <acronym title="Integrated Development Environment">IDE</acronym>

We recommend [VS Code](https://code.visualstudio.com/) with the following plugins:

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [SVG Previewer](https://marketplace.visualstudio.com/items?itemName=vitaliymaz.vscode-svg-previewer)
