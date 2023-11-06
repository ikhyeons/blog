'use client';
import styles from '@/styles/components/layout/Sidebar.module.scss';
import { useTokenFetch } from '@/utils/hooks/useTokenFetch';
import { useLogoutMutation } from '@/utils/redux/reducer/sessionAPISlice';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

function Bottom() {
  const [isLogin, setIsLogin] = useState(false);
  const [cookie, , removeCookie] = useCookies();
  const [, , removeLoginCookie] = useCookies(['login']);
  const [, , removeCopyTokenCookie] = useCookies(['copyToken']);
  useEffect(() => {
    if (cookie.login) setIsLogin(true);
    else setIsLogin(false);
  }, [cookie.login]);
  const [logout] = useLogoutMutation();
  const logoutFetch = useTokenFetch(logout);

  return (
    <div className={styles.sidebarBottom}>
      <div className={styles.links}>
        <Link href={'https://github.com/ikhyeons'} target="_blank">
          GitHub
        </Link>
      </div>
      <div className={styles.links}>
        <Link href={'/resume'} target="_blank">
          Resume
        </Link>
      </div>
      <div className={styles.links}>
        {isLogin ? (
          <div
            onClick={() => {
              logoutFetch(cookie.copyToken).then(() => {
                removeLoginCookie('login');
                removeCopyTokenCookie('copyToken');
              });
            }}
            className={`${styles.loginBtn} ${styles.active}`}
          >
            LogOut
          </div>
        ) : (
          <Link href={'/user'} className={styles.loginBtn}>
            Login
            <br />
            Join
          </Link>
        )}
      </div>
    </div>
  );
}

export default Bottom;
