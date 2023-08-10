import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import styles from '@/styles/components/view/view.module.scss';

function ThumbUp() {
  return (
    <span className={styles.thumbUp}>
      <FiThumbsUp /> 15
    </span>
  );
}

export default ThumbUp;
