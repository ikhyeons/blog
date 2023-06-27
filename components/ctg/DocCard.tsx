import React from 'react';
import styles from '@/styles/components/ctg/ctg.module.scss';
import Link from 'next/link';
import Image from 'next/image';

function DocCard() {
  return (
    <li className={styles.docCard}>
      <Link href={'/view/2'}>
        <div className={styles.docCardWrap}>
          <Image className={styles.thumnail} src="/duckProfile.jpg" width={200} height={200} alt="썸네일" />
          <article>
            <p className={styles.title}>제목</p>
            <p>배포 확인용 커밋</p>
          </article>
        </div>
      </Link>
    </li>
  );
}

export default DocCard;
