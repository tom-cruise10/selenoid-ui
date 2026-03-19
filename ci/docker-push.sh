#!/usr/bin/env bash

set -e

# GHCR.io image
docker build --pull -t ghcr.io/$GITHUB_REPOSITORY:$1 .
docker login -u="token" -p="$GITHUB_TOKEN" ghcr.io
docker push ghcr.io/$GITHUB_REPOSITORY:$1
