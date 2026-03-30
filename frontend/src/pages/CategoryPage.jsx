import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { menuItems, footerPavoes, footerLinks, contactInfo, newsArticles } from '../mock';
import '../styles/CategoryPage.css';

const categoryArticles = {
  'pavoes': [
    {
      id: '1',
      title: 'India Blue | Azul',
      description: 'The most widespread and known Peafowl in the world',
      image: 'https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg',
      slug: 'india-blue-azul'
    },
    {
      id: '2',
      title: 'Prussian Blue | Azul da Prússia',
      description: 'A stunning deep blue color mutation',
      image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg',
      slug: 'prussian-blue-azul-da-prussia'
    }
  ],
  'cisnes': [
    {
      id: '1',
      title: 'Cisne-de-pescoço-preto',
      description: 'O único cisne nativo da América do Sul',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Black-necked_swan_%28Cygnus_melancoryphus%29_Santiago.jpg',
      slug: 'cisne-de-pescoco-preto'
    }
  ],
  'news': newsArticles.map(article => ({
    ...article,
    slug: 'news-novidades',
    description: article.title
  }))
};

const categoryInfo = {
  'pavoes': {
    title: 'Pavões',
    description: 'Explore our collection of beautiful peafowl varieties'
  },
  'cisnes': {
    title: 'Cisnes',
    description: 'Elegant swan species in our collection'
  },
  'news': {
    title: 'Novidades',
    description: 'Latest news and updates from Quintal Pavos'
  }
};

const CategoryPage = () => {
  const { category } = useParams();
  const articles = categoryArticles[category] || [];
  const info = categoryInfo[category] || { title: 'Category', description: '' };

  return (
    <div className="quintal-pavos">
      <div className="foliage-background">
        <div className="foliage-left"></div>
        <div className="foliage-right"></div>
      </div>

      <div className="main-content">
        <Header menuItems={menuItems} />
        
        <div className="category-page">
          <div className="category-header">
            <h1 className="category-title">{info.title}</h1>
            <p className="category-description">{info.description}</p>
          </div>
          
          <div className="category-grid">
            {articles.map((article) => (
              <Link to={`/article/${article.slug}`} key={article.id} className="category-card">
                <div className="category-card-image-wrapper">
                  <img src={article.image} alt={article.title} className="category-card-image" />
                </div>
                <div className="category-card-content">
                  <h3 className="category-card-title">{article.title}</h3>
                  <p className="category-card-description">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="category-navigation">
            <Link to="/" className="back-link">← Voltar à Página Inicial</Link>
          </div>
        </div>
      </div>

      <Footer 
        pavoes={footerPavoes} 
        links={footerLinks} 
        contact={contactInfo} 
      />
    </div>
  );
};

export default CategoryPage;
