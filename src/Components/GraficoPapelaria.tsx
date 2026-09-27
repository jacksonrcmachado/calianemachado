import React from "react";
import "./GraficoPapelaria.css";

const GraficoPapelaria: React.FC = () => {
  return (
    <div className="papelaria-container">
      <img
        className="papelaria-banner"
        src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Papelaria/CapapanoramicaRaqueleSaulo.webp`)}
        alt="Papelaria para casamento - Raquel & Saulo"
      />

      <div className="papelaria-conteudo">
        <h2 className="papelaria-subtitulo">Papelaria para casamento</h2>

        <div className="papelaria-intro">
          <div className="papelaria-capa">
            <img
              className="papelaria-capa-imagem"
              src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Papelaria/SAVE.webp`)}
              alt="Save the date digital - Raquel & Saulo"
            />
          </div>

          <div className="papelaria-texto">
            <p className="papelaria-paragrafo">
              Para celebrar a união entre esse apaixonado casal, foi
              desenvolvida uma identidade visual exclusiva, que norteou
              todos os detalhes do evento.
            </p>
            <p className="papelaria-paragrafo">
              O desejo de mantê-la viva, ao longo dos anos foi imediato.
              Assim, o projeto deu origem ao álbum e á caneca, tornando a
              lembrança desse momento tão especial, presente no dia-a-dia
              do casal.
            </p>

            <h3 className="papelaria-entregas-titulo">Entregas:</h3>
            <ul className="papelaria-entregas-lista">
              <li>Save the date digital</li>
              <li>Convite</li>
              <li>Etiqueta</li>
              <li>Identificação para mesas</li>
              <li>Lembrete de mesa</li>
              <li>Chalkboord</li>
              <li>Xícara personalizada</li>
              <li>Álbum</li>
            </ul>
          </div>
        </div>

        <div className="papelaria-veja-mais-container">
          <a href="#galeria-papelaria" className="papelaria-veja-mais">
            Veja mais
          </a>
        </div>

        <div className="papelaria-galeria" id="galeria-papelaria">
          <img
            className="papelaria-galeria-imagem"
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Papelaria/Convite.webp`)}
            alt="Convite e envelope - Raquel & Saulo"
          />
          <img
            className="papelaria-galeria-imagem"
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Papelaria/Cartões de Identificação.webp`)}
            alt="Identificação para mesas - Raquel & Saulo"
          />
          <img
            className="papelaria-galeria-imagem"
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Papelaria/Xicara.webp`)}
            alt="Caneca personalizada - Raquel & Saulo"
          />
          <img
            className="papelaria-galeria-imagem"
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Papelaria/QUADRO.webp`)}
            alt="Chalkboord Bem-vindos - Raquel & Saulo"
          />
          <img
            className="papelaria-galeria-imagem"
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Grafico/Papelaria/Capa frente e Verso Rosa.webp`)}
            alt="Capa do álbum - Raquel & Saulo"
          />
          
        </div>

        <div className="papelaria-borboleta-container">
          <img
            className="papelaria-borboleta"
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/Logo_reduzido.webp`)}
            alt="Borboleta decorativa"
          />
        </div>

        <div className="papelaria-rodape">
          <a href="/Graficominhamarca" className="papelaria-anterior">
            ANTERIOR
          </a>
          <img
            className="papelaria-logo"
            src={encodeURI(`${process.env.REACT_APP_ASSETS_URL}/imagens/logo_Prancheta.webp`)}
            alt="Caliane Machado Design Gráfica"
          />
          <a href="/Graficomktdigital" className="papelaria-proximo">
            PRÓXIMO
          </a>
        </div>
      </div>
    </div>
  );
};

export default GraficoPapelaria;