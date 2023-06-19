import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/components/index/searchBar.module.scss';

function SearchBar() {
  return (
    <div className={styles.inputWrap}>
      <FaSearch className={styles.searchIcon} />
      <input className={styles.searchInput} type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
