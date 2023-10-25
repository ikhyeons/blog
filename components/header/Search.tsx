'use client';
import React from 'react';
import styles from '@/styles/components/layout/Header.module.scss';
import { FaSearch } from 'react-icons/fa';
import { useAppDispatch } from '@/utils/hooks/redux';
import { changeHeaderSearch } from '@/utils/redux/reducer/layoutSlice';

function Search() {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => {
        dispatch(changeHeaderSearch());
      }}
      style={{ justifyContent: 'end', cursor: 'default' }}
      className={`${styles.menu}`}
    >
      <div className={styles.iconWrap}>
        <FaSearch style={{ width: '80%', height: '80%' }} color="white" />
      </div>
    </div>
  );
}

export default Search;
