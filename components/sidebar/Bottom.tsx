'use client';
import styles from '@/styles/components/layout/Sidebar.module.scss';
import { useLogoutMutation } from '@/utils/redux/reducer/sessionAPISlice';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';

function Bottom() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (token) setIsLogin(true);
    else setIsLogin(false);
  }, []);
  const [{ token }] = useCookies();
  const [logout, { isLoading: isUpdating }] = useLogoutMutation();
  return (
    <div className={styles.sidebarBottom}>
      <div className={styles.linkBox}>
        <Link href={'https://github.com/ikhyeons'} target="_blank" className={styles.gitLink}>
          <div className={styles.gitLink}>GitHub : https://github.com/ikhyeons</div>
        </Link>
        <Link href={'/resume'} target="_blank" className={styles.resumeLink}>
          <div className={styles.resumeLink}>resume</div>
        </Link>
      </div>
      {isLogin ? (
        <button
          onClick={() => {
            logout(token)
              .unwrap()
              .then(() => {
                setIsLogin(false);
                ``;
              });
          }}
          className={`${styles.loginBtn} ${styles.active}`}
        >
          로그아웃
        </button>
      ) : (
        <Link href={'/user'}>
          <button className={styles.loginBtn}>로그인ㆍ가입</button>
        </Link>
      )}
    </div>
  );
}

export default Bottom;
