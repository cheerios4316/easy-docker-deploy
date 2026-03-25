import { readFileSync } from "node:fs";
import { join } from "node:path";
import {parse} from "yaml";

export const readYamlFile = <T>(folderPath: string, fileName: string): T => {
    const filePath = join(folderPath, fileName);
    const fileContent = readFileSync(filePath, "utf8");

    return parse(fileContent) as T;
};