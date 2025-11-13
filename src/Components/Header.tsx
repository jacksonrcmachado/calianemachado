import React from 'react';
import './Header.css'; // Importa o arquivo CSS

const Header = () => {
  return (
    <header className="header">
      <div className="nav-links">
        <a href="/sobre" className="link">SOBRE</a>
        <a href="/albuns" className="link">ALBUNS</a>
        <a href="/projetos" className="link">PROJETOS</a>
      </div>
      <div className="logo">
        <img src="/imagens/LogoBranco-02.png" alt="Logo" />
      </div>
    </header>
  );
}

export default Header;
