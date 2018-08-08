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
  yellow: "#FFCA28",
  red: "#f03333",
  green: "#81C784"
};

const fonts = {
  sans: "'Libre Franklin', sans-serif",
  serif: "serif",
  code: "'Source Code Pro', monospace"
};

const typeSystem = {
  xs: "1rem",
  sm: "1.2rem",
  base: "1.4rem",
  med: "1.6rem",
  lg: "2rem",
  xl: "2.4rem",
  xxl: "3.6rem",
  xxxl: "4.8rem",
  xxxxl: "7.2rem"
};

const radius = {
  small: "3px",
  base: "5px",
  large: "10px"
};

const buttonsStyles = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DEFAULT: "default"
};

const entities = {
  breadcrumb: "▸"
};

export const theme = {
  colors,
  fonts,
  radius,
  typeSystem,
  buttonsStyles,
  entities
};
