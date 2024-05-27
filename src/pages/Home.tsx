import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ToggleSwitch from '../components/ToggleSwitch';
import Counter from '../components/Counter';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = (checked: boolean) => {
    setDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };

  return (
    <div className={`${styles.page} ${darkMode ? styles.dark : styles.light}`}>
      <Navbar />
      <h1>Página Inicial</h1>
      <div className={styles.themeSwitch}>
        <ToggleSwitch onChange={handleThemeChange} />
      </div>
      <div className={styles.counterBox}>
        <Counter darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Home;
