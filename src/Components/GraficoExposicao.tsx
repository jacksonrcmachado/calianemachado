import React from "react";
import "./GraficoExposicao.css";

const GraficoExposicao: React.FC = () => {
  return (
    <div className="detalhe-container">
      <div className="detalhe-titulo-grafico">
        <img
          src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Exposicao/CapapanoramicaExposicao.webp`)}
          alt="Contracultura"
          className="detalhe-titulo-imagem"
        />
      </div>

      <h2 className="detalhe-subtitulo">Exposição Bea Feitler</h2>

      <div className="detalhe-intro">
        <div className="detalhe-capa">
          <img
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Exposicao/caliane_machado_cartaz_Cartaz 01.webp`)}
            alt="Cartaz Exposição Bea Feitler"
            className="detalhe-capa-imagem"
          />
        </div>

        <div className="detalhe-texto">
          <p className="detalhe-paragrafo">
            Quando se fala em mulheres no design, rapidamente encontramos o
            nome de Bea Feitler. Uma autoridade do design editorial, pouco
            conhecida no Brasil, mas com uma trajetória brilhante no exterior.
          </p>
          <p className="detalhe-paragrafo">
            Neste projeto foram desenvolvidas peças para divulgação de uma
            exposição fictícia em sua homenagem.
          </p>

          <h3 className="detalhe-entregas-titulo">Entregas:</h3>
          <ul className="detalhe-entregas-lista">
            <li>Cartaz</li>
            <li>Banner</li>
            <li>Folder</li>
            <li>Ingresso</li>
            <li>Brindes</li>
            <li>Peça para redes sociais</li>
          </ul>
        </div>
      </div>

      <div className="detalhe-galeria">
        <img className="detalhe-galeria-imagem" src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Exposicao/Banner.webp`)} alt="Banner Exposição Bea Feitler" />
        <img className="detalhe-galeria-imagem" src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Exposicao/Midia.webp`)} alt="Peça para redes sociais Exposição Bea Feitler" />
        <img className="detalhe-galeria-imagem" src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Exposicao/Folder Final.webp`)} alt="Folder Exposição Bea Feitler" />
        <img className="detalhe-galeria-imagem" src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Exposicao/Ingresso.webp`)} alt="Ingresso Exposição Bea Feitler" />
        <img className="detalhe-galeria-imagem" src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Exposicao/Camiseta_rosa.webp`)} alt="Camiseta Exposição Bea Feitler - foto 1" />
        <img className="detalhe-galeria-imagem" src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Exposicao/Camiseta_verde.webp`)} alt="Camiseta Exposição Bea Feitler - foto 2" />
        <img className="detalhe-galeria-imagem" src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Exposicao/Ecobag_rosa.webp`)} alt="Sacola brinde Exposição Bea Feitler - foto 1" />
        <img className="detalhe-galeria-imagem" src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Exposicao/Ecobag_verde.webp`)} alt="Sacola brinde Exposição Bea Feitler - foto 2" />
      </div>

      <div className="detalhe-rodape">
        <img
          className="detalhe-logo"
          src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/logo_Prancheta.webp`)}
          alt="Caliane Machado Design Gráfica"
        />
        <a href="/graficoilustracao" className="detalhe-proximo">
          PRÓXIMO
        </a>
      </div>
    </div>
  );
};

export default GraficoExposicao;