#!/usr/bin/env node --harmony

/**
 * TODO:
 * - [x] add code to generate component index.js file
 * - [x] add commands to handle only regenerating index files
 * - [] add handling of constant types
 * - [x] add generation of constant index.js file
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
const svgson = require('svgson-next')
const svgo = new (require("svgo"))({
  plugins: [
    {
      cleanupAttrs: true,
    }, {
      removeDoctype: true,
    },{
      removeXMLProcInst: true,
    },{
      removeComments: true,
    },{
      removeMetadata: true,
    },{
      removeTitle: true,
    },{
      removeDesc: true,
    },{
      removeUselessDefs: true,
    },{
      removeEditorsNSData: true,
    },{
      removeEmptyAttrs: true,
    },{
      removeHiddenElems: true,
    },{
      removeEmptyText: true,
    },{
      removeEmptyContainers: true,
    },{
      removeViewBox: false,
    },{
      cleanupEnableBackground: true,
    },{
      convertStyleToAttrs: true,
    },{
      convertColors: true,
    },{
      convertPathData: true,
    },{
      convertTransform: true,
    },{
      removeUnknownsAndDefaults: true,
    },{
      removeNonInheritableGroupAttrs: true,
    },{
      removeUselessStrokeAndFill: true,
    },{
      removeUnusedNS: true,
    },{
      cleanupIDs: true,
    },{
      cleanupNumericValues: true,
    },{
      moveElemsAttrsToGroup: true,
    },{
      moveGroupAttrsToElems: true,
    },{
      collapseGroups: true,
    },{
      removeRasterImages: false,
    },{
      mergePaths: true,
    },{
      convertShapeToPath: true,
    },{
      sortAttrs: true,
    },{
      removeDimensions: true,
    },{
      removeAttrs: {attrs: '(stroke|fill)'},
    }
  ]
});

const templatesPath = "./templates";

const dirs = p =>
  readdirSync(p).filter(f => statSync(join(p, f)).isDirectory());

const files = p => readdirSync(p).filter(f => statSync(join(p, f)).isFile());

const packagePath = package => `./packages/${package}`;

const componentPath = (package, name) =>
  `${packagePath(package)}/components/${name}`;

const constantPath = (package, name) =>
  `${packagePath(package)}/common/${name}`;

const listPackages = () => dirs("packages");

const listComponentsInPackage = package =>
  dirs(`${packagePath(package)}/components`);

const listConstantsInPackage = package =>
  files(`${packagePath(package)}/common`).map(f => f.replace(/\.[^/.]+$/, ""));

const packageExists = package => listPackages().includes(package);

const componentExists = (package, component) =>
  listComponentsInPackage(package).includes(component);

const constantExists = (package, constant) =>
  listConstantsInPackage(package).includes(constant);

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

const generateConstantIndex = package => {
  const indexFile = `${packagePath(package)}/index.common.js`;
  if (existsSync(indexFile)) {
    unlinkSync(indexFile);
  }
  const fd = openSync(indexFile, "a");
  if (existsSync(`${packagePath(package)}/common`)) {
    listConstantsInPackage(package).forEach(constant => {
      const exportString = `export { default as ${upperfirst(
        constant
      )} } from "./common/${constant}";\n`;
      appendFileSync(fd, exportString);
    });
    logSuccess(
      `Generated constant index for package ${highlightSuccess(package)}`
    );
  } else {
    logInfo(`No constants found for package ${highlightInfo(package)}`);
  }
  closeSync(fd);
};

const optimizeSvgFile = async (svgPath) => {
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
    const indexFile = "./packages/core/index.icons.js";
    const svgs = files("./icons").filter(f => f.includes(".svg"));
    // Generate camelcased names
    const svgArrays = await Promise.all(
      svgs.map(async f => {
        const optimizedSvgEl = await optimizeSvgFile(`./icons/${f}`);
        const svgJson = await svgson.parse(optimizedSvgEl);
        const viewBox = svgJson.attributes.viewBox;
        const path = svgJson.children.find(c => c.name === "path").attributes.d;
        const title = f.replace(/\.[^/.]+$/, "");
        return [
          camelCase(title),
          title,
          viewBox,
          path
        ];
      })
    );

    const svgConfig = await svgArrays.reduce((acc, arrs) => ({
      ...acc,
      [arrs[0]]: {
        title: arrs[1],
        viewBox: arrs[2],
        path: arrs[3]
      }
    }), {});

    if (existsSync(indexFile)) {
      unlinkSync(indexFile);
    }
    const fd = openSync(indexFile, "a");
    appendFileSync(fd, `
      export default ${JSON.stringify(svgConfig)};
    `);
    closeSync(fd);
    logSuccess("Icon index file generated");
  } catch(e) {
    throw e;
  }
}

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
  hydrateTemplatedFile(`${componentPath(package, name)}/index.js`, name);
  hydrateTemplatedFile(`${componentPath(package, name)}/index.mdx`, name);
  generateComponentIndex(package);
};

const generateConstantFiles = (package, name) => {
  const targetPath = `${constantPath(package, name)}.js`;
  copyFileSync(`${templatesPath}/index.constant.js`, targetPath);
  hydrateTemplatedFile(targetPath, name);
  generateConstantIndex(package);
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

const createConstant = (package, name) => {
  logInfo(`Creating constant ${highlightInfo(`${package}/${name}`)}`);
  if (packageExists(package)) {
    if (!constantExists(package, name)) {
      generateConstantFiles(package, name);
      logSuccess(
        `Constant ${highlightSuccess(`${package}/${name}`)} was created.`
      );
      return;
    } else {
      logError(
        `The constant ${highlightError(`${package}/${name}`)} already exists.`
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
          logSuccess(
            `Component ${highlightSuccess(`${package}/${name}`)} was deleted.`
          );
          generateComponentIndex(package);
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

const destroyConstant = (package, name) => {
  if (packageExists(package)) {
    if (constantExists(package, name)) {
      var prompt = inquirer.createPromptModule();
      prompt({
        name: "confirmed",
        message: `Are you sure you would like to delete the ${highlightWarning(
          `${package}/${name}`
        )} constant?`,
        type: "confirm"
      }).then(({ confirmed }) => {
        if (confirmed) {
          rimraf.sync(`${constantPath(package, name)}.js`);
          logSuccess(
            `Constant ${highlightSuccess(`${package}/${name}`)} was deleted.`
          );
          generateConstantIndex(package);
          return;
        } else {
          logExit();
        }
      });
      return;
    } else {
      logWarning(
        `The constant ${highlightWarning(`${package}/${name}`)} does not exist`
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
      case "constant":
        createConstant(targetPackage, objectName);
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
      case "constant":
        destroyConstant(targetPackage, objectName);
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
      generateConstantIndex(p);
    });
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
