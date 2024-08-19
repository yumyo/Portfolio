#!/bin/bash

# Load environment variables
source .env

# Run the build process
npm run build
if [ $? -ne 0 ]; then
  echo "Build failed. Deployment aborted."
  exit 1
fi

rsync -avz --checksum --delete -e "ssh" --chown=$RSYNC_SSH_USER:$RSYNC_SSH_GROUP \
$RSYNC_PATH_SOURCE $RSYNC_USER@$RSYNC_IP:$RSYNC_PATH_DEST