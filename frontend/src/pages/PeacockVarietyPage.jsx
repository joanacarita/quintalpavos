import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { menuItems, footerPavoes, footerLinks, contactInfo } from '../mock';
import '../styles/ArticlePage.css';

// Peacock variety information
const peacockVarieties = {
  'black-shoulder-pied-white-eyed': {
    title: 'Black Shoulder Pied White-Eyed | Asa Negra Arlequim White-eyed',
    description: 'A beautiful peacock variety with black shoulder pattern and white-eyed pied coloring.'
  },
  'buford-bronze': {
    title: 'Buford Bronze | Bronze',
    description: 'The Buford Bronze peacock variety features rich bronze coloration with distinctive patterns.'
  },
  'bronze-white-eyed': {
    title: 'Bronze White-Eyed',
    description: 'A bronze peacock variety with striking white-eyed characteristics.'
  },
  'cameo-white-eyed': {
    title: 'Cameo White-Eyed | Cameo de Olhos Brancos',
    description: 'The Cameo White-Eyed peacock variety displays soft cameo coloration with white eyes.'
  },
  'cameo-silver-pied': {
    title: 'Cameo Silver Pied | Cameo Arlequim Prateado',
    description: 'Beautiful cameo peacock with silver pied pattern.'
  },
  'cameo-pied-white-eyed': {
    title: 'Cameo Pied White-Eyed | Cameo Arlequim White-eyed',
    description: 'Cameo peacock variety with pied pattern and white eyes.'
  },
  'cameo-black-shoulder-pied-white-eyed': {
    title: 'Cameo Black Shoulder Pied White-Eyed',
    description: 'Cameo variety featuring black shoulder, pied pattern, and white eyes.'
  },
  'cameo-black-shoulder-silver-pied': {
    title: 'Cameo Black Shoulder Silver Pied',
    description: 'Cameo peacock with black shoulder and silver pied markings.'
  },
  'dark-silver-pied': {
    title: 'Dark Silver Pied | Arlequim Prateado Escuro',
    description: 'A striking peacock variety with dark silver pied coloration.'
  },
  'india-blue-pied-white-eyed': {
    title: 'India Blue Pied White-Eyed | Arlequim White-eyed',
    description: 'Classic India Blue peacock with pied pattern and white eyes.'
  },
  'india-blue-silver-pied': {
    title: 'India Blue Silver Pied | Arlequim Prateado',
    description: 'India Blue variety featuring silver pied pattern.'
  },
  'white-peafowl': {
    title: 'White Peafowl | Pavão Branco',
    description: 'Pure white peacock variety with elegant white plumage throughout.'
  },
  'opal': {
    title: 'Opal | Cinzento',
    description: 'The Opal peacock variety displays beautiful grey-toned opalescent coloration.'
  },
  'opal-white-eyed': {
    title: 'Opal White-Eyed | Cinzento white-eyed',
    description: 'Opal peacock variety with distinctive white eyes.'
  },
  'opal-silver-pied': {
    title: 'Opal Silver Pied | Cinzento Arlequim Prateado',
    description: 'Opal variety featuring silver pied markings.'
  },
  'prussian-blue-black-shoulder': {
    title: 'Prussian Blue Black Shoulder | Azul da Prússia Asa Negra',
    description: 'Prussian Blue peacock with black shoulder pattern.'
  },
  'raw-umber': {
    title: 'Raw Umber',
    description: 'A unique peacock variety developed at Quintal Pavos with distinctive raw umber coloration.'
  },
  'raw-umber-black-shoulder': {
    title: 'Raw Umber Black Shoulder | Raw Umber Asa Negra',
    description: 'Raw Umber variety featuring black shoulder pattern.'
  },
  'spalding-pied': {
    title: 'Spalding Pied | Spalding Arlequim',
    description: 'Spalding peacock variety with pied pattern.'
  },
  'spalding-silver-pied': {
    title: 'Spalding Silver Pied | Spalding Arlequim Prateado',
    description: 'Spalding variety with silver pied markings.'
  },
  'spalding-white': {
    title: 'Spalding White | Branco Spalding',
    description: 'Pure white Spalding peacock variety with larger size.'
  },
  'violet': {
    title: 'Violet | Violeta',
    description: 'Beautiful violet-toned peacock variety with purple and violet plumage.'
  }
};

const PeacockVarietyPage = () => {
  const { variety } = useParams();
  const varietyInfo = peacockVarieties[variety] || {
    title: 'Peacock Variety',
    description: 'Information about this peacock variety.'
  };

  return (
    <div className="quintal-pavos">
      <div className="foliage-background">
        <div className="foliage-left"></div>
        <div className="foliage-right"></div>
      </div>

      <div className="main-content">
        <Header menuItems={menuItems} />
        
        <div className="article-page">
          <div className="article-header">
            <img 
              src="https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg" 
              alt={varietyInfo.title} 
              className="article-header-image" 
            />
            <div className="article-header-overlay">
              <h1 className="article-title">{varietyInfo.title}</h1>
            </div>
          </div>
          
          <div className="article-content">
            <p>{varietyInfo.description}</p>
            <p>Esta variedade de pavão está disponível no Quintal Pavos. Para mais informações sobre disponibilidade e características específicas desta variedade, entre em contacto connosco.</p>
            
            <h3>Contacto</h3>
            <p>Email: <a href="mailto:caritaquintalpavos@gmail.com">caritaquintalpavos@gmail.com</a></p>
            <p>Telefone: +351 914 558 518</p>
          </div>
          
          <div className="article-navigation">
            <Link to="/pavoes" className="back-link">← Voltar para Pavões</Link>
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

export default PeacockVarietyPage;
