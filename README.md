# Lendsqr Frontend Engineer Interview

Welcome to the implementation of the lendsqr frontend engineer interview.

## Table of Contents

- [Overview](#overview)
  - [Getting Started](#getting-started)
  - [Folder Structure](#folder-structure)
  - [Tech Stack](#tech-stack)
- [Updating The Project](#updating-the-project)
- [Tests](#tests)
  - [Unit Tests](#unit-tests)
- [Files](files)

## Overview

### Getting Started

To get started

- Clone the repository
- run `npm install ` to install all the necessary dependencies
- Get the latest changes from the main branch by doing the following:

Open the terminal and:

- run `git checkout main` to move to the main branch
- run `git pull` to fetch the latest changes
- run `git checkout -b new_branch` to create a new branch using the main branch as the base image.

After making changes

- run `git add .` to stage the changes
- run `git commit -am 'your commit message'` to commit the changes
- run `git push -u origin new_branch` to push the changes

Head over to Github to make a pull request. After the PR has been merged, repeat from step 3 (`git checkout main`)

### Folder Structure

I use folder based structure for accessibility and ease of understanding. Each folder has a default export of `index.tsx` or `index.ts`.
For example, to create a new page in `pages > users_module`

- Head over to [users_module](./src/pages/users_module/pages)
- Create a new folder
- In that folder, create 2 files: `index.tsx` & `index.test.tsx`
- Head over to the [users_module export](./src/pages/users_module/index.ts) and update the exported members.

### Tech Stack

Built with

- React
- SCSS
- Typescript
- Framer Motion
- Mantine.dev
- React-query

### Updating The Project

To ensure compatibility and prolonged performance, after each successful merge

- run `npm outdated` to list all the outdated dependencies.
  - Current is the current version installed
  - Wanted is the max version of package according to the semver range
  - Latest is the version of the package tagged as latest in the npm registry.

With this method, to install updates for every package, you just need to run:

- run `npm update --save`

Keep in mind that with `npm update --save` it will never update to major breaking-changes version. It updates the dependencies in package.json and package-lock.json. It will use the "wanted" version.

For an advanced and customizable upgrading experience, I'd recommend `npm-check-updates`. This package can do everything `npm outdated` and `npm upgrade` can do with some added customization options.

To get started, install the `npm-check-updates` package globally:

- run `npm install -g npm-check-updates`

Then, run `ncu` to display packages to upgrade. Similar to `npm outdated` it will not apply any changes. To upgrade dependencies, you just need to run:

- `ncu --upgrade` or `ncu - u`
  - <span style='color:red'>Red</span> is major version change
  - <span style='color:cyan'>Cyan</span> is minor version change
  - <span style='color:green'>Green</span> is version patch changes

NOTE!!!! This updates dependencies in only the package.json file and will select the latest version even if it includes a <strong>breaking change!!!</strong>. With this method, `npm install` is not run automatically so be sure to run that afterward to update package-lock.json.

Unless explicitly specified, default to use `npm outdated` and `npm update --save`

### Tests

#### Unit Tests

To carry out automated tests

- run `npm run test`

### Files

Check out the [Figma](https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Lendsqr-Frontend-Engineering-Assessment?node-id=5530%3A2342&t=bqLxccP37zPX40rk-0)

Visit the live website [here](https://hemense-lan-lendsqr-fe-test.netlify.app/)

<hr >

Built with &hearts; | [Hemense Lan](mailto:lihemen@gmail.com)
