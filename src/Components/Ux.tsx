import React from "react";
import "./Ux.css";

const Ux: React.FC = () => {
  return (
    <div className="ux-page">
      {/* ======================
          BANNER
      ======================= */}
      <img
        src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Ux/UX_Capa.webp`)}
        alt="Banner UX"
        className="ux-banner"
      />

      {/* ======================
          CONTEÚDO EM DUAS COLUNAS
      ======================= */}
      <div className="ux-conteudo">
        {/* Coluna Esquerda */}
        <div className="ux-col-esquerda">
          <h1 className="ux-titulo-lateral">UX</h1>

          <img
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Ux/logo.webp`)}
            alt="Logo UX"
            className="ux-logo"
          />
        </div>

        {/* Coluna Direita */}
        <div className="ux-col-direita">
          <p className="ux-texto">
            A área de Educação apresenta uma série de desafios, uma delas diz
            respeito ao uso adequado de jogos e brincadeiras. Assim, buscamos
            desenvolver uma ferramenta de apoio pedagógico, visando contribuir
            com desenvolvimento da Educação Básica.
          </p>

          <p className="ux-texto">
            A ideia desse projeto surgiu durante as aulas de Metadesing,
            ministradas pela Profª Drª Valéria Barbosa, durante a Pós Graduação
            de Design Gráfico e Digital, em 2023. A proposta era encontrar uma
            solução para um problema complexo. A princípio, desenvolvemos um
            jogo de cartas, que deu origem à ideia de uma plataforma de jogos e
            brincadeiras pedagógicos.
          </p>

          <p className="ux-texto">
            Entre 2024 e 2025, surgiu a oportunidade de continuar esse projeto
            durante o curso de Design System, ministrado pelo professor Felipe
            Oliveira, na comunidade Akilomba. Com a mentoria da Dora Ribeiro,
            CEO da comunidade, o projeto ganhou a consistência que faltava.
          </p>

          {/* Entregas */}
          <div className="ux-entregas">
            <h2>Entregas:</h2>
            <ul>
              <li>Apresentação</li>
              <li>Protótipo</li>
              <li>Design System</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ======================
          SEÇÃO: PROJETO
      ======================= */}
      <div className="ux-secao-projeto">
        <h2 className="ux-secao-titulo">
          CONHEÇA UM POUCO MAIS DO PROJETO
        </h2>

        <div className="ux-grid">
          {/* ITEM 1 */}
          <div className="ux-item">
            <h3 className="ux-item-titulo">APRESENTAÇÃO</h3>

            <img
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Ux/apresentacao.webp`)}
              alt="Apresentação"
              className="ux-item-img"
            />

            <a
              href="https://drive.google.com/file/d/1pJfaKQrpuEAwoJxdkj5DkQUe7_uGD545/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ux-botao">VEJA MAIS</button>
            </a>
          </div>

          {/* ITEM 2 */}
          <div className="ux-item">
            <h3 className="ux-item-titulo">PROTÓTIPO</h3>

            <img
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Ux/prototipo.webp`)}
              alt="Protótipo"
              className="ux-item-img"
            />

            <a
              href="https://www.figma.com/proto/AxcHD4tH6NuhASdQL1NkKI/Lern-Quest?node-id=17-2&t=M0n2DgKCaT6STeh1-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ux-botao">VEJA MAIS</button>
            </a>
          </div>

          {/* ITEM 3 */}
          <div className="ux-item">
            <h3 className="ux-item-titulo">DESIGN SYSTEM</h3>

            <img
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Ux/logo.webp`)}
              alt="Design System"
              className="ux-item-img"
            />

            <a
              href="https://zeroheight.com/4a9eb14a2/p/22fd69-fundamentos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ux-botao">VEJA MAIS</button>
            </a>
          </div>
        </div>
      </div>

      {/* ======================
          NAVEGAÇÃO FINAL
      ======================= */}
      <div className="ux-navegacao">
        {/* Imagem Borboleta */}
        <img
          src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Logo_reduzido.webp`)}
          alt="Borboleta Rosa"
          className="ux-borboleta"
        />

        {/* Logo Central */}
        <img
          src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/logo_Prancheta.webp`)}
          alt="Logo Central"
          className="ux-logo-central"
        />
      </div>
    </div>
  );
};

export default Ux;
