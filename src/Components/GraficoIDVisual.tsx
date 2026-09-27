import React from "react";
import "./GraficoIDVisual.css";

// As 8 imagens do corpo da página (cada uma já inclui a faixa de padronagem)
const secoesImagens: { src: string; alt: string }[] = [
  {
    src: encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/IDRaquel/IDRaquel_Conceito.webp`),
    alt: "Conceito e Valores - Raquel Navarro",
  },
  {
    src: encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/IDRaquel/IDRaquel_Cosntrucao do Simbolo.webp`),
    alt: "Construção do Símbolo - Raquel Navarro",
  },
  {
    src: encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/IDRaquel/IDRaquel_Logotipo.webp`),
    alt: "Logotipo - Raquel Navarro",
  },
  {
    src: encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/IDRaquel/IDRaquel_Logotipo reduzido.webp`),
    alt: "Logotipo reduzido - Raquel Navarro",
  },
  {
    src: encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/IDRaquel/IDRaquel_Margem de segurança.webp`),
    alt: "Margem de segurança - Raquel Navarro",
  },
  {
    src: encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/IDRaquel/IDRaquel_Cores - Tipografia.webp`),
    alt: "Cores e Tipografia - Raquel Navarro",
  },
  {
    src: encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/IDRaquel/IDRaquel_Padronagem.webp`),
    alt: "Padronagem - Raquel Navarro",
  },
  {
    src: encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/IDRaquel/IDRaquel_Usos do logotipo.webp`),
    alt: "Padronagem - Raquel Navarro",
  },
  
  {
    src: encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/IDRaquel/IDRaquel_Aplicacao.webp`),
    alt: "Aplicações - Raquel Navarro",
  },
];

const GraficoIDVisual: React.FC = () => {
  return (
    <div className="idvisual-container">
      <img
        className="idvisual-banner"
        src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/IDRaquel/Capa.webp`)}
        alt="Identidade Visual - Raquel Navarro"
      />

    <div className="idvisual-conteudo">
        <h2 className="idvisual-titulo">Identidade Visual</h2>

        <div className="idvisual-intro">
          <img
            className="idvisual-intro-logo"
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/IDRaquel/IDRaquel_Logo.webp`)}
            alt="Logotipo Raquel Navarro"
          />
          <div className="idvisual-texto">
            <p className="idvisual-paragrafo">
              Ao se formar em Direito, a já advogada Raquel Navarro,
              precisava de uma marca que a identificasse tanto á
              comunidade surda quanto aos ouvintes. Sábiamente, recorreu a
              uma IA, pela qual definiu exatamente o que queria, entregou
              um breffing dos sonhos. No entanto, sua identidade
              precisava ganhar o olhar refinado de um design para de fato
              cumprir seu papel.
            </p>
            <p className="idvisual-paragrafo">
              Foi preciso realizar diversos ajustes, quanto á
              alinhamento, elementos visuais, tipografia e cor. O
              resultado final ficou exatamente como a cliente imaginava.
            </p>
            <p className="idvisual-paragrafo">
              A utilização de IA, com um prompt específico, alinhado aos
              pré requisitos de design, fizeram toda diferença no
              resultado final.
            </p>

            <h3 className="idvisual-entregas-titulo">Entregas:</h3>
            <ul className="idvisual-entregas-lista">
              <li>Logotipo</li>
              <li>Logotipo reduzido</li>
              <li>Padronagem</li>
              <li>Manual da marca</li>
            </ul>
          </div>
        </div>
        </div>


      <div className="idvisual-corpo">
        {secoesImagens.map((secao) => (
          <img
            key={secao.src}
            className="idvisual-corpo-imagem"
            src={secao.src}
            alt={secao.alt}
          />
        ))}
      </div>

      <div className="idvisual-conteudo">
        <div className="idvisual-borboleta-container">
          <img
            className="idvisual-borboleta"
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Logo_reduzido.webp`)}
            alt="Borboleta decorativa"
          />
        </div>

        <div className="idvisual-rodape">
          <a href="/Graficomktdigital" className="idvisual-anterior">
            ANTERIOR
          </a>
          <img
            className="idvisual-logo-rodape"
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/logo_Prancheta.webp`)}
            alt="Caliane Machado Design Gráfica"
          />
          <a href="/Grafico" className="idvisual-proximo">
            VOLTAR
          </a>
        </div>
      </div>
      </div>
  );
};

export default GraficoIDVisual;