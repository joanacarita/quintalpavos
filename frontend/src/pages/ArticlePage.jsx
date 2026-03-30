import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { menuItems, footerPavoes, footerLinks, contactInfo } from '../mock';
import '../styles/ArticlePage.css';

// Extended article content
const articleContent = {
  'cites': {
    title: 'CITES',
    image: 'https://images.unsplash.com/photo-1559048958-4d1a3dc247d1',
    content: `
      <h2>Informação sobre CITES</h2>
      <p>CITES (Convention on International Trade in Endangered Species of Wild Fauna and Flora) é um acordo internacional entre governos que visa garantir que o comércio internacional de espécimes de animais e plantas selvagens não ameace a sua sobrevivência.</p>
      
      <h3>Pavões da espécie Pavo cristatus</h3>
      <p>A espécie Pavo cristatus, sendo dos Anexos IIIC da CITES, requer documentação específica para criação e comercialização. O pavão azul da Índia está listado no Anexo III da CITES por alguns países.</p>
      
      <h3>Requisitos Legais</h3>
      <p>Para criar e comercializar pavões em Portugal, é necessário:</p>
      <ul>
        <li>Registo junto das autoridades competentes</li>
        <li>Documentação CITES apropriada para exportação/importação</li>
        <li>Certificados de origem dos animais</li>
        <li>Cumprimento das normas de bem-estar animal</li>
      </ul>
      
      <p>Para mais informações, contacte as autoridades CITES portuguesas ou consulte o website oficial da CITES.</p>
    `
  },
  'quintal-pavos': {
    title: 'Quintal Pavos',
    image: 'https://images.unsplash.com/photo-1578885564199-db62248858cf',
    content: `
      <h2>Welcome to Quintal Pavos</h2>
      <p>O Quintal Pavos é um projeto dedicado à criação e preservação de pavões e outras aves ornamentais. Nossa paixão é criar aves saudáveis e belas, mantendo os mais altos padrões de qualidade e bem-estar animal.</p>
      
      <h3>Nossa Missão</h3>
      <p>Especializamo-nos em várias variedades de pavões, incluindo:</p>
      <ul>
        <li>India Blue (Azul da Índia)</li>
        <li>Prussian Blue (Azul da Prússia)</li>
        <li>White Spalding (Branco Spalding)</li>
        <li>Violet (Violeta)</li>
      </ul>
      
      <h3>Experiência e Conhecimento</h3>
      <p>Com anos de experiência na criação de pavões, oferecemos não apenas aves de alta qualidade, mas também aconselhamento e apoio para novos criadores.</p>
    `
  },
  'cisne-de-pescoco-preto': {
    title: 'Cisne-de-pescoço-preto',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Black-necked_swan_%28Cygnus_melancoryphus%29_Santiago.jpg',
    content: `
      <h2>Cisne-de-pescoço-preto (Cygnus melancoryphus)</h2>
      <p>O cisne-de-pescoço-preto é uma ave anseriforme da família Anatidae. É o único cisne nativo da América do Sul.</p>
      
      <h3>Características</h3>
      <ul>
        <li>Pescoço distintamente preto</li>
        <li>Corpo branco puro</li>
        <li>Carúncula vermelha na base do bico</li>
        <li>Tamanho médio de 102-124 cm de comprimento</li>
      </ul>
    `
  },
  'prussian-blue-azul-da-prussia': {
    title: 'Prussian Blue | Azul da Prússia',
    image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg',
    content: `
      <h2>Origin of the Prussian Blue Peafowl</h2>
      <p>O Prussian Blue é uma mutação de cor espetacular do pavão India Blue. Esta variedade é caracterizada por tons de azul mais profundos e intensos.</p>
      
      <h3>Características Distintivas</h3>
      <ul>
        <li>Azul mais escuro e intenso que o India Blue</li>
        <li>Reflexos metálicos mais pronunciados</li>
        <li>Cauda com padrões de olhos (ocelos) mais definidos</li>
      </ul>
    `
  },
  'india-blue-azul': {
    title: 'India Blue | Azul',
    image: 'https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg',
    content: `
      <h2>India Blue Peafowl</h2>
      <p>Native to India, the India Blue Peafowl is the most widespread and known Peafowl in the world.</p>
      
      <h3>Physical Characteristics</h3>
      <ul>
        <li>Brilliant blue neck and breast</li>
        <li>Iridescent green and blue train feathers</li>
        <li>Distinctive eye spots (ocelli) on tail feathers</li>
      </ul>
    `
  }
};

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articleContent[slug] || articleContent['quintal-pavos'];

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
            <img src={article.image} alt={article.title} className="article-header-image" />
            <div className="article-header-overlay">
              <h1 className="article-title">{article.title}</h1>
            </div>
          </div>
          
          <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <div className="article-navigation">
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

export default ArticlePage;
