import React from 'react';
import Title from '@/components/view/Title';
import Comment from '@/components/view/comment/Comment';
import Normal from '@/layouts/Normal';

function page() {
  return (
    <Normal>
      <Title />
      <Comment />
    </Normal>
  );
}

export default page;
