import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>AI Engineering Blog | Articles on Python, RAG & LLMs</title>
        <meta name="description" content="Read insightful articles on AI engineering, Python development, RAG systems, Large Language Models, and backend architecture from Nymul Islam Moon." />
        <meta name="keywords" content="AI Blog, Python Articles, RAG Systems, LLM, Machine Learning, Backend Development, Tech Articles" />
        <meta property="og:title" content="AI Engineering Blog - Latest Articles & Insights" />
        <meta property="og:description" content="Explore in-depth articles on AI systems, Python, RAG, and enterprise backend development." />
        <link rel="canonical" href="https://nymul-islam-moon.github.io/#/blog" />
      </Helmet>
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
    </>
  );
}
