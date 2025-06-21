import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/user/profile'); // Adjust the endpoint as necessary
                setUser(response.data.user);
                setPosts(response.data.posts);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="profile-container">
            {user ? (
                <>
                    <h1>{user.username}'s Profile</h1>
                    <p>Email: {user.email}</p>
                    <h2>Your Posts</h2>
                    <ul>
                        {posts.map(post => (
                            <li key={post._id}>
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;