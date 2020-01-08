#!/usr/bin/env node --harmony

/**
 * TODO:
 * - [x] add code to generate component index.js file
 * - [x] add commands to handle only regenerating index files
 * - [x] look at DRYing things out
 * - [] pull and rebase on master
 * - [] test fresh install for other devs
 * - [] update README
 */

const program = require("commander");
const {
  readdirSync,
  statSync,
  mkdirSync,
  unlinkSync,
  appendFileSync,
  openSync,
  closeSync,
  existsSync,
  readFile
} = require("fs");
const util = require("util");
const { join } = require("path");
const rimraf = require("rimraf");
const chalk = require("chalk");
const inquirer = require("inquirer");
const copyFileSync = require("fs-copy-file-sync");
const replaceInFile = require("replace-in-file");
const upperfirst = require("lodash.upperfirst");
const camelCase = require("camelcase");
const svgson = require("svgson-next");
const svgo = new (require("svgo"))({
  plugins: [
    {
      cleanupAttrs: true
    },
    {
      removeDoctype: true
    },
    {
      removeXMLProcInst: true
    },
    {
      removeComments: true
    },
    {
      removeMetadata: true
    },
    {
      removeTitle: true
    },
    {
      removeDesc: true
    },
    {
      removeUselessDefs: true
    },
    {
      removeEditorsNSData: true
    },
    {
      removeEmptyAttrs: true
    },
    {
      removeHiddenElems: true
    },
    {
      removeEmptyText: true
    },
    {
      removeEmptyContainers: true
    },
    {
      removeViewBox: false
    },
    {
      cleanupEnableBackground: true
    },
    {
      convertStyleToAttrs: true
    },
    {
      convertColors: true
    },
    {
      convertPathData: true
    },
    {
      convertTransform: true
    },
    {
      removeUnknownsAndDefaults: true
    },
    {
      removeNonInheritableGroupAttrs: true
    },
    {
      removeUselessStrokeAndFill: true
    },
    {
      removeUnusedNS: true
    },
    {
      cleanupIDs: true
    },
    {
      cleanupNumericValues: true
    },
    {
      moveElemsAttrsToGroup: true
    },
    {
      moveGroupAttrsToElems: true
    },
    {
      collapseGroups: true
    },
    {
      removeRasterImages: false
    },
    {
      mergePaths: true
    },
    {
      convertShapeToPath: true
    },
    {
      sortAttrs: true
    },
    {
      removeDimensions: true
    },
    {
      removeAttrs: { attrs: "(stroke|fill)" }
    }
  ]
});

const templatesPath = "./templates";

const dirs = p =>
  readdirSync(p).filter(f => statSync(join(p, f)).isDirectory());

const files = (p, ext = "") =>
  readdirSync(p).filter(
    f => statSync(join(p, f)).isFile() && (ext ? f.endsWith(`.${ext}`) : true)
  );

const packagePath = package => `./packages/${package}`;

const componentPath = (package, name) =>
  `${packagePath(package)}/components/${name}`;

const componentThemePath = (package, name) =>
  `${packagePath(package)}/theme/components/${name}`;

const listPackages = () => dirs("packages");

const listComponentsInPackage = package =>
  dirs(`${packagePath(package)}/components`);

const listThemedComponentsInPackage = package =>
  dirs(`${packagePath(package)}/theme/components`);

const packageExists = package => listPackages().includes(package);

const componentExists = (package, component) =>
  listComponentsInPackage(package).includes(component);

const hydrateTemplatedFile = (filePath, name) => {
  replaceInFile.sync({
    files: filePath,
    from: /\$REPLACE/g,
    to: upperfirst(name)
  });
};

const generateComponentIndex = package => {
  const indexFile = `${packagePath(package)}/index.components.js`;
  if (existsSync(indexFile)) {
    unlinkSync(indexFile);
  }
  const fd = openSync(indexFile, "a");
  listComponentsInPackage(package).forEach(componentName => {
    const exportString = `export { default as ${upperfirst(
      componentName
    )} } from "./components/${componentName}";\n`;
    appendFileSync(fd, exportString);
  });
  closeSync(fd);
  logSuccess(
    `Generated component index for package ${highlightSuccess(package)}`
  );
};

const generateComponentThemeIndex = package => {
  const indexFile = `${packagePath(package)}/theme/components/index.js`;
  if (existsSync(indexFile)) {
    unlinkSync(indexFile);
  }
  const fd = openSync(indexFile, "a");
  listThemedComponentsInPackage(package).forEach(componentName => {
    const exportString = `export { theme as ${componentName} } from "./${componentName}";\n`;
    appendFileSync(fd, exportString);
  });
  closeSync(fd);
  logSuccess(
    `Generated theme component index for package ${highlightSuccess(package)}`
  );
};

const optimizeSvgFile = async svgPath => {
  try {
    const svgData = await util.promisify(readFile)(svgPath);
    const optimizedObject = await svgo.optimize(svgData);
    return optimizedObject.data;
  } catch (e) {
    throw e;
  }
};

