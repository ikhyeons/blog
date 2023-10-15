import React from 'react';
import Card from './Card';

function List({
  commentList,
}: {
  commentList: {
    id: number;
    writerID: number;
    nickname: string;
    refID?: number;
    documentID: number;
    Content: string;
    date: string;
    love: number;
    del: number;
  }[];
}) {
  return (
    <ul>
      {commentList.map((data, i) => (
        <Card key={i} data={data} />
      ))}
    </ul>
  );
}

export default List;
