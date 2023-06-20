import styles from '@/styles/components/index/docList.module.scss';
import DocCard from './DocCard';

function DocList({ type }: { type: 'hot' | 'new' }) {
  return (
    <div className={styles.docListWrap}>
      <div className={styles.ctg}>{type == 'new' ? '최신 글' : '인기 글'}</div>
      <ul className={styles.docList}>
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
      </ul>
    </div>
  );
}

export default DocList;
