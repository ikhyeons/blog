'use client';
import styles from '@/styles/components/index/guestBook.module.scss';
import { getTimeByNow } from '@/utils/functions/time';
import { useAddGuestbookMutation } from '@/utils/redux/reducer/guestbookAPISlice';
import { useRef, useState } from 'react';
export default function GuestBook({
  guestbookList,
}: {
  guestbookList: {
    nickname: string;
    date: string;
    ip: string;
    content: string;
  }[];
}) {
  const contentInputRef = useRef<HTMLInputElement>(null);
  const [guestV, setGuestV] = useState({ nickname: '', content: '' });
  const [addGuestBook, { isLoading: isUpdating }] = useAddGuestbookMutation();
  return (
    <div className={styles.guestWrap}>
      <div className={styles.ctg}>방명록</div>
      <div className={styles.guestBookBox}>
        <div className={styles.inputBox}>
          <input
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                contentInputRef.current?.focus();
              }
            }}
            className={styles.inputName}
            type="text"
            value={guestV.nickname}
            onChange={(e) => {
              setGuestV((prev) => ({ ...prev, nickname: e.target.value }));
            }}
          />
          <input
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                if (guestV.nickname == '' || guestV.content == '') alert('빈 값이 있습니다.');
                else addGuestBook(guestV);
                setGuestV({ nickname: '', content: '' });
              }
            }}
            value={guestV.content}
            onChange={(e) => {
              setGuestV((prev) => ({ ...prev, content: e.target.value }));
            }}
            ref={contentInputRef}
            className={styles.guestDoc}
            type="text"
          />
        </div>

        <ul className={styles.guestDocList}>
          {guestbookList.map((data, i) => (
            <li key={i} className={styles.guestBookLi}>
              {data.nickname} - {data.ip} {getTimeByNow(data.date)} : {data.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
