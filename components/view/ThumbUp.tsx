import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import styles from '@/styles/components/view/view.module.scss';

function ThumbUp({ love }: { love: number }) {
  return (
    <span className={styles.thumbUp}>
      <FiThumbsUp /> {love}
    </span>
  );
}

export default ThumbUp;
