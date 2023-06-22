import React from 'react';
import Title from '@/components/view/Title';
import CommentMain from '@/components/view/comment/CommentMain';
import Normal from '@/layouts/Normal';

function page() {
  return (
    <Normal>
      <Title />
      <CommentMain />
    </Normal>
  );
}

export default page;
