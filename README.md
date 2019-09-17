# carrot

[![GithubActions](https://github.com/carrot-components/carrot/workflows/CI/badge.svg)](https://github.com/carrot-components/carrot/actions)

A set of components for building UI/UX. 🥕

|            |                                                                                     |
| ---------- | ----------------------------------------------------------------------------------- |
| Website    | [carrot-components-website.now.sh](https://carrot-components-website.now.sh/)       |
| Playground | [carrot-components-playground.now.sh](https://carrot-components-playground.now.sh/) |

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

```
http://localhost:8000/
```

## Documentation website

To start the documentation website run:

```
yarn run start:website
```

Then browse to:

```
http://localhost:8001/
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
