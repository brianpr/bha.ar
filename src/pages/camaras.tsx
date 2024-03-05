import React, { useState } from 'react';
import Layout from '@theme/Layout';

function CustomPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Layout>
      <div className={`row ${isMenuOpen ? 'menu-open' : ''}`}>
        {/* Botón de hamburguesa visible solo en dispositivos móviles */}
        <div className="mobile-header">
          <button onClick={toggleMenu} className="menu-toggle">
            {isMenuOpen ? 'Close Menu' : 'Open Menu'}
          </button>
        </div>
        
        {/* Menú lateral */}
        <div className="col col--3">
          <div className="sidebar">
            <div className="sidebar__inner">
              <ul className="menu">
                <li className="menu__item">
                  <a href="#section1" className="menu__link">Section 1</a>
                </li>
                <li className="menu__item">
                  <a href="#section2" className="menu__link">Section 2</a>
                </li>
                {/* Add more menu items as needed */}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Contenido principal */}
        <div className="col col--9">
          <main>
            <h1 id="section1">Section 1</h1>
            <p>Content of section 1 goes here.</p>
            <h1 id="section2">Section 2</h1>
            <p>Content of section 2 goes here.</p>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default CustomPage;
