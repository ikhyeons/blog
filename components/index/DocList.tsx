import React from 'react';
import styles from '@/styles/components/index/announcement.module.scss';
function DocList({ type }: { type: 'hot' | 'new' }) {
  return (
    <div>
      <div>{type == 'new' ? '최신 글' : '인기 글'}</div>
      <ul></ul>
      <li></li>
    </div>
  );
}

export default DocList;
