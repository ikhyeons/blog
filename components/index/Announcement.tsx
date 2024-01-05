import styles from '@/styles/components/index/announcement.module.scss';
import Link from 'next/link';
function Announcement({
  noticeList,
}: {
  noticeList: {
    id: number;
    thumbnailPath: string;
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
            <Link key={i} href={`/view/${data.id}`}>
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Announcement;
