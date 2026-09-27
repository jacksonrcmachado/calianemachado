import React, { useState, useEffect } from "react";
import "./GraficoMinhaMarca.css"

// Imagens do carrossel do topo (troque pelos caminhos reais)
const bannerImagens: string[] = [
  encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/MinhaMarca/Capas-06.webp`),
  encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/MinhaMarca/Capa-05.webp`),
  encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/MinhaMarca/Capas-07.webp`),
  encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/MinhaMarca/Capas-08.webp`),
];

const GraficoMinhaMarca: React.FC = () => {
  const [slideAtual, setSlideAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideAtual((atual) => (atual + 1) % bannerImagens.length);
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="marca-container">
      <div className="marca-carrossel-topo">
        <img
          className="marca-carrossel-imagem"
          src={bannerImagens[slideAtual]}
          alt={`Minha marca - banner ${slideAtual + 1}`}
        />

        <div className="marca-carrossel-dots">
          {bannerImagens.map((_, indice) => (
            <button
              key={indice}
              className={
                indice === slideAtual
                  ? "marca-carrossel-dot marca-carrossel-dot-ativo"
                  : "marca-carrossel-dot"
              }
              onClick={() => setSlideAtual(indice)}
              aria-label={`Ir para o slide ${indice + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="marca-intro-container">
        <h2 className="marca-titulo">Minha marca</h2>

        <div className="marca-intro">
          <img
            className="marca-logo-media"
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/logo_Prancheta.webp`)}
            alt="Caliane Machado Design Gráfica"
          />
          <p className="marca-paragrafo">
            Apesar de apaixonada por arte, o processo de chegar ao design
            gráfico foi longo. Foram anos de experimentações, formações e
            ressignificações. Minha marca precisava acompanhar toda a
            intensa transformação que tenho vivenciado. Ela chegou,
            carregada de sentido e personalidade. Desenhada á próprio
            punho, traduz a design que me tornei.
          </p>
        </div>
      </div>

      <div className="marca-conteudo-imagem">
        <img
          className="marca-conteudo-imagem-item"
          src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/MinhaMarca/Identidade_da_Marca.webp`)}
          alt="Conceito, construção do símbolo, valores, tipografia, cores e aplicação da marca"
        />
      </div>

      <div className="marca-rodape">

        <a href="/GraficoIlustracao" className="marca-anterior">
          ANTERIOR
        </a>
        <img
          className="marca-logo-rodape"
          src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/logo_Prancheta.webp`)}
          alt="Caliane Machado Design Gráfica"
        />
        <a href="/GraficoPapelaria" className="marca-proximo">
          PRÓXIMO
        </a>
      </div>
    </div>
  );
};

export default GraficoMinhaMarca;