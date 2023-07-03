import React from 'react';
import styles from '@/styles/components/user/User.module.scss';

function Header() {
  return (
    <header className={styles.loginHeader}>
      <button className={styles.backBtn}>←뒤로가기</button>
    </header>
  );
}

export default Header;
