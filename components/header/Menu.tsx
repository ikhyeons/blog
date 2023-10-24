import React from 'react';
import styles from '@/styles/components/layout/Header.module.scss';
import Link from 'next/link';
function Menu({ name, adrr, blank }: { name: string; adrr: string; blank?: boolean }) {
  return (
    <div className={styles.menu}>
      {blank ? (
        <Link target="__blank" href={adrr}>
          {name}
        </Link>
      ) : (
        <Link href={adrr}>{name}</Link>
      )}
    </div>
  );
}

export default Menu;
