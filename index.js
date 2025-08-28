#!/usr/bin/env node

import chalk from 'chalk';
import { intro, select } from '@clack/prompts';
import ora from 'ora';
import boxen from 'boxen';
import prologue from './prologue.js';
import figlet from 'figlet';

// Show game title in a box
const titleArt = chalk.white.bgBlack(figlet.textSync('Shadesmar', { font: 'ANSI Shadow' }));
console.log(
  chalk.hex('#ff69b4')(
    boxen(
      titleArt,
      { title: chalk.hex('#e6b8ffff')('A Cosmere Fan Game'), padding: 1, borderStyle: 'doubleSingle', align: 'center' }
    )
  )
);

intro(chalk.cyanBright('Your journey begins...'));

// tiny helper for async delays
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Intro spinner
{
  const s = ora({ text: chalk.gray('Loading...'), spinner: 'dots12', color: 'magenta' }).start();
  await sleep(600);
  s.stop();
}

let currentScene = prologue;
while (currentScene) {
  // Show scene text in a box
  console.log(
    chalk.hex('#ff69b4')(
      boxen(
        chalk.whiteBright(currentScene.text),
        { title: chalk.hex('#e6b8ffff')('Shadesmar'), padding: 1,
          borderStyle: 'doubleSingle',
          align: "left" 
        }
      )
    )
  );

  if (currentScene.choices && currentScene.choices.length > 0) {
  const choice = await select({
      message: chalk.cyanBright('choose a path'),
      options: currentScene.choices.map((c) => ({ value: c.next, label: c.label }))
    });

  // brief spinner to simulate thinking/loading (styled with ora)
  const s = ora({ text: chalk.hex('#e6b8ffff')('path chosen'), spinner: 'toggle13', color: 'magenta' }).start();
  await sleep(400 + Math.floor(Math.random() * 600));
  s.stop();

    // Try to find the next scene in currentScene.nextScenes, then in prologue.nextScenes
    let nextScene = currentScene.nextScenes && currentScene.nextScenes[choice];
    // If not found, try recursively up the parent chain
    let parent = currentScene;
    while (!nextScene && parent && parent !== prologue) {
      parent = parent.__parent || prologue;
      nextScene = parent.nextScenes && parent.nextScenes[choice];
    }
    // If still not found, try top-level prologue.nextScenes
    if (!nextScene && prologue.nextScenes) {
      nextScene = prologue.nextScenes[choice];
    }

    if (nextScene) {
      // Attach parent reference for recursive lookup
      nextScene.__parent = parent;
      currentScene = nextScene;
    } else {
      // No valid next scene, quit out
      break;
    }
  } else {
    // No choices, quit out
    break;
  }
}

// Outro box
// Outro spinner
{
  const s = ora({ text: chalk.gray('Saving...'), spinner: 'dots12', color: 'magenta' }).start();
  await sleep(600);
  s.stop();
}

console.log(
  chalk.hex('#ff69b4')(
    boxen(
      chalk.cyan('Thank you for playing the Prologue!'),
      { title: chalk.hex('#e6b8ffff')('Goodbye'), padding: 1,
        borderStyle: 'doubleSingle',
        align: 'center'
      }
    )
  )
);