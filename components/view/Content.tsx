'use client';

import styles from '@/styles/components/view/view.module.scss';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import './toastui-css-wrapper.css';
import 'highlight.js/styles/tokyo-night-dark.css';

import { Viewer } from '@toast-ui/react-editor';

function Content({ data }: { data: string }) {
  const contentData = view();

  return (
    <article className={styles.mainContent}>
      <Viewer initialValue={data} />
    </article>
  );
}

export default Content;

function view() {
  return `<h3>기존에 Recoil로 만들었던 프로젝트를 Redux로 마이그레이션 하였다.</h3><p><br></p>`;
}
