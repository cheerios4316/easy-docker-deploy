import { ArgumentNames, Commands } from "./enums";

export interface Command {
    name: Commands,
    args: string[],
}

export interface CommandArguments {
    required?: boolean,
    name: ArgumentNames,
}