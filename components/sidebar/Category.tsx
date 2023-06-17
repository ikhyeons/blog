import styles from '@/styles/components/Sidebar.module.scss';

function Category() {
  return (
    <>
      <div className={styles.ctg}>Category</div>
      <ul className={styles.ctgList}>
        <li>공지사항</li>
      </ul>
    </>
  );
}

export default Category;
