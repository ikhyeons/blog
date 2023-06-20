import styles from '@/styles/components/index/announcement.module.scss';

function Announcement() {
  return (
    <div className={styles.announcementWrap}>
      <div className={styles.ctg}>공지</div>

      <ul className={styles.announcementBox}>
        <li className={styles.announcementLi}>블로그 시스템 일부 개편했습니다!! 1.02v</li>
        <li className={styles.announcementLi}>방문자 블로그 사용법 안내</li>
      </ul>
    </div>
  );
}

export default Announcement;
