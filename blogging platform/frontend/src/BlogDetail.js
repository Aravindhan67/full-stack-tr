import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`http://localhost:4000/blogs/${id}`, {
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    })
      .then(res => res.json().then(data => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        if (!ok) throw new Error(data.message);
        setBlog(data);
      })
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <div className="blog-detail-container"><p className="error">{error}</p></div>;
  if (!blog) return <div className="blog-detail-container"><p>Loading...</p></div>;

  return (
    <div className="blog-detail-container">
      <h2>{blog.title} {blog.isPremium && <span className="premium-tag">Premium</span>}</h2>
      <p>{blog.content}</p>
      <p><strong>Author:</strong> {blog.author?.username}</p>
    </div>
  );
}

export default BlogDetail; 