import React from 'react';
import styles from '@/styles/components/ctg/ctg.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { VscEye } from 'react-icons/vsc';
import { FiThumbsUp } from 'react-icons/fi';
import { getTimeByNow } from '@/utils/functions/time';

function DocCard({
  cardData,
}: {
  cardData: {
    id: number;
    thumbnailPath: string;
    title: string;
    content: string;
    view: number;
    love: number;
    date: string;
  };
}) {
  return (
    <li className={styles.docCard}>
      <Link href={`/view/${cardData.id}`}>
        <div className={styles.docCardWrap}>
          {cardData.thumbnailPath ? (
            <img
              style={{ borderRadius: '10px' }}
              className={styles.thumnail}
              src={`http://${process.env.NEXT_PUBLIC_BACKEND_HOST}/image/${cardData.thumbnailPath}`}
              width={200}
              height={200}
              alt="썸네일"
            />
          ) : (
            <Image
              style={{ borderRadius: '10px' }}
              className={styles.thumnail}
              src={`/noImage.png`}
              width={200}
              height={200}
              alt="이미지 없음"
            />
          )}
          <article>
            <p className={styles.title}>{`${cardData.title}`}</p>
            <p className={styles.summary}>{`${cardData.content}`}</p>
            <p className={styles.viewLine}>
              <span>{getTimeByNow(cardData.date)}</span>
              <span>
                <VscEye style={{ fontSize: '25px', transform: 'translatey(6px)' }} /> {cardData.view}
              </span>
              <span>
                <FiThumbsUp /> {cardData.love}
              </span>
            </p>
          </article>
        </div>
      </Link>
    </li>
  );
}

export default DocCard;
