import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  // Define as páginas
  const pages = [
    { path: "/sobre", label: "SOBRE" },
    { path: "/grafico", label: "GRÁFICO" },
    { path: "/ux", label: "UX" },
    { path: "/albuns", label: "ÁLBUNS" },
  ];

  const isHome = path === "/";

  // Remove o link da página atual quando NÃO está na Home
  const filteredPages = !isHome
    ? pages.filter((p) => p.path !== path)
    : pages;

  return (
    <header className="header">
      <div className="nav-links">

        {/* Se NÃO estiver na home, mostra o link HOME antes de tudo */}
        {!isHome && (
          <a href="/" className="link">HOME</a>
        )}

        {filteredPages.map((page) => (
          <a key={page.path} href={page.path} className="link">
            {page.label}
          </a>
        ))}
      </div>

      <div className="logo">
        <img src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/LogoBranco-02.webp`)} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
