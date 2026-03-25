import { Command } from "../command/contract"
import { validateArguments } from "../command/validate-arguments"
import { commandStrategies } from "./strategies/command-strategies";

export const runCommand = (command: Command) => {
    const args = validateArguments(command);

    const strategy = commandStrategies[command.name];

    strategy(args);
}