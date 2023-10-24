'use client';
import styles from '@/styles/components/layout/Header.module.scss';
import { useAppDispatch } from '@/utils/hooks/redux';
import { changeCtgState } from '@/utils/redux/reducer/layoutSlice';
import React from 'react';

function Hamberger() {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => {
        dispatch(changeCtgState());
      }}
      className={`${styles.menu}`}
    >
      <div className={styles.lineWrap}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </div>
  );
}

export default Hamberger;
