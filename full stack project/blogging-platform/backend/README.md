# Blogging Platform Backend

## Overview
This is the backend part of the Blogging Platform project. It is built using Node.js and Express, and it connects to a MongoDB database to manage user authentication and blog posts.

## Features
- User authentication (signup and login)
- CRUD operations for blog posts
- Middleware for protecting routes

## Technologies Used
- Node.js
- Express
- MongoDB (with Mongoose)
- Bcrypt (for password hashing)
- JSON Web Tokens (for authentication)

## Getting Started

### Prerequisites
- Node.js installed on your machine
- MongoDB database (local or cloud)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd blogging-platform/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
- Create a `.env` file in the `backend` directory and add your MongoDB connection string:
  ```
  MONGODB_URI=<your_mongodb_connection_string>
  JWT_SECRET=<your_jwt_secret>
  ```

### Running the Application
To start the server, run:
```
npm start
```
The server will run on `http://localhost:5000`.

## API Endpoints

### Authentication
- **POST /api/auth/signup**: Register a new user
- **POST /api/auth/login**: Login an existing user

### Posts
- **GET /api/posts**: Retrieve all posts
- **POST /api/posts**: Create a new post
- **GET /api/posts/:id**: Retrieve a single post by ID
- **PUT /api/posts/:id**: Update a post by ID
- **DELETE /api/posts/:id**: Delete a post by ID

## License
This project is licensed under the MIT License.