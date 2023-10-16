import React from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';

import { reset } from '@/utils/redux/reducer/commentSlice';

function RefBar() {
  const dispatch = useAppDispatch();
  const targetName = useAppSelector((state) => state.commentRefReducer.targetName);

  return (
    <div>
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => {
          dispatch(reset());
        }}
      >
        x
      </span>{' '}
      to. {targetName}
    </div>
  );
}

export default RefBar;
