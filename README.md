# Initial-Node

`initial-node` is a CLI tool for initializing a well-structured Node.js project with predefined directories, files, and configurations. It helps developers set up a standard project structure quickly, saving time and ensuring consistency.

## Features

- Automatically creates commonly used directories and files for a Node.js project.
- Generates a `.gitignore` file.
- Creates a `package.json` if it doesn’t exist.
- Initializes a git repository.
- Installs essential dependencies (`express`, `dotenv`, `node-cache`, `body-parser`, and `cors`).

## Project Structure

The tool generates the following directory and file structure:

```
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
package.json (if not already created)
```

## Installation

To install the CLI globally:

```bash
npm install -g initial-node
```

## Usage

Run the following command in the root of your desired project directory:

```bash
create-node-js
```

This will create the project structure, initialize Git, and set up essential files.

### Example

1. Navigate to your desired directory:

   ```bash
   cd my-new-project
   ```

2. Run the tool:

   ```bash
   create-node-js
   ```

3. After execution, you’ll see the following:

   - Predefined directories and files created.
   - `.gitignore` added.
   - `package.json` initialized and dependencies installed.

4. Start building your application!

## Requirements

- Node.js (>=12.0.0)
- npm (>=6.0.0)

## Contributing

Contributions are welcome! If you'd like to improve this package:

1. Fork the repository: [initial-node-js](https://github.com/ThanaphatNorth/initial-node-js)
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
