const { spawn } = require("child_process");

export const runBashCommands = (commands: string[]) => {
    const commandString = commands.join(" && ");

    console.log(commandString);

    spawn(commandString, {
        stdio: "inherit",
        shell: true,
    });
};