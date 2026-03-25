import { CommandArguments } from "./contract";
import { ArgumentNames, Commands } from "./enums";

export const Arguments: Record<Commands, CommandArguments[]> = {
  [Commands.DEPLOY]: [{
    name: ArgumentNames.PROEJCT,
    required: true,
  }],
  [Commands.RESTART]: [{
    name: ArgumentNames.PROEJCT,
    required: true,
  }],
  [Commands.BUILD]: [{
    name: ArgumentNames.PROEJCT,
    required: true,
  }],
};
