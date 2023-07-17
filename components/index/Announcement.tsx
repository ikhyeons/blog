import styles from '@/styles/components/index/announcement.module.scss';

function Announcement({
  noticeList,
}: {
  noticeList: {
    id: number;
    thumbnail: string;
    title: string;
    summary: string;
    view: number;
    love: number;
    date: string;
  }[];
}) {
  return (
    <div className={styles.announcementWrap}>
      <div className={styles.ctg}>공지</div>

      <ul className={styles.announcementBox}>
        {noticeList.map((data, i) => (
          <li key={i} className={styles.announcementLi}>
            {data.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Announcement;
