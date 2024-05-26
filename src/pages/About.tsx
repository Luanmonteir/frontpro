import React from 'react';
import Navbar from '../components/Navbar';
import UserList from '../components/UserList';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <h1>About Page</h1>
      <UserList />
    </div>
  );
};

export default About;
