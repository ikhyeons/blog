import styles from '@/styles/components/index/docList.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { VscEye } from 'react-icons/vsc';
import { FiThumbsUp } from 'react-icons/fi';

function DocCard({
  cardData,
}: {
  cardData: {
    id: number;
    thumbnail: string;
    title: string;
    summary: string;
    view: number;
    like: number;
    date: string;
  };
}) {
  return (
    <Link href={`/view/${cardData.id}`}>
      <li className={styles.docCard}>
        <Image className={styles.cardImg} width={200} height={200} src={`${cardData.thumbnail}`} alt="글 리스트 사진" />
        <div className={styles.viewLine}>
          <span>{cardData.date}</span>
          <span>
            <span>
              <VscEye style={{ fontSize: '25px', transform: 'translatey(6px)' }} /> {cardData.view}
            </span>
            <span>
              <FiThumbsUp /> {cardData.like}
            </span>
          </span>
        </div>
        <p className={styles.cardTitle}>{`${cardData.title}`}</p>
      </li>
    </Link>
  );
}

export default DocCard;
