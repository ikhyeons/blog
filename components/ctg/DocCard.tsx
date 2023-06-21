import React from 'react';
import styles from '@/styles/components/ctg/ctg.module.scss';
import Link from 'next/link';

function DocCard() {
  return (
    <li className={styles.docCard}>
      <Link href={'/view/2'}>
        <div className={styles.docCardWrap}>
          <img className={styles.thumnail} src="" alt="썸네일" />
          <article>
            <p className={styles.title}>제목</p>
            <p>내용 요약 본</p>
          </article>
        </div>
      </Link>
    </li>
  );
}

export default DocCard;
