import styles from '@/styles/components/layout/Sidebar.module.scss';

function Bottom() {
  return (
    <div className={styles.sidebarBottom}>
      <div className={styles.linkBox}>
        <a className={styles.gitLink}>GitHub : https://github.com/ikhyeons</a>
        <a className={styles.resumeLink}>resume</a>
      </div>
      <button className={styles.loginBtn}>로그인ㆍ가입</button>
    </div>
  );
}

export default Bottom;
