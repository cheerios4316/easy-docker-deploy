# easy-docker-deploy

[Repository link](https://github.com/cheerios4316/easy-docker-deploy)

CLI to pull repositories and run their Docker container via Compose.

## Usage

1. Add a `edd.yml` file into your repository (see below for syntax)
2. Run `npx easy-docker-deploy {repo-name}`

### Available commands:

**--deploy**: default if unspecified: pulls, optionally builds and deploy \
**--build**: not implemented yet - will build the container \
**--restart**: not implemented yet - will restart the container 


## `edd.yml` syntax

```yml
# Url of the repository
repo_url: <repo url>

# Name of the container
container_name: <container name>

# Build before start
# Default: false
# If true, builds the container before starting
should_build: <true|false> 

# CD into repo dir
# Default: false
# If true, CDs into the repo's dir before runnning the Docker commands
cd_into: <true|false>
```
