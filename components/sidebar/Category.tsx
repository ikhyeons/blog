import styles from '@/styles/components/layout/Sidebar.module.scss';
import { useState } from 'react';

function Category() {
  const ctgList = ctgListData();
  return (
    <>
      <div className={styles.ctg}>Category</div>
      <ul className={styles.ctgList}>
        {ctgList.map((data, i) => (
          <li className={styles.ctgLi} key={i}>
            {data}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Category;

export function ctgListData(): string[] {
  const ctgList = ['공지', '리액트', '노드', '잡담'];
  return ctgList;
}
