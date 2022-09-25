#!/usr/bin/env node
import chalk from "chalk";
import path from "node:path";
import { cwd } from "node:process";
import { mkdirSync, writeFileSync } from "node:fs";

// getting component names from cli arguments.
const cliArguments = process.argv;
const componentNames = cliArguments.slice(2);

// exiting if no componentNames are specified in the cli.
if (componentNames.length === 0) {
  console.log(chalk.red("Please specify the component name(s)."));
  console.log(chalk.blueBright("eg., srfc Box"));
  process.exit(1);
}

// creating Components for all the component names specified in the cli.
const currentTerminalDirectory = cwd();

componentNames.forEach(componentName => {
  try {
    const componentDirectory = path.resolve(
      currentTerminalDirectory,
      componentName
    );

    const componentJsPath = path.resolve(
      componentDirectory,
      `${componentName}.js`
    );

    const componentCssModulePath = path.resolve(
      componentDirectory,
      `${componentName}.module.css`
    );

    mkdirSync(componentDirectory);
    writeFileSync(componentJsPath, getComponentJs(componentName));
    writeFileSync(componentCssModulePath, getComponentModuleCss(componentName));
  } catch (error) {
    console.log(chalk.red(error.message));
  }
});
process.exit();

function getComponentJs(componentName) {
  return `import styles from "./${componentName}.module.css";

export default function ${componentName}() {
  return <div>${componentName}</div>;
}`;
}

function getComponentModuleCss(componentName) {
  return `.${componentName} {}`;
}
