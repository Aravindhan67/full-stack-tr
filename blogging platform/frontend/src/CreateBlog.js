import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:4000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, content, isPremium })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to create blog');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="create-blog-container">
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} required />
        <label>
          <input type="checkbox" checked={isPremium} onChange={e => setIsPremium(e.target.checked)} />
          Premium Blog
        </label>
        <button type="submit">Create</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default CreateBlog; 