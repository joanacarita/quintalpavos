import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';
import { 
  sliderArticles,
  newsArticles,
  menuItems,
  footerPavoes,
  footerLinks,
  contactInfo
} from '../mock';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSlideClick = (link) => {
    navigate(link);
  };

  const handleArticleClick = (article) => {
    navigate('/article/news-novidades');
  };

  return (
    <div className="quintal-pavos">
      <div className="foliage-background">
        <div className="foliage-left"></div>
        <div className="foliage-right"></div>
      </div>

      <div className="main-content">
        <Header menuItems={menuItems} />
        <HeroSlider slides={sliderArticles} onSlideClick={handleSlideClick} />
        <NewsSection articles={newsArticles} onArticleClick={handleArticleClick} />
      </div>

      <Footer 
        pavoes={footerPavoes} 
        links={footerLinks} 
        contact={contactInfo} 
      />
    </div>
  );
};

export default HomePage;
