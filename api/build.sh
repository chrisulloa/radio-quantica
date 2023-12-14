#!/bin/bash

npm install --only=dev
export PAYLOAD_CONFIG_PATH=src/payload.config.ts
echo "Running payload build..."
npx payload build
echo "Running tsc..."
tsc -p tsconfig.prod.json
echo "Copying files over..."
cp -r ./src/components/*.scss ./dist/src/components
