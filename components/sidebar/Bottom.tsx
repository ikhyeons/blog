'use client';
import styles from '@/styles/components/layout/Sidebar.module.scss';
import { useLogoutMutation } from '@/utils/redux/reducer/sessionAPISlice';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

function Bottom() {
  const [isLogin, setIsLogin] = useState(false);
  const [cookie, , removeCookie] = useCookies();
  useEffect(() => {
    if (cookie.login) setIsLogin(true);
    else setIsLogin(false);
  }, [cookie.login]);

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
              removeCookie('login');

              logout(cookie.copyToken)
                .unwrap()
                .then(() => {
                  removeCookie('copyToken');
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
