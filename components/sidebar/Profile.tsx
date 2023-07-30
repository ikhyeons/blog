import styles from '@/styles/components/layout/Sidebar.module.scss';
import Image from 'next/image';
import PostingBtn from './PostingBtn';

async function Profile() {
  const profile = await getProfileData();

  return (
    <div className={styles.profileBox}>
      {profile.profile ? (
        <Image width={200} height={200} className={styles.img} src={`${profile.profile}`} alt="" />
      ) : (
        <Image width={200} height={200} className={styles.img} src="/duckProfile.jpg" alt="" />
      )}
      <div className={styles.name}>{profile.nickname}</div>
      <div className={styles.subName}>DrowzyDuck</div>
      <div className={styles.email}>{profile.email}</div>
      <span className={styles.visitor}>today {profile.visit}</span>
      <PostingBtn />
    </div>
  );
}

export default Profile;

async function getProfileData() {
  const fetchData = await (
    await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND_HOST}/bloginfo`, { method: 'get', cache: 'no-store' })
  ).json();
  const [profile] = fetchData.bloginfo;
  return profile;
}
