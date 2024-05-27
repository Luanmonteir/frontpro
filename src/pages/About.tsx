import React from 'react';
import Navbar from '../components/Navbar';
import UserList from '../components/UserList';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <h1>API que fornece dados fictícios de usuários</h1>
      <UserList />
    </div>
  );
};

export default About;
