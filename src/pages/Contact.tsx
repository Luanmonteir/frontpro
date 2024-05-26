import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleClick = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000); // Mensagem desaparece após 3 segundos
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.participants}>
        <h2>Participantes</h2>
        <ul>
          <li>Luan Das Neves Monteiro Cardoso</li>
          <li>Jose Andre Da Costa Neto</li>
          <li>Bruno Sergio Da Costa</li>
          <li>Pedro Henrique Leal Vieira</li>
        </ul>
        <h2>Intuito do projeto:</h2>
        <p>Desenvolver uma aplicação React com TypeScript que atenda a diversos requisitos, como componentes reutilizáveis, rotas, uso de hooks do React e consumo de dados de uma API externa.</p>
      </div>
      <Button onClick={handleClick} label="Clique Aqui" />
      {showThankYou && <p>Obrigado por ver o projeto!</p>}
    </div>
  );
};

export default Contact;
