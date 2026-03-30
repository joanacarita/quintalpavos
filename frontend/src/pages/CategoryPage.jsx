import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { menuItems, footerPavoes, footerLinks, contactInfo, newsArticles } from '../mock';
import '../styles/CategoryPage.css';

const categoryArticles = {
  'pavoes': [
    { id: '1', title: 'Black Shoulder Pied White-Eyed', description: 'Asa Negra Arlequim White-eyed', image: 'https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg', slug: 'black-shoulder-pied-white-eyed' },
    { id: '2', title: 'Buford Bronze | Bronze', description: 'Rich bronze coloration', image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg', slug: 'buford-bronze' },
    { id: '3', title: 'Bronze White-Eyed', description: 'Bronze with white eyes', image: 'https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg', slug: 'bronze-white-eyed' },
    { id: '4', title: 'Cameo White-Eyed', description: 'Cameo de Olhos Brancos', image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg', slug: 'cameo-white-eyed' },
    { id: '5', title: 'Cameo Silver Pied', description: 'Cameo Arlequim Prateado', image: 'https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg', slug: 'cameo-silver-pied' },
    { id: '6', title: 'Cameo Pied White-Eyed', description: 'Cameo Arlequim White-eyed', image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg', slug: 'cameo-pied-white-eyed' },
    { id: '7', title: 'Cameo Black Shoulder Pied White-Eyed', description: 'Complex pattern variety', image: 'https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg', slug: 'cameo-black-shoulder-pied-white-eyed' },
    { id: '8', title: 'Cameo Black Shoulder Silver Pied', description: 'Silver pattern variety', image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg', slug: 'cameo-black-shoulder-silver-pied' },
    { id: '9', title: 'Dark Silver Pied', description: 'Arlequim Prateado Escuro', image: 'https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg', slug: 'dark-silver-pied' },
    { id: '10', title: 'India Blue | Azul', description: 'Most widespread peafowl', image: 'https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg', slug: 'india-blue-azul' },
    { id: '11', title: 'India Blue Pied White-Eyed', description: 'Arlequim White-eyed', image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg', slug: 'india-blue-pied-white-eyed' },
    { id: '12', title: 'India Blue Silver Pied', description: 'Arlequim Prateado', image: 'https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg', slug: 'india-blue-silver-pied' },
    { id: '13', title: 'White Peafowl', description: 'Pavão Branco', image: 'https://images.unsplash.com/photo-1592849151221-89a0966b8a37', slug: 'white-peafowl' },
    { id: '14', title: 'Opal | Cinzento', description: 'Grey opalescent variety', image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg', slug: 'opal' },
    { id: '15', title: 'Opal White-Eyed', description: 'Cinzento white-eyed', image: 'https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg', slug: 'opal-white-eyed' },
    { id: '16', title: 'Opal Silver Pied', description: 'Cinzento Arlequim Prateado', image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg', slug: 'opal-silver-pied' },
    { id: '17', title: 'Prussian Blue', description: 'Azul da Prússia', image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg', slug: 'prussian-blue-azul-da-prussia' },
    { id: '18', title: 'Prussian Blue Black Shoulder', description: 'Azul da Prússia Asa Negra', image: 'https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg', slug: 'prussian-blue-black-shoulder' },
    { id: '19', title: 'Raw Umber', description: 'Unique Quintal Pavos variety', image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg', slug: 'raw-umber' },
    { id: '20', title: 'Raw Umber Black Shoulder', description: 'Raw Umber Asa Negra', image: 'https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg', slug: 'raw-umber-black-shoulder' },
    { id: '21', title: 'Spalding Pied', description: 'Spalding Arlequim', image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg', slug: 'spalding-pied' },
    { id: '22', title: 'Spalding Silver Pied', description: 'Spalding Arlequim Prateado', image: 'https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg', slug: 'spalding-silver-pied' },
    { id: '23', title: 'Spalding White', description: 'Branco Spalding', image: 'https://images.unsplash.com/photo-1592849151221-89a0966b8a37', slug: 'spalding-white' },
    { id: '24', title: 'Violet | Violeta', description: 'Beautiful violet variety', image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg', slug: 'violet' }
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
  'galinhas': [
    {
      id: '1',
      title: 'Fénix Branco',
      description: 'Variedade anã conhecida por Fénix Moderno Alemão',
      image: 'https://images.unsplash.com/photo-1592849151221-89a0966b8a37',
      slug: 'fenix-branco'
    }
  ],
  'news': [
    {
      id: '1',
      title: 'News / Novidades',
      description: 'Latest updates and available birds',
      image: 'https://images.unsplash.com/photo-1559048958-4d1a3dc247d1',
      slug: 'novidades'
    },
    {
      id: '2',
      title: 'Cisne-de-pescoço-preto',
      description: 'Information about black-necked swans',
      image: 'https://images.unsplash.com/photo-1727586198137-3932d7deef01',
      slug: 'cisne-de-pescoco-preto'
    },
    {
      id: '3',
      title: 'Fénix Branco',
      description: 'White Phoenix variety information',
      image: 'https://images.unsplash.com/photo-1592849151221-89a0966b8a37',
      slug: 'fenix-branco'
    }
  ],
  'perus': [
    {
      id: '1',
      title: 'Perus / Turkeys',
      description: 'Information about turkey varieties',
      image: 'https://images.unsplash.com/photo-1588597989061-b60ad0eefdbf',
      slug: 'quintal-pavos'
    }
  ],
  'destaques': [
    {
      id: '1',
      title: 'Destaques',
      description: 'Featured birds and highlights',
      image: 'https://images.unsplash.com/photo-1559048958-4d1a3dc247d1',
      slug: 'novidades'
    }
  ]
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
  'galinhas': {
    title: 'Galinhas',
    description: 'Various chicken breeds and varieties'
  },
  'news': {
    title: 'Novidades',
    description: 'Latest news and updates from Quintal Pavos'
  },
  'perus': {
    title: 'Perus',
    description: 'Turkey varieties information'
  },
  'destaques': {
    title: 'Destaques',
    description: 'Featured birds and highlights from Quintal Pavos'
  }
};

const CategoryPage = () => {
  const { category } = useParams();
  const location = window.location.pathname.replace('/', '');
  const categorySlug = category || location || 'pavoes';
  const articles = categoryArticles[categorySlug] || [];
  const info = categoryInfo[categorySlug] || { title: 'Category', description: '' };

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
              <Link 
                to={categorySlug === 'pavoes' ? `/pavoes/${article.slug}` : `/article/${article.slug}`} 
                key={article.id} 
                className="category-card"
              >
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
