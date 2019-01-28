import icons from "./index.icons";

const space = [
  0,
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

const colors = {
  primary: "#738FFC",
  secondary: "#2FC1D0",
  tertiary: "#53B1E0",

  grayBase1: "#6A7085",
  grayBase2: "#858b9d",
  grayBase3: "#9ca1b0",

  grayLight1: "#C3CADF",
  grayLight2: "#E0E5F5",
  grayLight3: "#F2F5FF",

  grayDark1: "#1B1C31",
  grayDark2: "#33344D",
  grayDark3: "#4D4E66",

  white: "#FFFFFF",
  black: "#1B1C31", // also gray1

  link: "#738FFC",
  linkHover: "#0F3EFA",

  // Still reviewing the following colors
  grayLight: "#999DA8", //#4d4f6d
  grayLighter: "#C8CCDB", //#8c8dad
  grayLightest: "#e0e5f5",
  grayDark: "#343549", //#343549
  grayDarker: "#1b1c31",

  textBase: "#435399",
  shadeLight: "#959CAC", // slightly lighter then $text-base
  shadeNormal: "#465076", // deep purple
  shadeDark: "#353C58", // deepdeep purple

  slate: "#435399",

  // Action Colors:
  orange: "#E69348",
  yellow: "#b18500",
  red: "#f03333",
  green: "#4e9251",

  yellowTint: "#fdf5e0",
  redTint: "#f5dbdb",
  greenTint: "#e1ece2"
};

const fonts = {
  body: "'Open Sans', sans-serif",
  display: "'Libre Franklin', sans-serif",
  code: "'Source Code Pro', monospace"
};

const fontSizes = [
  "1rem",
  "1.2rem",
  "1.5rem",
  "1.8rem",
  "2.2rem",
  "2.6rem",
  "2.9rem",
  "3.4rem"
];

const radii = {
  small: "3px",
  base: "5px",
  large: "10px"
};

const shadows = [
  "initial",
  "0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
  "0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2)",
  "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
  "0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2)",
  "0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)"
]

const buttonsStyles = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DEFAULT: "default"
};

export const theme = {
  space,
  colors,
  fonts,
  radii,
  shadows,
  fontSizes,
  buttonsStyles,
  icons
};
