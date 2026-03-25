#!/usr/bin/env node

import { extractCommand } from "./command/command-extractor";
import { runCommand } from "./runner/command-runner";

const { spawn } = require('child_process');

const command = extractCommand(process.argv);

runCommand(command);

//const action = process.argv[2];


/*const childProcess = spawn("echo stronzooo", {
    stdio: 'inherit',
    shell: true,
});

childProcess.on('exit', (exitCode: any) => {
    process.exit(exitCode ?? 1);
});*/