# Use the base image provided by the Node.js devcontainer feature
# This Dockerfile is minimal as the heavy lifting is done by the feature.
FROM mcr.microsoft.com/devcontainers/javascript-node:18

# [Optional] Install any additional system dependencies if needed by your project.
# For example:
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends your-package

# VuePress 2 typically requires pnpm for faster installs.
# If your project uses npm or yarn, you can remove this.
RUN npm install -g pnpm
