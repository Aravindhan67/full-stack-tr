# Blogging Platform

This is a full-fledged blogging platform built with a React frontend, Node.js backend, and MongoDB database. The application allows users to sign up, log in, create, edit, and delete blog posts.

## Features

- User authentication (login and signup)
- Create, read, update, and delete blog posts
- User profiles displaying their posts
- Responsive design with various CSS styles

## Technologies Used

- **Frontend**: React, CSS, SCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Project Structure

```
blogging-platform
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── README.md
```

## Setup Instructions

### Backend

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB connection in `src/app.js`.

4. Start the server:
   ```
   npm start
   ```

### Frontend

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React application:
   ```
   npm start
   ```

## API Endpoints

- **POST /api/auth/signup**: Register a new user
- **POST /api/auth/login**: Log in an existing user
- **GET /api/posts**: Retrieve all blog posts
- **POST /api/posts**: Create a new blog post
- **PUT /api/posts/:id**: Update a blog post
- **DELETE /api/posts/:id**: Delete a blog post

## License

This project is licensed under the MIT License.