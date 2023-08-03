import styles from '@/styles/components/index/index.module.scss';
import Announcement from './Announcement';
import GuestBook from './GuestBook';
import SearchBar from '../SearchBar';
import DocList from './DocList';

async function Index({
  postList,
  guestbookList,
}: {
  postList: {
    recent: {
      id: number;
      thumbnailPath: string;
      title: string;
      summary: string;
      view: number;
      love: number;
      date: string;
    }[];
    hot: {
      id: number;
      thumbnailPath: string;
      title: string;
      summary: string;
      view: number;
      love: number;
      date: string;
    }[];
    notice: {
      id: number;
      thumbnailPath: string;
      title: string;
      summary: string;
      view: number;
      love: number;
      date: string;
    }[];
  };
  guestbookList: {
    nickname: string;
    date: string;
    ip: string;
    content: string;
  }[];
}) {
  return (
    <>
      <SearchBar />
      <div className={styles.guestBookLine}>
        <Announcement noticeList={postList.notice} />
        <GuestBook guestbookList={guestbookList} />
      </div>
      <DocList cardList={postList.recent} type="new" />
      <DocList cardList={postList.hot} type="hot" />
    </>
  );
}
export default Index;
