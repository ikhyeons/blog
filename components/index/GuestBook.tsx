import styles from '@/styles/components/index/guestBook.module.scss';

function GuestBook() {
  return (
    <div className={styles.guestWrap}>
      <div className={styles.ctg}>방명록</div>
      <div className={styles.guestBookBox}>
        <div className={styles.inputBox}>
          <input className={styles.inputName} type="text" />
          <input className={styles.guestDoc} type="text" />
        </div>

        <ul className={styles.guestDocList}>
          <li className={styles.guestBookLi}>슬픈개미핥기 - 203.232.200.71 방금 전 : 잘 보고 갑니다요!!</li>
          <li className={styles.guestBookLi}>슬픈개미핥기 - 203.232.200.71 방금 전 : 잘 보고 갑니다요!!</li>
          <li className={styles.guestBookLi}>슬픈개미핥기 - 203.232.200.71 방금 전 : 잘 보고 갑니다요!!</li>
          <li className={styles.guestBookLi}>슬픈개미핥기 - 203.232.200.71 방금 전 : 잘 보고 갑니다요!!</li>
          <li className={styles.guestBookLi}>슬픈개미핥기 - 203.232.200.71 방금 전 : 잘 보고 갑니다요!!</li>
        </ul>
      </div>
    </div>
  );
}

export default GuestBook;
