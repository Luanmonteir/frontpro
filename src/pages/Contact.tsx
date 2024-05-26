import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Counter from '../components/Counter';
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
      <h1>Página de Contato</h1>
      <Button onClick={handleClick} label="Clique Aqui" />
      {showThankYou && <p>Obrigado por ver o projeto!</p>}
      <Counter />
    </div>
  );
};

export default Contact;
