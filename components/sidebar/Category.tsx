import styles from '@/styles/components/layout/Sidebar.module.scss';
import Link from 'next/link';
async function Category() {
  const ctgList = await getCategoryData();

  return (
    <>
      <div className={styles.ctg}>Category</div>
      <ul className={styles.ctgList}>
        {ctgList.map((data, i) => (
          <li key={i} className={styles.ctgLi}>
            <Link key={i} href={`/${data.type}/1`}>
              <span>{data.name}</span>
              <span>{data.num}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Category;

async function getCategoryData() {
  const fetchData = await (
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/community/category`, {
      method: 'get',
      cache: 'no-store',
    })
  ).json();
  const categoryList: {
    id: number;
    type: string;
    name: string;
    num: number;
  }[] = fetchData.categoryList;
  return categoryList;
}
