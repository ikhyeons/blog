import styles from '@/styles/components/Sidebar.module.scss';

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <img
        className={styles.img}
        src="http://www.bizhankook.com/upload/bk/article/202306/thumb/25803-62395-sampleM.jpg"
        alt=""
      />
    </nav>
  );
}

export default Sidebar;
