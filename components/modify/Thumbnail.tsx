import React, { useState } from 'react';
import styles from '@/styles/components/new/New.module.scss';
import { usePostImageMutation } from '@/utils/redux/reducer/imageAPISlice';
import { setThumbnail } from '@/utils/redux/reducer/docFormSlice';
import { useAppDispatch } from '@/utils/hooks/redux';
import { useCookies } from 'react-cookie';
import { useTokenFetch } from '@/utils/hooks/useTokenFetch';
import Image from 'next/image';
function Thumbnail() {
  const dispatch = useAppDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const [postImage] = usePostImageMutation();
  const [path, setPath] = useState('');
  const [{ token }] = useCookies();
  const postImageFetch = useTokenFetch(postImage);
  return (
    <div className="">
      {isSelected ? (
        <Image
          alt="썸네일"
          onClick={() => {
            setIsSelected(false);
          }}
          className={styles.imageWrap}
          src={`${path}`}
        />
      ) : (
        <>
          <label className={`${styles.thumbNail}`} htmlFor="imgInput">
            썸네일 선택
          </label>
          <input
            onChange={(e) => {
              setIsSelected(true);
              const payload = new FormData();

              payload.append('img', e.target.files![0]);

              postImageFetch({ body: payload, token: token }).then((data: any) => {
                dispatch(setThumbnail(data.imageId));
                setPath(data.imagePath);
              });
            }}
            style={{ display: 'none' }}
            id="imgInput"
            type="file"
            accept="image/*"
          />
        </>
      )}
    </div>
  );
}

export default Thumbnail;
