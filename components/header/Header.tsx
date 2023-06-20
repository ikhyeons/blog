import React from 'react';
import styles from '@/styles/components/layout/Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.doc}>어서오세요!</p>
    </header>
  );
}

export default Header;
