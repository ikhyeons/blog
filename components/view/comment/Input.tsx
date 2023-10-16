import React, { useState } from 'react';
import styles from '@/styles/components/view/view.module.scss';
import { useAddCommentMutation } from '@/utils/redux/reducer/communityAPISlice';
import { useCookies } from 'react-cookie';
import RefBar from './RefBar';
import { useAppSelector } from '@/utils/hooks/redux';
import { useRouter } from 'next/navigation';

function Input({ documentData }: { documentData: any }) {
  const router = useRouter();
  const [{ token }] = useCookies();
  const [addComment] = useAddCommentMutation();
  const [content, setContent] = useState('');
  const commentRef = useAppSelector((state) => state.commentRefReducer);

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
            addComment({ token, documentID: documentData.id, content: content, refID: commentRef.target })
              .unwrap()
              .then(() => {
                alert('작성 완료');
                router.refresh();
              })
              .catch((data) => {
                if (data.status == 419) alert(data.message);
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
