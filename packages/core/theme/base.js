export const colors = {
  primary: "#738FFC",
  primaryTint: "#E2E8FF",
  primaryShade: "#5E73CC",

  secondary: "#6372B4",
  secondaryTint: "#A1AAD2",
  secondaryShade: "#263263",

  gray100: "#F2F5FF",
  gray200: "#E0E5F5",
  gray300: "#C3CADF",
  gray400: "#B4B8CB",
  gray500: "#959CB6",
  gray600: "#6E779B",
  gray700: "#464F77",
  gray800: "#2A304D",
  gray900: "#171B29",

  white: "#FFFFFF",
  offWhite: "#F4F5F7",
  black: "#000000",

  green: "#28c662",
  greenTint: "#C7EAC9",
  greenShade: "#2D7B31",

  red: "#D42C3A",
  redTint: "#F2C0C4",
  redShade: "#A9232E",

  yellow: "#DCA209",
  yellowTint: "#FCE8B6",
  yellowShade: "#886200"
};

{
  colors.textBase = colors.gray800;
  colors.link = colors.primary;
  colors.linkHover = colors.primaryShade;

  colors.success = colors.green;
  colors.successTint = colors.greenTint;
  colors.successShade = colors.greenShade;

  colors.danger = colors.red;
  colors.dangerTint = colors.redTint;
  colors.dangerShade = colors.redShade;

  colors.warning = colors.yellow;
  colors.warningTint = colors.yellowTint;
  colors.warningShade = colors.yellowShade;
}

export const fonts = {
  body: "'Open Sans', sans-serif",
  display: "'Libre Franklin', sans-serif",
  code: "'Source Code Pro', monospace"
};

export const fontSizes = [
  "1rem",
  "1.2rem",
  "1.5rem",
  "1.8rem",
  "2.2rem",
  "2.6rem",
  "2.9rem",
  "3.4rem"
];

{
  fontSizes.body = fontSizes[2];
  fontSizes.display = fontSizes[7];
}

export const radii = {
  0: "0px",
  none: "0px",
  small: "3px",
  base: "4px",
  large: "10px"
};

export const shadows = [
  "initial",
  `0px 2px 5px -2px ${colors.gray900}33`,
  `0px 2px 5px 0px ${colors.gray900}33`,
  `0px 2px 10px 1px ${colors.gray900}20`,
  `0px 12px 20px -3px ${colors.gray900}20, 0px 2px 20px -9px ${
    colors.gray900
  }20`,
  `0 12px 17px 2px ${colors.gray900}20, 0 5px 22px 4px ${colors.gray900}20`
];

export const space = [
  "0",
  "0.8rem",
  "1.6rem",
  "2.4rem",
  "3.2rem",
  "4rem",
  "4.8rem",
  "5.6rem",
  "6.4rem",
  "7.2rem",
  "8rem"
];

export const lineHeights = {
  inherit: "inherit",
  small: "1",
  base: "1.3",
  large: "1.6"
};

export const fontWeights = {};
export const letterSpacings = {};
export const maxWidths = {};
export const minWidths = {};
export const widths = {};
export const maxHeights = {};
export const minHeights = {};
export const heights = {};
export const borders = {};
export const borderWidths = {};
export const borderStyles = {};
export const zIndices = {};
export const styles = {};
export { default as icons } from "./icons";
