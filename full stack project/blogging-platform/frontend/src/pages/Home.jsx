import React from 'react';
import PostList from '../components/PostList';
import './styles/main.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Blogging Platform</h1>
            <p>Explore the latest blog posts below:</p>
            <PostList />
        </div>
    );
};

export default Home;