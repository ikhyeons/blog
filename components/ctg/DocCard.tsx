import React from 'react';
import styles from '@/styles/components/ctg/ctg.module.scss';
import Link from 'next/link';
import Image from 'next/image';

function DocCard({ cardData }: { cardData: { id: number; thumbnail: string; title: string; summary: string } }) {
  return (
    <li className={styles.docCard}>
      <Link href={`/view/${cardData.id}`}>
        <div className={styles.docCardWrap}>
          <Image
            style={{ borderRadius: '10px' }}
            className={styles.thumnail}
            src={`${cardData.thumbnail}`}
            width={200}
            height={200}
            alt="썸네일"
          />
          <article>
            <p className={styles.title}>{`${cardData.title}`}</p>
            <p>{`${cardData.summary}`}</p>
          </article>
        </div>
      </Link>
    </li>
  );
}

export default DocCard;
