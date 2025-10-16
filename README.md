# Node.js Server

This project now contains a Node.js server implemented with Express.js, replacing the previous FastAPI Python server. The server provides two routes for managing a task list.

## Migration Details

- The backend has been migrated from Python (FastAPI) to Node.js (Express.js).
- All API endpoints remain the same for compatibility.
- The project structure and Docker setup have been updated to support Node.js.
- Python-specific files have been removed or replaced.

## Project Structure

The project has the following files and directories:

- `node-server/src/index.js`: Contains the implementation of the Express.js server with two routes. Handles adding a task to a list and retrieving the list.

- `node-server/src/`: Directory for server source code.

- `node-server/package.json`: Lists the dependencies required for the Node.js server and other metadata.

- `node-server/Dockerfile`: Used to build a Docker image for the Node.js server. Specifies the base image, copies the source code, installs dependencies, and sets the command to run the server.

- `docker-compose.yml`: Defines and runs multi-container Docker applications. Specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the Node.js server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the Node.js server and start the containers defined in the `docker-compose.yml` file.

- The Node.js server should now be running. You can access it at port `8001`.

- The Python server (FastAPI) is also available and runs on port `8000`.

## API Routes

The Node.js server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.
