# ABC Company, Inc

## Table  of Contents
- [Prerequisites](#Prerequisites)
- [Getting Started](#Getting-started)
- [API Endpoints](#API-endpoints)
- [Authentication](#Authentication)
- [Dependencies](#Dependencies)
- [Contributing](#Contributing)
- [Dependencies](#Dependencies)
- [License](#Prerequisites)
- [Testing API](#Testing-api)


## Prerequisites
- Nodejs
- Sequelize
- Postgresql
- jsonwebtoken


## Getting Started
create a new directory for your  project and navigate to it  in your terminal.Run the following commands to install the necessary packages:

```
npm init -y
npm install express sequelize pg pg-hstore body-parser dotenv jsonwebtoken bcrypt

```

## API Endpoints
User:
```
 `POST  /api/signup`: Create a new user
 `POST  /api/login`:  Login existing user

```

Blog:
```
 `POST  /api/blog`: Create a new blog post
 `GET  /api/blogs`: Get all blog post
 `GET  /api/blog/:id`: Get a specific blog post by ID
 `PUT  /api/blog/:id`: Update a  blog post
 `DELETE  /api/blog/:id`: Delete a blog post

```


## Authentication
This API supports token-based authentication. Use thr provided `/login` endpoint to obtain an access token, which is required to access protected routes

## Dependencies
- Express: web framework
- Sequelize: ORM for database
- pg: PostgreSQL driver
- jsonwebtoken: Token-based authentication
- body-parser: Parsing JSON data from request
- Bcrypt: encrypting of password
- dotenv: storing configuration


## Contributing


## License
This  project is licensed under the MIT License

## Testing API
Postman doc:
[Postman docs](https://documenter.getpostman.com/view/22408266/2s9Y5TxjNF)