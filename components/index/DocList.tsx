import styles from '@/styles/components/index/docList.module.scss';
import DocCard from './DocCard';

function DocList({
  type,
  cardList,
}: {
  type: 'hot' | 'new';
  cardList: { id: number; thumbnail: string; title: string; summary: string }[];
}) {
  return (
    <div className={styles.docListWrap}>
      <div className={styles.ctg}>{type == 'new' ? '최신 글' : '인기 글'}</div>
      <ul className={styles.docList}>
        {cardList.map((data, i) => (
          <DocCard cardData={data} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default DocList;
