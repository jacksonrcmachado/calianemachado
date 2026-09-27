import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Mede a altura real do header para o menu abrir exatamente abaixo dele
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Fecha o menu automaticamente ao trocar de rota
  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

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
    <header className="header" ref={headerRef}>
      {/* Botão hamburguer - só aparece no mobile via CSS */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
      >
        <span className="menu-icon-bar" />
        <span className="menu-icon-bar" />
        <span className="menu-icon-bar" />
      </button>

      <div
        className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}
        style={{ top: headerHeight }}
      >

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
