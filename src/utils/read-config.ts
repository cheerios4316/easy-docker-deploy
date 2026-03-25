import { readYamlFile } from "../yaml/reader"

export const readProjectConfig = <T>(projectName: string) => {
    return readYamlFile(projectName, "edd.yml");
}