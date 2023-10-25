'use client';
import React from 'react';
import styles from '@/styles/components/layout/Header.module.scss';
import { useAppSelector } from '@/utils/hooks/redux';
import { FaSearch } from 'react-icons/fa';
import SearchInput from './SearchInput';

function HeaderSearch() {
  const headerSearch = useAppSelector((state) => state.headerCtgReducer.headerSearch);

  return headerSearch == 'close' ? null : (
    <div className={styles.inputWrap}>
      <FaSearch style={{ color: 'white' }} className={styles.searchIcon} />
      <SearchInput />
    </div>
  );
}
export default HeaderSearch;
