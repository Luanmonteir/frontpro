import React from 'react';
import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <h1>Home Page</h1>
      <ThemeToggle />
    </div>
  );
};

export default Home;
