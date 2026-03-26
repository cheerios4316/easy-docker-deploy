import { Command } from "../command/contract"
import { validateArguments } from "../command/validate-arguments"
import { getCommandChain } from "../utils/command-build";
import { readProjectConfig } from "../utils/read-config";
import { runBashCommands } from "../yaml/bash_commands";
import { IDeployConfig } from "./contract";
import { TArguments } from "./types";

export const runCommand = (command: Command) => {
    const args = validateArguments(command);

    buildCommandAndRun(command, args);
}

export const buildCommandAndRun = (command: Command, args: TArguments) => {
    const config = readProjectConfig(args.project?.toString()) as IDeployConfig;
    const projectName = args.project?.toString();
    const containerName = config.container_name;

    const commands = getCommandChain(command.name, projectName, containerName, config);

    runBashCommands(commands);
};