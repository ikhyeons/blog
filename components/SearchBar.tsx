'use client';
import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/components/index/searchBar.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
  return (
    <div className={styles.inputWrap}>
      <FaSearch style={{ color: 'white' }} className={styles.searchIcon} />
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
    </div>
  );
}

export default SearchBar;
