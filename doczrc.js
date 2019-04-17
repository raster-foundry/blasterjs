export default {
  source: "./",
  port: "3030",
  title: "BlasterJS",
  ignore: ["./templates/index.mdx", "**/README.md"],
  repository: "https://github.com/raster-foundry/blasterjs",
  propsParser: true,
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
    showPlaygroundEditor: true,
    colors: {
      primary: "#738ffc",
      sidebarBg: "#EEF1F5"
    },
    styles: {
      body: `
        font-family: "Source Sans Pro", Helvetica, sans-serif;
        font-size: 16px;
        line-height: 1.6 !important;
      `,
      playground: `
        padding: 35px;
        font-size: 18px;
        line-height: 2;
      `,
      h1: `
        position: relative;
        display: table;
        font-family: "Playfair Display", serif;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: -0.02em;
        margin: 30px 0px 20px;

        &:before {
          position: absolute;
          content: "";
          bottom: 5%;
          left: 0px;
          width: 35%;
          height: 2px;
          background: #738ffc;
        }
      `,
      h2: `
        position: relative;
        padding-bottom: 5px;
        line-height: 1.4em;
        font-family: Poppins, serif;
        font-weight: 500;
        font-size: 30px;
        letter-spacing: -0.02em;
        border-bottom: 1px dashed rgb(206, 212, 222);
        margin: 30px 0px 20px;
      `,
      code: `
        color: rgb(125, 137, 156);
        font-family: "Source Code Pro", monospace;
        font-size: 15px;
        background: rgb(244, 246, 249);
        margin: 0px 3px;
        border-radius: 3px;
        padding: 2px 5px;
        border: 1px solid rgba(0, 0, 0, 0.02);
      `
    }
  }
};
