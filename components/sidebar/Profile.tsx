import styles from '@/styles/components/layout/Sidebar.module.scss';

function Profile() {
  return (
    <div className={styles.profileBox}>
      <img className={styles.img} src="/duckProfile.jpg" alt="" />
      <div className={styles.name}>잠자는오리</div>
      <div className={styles.subName}>DrowzyDuck</div>
      <div className={styles.email}>skantrkwl789@naver.com</div>
      <span className={styles.visitor}>today 35</span>
      <span className={styles.posting}>포스팅</span>
    </div>
  );
}

export default Profile;
