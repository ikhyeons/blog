import React, { useState } from 'react';
import styles from '@/styles/components/view/view.module.scss';
import { useAddCommentMutation } from '@/utils/redux/reducer/communityAPISlice';
import { useCookies } from 'react-cookie';
import RefBar from './RefBar';
import { useAppSelector } from '@/utils/hooks/redux';
import { useRouter } from 'next/navigation';
import { useTokenFetch } from '@/utils/hooks/useTokenFetch';

function Input({ documentData }: { documentData: any }) {
  const router = useRouter();
  const [{ copyToken }] = useCookies();
  const [addComment] = useAddCommentMutation();
  const [content, setContent] = useState('');
  const commentRef = useAppSelector((state) => state.commentRefReducer);
  const useFetch = useTokenFetch(addComment);
  return (
    <div className={styles.inputWrap}>
      {commentRef.refOn ? <RefBar /> : null}
      <textarea
        onChange={(e) => {
          setContent(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key == 'Enter' && !e.shiftKey) {
            e.preventDefault();
            useFetch({ token: copyToken, documentID: documentData.id, content: content, refID: commentRef.target })
              .then(() => {
                alert('작성 완료');
                router.refresh();
              })
              .catch(() => {
                alert('다시 로그인 후 시동하세요');
              });
          }
        }}
        cols={2}
        className={styles.input}
      />
    </div>
  );
}

export default Input;
