import styles from '@/styles/components/layout/Sidebar.module.scss';
import Link from 'next/link';
function Bottom() {
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
      <button className={styles.loginBtn}>로그인ㆍ가입</button>
    </div>
  );
}

export default Bottom;
