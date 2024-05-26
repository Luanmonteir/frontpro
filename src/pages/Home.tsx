import React from 'react';
import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import styles from './Home.module.css';
import Counter from '../components/Counter'; 

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <h1>Página inicial</h1>
      <ThemeToggle />
      <Counter /> {/* Adicionando o Counter */}
    </div>

  );
};

export default Home;
