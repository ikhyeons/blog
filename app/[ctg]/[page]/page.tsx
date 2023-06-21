import React from 'react';
import Normal from '@/layouts/Normal';
import SearchBar from '@/components/SearchBar';
import DocCardWrap from '@/components/ctg/DocCardWrap';

function page({ params }: { params: { ctg: string; page: number } }) {
  console.log(params);
  return (
    <Normal>
      <SearchBar />
      <DocCardWrap />
    </Normal>
  );
}

export default page;
