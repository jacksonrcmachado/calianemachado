import React from 'react';
import './Header.css'; // Importa o arquivo CSS

const Header = () => {
  return (
    <header className="header">
      <div className="nav-links">
        <a href="/" className="link">HOME</a>
        <a href="#" className="link">SOBRE</a>
        <a href="#" className="link">ALBUNS</a>
        <a href="#" className="link">PROJETOS</a>
      </div>
      <div className="logo">
        <img src="/imagens/LogoBranco-02.png" alt="Logo" />
      </div>
    </header>
  );
}

export default Header;
