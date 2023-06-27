import React from 'react';
import DocCard from './DocCard';
import styles from '@/styles/components/ctg/ctg.module.scss';

function DocCardWrap({ cardList }: { cardList: { id: number; thumbnail: string; title: string; summary: string }[] }) {
  return (
    <ul>
      {cardList.map((data, i) => (
        <DocCard cardData={data} key={i} />
      ))}
    </ul>
  );
}

export default DocCardWrap;
