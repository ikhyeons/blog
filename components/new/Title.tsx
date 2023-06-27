import React from 'react';
import styles from '@/styles/components/new/New.module.scss';

function Title() {
  return (
    <div className={styles.titleBox}>
      <div className={styles.titleHead}>
        <input className={styles.titleInput} placeholder="제목" />
        <button className={styles.submit}>작성완료</button>
      </div>
    </div>
  );
}

export default Title;
