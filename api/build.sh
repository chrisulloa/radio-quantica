#!/bin/bash

export PAYLOAD_CONFIG_PATH=src/payload.config.ts
echo "Generating import map..."
npx payload generate:importmap
echo "Running payload build..."
npx next build