#!/bin/bash
cd /home/kavia/workspace/code-generation/skillswap-hub-2501-2200/skillswap_hub
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

