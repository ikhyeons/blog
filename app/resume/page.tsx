import styles from '@/styles/app/resume.module.scss';
import Profile from '@/components/resume/Profile';

function page() {
  return (
    <div className={styles.resumeWrap}>
      <Profile />
    </div>
  );
}

export default page;
