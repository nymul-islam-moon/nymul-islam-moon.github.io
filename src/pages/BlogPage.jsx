import { useState } from 'react';
import { blogList } from '../data/blogData';
import BlogModal from '../components/BlogModal/BlogModal';
import Footer from '../components/Footer/Footer';

export default function BlogPage() {
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const handleBlogClick = (blog) => {
    if (blog.externalLink) {
      window.open(blog.externalLink, '_blank');
    } else {
      setSelectedBlogId(blog.id);
    }
  };

  const handleCloseBlogModal = () => {
    setSelectedBlogId(null);
  };

  return (
    <main className="main-content" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <section className="blog section" id="blog">
        <div className="container">
          <h2 className="section-title padd-15">Latest Blog Posts</h2>
          <div className="row">
            {blogList.map(blog => (
              <div key={blog.id} className="blog-item padd-15">
                <div className="inner" onClick={() => handleBlogClick(blog)} role="button" style={{ cursor: 'pointer' }}>
                  <div className="thumb">
                    <a href="javascript:void(0)"><span className="category">{blog.category}</span></a>
                    <a href="javascript:void(0)"><img src={blog.image} alt="Blog Thumbnail" /></a>
                  </div>
                  <div className="details">
                    <h3 className="title">{blog.title}</h3>
                    <ul className="meta">
                      <li>{blog.date}</li>
                      <li>{blog.author}</li>
                    </ul>
                    <a href="javascript:void(0)" className="btn btn-default">Read More</a>
                    {blog.externalLink && <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.5rem' }}>📎 Read on external site</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <BlogModal blogId={selectedBlogId} onClose={handleCloseBlogModal} />
    </main>
  );
}
