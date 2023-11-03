'use client';

import styles from '@/styles/components/view/view.module.scss';
import styles2 from '@/styles/components/view/content.module.scss';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEffect } from 'react';
import 'highlight.js/styles/github-dark.css';
hljs.registerLanguage('javascript', javascript);

function Content({ data }: { data: string }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <article className={styles.mainContent}>
      <div className={styles2.innerContent} dangerouslySetInnerHTML={{ __html: data }}></div>
    </article>
  );
}

export default Content;
