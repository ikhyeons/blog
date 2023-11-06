import Normal from '@/layouts/Normal';
import EditorWrap from '@/components/modify/EditorWrap';

import React from 'react';

async function Page({ params }: { params: { id: number } }) {
  const documentData = await getDocumentData(params.id);
  return (
    <Normal>
      <EditorWrap data={documentData} id={params.id} />
    </Normal>
  );
}

async function getDocumentData(number: number) {
  const data = await (
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/community/post/${number}`, {
      method: 'GET',
      cache: 'no-store',
    })
  ).json();

  return data.document[0];
}

export default Page;
