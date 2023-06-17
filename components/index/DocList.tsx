import React from 'react';

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
