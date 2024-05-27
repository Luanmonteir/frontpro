import React, { useState } from 'react';
import styles from './Counter.module.css';

interface CounterProps {
  darkMode: boolean;
}

const Counter: React.FC<CounterProps> = ({ darkMode }) => {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className={`${styles.counterContainer} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.counterControls}>
        <button onClick={() => setCount(count - 1)} className={styles.button}>-</button>
        <span className={styles.count}>{count}</span>
        <button onClick={() => setCount(count + 1)} className={styles.button}>+</button>
      </div>
      <button onClick={handleReset} className={styles.resetButton}>Resetar</button>
    </div>
  );
};

export default Counter;
