# @wordpress/components

[![GithubActions](https://github.com/Automattic/wordpress-components/workflows/CI/badge.svg)](https://github.com/Automattic/wordpress-components/actions)

Components for building UI/UX for `wp-admin` and `wp-admin` plugins.

|            |                                                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| Website    | [design-system-example-website.jameslnewell.now.sh](https://design-system-example-website.jameslnewell.now.sh/)       |
| Playground | [design-system-example-playground.jameslnewell.now.sh](https://design-system-example-playground.jameslnewell.now.sh/) |

## Installation

To install the necessary dependencies run:

```
nvm use
yarn
```

## Component playground

To start the component playground run:

```
yarn run start:playground
```

## Documentation website

To start the documentation website run:

```
yarn run start:website
```

Then browse to:

```
http://localhost:8000/
```

## Linting

To run the lint and type checks run:

```
yarn run lint
yarn run type
```

## Testing

To run the tests run:

```
yarn run test
```

## To Do

- bundle size comparison
- prop tables generated from typescript types - https://www.npmjs.com/package/gatsby-transformer-react-docgen
- notifications back to github e.g. dangerjs messages, bundle size, deployment urls
