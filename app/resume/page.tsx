import styles from '@/styles/app/resume.module.scss';
import Profile from '@/components/resume/Profile';
import WithoutSidebar from '@/layouts/WithoutSidebar';

function page() {
  return (
    <WithoutSidebar>
      <div className={styles.resumeWrap}>
        <Profile />
      </div>
    </WithoutSidebar>
  );
}

export default page;
