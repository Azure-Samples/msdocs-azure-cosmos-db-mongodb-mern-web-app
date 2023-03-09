FROM mcr.microsoft.com/vscode/devcontainers/universal:linux

RUN apt-get update \
    && apt-get install gnupg

RUN wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add - \
    && echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list \
    && sudo apt-get update \
    && sudo apt-get install -y mongodb-mongosh

RUN apt-get install ca-certificates curl apt-transport-https lsb-release \
    && mkdir -p /etc/apt/keyrings \
    && curl -sLS https://packages.microsoft.com/keys/microsoft.asc | \
        gpg --dearmor | \
        tee /etc/apt/keyrings/microsoft.gpg > /dev/null \
    && chmod go+r /etc/apt/keyrings/microsoft.gpg \
    && AZ_REPO=$(lsb_release -cs) \
    && echo "deb [arch=`dpkg --print-architecture` signed-by=/etc/apt/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/azure-cli/ $AZ_REPO main" | tee /etc/apt/sources.list.d/azure-cli.list \
    && apt-get update \
    && apt-get install -y azure-cli

COPY first-run-notice.txt