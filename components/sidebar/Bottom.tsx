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
  const [cookie, , removeCookie] = useCookies();
  useEffect(() => {
    if (cookie.token) setIsLogin(true);
    else setIsLogin(false);
  }, [cookie.token]);

  const [logout] = useLogoutMutation();
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
              removeCookie('token', { path: '/' });
              logout(cookie.token);
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
