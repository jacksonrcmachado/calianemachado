import React from "react";
import "./GraficoMktDigital.css";

const GraficoMktDigital: React.FC = () => {
  return (
    <div className="mkt-container">
      <div className="mkt-topo">
        <img
          className="mkt-topo-imagem"
          src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/MKTDigital/CAPAMKT.webp`)}
          alt="Peças de destaque - Espaço Vida e Beleza"
        />
      </div>

      <div className="mkt-conteudo">
        <h2 className="mkt-titulo">Marketing Digital</h2>

        <p className="mkt-paragrafo">
          Peças digitais desenvolvidas para uso em Redes Sociais.
        </p>

        <div className="mkt-mockup-container">
          <img
            className="mkt-mockup-imagem"
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/MKTDigital/Posts.webp`)}
            alt="Mockup das peças para redes sociais - Espaço Vida e Beleza"
          />
        </div>

        <div className="mkt-rodape">
          <a href="/Graficopapelaria" className="mkt-anterior">
            ANTERIOR
          </a>
          <img
            className="mkt-logo"
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/logo_Prancheta.webp`)}
            alt="Caliane Machado Design Gráfica"
          />
          <a href="/Graficoidvisual" className="mkt-proximo">
            PRÓXIMO
          </a>
        </div>
      </div>
    </div>
  );
};

export default GraficoMktDigital;