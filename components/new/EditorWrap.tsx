'use client';
import React from 'react';
import Title from '@/components/new/Title';
import Content from '@/components/new/Content';
import Thumbnail from './Thumbnail';

function EditorWrap({ ctg }: { ctg: string }) {
  return (
    <>
      <Title ctg={ctg} />
      <Content />
      <Thumbnail />
    </>
  );
}

export default EditorWrap;
