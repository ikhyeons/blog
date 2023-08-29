'use client';
import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import styles from '@/styles/components/view/view.module.scss';
import { useAddLoveMutation } from '@/utils/redux/reducer/communityAPISlice';

function ThumbUp({ love, id }: { love: number; id: number }) {
  const [addLove] = useAddLoveMutation();
  return (
    <span className={styles.thumbUp}>
      <span
        onClick={() => {
          addLove(id);
        }}
        className={styles.thumbupWrap}
      >
        <FiThumbsUp />
      </span>{' '}
      {love}
    </span>
  );
}

export default ThumbUp;
