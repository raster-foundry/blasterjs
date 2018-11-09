# Blaster

[![Build Status](https://travis-ci.org/raster-foundry/blasterjs.svg?branch=master)](https://travis-ci.org/raster-foundry/blasterjs)

1) [Usage](#usage)
2) [Getting started with Development](#getting-started-with-development)
3) [Best development practices](#best-development-practices)
4) [Using the development CLI](#using-the-development-cli)
5) [Other scripts](#other-scripts)

## Usage
Blaster is split into multiple packages, allowing you to pick and choose the components you need.

[![npm](https://img.shields.io/npm/v/@blasterjs/core.svg?label=@blasterjs/core)](https://www.npmjs.com/package/@blasterjs/core) &ndash; Base components and styles. All other Blaster packages depend on this.

[![npm](https://img.shields.io/npm/v/@blasterjs/chart.svg?label=@blasterjs/chart)](https://www.npmjs.com/package/@blasterjs/chart) &ndash; Experimental chart package.

### Dependencies

You will need to have installed `styled-components` as well as `styled-system` in the application you want to use Blaster in.

`npm install --save styled-component styled-system`

## Getting started with development

1.  Clone the project: `git clone git@github.com:raster-foundry/blasterjs.git`
2.  Setup project: `yarn install`
3.  Run `yarn start`

## Best development practices

### Styled System

Use [styled-system](https://jxnblk.com/styled-system/) in conjunction with
[styled-components](https://www.styled-components.com/) for styling and theming.

As a rule of thumb, include styled-system functions _first_ within styled-component
template literals, unless you have reason not to. Eg, this order is preferred:

```
const StyledComponent = styled.div`
  ${space}
  ${color}
  display: inline-block;
  vertical-align: middle;
`;
```

### Default Props

As a rule of thumb, use `defaultProps` for setting default props, eg:

```
Component.defaultProps = {
  width: "100%"
};
```

However, there may be times when logic necessitates that a default be configured
within a styled-component template literal instead, eg:

```
const StyledComponent = styled.div`
  width: ${props => props.width || "100%"};
`;
```

### Styled System shortcuts in defaultProps

When declaring a component's `defaultProps` for margin or padding, avoid using the
_symmetric_ `x` and `y` shortcuts supplied by `styled-system` (`mx`, `my`, `px`, `py`).
If you declare defaults for those shortcuts, a developer using your component will
be unable to override them with `styled-system`'s _asymmetric_ shortcuts
(`ml`, `mr`, `mt`, `mb`, `pl`, `pr`, `pt`, `pb`). Better to declare defaults
using the asymmetric shortcuts, which a developer can override using either
asymmetric or symmetric shortcuts.


## Using the development CLI

Blasterjs has a built-in CLI.
It's the preferred method of managing components and constants.
In order to use the CLI, after cloning the repo, you will need to run `npm link`.

### CLI Commands

**`blaster {g,generate} {component, constant} <packageName> <newThingName>`**
ex: `blaster g component core tooltip`, `blaster generate constant core direction`
Generates a component or constant in the specified package.

**`blaster {d,destroy} {component, constant} <packageName> <thingToDestroyName>`**
ex: `blaster d component core tooltip`, `blaster destroy constant core direction`
Removes a component or constant in the specified package. Includes confirmation.

**`blaster {i,index}`**
Regenerates all three index files for each package as necesssary.

## Other scripts

| Command                                        | Description                                                                                                                                             |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`yarn start`** or<br/> **`./scripts/start`** | This is the most commonly used command when developing locally. <br/> It runs `yarn build`, `lerna bootstrap`, and then starts the styleguidist server. |
| `yarn bootstrap`                               | An alias for `lerna bootstrap`. <br/> Symlinks the various packages together to enable a smooth monorepo development workflow.                          |
| `yarn test`                                    | Run tests for all components                                                                                                                            |
| `yarn build` or <br/> `./scripts/build`        | Uses lerna to run all packages through babel.                                                                                                           |
| `./scripts/release`                            | Create a new release interactively with Lerna                                                                                                           |
| `./scripts/clean`                              | Remove all existing `node_modules` directories                                                                                                          |

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
└── index.mdx
```

## Publishing New Versions

Blaster uses Lerna in the default locked versioning mode.
This means that whenever one package is updated to a new version, all packages are also bumped to have matching version numbers.

1.  Ensure all changes have been committed. Publishing will not work if your local version is not up to date with `master`.
1.  **`npm addUser --scope @blasterjs`** - this ensures you are logged into npm and have sufficient privileges to publish Blaster
1.  **`./scripts/release`** - this runs `lerna publish --exact`, which is an interactive process. All dependencies are pinned to the versions currently installed. Select the appropriate version bump according to semantic versioning.
