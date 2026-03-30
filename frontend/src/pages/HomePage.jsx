import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';
import { 
  getSliderArticles, 
  getNewsArticles, 
  getCategories, 
  getFooterArticles, 
  getSiteSettings 
} from '../services/api';
import { 
  sliderArticles as mockSliderArticles,
  newsArticles as mockNewsArticles,
  menuItems as mockMenuItems,
  footerPavoes as mockFooterPavoes,
  footerLinks as mockFooterLinks,
  contactInfo as mockContactInfo
} from '../mock';
import '../styles/HomePage.css';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [sliderArticles, setSliderArticles] = useState([]);
  const [newsArticles, setNewsArticles] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [footerPavoes, setFooterPavoes] = useState([]);
  const [contactInfo, setContactInfo] = useState({});
  const [footerLinks, setFooterLinks] = useState({ avesQuintalPavos: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch all data in parallel
        const [slider, news, categories, footerData, settings] = await Promise.all([
          getSliderArticles(),
          getNewsArticles(),
          getCategories(),
          getFooterArticles('pavoes', 2),
          getSiteSettings()
        ]);
        
        // Transform slider articles to match component format
        setSliderArticles(slider.map(article => ({
          id: article.id,
          title: article.title,
          description: article.description,
          image: article.image,
          link: `/${article.slug}`
        })));
        
        // Transform news articles
        setNewsArticles(news.map(article => ({
          id: article.id,
          title: article.title,
          image: article.image,
          comments: article.comments,
          featured: article.featured
        })));
        
        // Set categories
        setMenuItems(categories);
        
        // Transform footer articles
        setFooterPavoes(footerData.map(article => ({
          title: article.title,
          image: article.image,
          link: `/${article.slug}`
        })));
        
        // Set contact info
        setContactInfo({
          name: settings.name,
          email: settings.email,
          phone: settings.phone
        });
        
        // Generate footer links from categories
        const generatedFooterLinks = {
          avesQuintalPavos: categories
            .filter(cat => ['galinhas', 'cites', 'news', 'pavoes', 'cisnes'].includes(cat.slug))
            .map(cat => ({
              label: cat.label,
              link: cat.link
            }))
        };
        setFooterLinks(generatedFooterLinks);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data, using mock data:', error);
        // Fallback to mock data
        setSliderArticles(mockSliderArticles);
        setNewsArticles(mockNewsArticles);
        setMenuItems(mockMenuItems);
        setFooterPavoes(mockFooterPavoes);
        setFooterLinks(mockFooterLinks);
        setContactInfo(mockContactInfo);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading QuintalPavos...</p>
      </div>
    );
  }

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
