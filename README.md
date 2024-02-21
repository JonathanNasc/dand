# Logicdan docs

The logicdan.com documentation with instructions, terms and guides

## Development

### Install dependencies

```
npm install
```

### Working locally

Starts development server by default on `http://localhost:8081`. Watches tasks to compile when changes detected.
Remember to manually change to a local folder: `http://localhost:8081/en/`. Redirects are only working on the server.

```
npm start
```

### Creating a production build

create a .env file with the following content

```
URL=http://logicdan.com/docs
```

build the project

```
npm run build
```
