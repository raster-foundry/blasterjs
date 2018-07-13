# Blaster
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Usage
Blaster isn't ready for showtime yet.

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
