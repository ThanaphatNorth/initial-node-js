const fs = require("fs");
const path = require("path");

// List of directories to create
const directories = [
  "src",
  "src/controllers",
  "src/models",
  "src/routes",
  "src/services",
  "src/middleware",
  "src/config",
  "src/utils",
];

// Function to create directories
function createDirectories() {
  directories.forEach((dir) => {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Created: ${dir}`);
    } else {
      console.log(`Exists: ${dir}`);
    }
  });
}

// Create empty files
function createFiles() {
  const files = ["src/app.js", ".env"];

  files.forEach((file) => {
    const filePath = path.join(__dirname, file);
    if (checkFileExisting(filePath)) {
      fs.writeFileSync(filePath, "");
      console.log(`Created: ${file}`);
    } else {
      console.log(`Exists: ${file}`);
    }
  });
}

// Create README.md content based on the folder names
function createReadme() {
  const readmeContent = `
# Project Name

A brief description of your project, its purpose, and the technologies used.

## Table of Contents
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/yourproject.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`bash
   cd yourproject
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

4. Start the application:
   \`\`\`bash
   npm start
   \`\`\`

## Project Structure

The project is organized into the following structure:

\`\`\`
${directories.join("\n")}
\`\`\`

## Usage

- To start the application:
  \`\`\`bash
  npm start
  \`\`\`


`;

  const readmePath = path.join(__dirname, "README.md");
  if (checkFileExisting(readmePath)) {
    fs.writeFileSync(readmePath, readmeContent);
    console.log("Created: README.md");
  } else {
    console.log("Exists: README.md");
  }
}

function checkFileExisting(filePath) {
  if (!fs.existsSync(filePath)) {
    return true;
  } else {
    return false;
  }
}

// Create .gitignore content
function createGitignore() {
  const gitignoreContent = `
# Node.js modules
node_modules/

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env

# MacOS
.DS_Store

# Miscellaneous
*.swp
  `;

  const gitignorePath = path.join(__dirname, ".gitignore");
  if (checkFileExisting(gitignorePath)) {
    fs.writeFileSync(gitignorePath, gitignoreContent);
    console.log("Created: .gitignore");
  } else {
    console.log("Exists: .gitignore");
  }
}

// Create package.json if it doesn't exist
function createPackageJson() {
  const packageJsonPath = path.join(__dirname, "package.json");
  if (!fs.existsSync(packageJsonPath)) {
    const execSync = require("child_process").execSync;
    execSync("npm init -y", { stdio: "inherit" });
    execSync("npm install express dotenv node-cache body-parser cors", {
      stdio: "inherit",
    });
    console.log("Initialized package.json");
  } else {
    console.log("package.json already exists");
  }
}

// Run the functions
createDirectories();
createFiles();
createReadme();
createGitignore();
createPackageJson();
