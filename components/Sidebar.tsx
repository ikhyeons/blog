import styles from '@/styles/components/Sidebar.module.scss';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profileBox}>
        <img
          className={styles.img}
          src="http://www.bizhankook.com/upload/bk/article/202306/thumb/25803-62395-sampleM.jpg"
          alt=""
        />
        <div className={styles.name}>잠자는오리</div>
        <div className={styles.subName}>DrowzyDuck</div>
        <span className={styles.visitor}>today 35</span>
        <span className={styles.posting}>포스팅</span>
      </div>
      <div className={styles.ctg}>Category</div>
      <ul className={styles.ctgList}>
        <li>공지사항</li>
      </ul>
      <div className={styles.resume}>Resume</div>

      <div className={styles.sidebarbottom}>
        <div>Email : skantrkwl789@naver.com</div>
        <div>GitHub : https://github.com/ikhyeons</div>
      </div>
    </aside>
  );
}

export default Sidebar;
