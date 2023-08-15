import styles from '@/styles/components/index/docList.module.scss';
import Image from 'next/image';
import Link from 'next/link';
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
    summary: string;
    view: number;
    love: number;
    date: string;
  };
}) {
  return (
    <Link href={`/view/${cardData.id}`}>
      <li className={styles.docCard}>
        {cardData.thumbnailPath ? (
          <img
            className={styles.cardImg}
            width={200}
            height={200}
            style={{ width: '260px', height: '300px' }}
            src={`https://${process.env.NEXT_PUBLIC_BACKEND_HOST}/image/${cardData.thumbnailPath}`}
            alt="글 리스트 사진"
          />
        ) : null}
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
      </li>
    </Link>
  );
}

export default DocCard;
