import React from 'react';
import styles from '@/styles/components/layout/Header.module.scss';
import CategoryList from './CategoryList';
import Menu from './Menu';
import Hamberger from './Hamberger';
async function Header() {
  const menuList = [
    { name: 'Main', adrr: '/', blank: false },
    { name: 'GitHub', adrr: 'https://github.com/ikhyeons', blank: true },
    { name: 'Resume', adrr: '/resume', blank: false },
    { name: 'Login', adrr: '/user', blank: false },
  ];

  const categoryData = await getCategoryData();

  return (
    <header className={styles.header}>
      <div className={styles.menus}>
        {menuList.map((data, i) => (
          <Menu key={i} name={data.name} adrr={data.adrr} blank={data.blank} />
        ))}
        <Hamberger />
      </div>
      <CategoryList data={categoryData} />
    </header>
  );
}

export default Header;

async function getCategoryData() {
  const fetchData = await (
    await fetch(`https://${process.env.NEXT_PUBLIC_BACKEND_HOST}/community/category`, {
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
