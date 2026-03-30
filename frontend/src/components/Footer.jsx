import React from 'react';

const Footer = ({ pavoes, links, contact }) => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-heading">PAVOES</h3>
          <div className="footer-pavoes-list">
            {pavoes.map((item, index) => (
              <div key={index} className="footer-pavoes-item">
                <img src={item.image} alt={item.title} className="footer-pavoes-image" />
                <a href={item.link} className="footer-pavoes-link">{item.title}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">AVES QUINTAL PAVOS</h3>
          <ul className="footer-links">
            {links.avesQuintalPavos.map((link, index) => (
              <li key={index}>
                <a href={link.link} className="footer-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">CONTACTOS</h3>
          <div className="contact-info">
            <p className="contact-name">{contact.name}</p>
            <a href={`mailto:${contact.email}`} className="contact-email">{contact.email}</a>
            <p className="contact-phone">{contact.phone}</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2026 | WordPress Theme by MH Themes</p>
      </div>
    </footer>
  );
};

export default Footer;
