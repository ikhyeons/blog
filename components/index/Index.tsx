import styles from '@/styles/components/index/index.module.scss';
import Announcement from './Announcement';
import GuestBook from './GuestBook';
import SearchBar from './SearchBar';
import DocList from './DocList';

function Index() {
  return (
    <div>
      <SearchBar />
      <div className={styles.guestBookLine}>
        <Announcement />
        <GuestBook />
      </div>
      <DocList type="new" />
      <DocList type="hot" />
    </div>
  );
}

export default Index;