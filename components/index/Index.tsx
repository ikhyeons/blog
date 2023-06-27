import styles from '@/styles/components/index/index.module.scss';
import Announcement from './Announcement';
import GuestBook from './GuestBook';
import SearchBar from '../SearchBar';
import DocList from './DocList';

function Index({ cardList }: { cardList: { id: number; thumbnail: string; title: string; summary: string }[] }) {
  return (
    <>
      <SearchBar />
      <div className={styles.guestBookLine}>
        <Announcement />
        <GuestBook />
      </div>
      <DocList cardList={cardList} type="new" />
      <DocList cardList={cardList} type="hot" />
    </>
  );
}

export default Index;
