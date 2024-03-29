#!/usr/bin/env node
import chalk from "chalk";
import path from "node:path";
import { cwd } from "node:process";
import { mkdirSync, writeFileSync } from "node:fs";
import gradient from "gradient-string";
import figlet from "figlet";

// getting component names from cli arguments.
const cliArguments = process.argv;
const componentNames = cliArguments
  .slice(2)
  .filter(componentName => componentName != "-ts");
const isTs = cliArguments.includes("-ts");

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
      `${componentName}.jsx`
    );

    const componentTsPath = path.resolve(
      componentDirectory,
      `${componentName}.tsx`
    );

    const componentCssModulePath = path.resolve(
      componentDirectory,
      `${componentName}.module.css`
    );

    mkdirSync(componentDirectory);

    if (isTs) {
      writeFileSync(componentTsPath, getComponentJs(componentName));
    } else {
      writeFileSync(componentJsPath, getComponentJs(componentName));
    }

    writeFileSync(componentCssModulePath, getComponentModuleCss(componentName));
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
});

//displaying a cool done message.
figlet("Done :)", (error, data) => {
  console.log(gradient.mind(data));
});

function getComponentJs(componentName) {
  return `import styles from "./${componentName}.module.css";

export default function ${componentName}() {
  return <div className={styles.${componentName}}>${componentName}</div>;
}`;
}

function getComponentModuleCss(componentName) {
  return `.${componentName} {}`;
}
