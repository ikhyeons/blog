import styles from '@/styles/components/layout/Sidebar.module.scss';
import Profile from './Profile';
import Bottom from './Bottom';
import Category from './Category';
import Link from 'next/dist/client/link';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.goMain}>
        <Link href={'/'}>메인으로 가기</Link>
      </div>
      <Profile />
      <Category />
      <Bottom />
    </aside>
  );
}

export default Sidebar;
