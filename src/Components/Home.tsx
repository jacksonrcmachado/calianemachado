import React from "react";
import "./Home.css"; // Arquivo CSS para estilos

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Imagem principal */}
      <div className="full-width-image">
        <img src="/imagens/Home/Capa.jpg" alt="Capa" />
      </div>

      {/* Seção Projetos */}
      <section className="projects-section">
        <h1 className="section-title">Projetos</h1>
        <p className="section-description">
          Diagramação e desenvolvimento de materiais para uso impresso e digital.
        </p>
        <div className="project-images">
          <img
            src="/imagens/Home/Bea_Feitler_Cartaz.jpg"
            alt="Bea Feitler Cartaz"
            className="portrait-image"
          />

          <div className="double-images">
            <img
              src="/imagens/Home/Cartoes_Identificacao.png"
              alt="Cartões de Identificação"
              className="portrait-image-small"
            />
            <img
              src="/imagens/Home/Planner.jpg"
              alt="Planner"
              className="portrait-image-small"
            />
          </div>

          <img
            src="/imagens/Home/Trabalho_Final.jpg"
            alt="Ilustração Verão"
            className="portrait-image"
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
            src="/imagens/Home/Janaina_Capa.png"
            alt="Janaína Capa"
            className="landscape-image"
          />
          <img
            src="/imagens/Home/Raquel-Saulo_Capa.png"
            alt="Raquel e Saulo Capa"
            className="landscape-image"
          />
        </div>
        <div className="album-images">
          <img
            src="/imagens/Home/Marina_Capa.png"
            alt="Marina Capa"
            className="landscape-image"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
