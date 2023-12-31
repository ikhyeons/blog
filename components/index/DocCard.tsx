'use client';
import styles from '@/styles/components/index/docList.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { VscEye } from 'react-icons/vsc';
import { FiThumbsUp } from 'react-icons/fi';
import { getTimeByNow } from '@/utils/functions/time';
import { useIncreaseViewMutation } from '@/utils/redux/reducer/communityAPISlice';

function DocCard({
  cardData,
}: {
  cardData: {
    id: number;
    thumbnailPath: string;
    title: string;
    summary: string;
    view: number;
    love: number;
    date: string;
  };
}) {
  const [increaseView] = useIncreaseViewMutation();
  return (
    <li
      onClick={() => {
        increaseView(cardData.id);
      }}
      className={styles.docCard}
    >
      <Link href={`/view/${cardData.id}`}>
        {cardData.thumbnailPath ? (
          <Image
            className={styles.cardImg}
            width={200}
            height={200}
            style={{ width: '260px', height: '300px' }}
            src={`${cardData.thumbnailPath}`}
            alt="글 리스트 사진"
          />
        ) : (
          <Image
            style={{ borderRadius: '10px' }}
            className={styles.thumnail}
            src={`/noImage.png`}
            width={260}
            height={300}
            alt="이미지 없음"
          />
        )}
        <div className={styles.viewLine}>
          <span>{getTimeByNow(cardData.date)}</span>
          <span>
            <span>
              <VscEye style={{ fontSize: '25px', transform: 'translatey(6px)' }} /> {cardData.view}
            </span>
            <span>
              <FiThumbsUp /> {cardData.love}
            </span>
          </span>
        </div>
        <p className={styles.cardTitle}>{`${cardData.title}`}</p>
      </Link>
    </li>
  );
}

export default DocCard;
