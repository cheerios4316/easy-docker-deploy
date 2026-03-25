import { Commands } from "../../command/enums";
import { TArguments } from "../types";
import { buildStrategy, deployStrategy, restartStrategy } from "./concrete-strategies";

export const commandStrategies: Record<Commands, (args: TArguments) => any> = {
    [Commands.DEPLOY]: deployStrategy,
    [Commands.RESTART]: restartStrategy,
    [Commands.BUILD]: buildStrategy,
}