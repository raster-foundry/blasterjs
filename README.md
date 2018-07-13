# Blaster
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Usage
blasterjs isn't ready for showtime yet

## Development

### Getting Started
1. Clone the project: `git clone git@github.com:raster-foundry/blasterjs.git`
3. Setup project: `yarn install`
4. Run `yarn start`

### Scripts
A look at the scripts that are available:

- To [bootstrap](https://github.com/lerna/lerna#bootstrap) the packages and start the development environment run:
```
yarn start
```

- To easily install all the dependencies in your individual packages at once run:
```
yarn bootstrap
```

- Run all your packages tests and generate coverage report:
```
yarn test
```

- Create a new release of the packages that have been updated. Prompts for a new version and updates all the packages on git and npm:
```
yarn publish
```

This project is powered by Lerna so all [Lerna commands](https://lernajs.io/) are available.

### Project Structure

#### Package Structure

```
package
├── index.js
├── components
│   ├── firstComponent
│   │   ├── index.js
│   │   └── README.md
│   └── secondComponent
│       ├── index.js
│       └── README.md
└── package.json
```

#### Component Structure

```
firstComponent
├── index.js
└── README.md
```
