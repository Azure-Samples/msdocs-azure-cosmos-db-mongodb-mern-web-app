# Sample MERN web application for Azure Cosmos DB for MongoDB

## Test locally

- `./client/.env`

    ```env
    REACT_APP_API_ENDPOINT=http://localhost:5000
    ```

- `./server/.env`

    ```env
    CONNECTION_STRING=<mongodb-connection-string>
    ```

- Run application in two terminals:

    ```bash
    npm start --prefix server/
    ```

    ```bash
    npm start --prefix client/
    ```

- See front-end application at <http://localhost:3000>

## Test locally (Docker)

- `./.env`

    ```env
    CONNECTION_STRING=http://localhost:5000
    REACT_APP_API_ENDPOINT=http://localhost:65100
    ```

- Build and run containers in a single terminal:

    ```bash
    docker build --tag client client/.

    docker build --tag server server/.

    docker run --detach --publish 65100:5000 --env-file .env server

    docker run --detach --publish 65200:3000 --env-file .env client
    ```

- See front-end application at <http://localhost:65200>
