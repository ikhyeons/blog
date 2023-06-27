import styles from '@/styles/components/layout/Sidebar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
function Profile() {
  return (
    <div className={styles.profileBox}>
      <Image width={200} height={200} className={styles.img} src="/duckProfile.jpg" alt="" />
      <div className={styles.name}>잠자는오리</div>
      <div className={styles.subName}>DrowzyDuck</div>
      <div className={styles.email}>skantrkwl789@naver.com</div>
      <span className={styles.visitor}>today 35</span>
      <Link href="/new">
        <span className={styles.posting}>포스팅</span>
      </Link>
    </div>
  );
}

export default Profile;
