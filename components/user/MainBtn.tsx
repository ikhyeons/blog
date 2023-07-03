import React from 'react';
import styles from '@/styles/components/user/User.module.scss';

function MainBtn({ setType }: { setType: React.Dispatch<React.SetStateAction<'main' | 'login' | 'join'>> }) {
  return (
    <>
      <button
        onClick={() => {
          setType('login');
        }}
        className={styles.userBtn}
      >
        로그인
      </button>
      <button
        onClick={() => {
          setType('join');
        }}
        className={styles.userBtn}
      >
        회원가입
      </button>
    </>
  );
}

export default MainBtn;
