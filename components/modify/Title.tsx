import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/new/New.module.scss';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { updateTitle } from '@/utils/redux/reducer/docFormSlice';
import { useModifyPostMutation } from '@/utils/redux/reducer/communityAPISlice';
import { useCookies } from 'react-cookie';
import { useSearchParams, useParams, useRouter } from 'next/navigation';

function Title({ id }: { id: number }) {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.docFormReducer.title);
  const documentInfo = useAppSelector((state) => state.docFormReducer);
  const [modifyPost] = useModifyPostMutation();
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
            modifyPost({ ...documentInfo, id, token })
              .unwrap()
              .then(() => {
                alert('수정 완료');
                router.back();
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
