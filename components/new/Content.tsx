import React from 'react';
import styles from '@/styles/components/new/New.module.scss';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../DocEditor'), { ssr: false });
function Content() {
  return (
    <>
      <div className={styles.contentWrap}>
        <Editor />
      </div>
    </>
  );
}

export default Content;
