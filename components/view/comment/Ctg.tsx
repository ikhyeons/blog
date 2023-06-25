'use client';

import { useState } from 'react';
function Ctg() {
  const [isOn, setIsOn] = useState(false);
  return <p>{isOn ? '댓글 접기' : '댓글 펼치기'}</p>;
}

export default Ctg;
