import React from "react";
import { Link } from 'react-router-dom';
import "./Grafico.css";

const Grafico: React.FC = () => {
  return (
    <div className="projetos-container">
      <div className="projetos-header">
        <h1 className="projetos-titulo">Gráfico</h1>

        <div className="projetos-borboleta-container">
          <img
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Logo_reduzido.webp`)}
            alt="Logo"
            className="projetos-borboleta"
          />
        </div>
      </div>

      <div className="projetos-grid">
        <div className="projeto-item">
          <h2 className="projeto-titulo">Exposição Bea Feitler</h2>
          <div className="projeto-card">
            <Link to="/graficoexposicao">
            <img
              className="projeto-imagem"
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/grafico/exposicao/caliane_machado_cartaz_Cartaz 01.webp`)}
              alt="Exposição Bea Feitler"
            />
            </Link>
          </div>
        </div>

        <div className="projeto-item">
          <h2 className="projeto-titulo">Ilustrações - Beatriz Milhazes.</h2>
          <div className="projeto-card">
            <Link to="/graficoilustracao">
            <img
              className="projeto-imagem"
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/grafico/ilustracoes/Ilustracoes.webp`)}
              alt="Ilustrações - Beatriz Milhazes"
            />
            </Link>
          </div>
        </div>

        <div className="projeto-item">
          <h2 className="projeto-titulo">Minha marca</h2>
          <div className="projeto-card">
           <Link to="/graficominhamarca">
            <img
              className="projeto-imagem"
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/logo_Prancheta.webp`)}
              alt="Minha marca"
            />
            </Link>
          </div>
        </div>

        <div className="projeto-item">
          <h2 className="projeto-titulo">Papelaria para casamento</h2>
          <div className="projeto-card">
           <Link to="/graficopapelaria">
            <img
              className="projeto-imagem"
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/grafico/Papelaria/Convite.webp`)}
              alt="Papelaria para casamento"
            />
            </Link>
          </div>
        </div>

        <div className="projeto-item">
          <h2 className="projeto-titulo">Marketing Digital</h2>
          <div className="projeto-card">
            <Link to="/graficomktdigital">
            <img
              className="projeto-imagem"
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/grafico/MKTDigital/Post6.webp`)}
              alt="Marketing Digital"
            />
            </Link>
          </div>
        </div>

        <div className="projeto-item">
          <h2 className="projeto-titulo">Identidade Visual</h2>
          <div className="projeto-card">
            <Link to="/graficoidvisual">
            <img
              className="projeto-imagem"
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/grafico/IDRaquel/IDRaquel_Capa.webp`)}
              alt="Identidade Visual"
            />
            </Link>
          </div>
        </div>
      </div>

      <div className="projetos-logo-container">
        <img
          className="projetos-logo"
          src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/logo_Prancheta.webp`)}
          alt="Caliane Machado Design Gráfica"
        />
      </div>
    </div>
  );
};

export default Grafico;