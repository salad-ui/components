# Guidelines

## Tooling

- use standard tooling/libraries/technologies avoiding building/using custom tooling/libraries/technologies not commonly used by the JavaScript community
  - to keep the components/tooling accessible/approachable in contributing
  - to keep the components/tooling easy to upgrade to changes in the JavaScript community

## Boolean properties

- always prefix with `is*` for consistency, favoring custom components over native naming (the fact that something is a native control is implementation detail that could change in the future)
- always use the name of the non-default state of the boolean so the presence of the prop is enough to set the flag e.g. when the compact style isn't the default style, use the name `isCompact`, when the default state for an input is valid use `isInvalid`
