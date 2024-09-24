import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { glob, globSync, globStream, globStreamSync, Glob } from 'glob'

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Correctly build the path and glob pattern
const seedFiles = await glob('**/seed.ts', { ignore: 'node_modules/**' })
console.log("Seed File Pattern:", seedFiles);

// Function to run a command and log output/errors
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error running ${command}:`, stderr);
        reject(error);
      } else {
        console.log(stdout);
        resolve(stdout);
      }
    });
  });
};

// Run all seed files sequentially using ts-node
const runSeeds = async () => {
  for (const seedFile of seedFiles) {
    console.log(`Running ${seedFile}...`);
    await runCommand(`ts-node ${seedFile}`);
  }
  console.log("✅ All seed files executed.");
};

runSeeds().catch((err) => {
  console.error("An error occurred while running seed files:", err);
});