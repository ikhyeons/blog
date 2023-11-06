import React from 'react';
import DocCard from './DocCard';

function DocCardWrap({
  cardList,
}: {
  cardList: {
    id: number;
    thumbnailPath: string;
    title: string;
    content: string;
    view: number;
    love: number;
    date: string;
  }[];
}) {
  return (
    <ul>
      {cardList.map((data, i) => (
        <DocCard cardData={data} key={i} />
      ))}
    </ul>
  );
}

export default DocCardWrap;
