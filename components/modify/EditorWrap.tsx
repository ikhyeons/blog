'use client';
import React from 'react';
import Title from '@/components/modify/Title';
import Content from '@/components/modify/Content';
import Thumbnail from './Thumbnail';
import { useAppDispatch } from '@/utils/hooks/redux';
import { updateContent, updateTitle } from '@/utils/redux/reducer/docFormSlice';

function EditorWrap({ id, data }: { id: number; data: any }) {
  const dispatch = useAppDispatch();
  dispatch(updateTitle(data.title));
  dispatch(updateContent(data.content));

  console.log(data);
  return (
    <>
      <Title id={id} />
      <Content />
      <Thumbnail />
    </>
  );
}

export default EditorWrap;
