import styles from '@/styles/components/view/view.module.scss';
import HandleLine from './HandleLine';
import ThumbUp from './ThumbUp';

function Title({
  docId,
  title,
  date,
  thumbnailPath,
  love,
}: {
  title: string;
  date: string;
  thumbnailPath: string;
  docId: number;
  love: number;
}) {
  console.log(thumbnailPath);

  return (
    <div className={styles.titleWrap}>
      <HandleLine docId={docId} date={date} />
      <h1 className={styles.title}>
        {title}
        <ThumbUp love={love} />
      </h1>
      {thumbnailPath ? (
        <img width={200} height={200} src={`${thumbnailPath}`} alt="포스트 썸네일 사진" className={styles.titleImg} />
      ) : null}
    </div>
  );
}

export default Title;
