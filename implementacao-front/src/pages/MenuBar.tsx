import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuBar.module.css';

const MenuBar: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <Link to="/" className={styles.menuItem}>Home</Link>
      <Link to="/pesquisaAvancada" className={styles.menuItem}>Pesquisa</Link>
      <Link to="/pesquisaMunicipios" className={styles.menuItem}>Municípios</Link>
      <Link to="/about" className={styles.menuItem}>Sobre</Link>
    </nav>
  );
}

export default MenuBar;
