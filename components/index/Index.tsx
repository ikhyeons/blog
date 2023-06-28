import styles from '@/styles/components/index/index.module.scss';
import Announcement from './Announcement';
import GuestBook from './GuestBook';
import SearchBar from '../SearchBar';
import DocList from './DocList';

function Index({
  cardList,
}: {
  cardList: {
    recent: {
      id: number;
      thumbnail: string;
      title: string;
      summary: string;
      view: number;
      like: number;
      date: string;
    }[];
    hot: {
      id: number;
      thumbnail: string;
      title: string;
      summary: string;
      view: number;
      like: number;
      date: string;
    }[];
  };
}) {
  return (
    <>
      <SearchBar />
      <div className={styles.guestBookLine}>
        <Announcement />
        <GuestBook />
      </div>
      <DocList cardList={cardList.recent} type="new" />
      <DocList cardList={cardList.hot} type="hot" />
    </>
  );
}

export default Index;
