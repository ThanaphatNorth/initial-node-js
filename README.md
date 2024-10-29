# Setup Node JS Project

# Project Setup Script

This Node.js script initializes a project structure by creating essential directories, files, and configuration elements for a standard Express-based application.

## Table of Contents

- [Setup Node JS Project](#setup-node-js-project)
- [Project Setup Script](#project-setup-script)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
    - [Key Technologies](#key-technologies)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [Features](#features)

## Project Overview

This script is designed to automate the setup of a basic Node.js project structure, including directory creation, initialization of `package.json`, setting up common files like `.env`, `.gitignore`, `README.md`, and even initializing a Git repository if not already present.

### Key Technologies

- **Node.js** for executing the script
- **Express.js** framework for server setup
- **Dotenv** for environment variable management

## Installation

1. **Clone the repository** (or create your own directory):

   ```bash
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject

   ```

2. **Make the script executable** (if needed):

   ```bash
    chmod +x setup.js

   ```

3. **Link the script globally to use it in any directory**

   ```bash
   npm link

   ```

4. **Run the script in the desired project directory**
   ```bash
   node-js
   ```

## Project Structure

The generated project structure is as follows:

```plaintext
src/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── services/
  ├── middleware/
  ├── config/
  ├── utils/
  └── app.js
.env
.gitignore
README.md
package.json
```

## Features

**Automated Directory Structure**: Creates all necessary folders for controllers, models, routes, services, middleware, config, and utils.

**File Initialization**: Generates app.js, .env, .gitignore, and README.md with base content.

**Package Management**: Automatically initializes package.json and installs essential packages.

**Git Initialization**: Sets up a Git repository if it doesn’t already exist.