const generateIconIndex = async () => {
  try {
    const indexFile = "./packages/core/theme/icons.js";
    const svgs = files("./icons", "svg");
    // Generate camelcased names
    const svgArrays = await Promise.all(
      svgs.map(async f => {
        const optimizedSvgEl = await optimizeSvgFile(`./icons/${f}`);
        const svgJson = await svgson.parse(optimizedSvgEl);
        const viewBox = svgJson.attributes.viewBox;
        const path = svgJson.children.find(c => c.name === "path").attributes.d;
        const title = f.replace(/\.[^/.]+$/, "");
        return [camelCase(title), title, viewBox, path];
      })
    );

    const svgConfig = await svgArrays.reduce(
      (acc, arrs) => ({
        ...acc,
        [arrs[0]]: {
          title: arrs[1],
          viewBox: arrs[2],
          path: arrs[3]
        }
      }),
      {}
    );

    if (existsSync(indexFile)) {
      unlinkSync(indexFile);
    }
    const fd = openSync(indexFile, "a");
    appendFileSync(
      fd,
      `
      export default ${JSON.stringify(svgConfig)};
    `
    );
    closeSync(fd);
    logSuccess("Icon index file generated");
  } catch (e) {
    throw e;
  }
};

const generateComponentFiles = (package, name) => {
  mkdirSync(componentPath(package, name));
  copyFileSync(
    `${templatesPath}/index.mdx`,
    `${componentPath(package, name)}/index.mdx`
  );
  copyFileSync(
    `${templatesPath}/index.component.js`,
    `${componentPath(package, name)}/index.js`
  );
  if (package === "core") {
    const themeIndexPath = componentThemePath("core", name);
    const themeIndexFile = `${themeIndexPath}/index.js`;
    mkdirSync(themeIndexPath);
    if (existsSync(themeIndexFile)) {
      unlinkSync(themeIndexFile);
    }
    const tf = openSync(themeIndexFile, "a");
    appendFileSync(tf, `export const theme = {};`);
    closeSync(tf);
  }
  hydrateTemplatedFile(`${componentPath(package, name)}/index.js`, name);
  hydrateTemplatedFile(`${componentPath(package, name)}/index.mdx`, name);
  generateComponentIndex(package);
  generateComponentThemeIndex("core");
};

const logInfo = message => console.log(`${chalk.bold.blue("i")} ${message}`);

const logSuccess = message =>
  console.log(`${chalk.bold.green("\u2713")} ${message}`);

const logWarning = message =>
  console.log(`${chalk.bold.yellow("~")} ${message}`);

const logError = message => console.log(`${chalk.bold.red("!")} ${message}`);

const logExit = () => logInfo("Exiting without doing anything");

const highlightInfo = s => chalk.blue.bold(s);

const highlightSuccess = s => chalk.green.bold(s);

const highlightWarning = s => chalk.yellow.bold(s);

const highlightError = s => chalk.red.bold(s);

const createComponent = (package, name) => {
  logInfo(`Creating component ${highlightInfo(`${package}/${name}`)}`);
  if (packageExists(package)) {
    if (!componentExists(package, name)) {
      generateComponentFiles(package, name);
      logSuccess(
        `Component ${highlightSuccess(`${package}/${name}`)} was created.`
      );
      return;
    } else {
      logError(
        `The component ${highlightError(`${package}/${name}`)} already exists.`
      );
    }
  } else {
    logError(`The package ${highlightError(package)} does not exist.`);
    logError("Create the package first or choose an existing package.");
  }
  logExit();
  return;
};

const destroyComponent = (package, name) => {
  if (packageExists(package)) {
    if (componentExists(package, name)) {
      var prompt = inquirer.createPromptModule();
      prompt({
        name: "confirmed",
        message: `Are you sure you would like to delete the ${highlightWarning(
          `${package}/${name}`
        )} component?`,
        type: "confirm"
      }).then(({ confirmed }) => {
        if (confirmed) {
          rimraf.sync(componentPath(package, name));
          if (package === "core") {
            rimraf.sync(componentThemePath("core", name));
          }
          logSuccess(
            `Component ${highlightSuccess(`${package}/${name}`)} was deleted.`
          );
          generateComponentIndex(package);
          generateComponentThemeIndex("core");
          return;
        } else {
          logExit();
        }
      });
      return;
    } else {
      logWarning(
        `The component ${highlightWarning(`${package}/${name}`)} does not exist`
      );
    }
  } else {
    logWarning(`The package ${highlightWarning(package)} does not exist`);
  }
  logExit();
  return;
};

program.version("0.1.0");

program
  .command("generate <objectType> <targetPackage> <objectName>")
  .alias("g")
  .action(function(objectType, targetPackage, objectName) {
    switch (objectType) {
      case "component":
        createComponent(targetPackage, objectName);
        return;
      default:
        logError(
          `${highlightError(objectType)} is not a supported object type`
        );
        return;
    }
  });

program
  .command("destroy <objectType> <targetPackage> <objectName>")
  .alias("d")
  .action(function(objectType, targetPackage, objectName) {
    switch (objectType) {
      case "component":
        destroyComponent(targetPackage, objectName);
        return;
      default:
        logError(
          `${highlightError(objectType)} is not a supported object type`
        );
        return;
    }
  });

program
  .command("index")
  .alias("i")
  .action(function() {
    logInfo("Generating index files for all packages...");
    listPackages().forEach(p => {
      generateComponentIndex(p);
    });
    generateComponentThemeIndex("core");
  });

program
  .command("update-icons")
  .alias("ui")
  .alias("build-themes")
  .alias("bt")
  .action(function() {
    logInfo("Generating theme files...");
    generateIconIndex();
  });

program.parse(process.argv);
