#!/usr/bin/env node

const { select } = require('@inquirer/prompts');
const pc = require('picocolors');
const fs = require('fs');
const path = require('path');

async function main() {
  console.log(pc.cyan(pc.bold('\n🚀 AI Coding Rules Injector\n')));

  // Read available templates from the package directory
  const packageDir = path.join(__dirname, '..');
  
  // Hardcoded for safety in production, but could be dynamic
  const choices = [
    { name: 'TypeScript + Next.js', value: 'typescript-nextjs' },
    { name: 'Python + FastAPI', value: 'python-fastapi' },
    { name: 'Go (Standard)', value: 'go-standard' },
    { name: 'Flutter + BLoC', value: 'flutter-bloc' }
  ];

  const framework = await select({
    message: 'What is your primary tech stack?',
    choices: choices,
  });

  const ruleType = await select({
    message: 'Which AI Assistant are you using?',
    choices: [
      { name: 'Cursor (.cursorrules)', value: 'cursor' },
      { name: 'GitHub Copilot (copilot-instructions.md)', value: 'copilot' }
    ]
  });

  const sourceFileName = ruleType === 'cursor' ? '.cursorrules' : 'copilot-instructions.md';
  const destDir = ruleType === 'cursor' ? process.cwd() : path.join(process.cwd(), '.github');
  const destPath = path.join(destDir, sourceFileName);

  const sourcePath = path.join(packageDir, framework, sourceFileName);

  try {
    // Ensure .github directory exists if using Copilot
    if (ruleType === 'copilot' && !fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    const rulesContent = fs.readFileSync(sourcePath, 'utf8');
    fs.writeFileSync(destPath, rulesContent, 'utf8');

    console.log(pc.green(`\n✅ Success! Copied to: ${destPath}`));
    console.log(pc.yellow('\n🤖 Your AI is now armed with senior-level knowledge. Happy Vibe Coding!\n'));
  } catch (error) {
    console.error(pc.red(`\n❌ Error copying file: ${error.message}\n`));
  }
}

main().catch((err) => {
  console.error(pc.red(`\n❌ Fatal Error: ${err.message}\n`));
  process.exit(1);
});
