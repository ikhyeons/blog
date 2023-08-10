import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/new/New.module.scss';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { updateTitle } from '@/utils/redux/reducer/docFormSlice';
import { useAddPostMutation } from '@/utils/redux/reducer/communityAPISlice';
import { useCookies } from 'react-cookie';
import { useSearchParams, useParams, useRouter } from 'next/navigation';

function Title({ ctg }: { ctg: string }) {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.docFormReducer.title);
  const documentInfo = useAppSelector((state) => state.docFormReducer);
  const [addPost] = useAddPostMutation();
  const [{ token }] = useCookies();
  const router = useRouter();

  const params = useParams();
  return (
    <div className={styles.titleBox}>
      <div className={styles.titleHead}>
        <input
          value={title}
          onChange={(e) => {
            dispatch(updateTitle(e.target.value));
          }}
          className={styles.titleInput}
          placeholder="제목"
        />
        <button
          onClick={() => {
            addPost({ ...documentInfo, ctg, token })
              .unwrap()
              .then(() => {
                alert('작성 완료');
                router.push('/');
              })
              .catch((data) => {
                if (data.status == 419) alert('권한이 없습니다.');
              });
          }}
          className={styles.submit}
        >
          작성완료
        </button>
      </div>
    </div>
  );
}

export default Title;
