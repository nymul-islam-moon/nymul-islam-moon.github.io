import { useEffect } from 'react';
import { blogData } from '../../data/blogData';

export default function BlogModal({ blogId, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (blogId) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [blogId, onClose]);

  if (!blogId || !blogData[blogId]) {
    return null;
  }

  const blog = blogData[blogId];

  return (
    <div className="modal" style={{ display: blogId ? 'block' : 'none' }} onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{blog.title}</h2>
        <p className="blog-meta"><strong>Date:</strong> {blog.date} | <strong>Author:</strong> {blog.author}</p>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </div>
    </div>
  );
}
