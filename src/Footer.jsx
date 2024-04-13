import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    alignItems: 'center',
    height: '60px',
    backgroundColor: 'lightgrey',
    color: 'black',
    bottom: 0,
    width: '100%',
  };

  const iconStyle = {
    margin: '0 10px',
  };

  return (
    <div style={footerStyle}>
      <a style={iconStyle} href="https://github.com/willber10" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a style={iconStyle} href="https://www.linkedin.com/in/will-schickler-6aaaa6303/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      <a style={iconStyle} href="https://www.instagram.com/will_schickler/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default Footer;