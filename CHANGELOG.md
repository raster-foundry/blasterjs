# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [1.0.0-alpha.4] - 2019-07-25
### Changed
- Major Icon component overhaul
- Updated Card to compositional theme system. Removed density prop.
- Updated Text to compositional theme system.
- Updated Heading to compositional theme system.
- Updated A to compositional theme system. Added colorFocus and colorActive props.
- Updated Divider to compositional theme system.
- Updated Image to compositional theme system. Replaced shape prop with rounded and circle props.
- Updated ProgressBar to compositional theme system.
- Updated Swatch to compositional theme system. Replaced shape prop with rounded and circle props.

## [1.0.0-alpha.3] - 2019-07-02 [YANKED]

## [1.0.0-alpha.2] - 2019-06-20 [YANKED]

## [1.0.0-alpha.1] - 2019-06-12 [YANKED]

## [1.0.0-alpha.0] - 2019-06-03
### Changed
- Major Button component overhaul
- Major Badge component overhaul

## [0.0.20] - 2019-05-01
### Changed
- Renamed `Header` to `Heading`
- Updated Heading to utilize Styled Props
- Moved Blaster component docs to Primitives menu
- Updated A component to utilize Styled Props

### Added
- new documentation for Blaster Theme and Styled Props

## [0.0.19] - 2019-04-19

## [0.0.18] - 2019-04-19

## [0.0.17] - 2019-04-19
### Added
- Added Blaster application wrapper component [#173](https://github.com/raster-foundry/blasterjs/pull/173)

## [0.0.16] - 2019-03-20

## [0.0.15] - 2019-03-20

## [0.0.14] - 2019-03-11
### Added
- Added chan for changelog management

## 0.0.14-alpha.1 - 2019-03-11
### Added
- `Divider` component added to the core package [#94](https://github.com/raster-foundry/blasterjs/pull/94)
- `Icon` component added to the core package [#103](https://github.com/raster-foundry/blasterjs/pull/103)
- `Box` component added to the core package [#112](https://github.com/raster-foundry/blasterjs/pull/112)
- `Text` component added to the core package [#114](https://github.com/raster-foundry/blasterjs/pull/114)
- 'GlobalStyle' component added to the core package [#115](https://github.com/raster-foundry/blasterjs/pull/115)
- Added command `update-icons` to the CLI to regenerate the icon index file when new icons are added [#118](https://github.com/raster-foundry/blasterjs/pull/118)
- `Label`, `TextInput`, `Textarea`, `Select`, `Checkbox`, `Radio`, `FileInput`, `ColorInput`, `Field`, `ToggleField` [#121](https://github.com/raster-foundry/blasterjs/pull/121)
- `Dialog` component added to the core package [#123](https://github.com/raster-foundry/blasterjs/pull/123)
- `Tooltip` component added to the core package [#128](https://github.com/raster-foundry/blasterjs/pull/128)
- `Table` components added to the core package [#132](https://github.com/raster-foundry/blasterjs/pull/132)

### Changed
- Changed theme file `radius` to `radii` (breaking change for custom themes)
- Normalized usage of styled-system across every component
- Renamed `Link` to `A`.
- Refactored theme system to support per-component themeing, replacing `defaultTheme.js` with a `theme` folder [#129](https://github.com/raster-foundry/blasterjs/pull/129)

### Removed
- Removed reset.css.

### Fixed
- Build script for docz documentation site and it now properly copies the reset.css file into the dist folder [#100](https://github.com/raster-foundry/blasterjs/pull/111)
- CLI method `files` now properly filters by provided extension and now only `.js` files are used to generate the `index.common.js` file for each package [#120](https://github.com/raster-foundry/blasterjs/pull/120)

[unreleased]: https://github.com/:raster-foundry/blasterjs/compare/v1.0.0-alpha.4...HEAD
