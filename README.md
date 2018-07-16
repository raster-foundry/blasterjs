# Blaster
[![Build Status](https://travis-ci.org/raster-foundry/blasterjs.svg?branch=master)](https://travis-ci.org/raster-foundry/blasterjs)

## Usage

Blaster is split into multiple packages, allowing you to pick and choose the components you need. 

[![npm](https://img.shields.io/npm/v/@blasterjs/core.svg?label=@blasterjs/core)](https://www.npmjs.com/package/@blasterjs/core) &ndash; Base components and styles. All other Blaster packages depend on this.

[![npm](https://img.shields.io/npm/v/@blasterjs/chart.svg?label=@blasterjs/chart)](https://www.npmjs.com/package/@blasterjs/chart) &ndash; Experimental chart package.

### Dependencies

You will need to have installed `styled-components` in the application you want to use Blaster in.

## Development

### Getting Started
1. Clone the project: `git clone git@github.com:raster-foundry/blasterjs.git`
3. Setup project: `yarn install`
4. Run `yarn start`

### Scripts
| Command | Description |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **`yarn start`**  | This is the most commonly used command when developing locally. <br/>  It runs `yarn build`, `lerna bootstrap`, and then starts the styleguidist server. |
| `yarn bootstrap`  | An alias for `lerna bootstrap`. <br/> Symlinks the various packages together to enable a smooth monorepo development workflow. |
| `yarn test`  | Run tests for all components |
| `yarn build` | Uses lerna to run all packages through babel. |
| `yarn publish` | Create a new release interactively with Lerna |


All Lerna [Lerna commands](https://lernajs.io/) are also available.

### Package Structure

All npm publishable packages are located in the `packages` directory.

```
package
├── index.js
├── components
│   ├── firstComponent
│   └── secondComponent
└── package.json
```

#### Component Structure

```
firstComponent
├── index.js
└── README.md
```

## Publishing

Blaster uses Lerna in the default locked versioning mode.
This means that whenever one package is updated to a new version, all packages are also bumped to have matching version numbers.

1) Ensure all changes have been committed. Publishing will not work if your local version is not up to date with `master`.
1) **`npm addUser --scope @blasterjs`** - this ensures you are logged into npm and have sufficient privileges to publish Blaster
1) **`yarn run publish`** - this runs `lerna publish --exact`, which is an interactive process. All dependencies are pinned to the versions currently installed. Select the appropriate version bump according to semantic versioning.
