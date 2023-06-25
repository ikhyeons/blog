import React from 'react';
import Input from './Input';
import List from './List';
import styles from '@/styles/components/view/view.module.scss';
import Ctg from './Ctg';

function CommentMain() {
  return (
    <>
      <Ctg />
      <div className={styles.commentWrap}>
        <Input />
        <List />
      </div>
    </>
  );
}

export default CommentMain;
