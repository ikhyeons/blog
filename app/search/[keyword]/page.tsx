import React from 'react';
import Normal from '@/layouts/Normal';
import SearchBar from '@/components/SearchBar';
import DocCardWrap from '@/components/ctg/DocCardWrap';

async function page({ params }: { params: { keyword: string } }) {
  const cardList: {
    id: number;
    thumbnailPath: string;
    title: string;
    content: string;
    view: number;
    love: number;
    date: string;
  }[] = await getResultList(params.keyword);

  return (
    <Normal>
      <SearchBar />
      <DocCardWrap cardList={cardList} />
    </Normal>
  );
}

export default page;

async function getResultList(keyword: string) {
  const fetchData = await (
    await fetch(`https://${process.env.NEXT_PUBLIC_BACKEND_HOST}/community/search/${keyword}`, {
      method: 'get',
      cache: 'no-store',
    })
  ).json();
  const postList = fetchData.documentList;
  return postList;
}
