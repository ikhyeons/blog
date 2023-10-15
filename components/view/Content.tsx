'use client';

import styles from '@/styles/components/view/view.module.scss';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import './toastui-css-wrapper.css';
import 'highlight.js/styles/tokyo-night-dark.css';

import { Viewer } from '@toast-ui/react-editor';

function Content({ data }: { data: string }) {
  return (
    <article className={styles.mainContent}>
      <Viewer initialValue={data} />
    </article>
  );
}

export default Content;
