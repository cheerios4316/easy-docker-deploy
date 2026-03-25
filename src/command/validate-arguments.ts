import { Arguments } from "./arguments";
import { Command, CommandArguments } from "./contract";

export const validateArguments = (command: Command): Record<string, string | number> => {
    const supposedArgs = Arguments[command.name];

    validateSupposedOrder(supposedArgs);

    const argSet: Record<string, string|number> = {};

    supposedArgs.forEach((elem, index) => {
        if(command.args[index]) {
            argSet[elem.name] = command.args[index];
        } else {
            if(elem.required) {
                throw new Error("Missing argument: " + elem.name);
            }
        }
    });

    return argSet;
}

const validateSupposedOrder = (args: CommandArguments[]) => {
    let requiredFinished = false;
    args.forEach(elem => {
        if(requiredFinished && elem.required) {
            throw new Error("Error: cannot have an optional argument after a required argument");
        }

        if(!requiredFinished && !elem.required) {
            requiredFinished = true;
        }
    })

    return true;
}