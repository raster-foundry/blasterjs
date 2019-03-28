export default {
  source: "./",
  port: "3030",
  title: "BlasterJS",
  ignore: "./templates/index.mdx",
  repository: "https://github.com/raster-foundry/blasterjs",
  propsParser: false,
  debug: false,
  description:
    "React Styled-components UI library designed and built by Azavea",
  indexHtml: "docs/index.html",
  wrapper: "docs/wrapper.js",
  menu: [
    "Home",
    "Getting Started",
    "Primitives",
    "Typography",
    "Components",
    "Form",
    "Navigation",
    "Overlays"
  ],
  codeSandbox: false,
  themeConfig: {
    showPlaygroundEditor: true
  }
};
