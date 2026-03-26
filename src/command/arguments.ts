import { CommandArguments } from "./contract";
import { ArgumentNames, Commands } from "./enums";

export const Arguments: Record<Commands, CommandArguments[]> = {
  [Commands.DEPLOY]: [{
    name: ArgumentNames.PROJECT,
    required: true,
  }],
  [Commands.RESTART]: [{
    name: ArgumentNames.PROJECT,
    required: true,
  }],
  [Commands.BUILD]: [{
    name: ArgumentNames.PROJECT,
    required: true,
  }],
};
