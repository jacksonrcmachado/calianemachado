import React from "react";
import "./GraficoIlustracao.css";

const GraficoIlustracao: React.FC = () => {
  return (
    <div className="ilustracoes-container">
      <img
        className="ilustracoes-banner"
        src="/imagens/Grafico/Ilustracoes/Capa_Panorâmica_Ilustração.webp"
        alt="Ilustrações Beatriz Milhazes - As quatro estações"
      />

      <div className="ilustracoes-conteudo">
        <h2 className="ilustracoes-subtitulo">Ilustrações Beatriz Milhazes</h2>

        <div className="ilustracoes-intro">
          <div className="ilustracoes-capa">
            <img
              className="ilustracoes-capa-imagem"
              src="/imagens/Grafico/Ilustracoes/01.webp"
              alt="Cartaz Inverno - Ilustrações Beatriz Milhazes"
            />
            <span className="ilustracoes-legenda">Inverno</span>
          </div>

          <div className="ilustracoes-texto">
            <p className="ilustracoes-paragrafo">
              Beatriz Milhazes é uma das maiores artístas plásticas
              brasileiras da atualidade. Suas peças fazem sucesso no mundo
              todo, com suas cores e formas típicas do Brasil.
            </p>
            <p className="ilustracoes-paragrafo">
              Neste projeto foram desenvolvidos cartazes com base na obra
              "As quatro estações". Todas as formas foram construídas á
              partir da tipografia Bodoni.
            </p>

            <h3 className="ilustracoes-entregas-titulo">Entregas:</h3>
            <ul className="ilustracoes-entregas-lista">
              <li>04 Cartazes</li>
            </ul>
          </div>
        </div>

        <div className="ilustracoes-galeria">
          <div className="ilustracoes-galeria-item">
            <img
              className="ilustracoes-galeria-imagem"
              src="/imagens/Grafico/Ilustracoes/03.webp"
              alt="Cartaz Outono - Ilustrações Beatriz Milhazes"
            />
            <span className="ilustracoes-legenda">Outono</span>
          </div>

          <div className="ilustracoes-galeria-item">
            <img
              className="ilustracoes-galeria-imagem"
              src="/imagens/Grafico/Ilustracoes/04.webp"
              alt="Cartaz Primavera - Ilustrações Beatriz Milhazes"
            />
            <span className="ilustracoes-legenda">Primavera</span>
          </div>

          <div className="ilustracoes-galeria-item">
            <img
              className="ilustracoes-borboleta"
              src="/imagens/Logo_reduzido.webp"
              alt="Borboleta decorativa"
            />
          </div>

          <div className="ilustracoes-galeria-item">
            <img
              className="ilustracoes-galeria-imagem"
              src="/imagens/Grafico/Ilustracoes/02.webp"
              alt="Cartaz Verão - Ilustrações Beatriz Milhazes"
            />
            <span className="ilustracoes-legenda">Verão</span>
          </div>
        </div>

        <div className="ilustracoes-rodape">
          <a href="/graficoexposicao" className="ilustracoes-anterior">
            ANTERIOR
          </a>
          <img
            className="ilustracoes-logo"
            src="/imagens/logo_Prancheta.webp"
            alt="Caliane Machado Design Gráfica"
          />
          <a href="/graficominhamarca" className="ilustracoes-proximo">
            PRÓXIMO
          </a>
        </div>
      </div>
    </div>
  );
};

export default GraficoIlustracao;