import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const PostEditor = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (id) {
            // Fetch the post data for editing
            fetch(`/api/posts/${id}`)
                .then(response => response.json())
                .then(data => {
                    setTitle(data.title);
                    setContent(data.content);
                    setIsEditing(true);
                })
                .catch(error => console.error('Error fetching post:', error));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const method = isEditing ? 'PUT' : 'POST';
        const url = isEditing ? `/api/posts/${id}` : '/api/posts';

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        })
            .then(response => response.json())
            .then(() => {
                history.push('/'); // Redirect to home after submission
            })
            .catch(error => console.error('Error saving post:', error));
    };

    return (
        <div className="post-editor">
            <h2>{isEditing ? 'Edit Post' : 'Create Post'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{isEditing ? 'Update Post' : 'Create Post'}</button>
            </form>
        </div>
    );
};

export default PostEditor;