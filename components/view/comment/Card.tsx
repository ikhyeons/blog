import React from 'react';
import styles from '@/styles/components/view/view.module.scss';

function Card() {
  return (
    <li className={styles.card}>
      <p>
        <span style={{ marginRight: '10px' }}>슬픈개미핥기</span>
        <span>2023.06.13</span>
      </p>
      <p className={styles.content}>그리고 잠시 사이를 두어</p>
    </li>
  );
}

export default Card;
