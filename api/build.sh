#!/bin/bash

npm install --only=dev
export PAYLOAD_CONFIG_PATH=src/payload.config.ts
echo "Generating import map..."
npx payload generate:importmap
echo "Running payload build..."
npx next build
echo "Running tsc..."
tsc -p tsconfig.prod.json