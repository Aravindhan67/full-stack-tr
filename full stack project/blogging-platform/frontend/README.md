# Blogging Platform Frontend

This is the frontend part of the Blogging Platform project, built using React. The application allows users to create, read, update, and delete blog posts, as well as manage user authentication through login and signup functionalities.

## Features

- User authentication (login and signup)
- Create, edit, and delete blog posts
- View a list of all blog posts
- User profile management

## Technologies Used

- React
- React Router
- CSS/SCSS for styling

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd blogging-platform/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm start
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:
```
npm run build
```

This will generate a `build` folder with the optimized application.

## Folder Structure

```
frontend
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── PostList.jsx
│   │   └── PostEditor.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   └── Profile.jsx
│   ├── styles
│   │   ├── main.css
│   │   ├── theme.scss
│   │   └── layout.module.css
│   ├── App.jsx
│   └── index.js
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.