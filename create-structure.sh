#!/bin/bash

# Define project structure
directories=(
  "src"
  "src/controllers"
  "src/models"
  "src/routes"
  "src/services"
  "src/middleware"
  "src/config"
  "src/utils"
)

# Create directories
for dir in "${directories[@]}"; do
  mkdir -p "$dir"
done

# Create empty essential files
touch src/app.js
touch .env
touch README.md

# Create package.json if it doesn't exist
if [ ! -f package.json ]; then
  npm init -y
fi

# Output success message
echo "Node.js folder structure has been created!"
