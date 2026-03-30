import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header = ({ menuItems, onMenuClick }) => {
  const [openDropdown, setOpenDropdown] = React.useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="header-wrapper">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-container">
          <div className="peacock-silhouette">
            <svg viewBox="0 0 100 100" className="peacock-icon">
              <path d="M50 20 L45 35 L40 45 L35 50 L30 52 L30 55 L35 60 L40 70 L45 75 L50 78 L50 85 L52 85 L52 78 L57 75 L62 70 L67 60 L72 55 L72 52 L67 50 L62 45 L57 35 Z" fill="#1a1a1a" />
            </svg>
          </div>
          <div className="logo-text">
            <h1 className="site-title">Quintal Pavos</h1>
            <p className="site-tagline">o prazer de criar</p>
          </div>
          <div className="peacock-feather">
            <img 
              src="https://images.unsplash.com/photo-1578885564199-db62248858cf" 
              alt="Peacock Feather"
              className="feather-image"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="main-nav">
        <ul className="nav-list">
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className={`nav-item ${item.submenu ? 'has-dropdown' : ''}`}
              onMouseEnter={() => item.submenu && setOpenDropdown(item.label)}
              onMouseLeave={() => item.submenu && setOpenDropdown(null)}
            >
              <button
                className="nav-link"
                onClick={() => onMenuClick(item.link)}
              >
                {item.label}
                {item.submenu && <ChevronDown className="dropdown-icon" size={16} />}
              </button>
              {item.submenu && openDropdown === item.label && (
                <ul className="dropdown-menu">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <button
                        className="dropdown-link"
                        onClick={() => onMenuClick(subItem.link)}
                      >
                        {subItem.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
