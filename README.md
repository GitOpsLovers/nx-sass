<p align="center"><img src="https://raw.githubusercontent.com/GitOpsLovers/nx-sass/master/sass-logo.png" width="240"></p>

<div align="center">

# Nx Sass

Electron builders and schematics for Nrwl Nx platform.

![Static Badge](https://img.shields.io/badge/PRs-welcome-orange)
![Static Badge](https://img.shields.io/badge/License-MIT-pink)
![Static Badge](https://img.shields.io/badge/Node-20.11.1-green)
![Static Badge](https://img.shields.io/badge/NPM-10.2.4-red)
![Static Badge](https://img.shields.io/badge/SASS-1.71.0-blue)
![GitHub Repo stars](https://img.shields.io/github/stars/GitOpsLovers/nx-sass)

</div>

<hr></br>

# Features

**NX Sass** is a plugin [NX](https://nx.dev) that allows you to create decoupled libraries based on [SASS](https://sass-lang.com/) for your Frontend projects in monorepo projects.

- **Buidling**: Provides an executor to compile your Sass code with different configuration options.
- **Live Update**: Develop your Sass based library with Live Update to automate compilation at every change.
- **Linting**: Lint your Sass files with Stylelint to follow best practices.

# Getting Started

## Prerequisite

This module is based on Nx, you will need to [set up an Nx workspace](https://nx.dev/web/getting-started/getting-started) before you can use nx-sass.

```bash
npx create-nx-workspace@latest
```

## Installation

```bash
npm install -D nx-sass
```

## Creating Nx Sass Library

```bash
nx g nx-sass:lib <sass-lib-name>
```

## Building Nx Sass Library

- Run `nx build <sass-lib-name>` to build your library.

## Serving Nx Sass Library

- Run `nx serve <sass-lib-name>` to serve your library for development.

## Linting Nx Sass Library

- Run `nx lint <sass-app-name>` to lint your library.

## Support

If you're having any problem, please [raise an issue](https://github.com/GitOpsLovers/nx-sass/issues/new) on GitHub and we'll be happy to help.

## Contribute

- Follow [this instructions](https://github.com/GitOpsLovers/nx-sass/blob/master/CONTRIBUTING.md) in order to learn how to contribute to this project.

## Attribution

This project is inspired by several contributions made by the [NX](https://nx.dev) community, especially the [nx-stylelint](https://github.com/Phillip9587/nx-stylelint) project.

</br><hr>
**Author:** GitOps Lovers ❤️