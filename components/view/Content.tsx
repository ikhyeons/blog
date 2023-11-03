import styles from '@/styles/components/view/view.module.scss';
import styles2 from '@/styles/components/view/content.module.scss';
import 'prismjs/themes/prism-tomorrow.min.css';

function Content({ data }: { data: string }) {
  return (
    <article className={styles.mainContent}>
      <div className={styles2.innerContent} dangerouslySetInnerHTML={{ __html: data }}></div>
    </article>
  );
}

export default Content;
