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
  const files = ["src/app.js", ".env", "README.md"];

  files.forEach((file) => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) {
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

## Features

- **Modular structure**: Organized code for scalability.
- **Middleware support**: Custom middleware can be added easily.
- **Error handling**: Centralized error handling setup.

## Contributing

Follow these steps to contribute:

1. Fork the project.
2. Create a new branch (\`git checkout -b feature-branch\`).
3. Make your changes.
4. Push to the branch (\`git push origin feature-branch\`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
`;

  const readmePath = path.join(__dirname, "README.md");
  fs.writeFileSync(readmePath, readmeContent);
  console.log("Created: README.md");
}

// Run the functions
createDirectories();
createFiles();
createReadme();
