import styles from '@/styles/components/index/announcement.module.scss';

function Announcement() {
  return (
    <div className={styles.announcementWrap}>
      <div className={styles.ctg}>공지</div>
      <ul className={styles.announcementBox}>
        <li className={styles.announcementLi}>공지1</li>
        <li className={styles.announcementLi}>공지2</li>
        <li className={styles.announcementLi}>공지3</li>
        <li className={styles.announcementLi}>공지4</li>
        <li className={styles.announcementLi}>공지5</li>
      </ul>
    </div>
  );
}

export default Announcement;
