import React from "react";
import "./Sobre.css";

const Sobre: React.FC = () => {
  return (
    <div className="sobre-container">
      {/* Coluna esquerda - texto */}
      <div className="sobre-texto">
        <h1 className="sobre-titulo">Sobre</h1>
        <p className="sobre-paragrafo">Olá, me chamo Caliane Machado!</p>
        <p className="sobre-paragrafo">
          O amor a arte sempre foi pulsante em mim. Mesmo atuando na área da
          educação há mais de vinte anos, não pude me afastar totalmente dela.
          A busca por uma área em que pudesse dar asas a toda minha
          criatividade, encontrou no design seu lugar.
        </p>
        <p className="sobre-paragrafo">
          Em 2013, comecei a estudar tratamento de imagens e editoração. A
          identificação e desejo de aprender mais, passou a ocupar cada vez mais
          espaço em minha vida. Em pouco tempo comecei a diagramar álbuns e
          nunca mais parei. Os projetos editoriais também foram ganhando espaço.
        </p>
        <p className="sobre-paragrafo">
          Conquistei clientes, ganhei experiência e confiança. Até que o desejo
          de me dedicar inteiramente a minha paixão falou mais alto. Aqui estou,
          cheia de alegria, extravasando minhas ideias a cada novo desafio.
        </p>
      </div>

      {/* Coluna direita - foto + botão */}
      <div className="sobre-direita">
        <img
          src="/imagens/Sobre/foto.jpg"
          alt="Caliane Machado"
          className="sobre-foto"
        />
        <div className="sobre-curriculo">
          <h2>CONHEÇA MEU CURRÍCULO.</h2>
          <button className="sobre-botao">VEJA MAIS</button>
        </div>
      </div>

      {/* Logo no final da página */}
      <div className="sobre-logo-container">
        <img
          src="/imagens/Sobre/logo.png"
          alt="Logo"
          className="sobre-logo"
        />
      </div>
    </div>
  );
};

export default Sobre;
