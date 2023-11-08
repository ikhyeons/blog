'use client';
import React from 'react';
import { useDeletePostMutation } from '@/utils/redux/reducer/communityAPISlice';
import { useCookies } from 'react-cookie';
import styles from '@/styles/components/view/view.module.scss';
import { getTimeH } from '@/utils/functions/time';
import Link from 'next/link';
import { useTokenFetch } from '@/utils/hooks/useTokenFetch';
import { useRouter } from 'next/navigation';

function HandleLine({ docId, date }: { docId: number; date: string }) {
  const [deletePost] = useDeletePostMutation();
  const [{ copyToken }] = useCookies();
  const deletePostFetch = useTokenFetch(deletePost);
  const router = useRouter();
  return (
    <div className={styles.docInfo}>
      <Link href={`/modify/${docId}`}>
        <span className={styles.modifyBtn}>수정</span>
      </Link>

      <span
        onClick={() => {
          deletePostFetch({ id: docId, token: copyToken }).then(() => {
            router.back();
          });
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
