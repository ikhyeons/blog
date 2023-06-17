import styles from '@/styles/components/layout/Sidebar.module.scss';
import Profile from './Profile';
import Bottom from './Bottom';
import Category from './Category';
function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Profile />
      <Category />
      <Bottom />
    </aside>
  );
}

export default Sidebar;
