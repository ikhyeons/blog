import styles from '@/styles/components/index/index.module.scss';
import Announcement from './Announcement';
import GuestBook from './GuestBook';
import SearchBar from '../SearchBar';
import DocList from './DocList';

async function Index({
  postList,
}: {
  postList: {
    recent: {
      id: number;
      thumbnail: string;
      title: string;
      summary: string;
      view: number;
      love: number;
      date: string;
    }[];
    hot: {
      id: number;
      thumbnail: string;
      title: string;
      summary: string;
      view: number;
      love: number;
      date: string;
    }[];
    notice: {
      id: number;
      thumbnail: string;
      title: string;
      summary: string;
      view: number;
      love: number;
      date: string;
    }[];
  };
}) {
  return (
    <>
      <SearchBar />
      <div className={styles.guestBookLine}>
        <Announcement noticeList={postList.notice} />
        <GuestBook />
      </div>
      <DocList cardList={postList.recent} type="new" />
      <DocList cardList={postList.hot} type="hot" />
    </>
  );
}
export default Index;
