import React, { useState, useEffect } from 'react';
import styles from './Counter.module.css';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className={styles.counter}>
      <p>Count: {count}</p>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.decrement}`} onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className={`${styles.button} ${styles.increment}`} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
