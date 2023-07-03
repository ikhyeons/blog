'use client';
import styles from '@/styles/components/user/User.module.scss';
import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter();
  return (
    <header className={styles.loginHeader}>
      <button
        onClick={() => {
          router.back();
        }}
        className={styles.backBtn}
      >
        ←뒤로가기
      </button>
    </header>
  );
}

export default Header;
