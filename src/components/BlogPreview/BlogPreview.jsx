import { blogList } from '../../data/blogData';

export default function BlogPreview({ onBlogClick }) {
  const handleBlogClick = (blog) => {
    if (blog.externalLink) {
      window.open(blog.externalLink, '_blank');
    } else {
      onBlogClick(blog.id);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title padd-15">Latest Posts</h2>
        <div className="row">
          {blogList.map(blog => (
            <div key={blog.id} className="blog-item padd-15">
              <div className="inner" onClick={() => handleBlogClick(blog)} role="button" style={{ cursor: 'pointer' }}>
                <div className="thumb">
                  <a href="javascript:void(0)"><span className="category">{blog.category}</span></a>
                  <a href="javascript:void(0)"><img src={blog.image} alt={blog.title} /></a>
                </div>
                <div className="details">
                  <h3 className="title"><a href="javascript:void(0)">{blog.title}</a></h3>
                  <ul className="meta">
                    <li>{blog.date}</li>
                    <li>{blog.author}</li>
                  </ul>
                  {blog.externalLink && <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.5rem' }}>📎 Read on external site</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
