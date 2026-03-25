export interface IDeployConfig {
    repo_url: string;
    container_name: string;
    should_build?: boolean;
    cd_into?: boolean;
}