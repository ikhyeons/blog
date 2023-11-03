import styles from '@/styles/components/view/view.module.scss';
import styles2 from '@/styles/components/view/content.module.scss';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github-dark.css';

hljs.registerLanguage('javascript', javascript);

function Content({ data }: { data: string }) {
  const highlightedCode = hljs.highlight(data, { language: 'javascript' }).value;

  return (
    <article className={styles.mainContent}>
      <div className={styles2.innerContent} dangerouslySetInnerHTML={{ __html: highlightedCode }}></div>
    </article>
  );
}

export default Content;
