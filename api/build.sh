#!/bin/bash

npm install --only=dev
export PAYLOAD_CONFIG_PATH=src/payload.config.ts
echo "Running payload build..."
npx next build