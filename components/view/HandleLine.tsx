'use client';
import React from 'react';
import { useDeletePostMutation } from '@/utils/redux/reducer/communityAPISlice';
import { useCookies } from 'react-cookie';
import styles from '@/styles/components/view/view.module.scss';
import { getTimeH } from '@/utils/functions/time';
import Link from 'next/link';

function HandleLine({ docId, date }: { docId: number; date: string }) {
  const [deletePost, { isLoading: isUpdating }] = useDeletePostMutation();
  const [{ token }] = useCookies();
  return (
    <div className={styles.docInfo}>
      <Link href={`/modify/${docId}`}>
        <span className={styles.modifyBtn}>수정</span>
      </Link>

      <span
        onClick={() => {
          deletePost({ id: docId, token: token });
        }}
        className={styles.deleteBtn}
      >
        삭제
      </span>
      <span className={styles.date}>날짜 : {getTimeH(date)}</span>
    </div>
  );
}

export default HandleLine;
