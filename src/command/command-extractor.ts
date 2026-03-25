import { getEnumValue } from "../utils/get-enum-value";
import { DEFAULT_COMMAND } from "./constants";
import { Command } from "./contract";
import { Commands } from "./enums";

export const extractCommand = (args: string[]): Command => {

    const hasCommand = (process.argv[2] ?? "").startsWith("--");

    const inputCommand = hasCommand ? process.argv[2].slice(2) : DEFAULT_COMMAND.toString();

    const command = getEnumValue(Commands, inputCommand);

    if(!command) {
        throw new Error("Command not known: " + inputCommand);
    }

    return {
        name: command,
        args: process.argv.slice(hasCommand ? 3 : 2)
    }
}