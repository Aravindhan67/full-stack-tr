import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  const handleCreate = () => {
    navigate('/create');
  };

  return (
    <div className="dashboard-container">
      <h2>All Blogs</h2>
      <button onClick={handleCreate}>Create Blog</button>
      {loading ? <p>Loading...</p> : (
        <ul className="blog-list">
          {blogs.map(blog => (
            <li key={blog._id}>
              <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
              {blog.isPremium && <span className="premium-tag">Premium</span>}
              <span> by {blog.author?.username}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard; 