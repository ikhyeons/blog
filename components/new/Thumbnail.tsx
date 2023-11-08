import React, { useState } from 'react';
import styles from '@/styles/components/new/New.module.scss';
import { usePostImageMutation } from '@/utils/redux/reducer/imageAPISlice';
import { setThumbnail } from '@/utils/redux/reducer/docFormSlice';
import { useAppDispatch } from '@/utils/hooks/redux';
import { useCookies } from 'react-cookie';

import Image from 'next/image';
function Thumbnail() {
  const dispatch = useAppDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const [postImage] = usePostImageMutation();
  const [path, setPath] = useState('');
  const [{ copyToken }, setCookie, removeCookie] = useCookies();
  return (
    <div className="">
      {isSelected ? (
        <Image
          width={200}
          height={200}
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
              console.log(e.target.files);
              payload.append('img', e.target.files![0]);

              postImage({ body: payload, token: copyToken })
                .unwrap()
                .then((res: any) => {
                  if (res.code === 202) {
                    setCookie('copyToken', res.token!, { path: '/' });
                    const par = { body: payload, token: res!.token };
                    postImage(par);
                  }
                  dispatch(setThumbnail(res.imageId));
                  setPath(res.imagePath);
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
