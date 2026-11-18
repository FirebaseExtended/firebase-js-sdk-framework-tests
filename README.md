# Firebase JS SDK Framework Tests
![JS SDK Next.js Tests Status Badge](https://github.com/FirebaseExtended/firebase-js-sdk-framework-tests/actions/workflows/js-sdk-nightly-next-js.yaml/badge.svg)

This repository uses Playwright to execute Firebase JS SDK tests within a Next.js environment. The repository is meant to run nightly against the latest upcoming Firebase JS SDK.

## Getting Started

### Tools
This project has be built and tested with `yarn` version `1.22.11`.

First, install dependencies:

```bash
yarn install
```

### Firebase Project configuration
To configure your Firebase project data, add your project configuration to `js-sdk-framework-tests/nextjs/lib/firebase.ts`.


### Building and executing the tests:

```bash
yarn setup:nextjs
```

```bash
yarn build:nextjs
```

To execute all of the tests, run:

```bash
yarn test:nextjs
```

More information about running Next.js tests specifically can be found in the `README.md` file in `js-sdk-framework-tests/nextjs`.



