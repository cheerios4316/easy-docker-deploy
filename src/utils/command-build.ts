import { Commands, CommandStages } from "../command/enums";
import { IDeployConfig } from "../runner/contract";

const gc = (
  stage: CommandStages,
  projectName: string,
  containerName: string,
) => {
  switch (stage) {
    case CommandStages.BUILD:
      return `docker compose build ${containerName}`;
    case CommandStages.PULL:
      return `git -C ${projectName} pull`;
    case CommandStages.START:
      return `docker compose up -d ${containerName}`;
    case CommandStages.CD:
      return `cd ${projectName}`;
    case CommandStages.RESTART:
      return `docker compose restart ${containerName}`;
  }
};

export const getCommandChain = (
  command: Commands,
  projectName: string,
  containerName: string,
  config: IDeployConfig,
) => {
  const gcWrap = (stage: CommandStages) =>
    gc(stage, projectName, containerName);

  switch (command) {
    case Commands.DEPLOY:
      return [
        gcWrap(CommandStages.PULL),
        ...(config.cd_into ? [gcWrap(CommandStages.CD)] : []),
        ...(config.should_build ? [gcWrap(CommandStages.BUILD)] : []),
        gcWrap(CommandStages.START),
      ];
    case Commands.BUILD:
      return [
        gcWrap(CommandStages.PULL),
        ...(config.cd_into ? [gcWrap(CommandStages.CD)] : []),
        gcWrap(CommandStages.BUILD),
      ];
    case Commands.RESTART:
      return [
        ...(config.cd_into ? [gcWrap(CommandStages.CD)] : []),
        gcWrap(CommandStages.RESTART),
      ];
  }
};

export const getCommandByStage = gc;
