# Package Builder

A CLI for building each of the packages.

## Goals

- Avoid duplicating configuration across each package
- Avoid writing our own custom tooling which makes the code less portable and harder to update the tooling - instead use vanilla tooling (e.g. stick with a tool's CLI but if orchestration in bash is too complex, use the same features using the public APIs orchestrated by node)
