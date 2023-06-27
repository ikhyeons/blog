'use client';
import Input from './Input';
import List from './List';
import styles from '@/styles/components/view/view.module.scss';
import Ctg from './Ctg';
import { useState } from 'react';

function CommentMain() {
  const [isOn, setIsOn] = useState(false);
  return (
    <section className={styles.commentBox}>
      <Ctg isOn={isOn} setIsOn={setIsOn} />
      {isOn ? (
        <div className={styles.commentWrap}>
          <Input />
          <List />
        </div>
      ) : null}
    </section>
  );
}

export default CommentMain;
