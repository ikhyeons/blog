import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { updateContent } from '@/utils/redux/reducer/docFormSlice';

import { Prism } from 'prism-react-renderer';
function DocEditor() {
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state.docFormReducer.content);
  const editorRef = useRef<Editor>(null);
  return (
    <Editor
      ref={editorRef}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      initialValue={`${content}`}
      initialEditType="wysiwyg"
      theme={'dark'}
      onChange={() => {
        dispatch(updateContent(editorRef.current?.getInstance().getHTML()!));
      }}
    />
  );
}

export default DocEditor;
