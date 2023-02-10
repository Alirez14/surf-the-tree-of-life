# surf-the-tree-of-life
## Setup
### Install dependencies
Run `npm install` in both the `server` and the `client` directories.
```sh
cd server && npm install && cd .. && \
cd client && npm install
```

### Setup MongoDB connection
To setup environment variables for the mongodb connection:  
Copy `server/.env.sample` to `server/.env` and update the connection
URL in the `.env` file for your mongodb setup.

### Populate database
Run the `populate` script in the `server`, to populate the database with species data.
```sh
cd server
npm run populate
```

## Start app for development
Run both the `server` and the `client` at the same time for development.
```sh
cd server
npm run dev
```

```sh
cd client
npm run start
```
