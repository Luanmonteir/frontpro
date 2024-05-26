import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.toggle}>
      <p>Modo: {theme}</p>
      <button className={styles.button} onClick={toggleTheme}>Clique Aqui</button>
    </div>
  );
};

export default ThemeToggle;
