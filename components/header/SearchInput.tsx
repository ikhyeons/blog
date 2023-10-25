'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from '@/styles/components/layout/Header.module.scss';

function SearchInput() {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  return (
    <input
      value={keyword}
      onChange={(e) => {
        setKeyword(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.code == 'Enter' && keyword) {
          router.push(`/search/${keyword}`);
        }
      }}
      className={styles.searchInput}
      type="text"
      placeholder="Search"
    />
  );
}

export default SearchInput;
