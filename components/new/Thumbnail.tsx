import React, { useRef, useState } from 'react';
import styles from '@/styles/components/new/New.module.scss';
import { usePostImageMutation } from '@/utils/redux/reducer/imageAPISlice';
import { setThumbnail } from '@/utils/redux/reducer/docFormSlice';
import { useAppDispatch } from '@/utils/hooks/redux';
function Thumbnail() {
  const dispatch = useAppDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const [postImage, { isLoading: isUpdating }] = usePostImageMutation();
  return (
    <div className="">
      {isSelected ? (
        <img
          onClick={() => {
            setIsSelected(false);
          }}
          className={styles.imageWrap}
          src={''}
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

              postImage(payload)
                .unwrap()
                .then((data) => {
                  console.log('gd');
                  dispatch(setThumbnail(data.imageId));
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
