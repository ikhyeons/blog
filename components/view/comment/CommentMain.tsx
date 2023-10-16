'use client';
import Input from './Input';
import List from './List';
import styles from '@/styles/components/view/view.module.scss';
import Ctg from './Ctg';
import { useState } from 'react';

function CommentMain({
  documentData,
  commentList,
}: {
  commentList: {
    id: number;
    writerID: number;
    nickname: string;
    refID?: number;
    documentID: number;
    Content: string;
    date: string;
    love: number;
    del: number;
    refNickname: string;
  }[];
  documentData: any;
}) {
  const [isOn, setIsOn] = useState(false);
  return (
    <section className={styles.commentBox}>
      <Ctg isOn={isOn} setIsOn={setIsOn} />
      <span>{' ' + commentList.length}</span>
      {isOn ? (
        <div className={styles.commentWrap}>
          <Input documentData={documentData} />
          <List commentList={commentList} />
        </div>
      ) : null}
    </section>
  );
}

export default CommentMain;
