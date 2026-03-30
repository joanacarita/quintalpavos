import React from 'react';
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
  const handleMenuClick = (link) => {
    console.log('Navigate to:', link);
    // In a full implementation, this would use React Router
  };

  const handleSlideClick = (link) => {
    console.log('Navigate to slide:', link);
  };

  const handleArticleClick = (article) => {
    console.log('View article:', article);
  };

  return (
    <div className="quintal-pavos">
      <div className="foliage-background">
        <div className="foliage-left"></div>
        <div className="foliage-right"></div>
      </div>

      <div className="main-content">
        <Header menuItems={menuItems} onMenuClick={handleMenuClick} />
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
