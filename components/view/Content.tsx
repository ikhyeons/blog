import styles from '@/styles/components/view/view.module.scss';
import styles2 from '@/styles/components/view/content.module.scss';
import 'highlight.js/styles/tokyo-night-dark.css';

import { Viewer } from '@toast-ui/react-editor';

function Content({ data }: { data: string }) {
  return (
    <article className={styles.mainContent}>
      <div className={styles2.innerContent} dangerouslySetInnerHTML={{ __html: data }}></div>
    </article>
  );
}

export default Content;
