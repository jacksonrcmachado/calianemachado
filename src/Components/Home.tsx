import React from "react";
import { useNavigate } from "react-router-dom"; // ⬅ Importante
import { Link } from 'react-router-dom';
import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate(); // ⬅ Hook para navegação

  return (
    <div className="home-container">

      {/* Imagem principal */}
      <div className="full-width-image">
        <img src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Home/Capa.webp`)} alt="Capa" />
      </div>

      {/* Seção Gráfico */}
      <section className="chart-section">
        <h1 className="section-title">Gráfico</h1>
        <p className="section-description">
          Diagramação e desenvolvimento de materiais para uso impresso e digital.
        </p>

        <div className="chart-grid">

          {/* Coluna Esquerda */}
          <div className="chart-column left-column">
            <Link to="/graficoexposicao">
            <img
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Home/Bea_Feitler_Cartaz.webp`)}
              alt="Bea Feitler Cartaz"
              className="img-left-1"/>
            </Link>

            <img
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Home/Trabalho_Final.webp`)}
              alt="Trabalho Final"
              className="img-left-2"
            />
          </div>

          {/* Coluna Direita */}
          <div className="chart-column right-column">
           <Link to="/graficopapelaria">
            <img
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Home/Cartoes_Identificacao.webp`)}
              alt="Cartões de Identificação"
              className="img-right-1"/>
            </Link>

            <Link to="/graficominhamarca">
            <img
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Home/Planner.webp`)}
              alt="Planner"
              className="img-right-2"/>
            </Link>

            <Link to="/graficoidvisual">
            <img
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/grafico/IDRaquel/IDRaquel_Capa.webp`)}              
              alt="Capa Raquel"
              className="img-right-3"
            />
            </Link>
          </div>

        </div>
      </section>

      {/* Seção UX */}
      <section className="ux-section">
        <h1 className="section-title">UX</h1>
        <p className="section-description">
          Soluções eficazes para dores reais.
        </p>

        <div className="ux-images">
          <img
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Home/Capa_CASE-Learn-Quest.webp`)}
            alt="CASE-Learn-Quest Capa"
            className="landscape-image-ux"
            style={{ cursor: "pointer" }}         // ⬅ Estilo de clique
            onClick={() => {
              navigate("/ux");
              window.scrollTo(0, 0);
            }}       // ⬅ Navegação ao clicar
          />
        </div>
      </section>

      {/* Seção Álbuns */}
      <section className="albums-section">
        <h1 className="section-title">Álbuns</h1>
        <p className="section-description">
          Momentos especiais registrados de forma única.
        </p>

        <div className="album-images">
          <img
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Home/Janaina_Capa.webp`)}
            alt="Janaína Capa"
            className="landscape-image"
          />
          <img
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Home/Ianna_Capa.webp`)}
            alt="Ianna Capa"
            className="landscape-image"
          />
        </div>

        <div className="album-images">
          <img
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Home/Marina_Capa.webp`)}
            alt="Marina Capa"
            className="landscape-image"
          />
          <img
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Home/Marina_Formatura_Capa.webp`)}
            alt="Marina Formatura Capa"
            className="landscape-image"
          />
        </div>

        <div className="album-images">
          <img
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Home/Raquel-Saulo_Capa.webp`)}
            alt="Raquel e Saulo Capa"
            className="landscape-image"
          />
          <img
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Home/Debora_Thiago_Capa.webp`)}
            alt="Débora e Thiago Capa"
            className="landscape-image"
          />
        </div>

        <div className="album-images">
          <img
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Home/Antonio_Capa.webp`)}
            alt="Antônio Capa"
            className="landscape-image"
          />
        </div>
      </section>

    </div>
  );
};

export default Home;
