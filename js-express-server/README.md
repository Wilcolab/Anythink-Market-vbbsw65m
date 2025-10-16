# js-express-server

This project is a Node.js Express server that listens on port 8001. The server has recently been migrated from a Python FastAPI implementation to a modern Node.js Express setup, improving maintainability, performance, and alignment with JavaScript-based workflows. Nodemon is used for automatic code reloading during development.

## Migration Details

- **Previous Implementation:** Python FastAPI server.
- **Current Implementation:** Node.js Express server with updated dependencies and improved project structure.
- **Key Changes:**
   - Migrated backend logic from Python FastAPI to Node.js Express.
   - Updated Node.js version and dependencies.
   - Refactored codebase for better modularity and maintainability.
   - Enhanced development workflow with Nodemon and improved Docker support.
   - Unified the tech stack for easier onboarding and consistency.

## Project Structure

```
js-express-server
├── src
│   └── index.js        # Entry point of the application
├── package.json         # Configuration file for npm
├── yarn.lock            # Yarn lock file for dependency management
├── Dockerfile           # Dockerfile to build the application image
└── README.md            # Project documentation
```

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine.

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd js-express-server
    ```

2. Install the dependencies:
    ```sh
    yarn install
    ```

### Running the Server

To start the server with automatic reloading, use the following command:

```sh
yarn start
```

The server will be running on [http://localhost:8001](http://localhost:8001).

### Building the Docker Image

To build the Docker image for the application, run the following command in the project root:

```sh
docker build -t js-express-server .
```

### Running the Docker Container

After building the image, you can run the Docker container with:

```sh
docker run -p 8001:8001 js-express-server
```

The server will be accessible at [http://localhost:8001](http://localhost:8001) from your host machine.

---

**Note:** If you are migrating from the previous Python FastAPI implementation, ensure you update your local dependencies, review the new project structure, and adapt any custom logic to the new Node.js Express codebase.