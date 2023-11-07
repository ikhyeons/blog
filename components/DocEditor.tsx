import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { updateContent } from '@/utils/redux/reducer/docFormSlice';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import { Prism } from 'prism-react-renderer';
function DocEditor() {
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state.docFormReducer.content);
  const editorRef = useRef<Editor>(null);
  return (
    <Editor
      ref={editorRef}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax]}
      initialValue={`${content}`}
      initialEditType="wysiwyg"
      theme={'dark'}
      height="70vh"
      onChange={() => {
        dispatch(updateContent(editorRef.current?.getInstance().getHTML()!));
      }}
    />
  );
}

export default DocEditor;
