import React from 'react';
import styles from '@/styles/components/new/New.module.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { updateContent } from '@/utils/redux/reducer/docFormSlice';
import hljs from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css';

const modules = {
  syntax: { highlight: (text: string) => hljs.highlightAuto(text).value },
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [
        {
          color: [
            '#000000',
            '#e60000',
            '#ff9900',
            '#ffff00',
            '#008a00',
            '#0066cc',
            '#9933ff',
            '#ffffff',
            '#facccc',
            '#ffebcc',
            '#ffffcc',
            '#cce8cc',
            '#cce0f5',
            '#ebd6ff',
            '#bbbbbb',
            '#f06666',
            '#ffc266',
            '#ffff66',
            '#66b966',
            '#66a3e0',
            '#c285ff',
            '#888888',
            '#a10000',
            '#b26b00',
            '#b2b200',
            '#006100',
            '#0047b2',
            '#6b24b2',
            '#444444',
            '#5c0000',
            '#663d00',
            '#666600',
            '#003700',
            '#002966',
            '#3d1466',
            'custom-color',
          ],
        },
        { background: [] },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  },
};

function Content() {
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state.docFormReducer.content);

  return (
    <>
      <div className={styles.contentWrap}>
        <ReactQuill
          modules={modules}
          value={content}
          onChange={(e) => {
            dispatch(updateContent(e));
          }}
        />
      </div>
    </>
  );
}

export default Content;
