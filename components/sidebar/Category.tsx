import styles from '@/styles/components/layout/Sidebar.module.scss';
import Link from 'next/link';

function Category() {
  const ctgList = ctgListData();

  return (
    <>
      <div className={styles.ctg}>Category</div>
      <ul className={styles.ctgList}>
        {ctgList.map((data, i) => (
          <Link key={i} href={`/${data.type}/1`}>
            <li className={styles.ctgLi}>{data.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Category;

export function ctgListData(): { name: string; type: string }[] {
  const ctgList = [
    { name: '공지', type: 'announcement' },
    { name: '리액트', type: 'react' },
    { name: '노드', type: 'Nodejs' },
    { name: '잡담', type: 'any' },
  ];
  return ctgList;
}
