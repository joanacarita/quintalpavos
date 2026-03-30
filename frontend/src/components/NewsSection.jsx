import React from 'react';
import { MessageCircle } from 'lucide-react';

const NewsSection = ({ articles, onArticleClick }) => {
  return (
    <section className="news-section">
      <div className="section-title-wrapper">
        <h2 className="section-title">NOVIDADES</h2>
      </div>
      
      <div className="news-grid">
        {articles.map((article, index) => (
          <div 
            key={article.id}
            className={`news-card ${article.featured ? 'featured' : ''}`}
            onClick={() => onArticleClick(article)}
          >
            <div className="news-image-wrapper">
              <img 
                src={article.image} 
                alt={article.title}
                className="news-image"
              />
              <div className="news-overlay">
                <h3 className="news-title">{article.title}</h3>
              </div>
            </div>
            <div className="news-meta">
              <button className="comments-link">
                <MessageCircle size={16} />
                <span>{article.comments}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
