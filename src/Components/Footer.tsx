import React from 'react';
import { FaRegEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'; // Arquivo CSS externo para os estilos

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="mailto:calianemachado@gmail.com" className="footer-link">
          <FaRegEnvelope className="footer-icon" />
          <span>calianemachado@gmail.com</span>
        </a>
        <a href="https://wa.me/5512981519398" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaWhatsapp className="footer-icon" />
          <span>(12) 98151-9398</span>
        </a>
        <a href="https://www.linkedin.com/in/caliane-machado" target="_blank" rel="noopener noreferrer" className="footer-link">
          <img src="/imagens/Home/Logo_Linkedin.png" alt="LinkedIn Logo" className="footer-icon" style={{ width: '24px', height: '24px' }} />
          <span>linkedin.com/in/caliane-machado</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
