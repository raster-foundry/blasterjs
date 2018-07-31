### Gray scale

```jsx noeditor
const ColorSwatchGroup = require("./components/ColorSwatchGroup").default;
const ColorSwatch = require("./components/ColorSwatch").default;
const { theme } = require("../packages/core/defaultTheme");

<div style={{ display: "flex" }}>
  <ColorSwatchGroup border={theme.colors.lightGray3}>
    <ColorSwatch color={theme.colors.white} />
  </ColorSwatchGroup>
  <ColorSwatchGroup border={theme.colors.black}>
    <ColorSwatch color={theme.colors.black} invert />
  </ColorSwatchGroup>
</div>;
```

```jsx noeditor
const ColorSwatchGroup = require("./components/ColorSwatchGroup").default;
const ColorSwatch = require("./components/ColorSwatch").default;
const { theme } = require("../packages/core/defaultTheme");

<div style={{ display: "flex" }}>
  <ColorSwatchGroup border={theme.colors.grayDark1}>
    <ColorSwatch color={theme.colors.grayDark1} invert />
    <ColorSwatch color={theme.colors.grayDark2} invert />
    <ColorSwatch color={theme.colors.grayDark3} invert />
  </ColorSwatchGroup>

  <ColorSwatchGroup border={theme.colors.grayBase1}>
    <ColorSwatch color={theme.colors.grayBase1} invert />
    <ColorSwatch color={theme.colors.grayBase2} invert />
    <ColorSwatch color={theme.colors.grayBase3} invert />
  </ColorSwatchGroup>

  <ColorSwatchGroup border={theme.colors.grayLight1}>
    <ColorSwatch color={theme.colors.grayLight1} />
    <ColorSwatch color={theme.colors.grayLight2} />
    <ColorSwatch color={theme.colors.grayLight3} />
  </ColorSwatchGroup>
</div>;
```

### Core Colors

```jsx noeditor
const ColorSwatchGroup = require("./components/ColorSwatchGroup").default;
const ColorSwatch = require("./components/ColorSwatch").default;
const { theme } = require("../packages/core/defaultTheme");

<div style={{ display: "flex" }}>
  <ColorSwatchGroup border={theme.colors.primary}>
    <ColorSwatch color={theme.colors.primary} invert />
  </ColorSwatchGroup>

  <ColorSwatchGroup border={theme.colors.secondary}>
    <ColorSwatch color={theme.colors.secondary} invert />
  </ColorSwatchGroup>

  <ColorSwatchGroup border={theme.colors.tertiary}>
    <ColorSwatch color={theme.colors.tertiary} />
  </ColorSwatchGroup>
</div>;
```

### Extended Colors

```jsx noeditor
const ColorSwatchGroup = require("./components/ColorSwatchGroup").default;
const ColorSwatch = require("./components/ColorSwatch").default;
const { theme } = require("../packages/core/defaultTheme");

<div style={{ display: "flex" }}>
  <ColorSwatchGroup border={theme.colors.primary}>
    <ColorSwatch color={theme.colors.primary} invert />
  </ColorSwatchGroup>

  <ColorSwatchGroup border={theme.colors.secondary}>
    <ColorSwatch color={theme.colors.secondary} invert />
  </ColorSwatchGroup>

  <ColorSwatchGroup border={theme.colors.tertiary}>
    <ColorSwatch color={theme.colors.tertiary} />
  </ColorSwatchGroup>
</div>;
```
