# js-express-server

This project is a simple JavaScript Express server that listens on port 8001. It is set up to use Nodemon for automatic code reloading during development.

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
   ```
   git clone <repository-url>
   cd js-express-server
   ```

2. Install the dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will be running on [http://localhost:8001](http://localhost:8001).

### Building the Docker Image

To build the Docker image for the application, run the following command in the project root:

```
docker build -t js-express-server .
```

### Running the Docker Container

After building the image, you can run the Docker container with:

```
docker run -p 8001:8001 js-express-server
```

The server will be accessible at [http://localhost:8001](http://localhost:8001) from your host machine.