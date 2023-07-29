'use client';
import React from 'react';
import Title from '@/components/new/Title';
import Content from '@/components/new/Content';

function EditorWrap({ ctg }: { ctg: string }) {
  return (
    <>
      <Title ctg={ctg} />
      <Content />
    </>
  );
}

export default EditorWrap;
