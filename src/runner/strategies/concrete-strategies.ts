import { readProjectConfig } from "../../utils/read-config";
import { runBashCommands } from "../../yaml/bash_commands";
import { IDeployConfig } from "../contract";
import { TArguments } from "../types";


export const deployStrategy = (args: TArguments) => {
    const config = readProjectConfig(args.project?.toString()) as IDeployConfig;

    const projectName = args.project?.toString();
    const pullCommand = `git -C ${projectName} pull`;
    const buildCommand = `docker compose build ${config.container_name}`;
    const startCommand = `docker compose up -d ${config.container_name}`;

    const commands = [
        pullCommand,
        ...(config.cd_into ? [`cd ${projectName}`] : []),
        ...(config.should_build ? [buildCommand] : []),
        startCommand,
    ];

    runBashCommands(commands);
};

export const buildStrategy = (args: TArguments) => {
  console.log(args.project ?? "build command dummy");
};

export const restartStrategy = (args: TArguments) => {
  console.log(args.project ?? "restart command dummy");
};
