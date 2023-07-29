import Normal from '@/layouts/Normal';
import EditorWrap from '@/components/new/EditorWrap';

import React from 'react';

function Page({ params }: { params: { ctg: string } }) {
  return (
    <Normal>
      <EditorWrap ctg={params.ctg} />
    </Normal>
  );
}

export default Page;
