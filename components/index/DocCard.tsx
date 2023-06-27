import styles from '@/styles/components/index/docList.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function DocCard({ cardData }: { cardData: { id: number; thumbnail: string; title: string; summary: string } }) {
  return (
    <Link href={`/view/${cardData.id}`}>
      <li className={styles.docCard}>
        <Image className={styles.cardImg} width={200} height={200} src={`${cardData.thumbnail}`} alt="글 리스트 사진" />
        <p className={styles.cardTitle}>{`${cardData.title}`}</p>
      </li>
    </Link>
  );
}

export default DocCard;
