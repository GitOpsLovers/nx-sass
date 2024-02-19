<p align="center"><img src="https://raw.githubusercontent.com/GitOpsLovers/nx-sass/master/sass-logo.png" width="240"></p>

<div align="center">

# Nx Sass

Electron builders and schematics for Nrwl Nx platform.

![Static Badge](https://img.shields.io/badge/PRs-welcome-orange)
![Static Badge](https://img.shields.io/badge/License-MIT-pink)
![Static Badge](https://img.shields.io/badge/Node-20.11.1-green)
![Static Badge](https://img.shields.io/badge/NPM-10.2.4-red)
![GitHub Repo stars](https://img.shields.io/github/stars/GitOpsLovers/nx-sass)

</div>

<hr></br>

# Features

Nx Electron provides a set of power ups on [Nx](https://nx.dev) for developing cross platform desktop apps using [Electron](https://electronjs.org/).

- **Schematics**: Provides schematics for developing cross platform apps in a mono repo environment.
- **Typescript**: Uses Typescript to help reduce errors, and create more structured code.
- **Obfuscation**: Since Electron are used on the client machines, nx-electron obfuscates you code (and only it).
- **Minimization**: Electron apps tend to be quite large, hence we use webpack to bundle, and minimize to code.
- **Live Update**: Provides continuous live reload for your backend code.
- **Event Templates**: Provides templates for common events like squirrel setup events, auto update events and IPC events.
- **Packaging**: Packages your frontend and backend webpack bundles into single electron package.
- **Making**: Makes your frontend and backend webpack bundles into single executable.

# Getting Started

## Prerequisite

This module is based on Nx, you will need to [set up an Nx workspace](https://nx.dev/web/getting-started/getting-started) before you can use nx-sass.

```bash
npx create-nx-workspace@latest
```

Make sure to select Integrated monorepo as a project style, and Webpack as a bundler.
You should also create a frontend project in you workspace (in any nx supported framework you like) for you electron app.

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

- Run `nx serve <sass-lib-name>` to serve your application.

## Linting Nx Sass Library

- Run `nx lint <sass-app-name>` to test your application.

## Testing Nx Sass Library

- Run `nx test <sass-app-name>` to test your application.

## Support

If you're having any problem, please [raise an issue](https://github.com/bennymeg/nx-electron/issues/new) on GitHub and we'll be happy to help.

## Contribute

- Follow [this instructions](https://github.com/bennymeg/nx-electron/blob/master/CONTRIBUTING.md) in order to learn how to contribute to this project.

## Versioning

This repository follows the semantic versioning rules while adhering to Nx and Angular version scheme.
I.e. version 15.x of nx-electron will be compatible with version 15.y of NX. 

## Attribution

This project is highly inspired by (and dependent on) Nrwl [Nx](https://nx.dev) platform.
Under the hood, we use [Electron Builder](https://github.com/electron-userland/electron-builder) to package and make electron application executables.

</br><hr>
**Author:** Benny Megidish.