import React from 'react';
import styles from '@/styles/components/view/view.module.scss';
import { FiThumbsUp } from 'react-icons/fi';

function Card() {
  return (
    <li className={`${styles.card}`}>
      <p>
        <span style={{ marginRight: '10px' }}>슬픈개미핥기</span>
        <span style={{ marginRight: '10px' }}>2023.06.13</span>
        <span style={{ marginRight: '10px' }}>답글</span>
        <span>
          <FiThumbsUp /> 17
        </span>
        <span style={{ marginLeft: '30px' }}> → 잠자는오리</span>
      </p>
      <p className={styles.content}>그리고 잠시 사이를 두어</p>
    </li>
  );
}

export default Card;
