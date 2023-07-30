import React from 'react';
import Normal from '@/layouts/Normal';
import SearchBar from '@/components/SearchBar';
import DocCardWrap from '@/components/ctg/DocCardWrap';

async function page({ params }: { params: { ctg: string; page: number } }) {
  const cardList: {
    id: number;
    thumbnail: string;
    title: string;
    content: string;
    view: number;
    love: number;
    date: string;
  }[] = await getCardList(params);

  return (
    <Normal>
      <SearchBar />
      <DocCardWrap cardList={cardList} />
    </Normal>
  );
}

export default page;

async function getCardList({ ctg, page }: { ctg: string; page: number }) {
  const fetchData = await (
    await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND_HOST}/community/list/${ctg}`, {
      method: 'get',
      cache: 'no-store',
    })
  ).json();
  const postList = fetchData.documentList;
  return postList;
}
