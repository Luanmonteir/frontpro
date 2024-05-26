import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/" className={styles.a}>Home</Link>
        </li>
        <li className={styles.li}>
          <Link to="/about" className={styles.a}>About</Link>
        </li>
        <li className={styles.li}>
          <Link to="/contact" className={styles.a}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
