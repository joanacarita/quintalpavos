import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { menuItems, footerPavoes, footerLinks, contactInfo } from '../mock';
import { Mail, Phone, MapPin } from 'lucide-react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="quintal-pavos">
      <div className="foliage-background">
        <div className="foliage-left"></div>
        <div className="foliage-right"></div>
      </div>

      <div className="main-content">
        <Header menuItems={menuItems} />
        
        <div className="contact-page">
          <div className="contact-header">
            <h1 className="contact-title">Contactos</h1>
            <p className="contact-subtitle">Entre em contacto connosco</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info-section">
              <div className="contact-info-card">
                <div className="contact-icon">
                  <MapPin size={32} />
                </div>
                <h3>Localização</h3>
                <p>Portugal</p>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-icon">
                  <Phone size={32} />
                </div>
                <h3>Telefone</h3>
                <p>{contactInfo.phone}</p>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-icon">
                  <Mail size={32} />
                </div>
                <h3>Email</h3>
                <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
              </div>
            </div>
            
            <div className="contact-details">
              <h2>Quintal Pavos</h2>
              <p className="contact-person">{contactInfo.name}</p>
              <p>Somos criadores especializados de pavões e outras aves ornamentais. Com anos de experiência, oferecemos aves de alta qualidade e aconselhamento especializado.</p>
              
              <h3>Horário de Atendimento</h3>
              <p>Visitas mediante marcação prévia</p>
              
              <h3>Como Chegar</h3>
              <p>Entre em contacto connosco para obter indicações detalhadas para as nossas instalações.</p>
            </div>
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

export default ContactPage;
