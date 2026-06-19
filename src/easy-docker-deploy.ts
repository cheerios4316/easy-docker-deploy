#!/usr/bin/env node

import { extractCommand } from "./command/command-extractor";
import { runCommand } from "./runner/command-runner";

const { spawn } = require('child_process');

const command = extractCommand(process.argv);

runCommand(command);
