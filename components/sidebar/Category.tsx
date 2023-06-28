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
            <li className={styles.ctgLi}>
              <span>{data.name}</span>
              <span>{data.num}</span>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Category;

export function ctgListData(): { name: string; type: string; num: number }[] {
  const ctgList = [
    { name: '공지', type: 'announcement', num: 6 },
    { name: '리액트', type: 'react', num: 44 },
    { name: '노드', type: 'nodejs', num: 12 },
    { name: '잡담', type: 'any', num: 128 },
  ];
  return ctgList;
}
