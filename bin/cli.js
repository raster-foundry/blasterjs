#!/usr/bin/env node --harmony

/**
 * TODO:
 * - [x] add code to generate component index.js file
 * - [] add commands to handle only regenerating index files
 * - [] add handling of constant types
 * - [] add generation of constant index.js file
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
  existsSync
} = require("fs");
const { join } = require("path");
const rimraf = require("rimraf");
const chalk = require("chalk");
const inquirer = require("inquirer");
const copyFileSync = require("fs-copy-file-sync");
const replaceInFile = require("replace-in-file");
const upperfirst = require("lodash.upperfirst");

const OBJECT_TYPES = ["component", "constant"];

const templatesPath = "./templates";

const dirs = p =>
  readdirSync(p).filter(f => statSync(join(p, f)).isDirectory());

const packagePath = package => `./packages/${package}`;

const componentPath = (package, name) =>
  `${packagePath(package)}/components/${name}`;

const listPackages = () => dirs("packages");

const listComponentsInPackage = package =>
  dirs(`${packagePath(package)}/components`);

const packageExists = package => listPackages().includes(package);

const componentExists = (package, component) =>
  listComponentsInPackage(package).includes(component);

const hydrateTemplatedFile = (filePath, name) => {
  replaceInFile.sync({
    files: filePath,
    from: /\$COMPONENT/g,
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
  const indexFile = `${packagePath(package)}/index.constants.js`;
  if (existsSync(indexFile)) {
    unlinkSync(indexFile);
  }
  const fd = openSync(indexFile, "a");
  listConstantsInPackage(package).forEach(constantName => {
    const exportString = `export { default as ${upperfirst(
      componentName
    )} } from "./common/${componentName}";\n`;
    appendFileSync(fd, exportString);
  });
  closeSync(fd);
  logSuccess(
    `Generated component index for package ${highlightSuccess(package)}`
  );
};

const generateComponentFiles = (package, name) => {
  mkdirSync(componentPath(package, name));
  copyFileSync(
    `${templatesPath}/README.md`,
    `${componentPath(package, name)}/README.md`
  );
  copyFileSync(
    `${templatesPath}/index.js`,
    `${componentPath(package, name)}/index.js`
  );
  hydrateTemplatedFile(`${componentPath(package, name)}/index.js`, name);
  generateComponentIndex(package);
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
          logSuccess(
            `Component ${highlightSuccess(
              componentPath(package, name)
            )} was deleted.`
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

program.version("0.1.0");

program
  .command("generate <targetPackage> <objectName>")
  .alias("g")
  .action(function(targetPackage, objectName) {
    createComponent(targetPackage, objectName);
  });

program
  .command("destroy <targetPackage> <objectName>")
  .alias("d")
  .action(function(targetPackage, objectName) {
    destroyComponent(targetPackage, objectName);
  });

program
  .command("index")
  .alias("i")
  .action(function() {
    logInfo("Generating component index files for all packages...");
    listPackages().forEach(p => generateComponentIndex(p));
  });

program.parse(process.argv);
