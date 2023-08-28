# ABC Company, Inc
We want to enhance our blog software for ABC Company, Inc. Create/Edit/Delete capable users should be valid users in the system. Users that read the data don’t have to be registered with the system. Assume all users have the same role and permission levels (with the noted author exception below). Each blog post should be associated with an author that is a valid user of our blog system. We want only the original author being able to edit their own blog posts.

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
- Express.js(Application framework)
- Sequelize(ORM)
- Error Handling(try/catch)
- Postgresql(Database)
- jsonwebtoken(Authorization)


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