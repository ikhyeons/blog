'use client';
import React from 'react';
import styles from '@/styles/components/layout/Header.module.scss';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import Link from 'next/link';
import { changeCtgState } from '@/utils/redux/reducer/layoutSlice';

function CategoryList({
  data,
}: {
  data: {
    id: number;
    type: string;
    name: string;
    num: number;
  }[];
}) {
  const state = useAppSelector((state) => state.headerCtgReducer.state);
  const dispatch = useAppDispatch();
  return state == 'close' ? null : (
    <nav className={styles.categoryList}>
      {data.map((data, i) => (
        <Link
          onClick={() => {
            dispatch(changeCtgState());
          }}
          href={`/${data.type}/1`}
          key={i}
        >
          {data.name} {data.num}
        </Link>
      ))}
    </nav>
  );
}
export default CategoryList;
