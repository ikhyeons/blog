'use client';

import styles from '@/styles/components/modal/Modal.module.scss';
import SelectCtg from './selectCtg/SelectCtg';
import { changeModal } from '@/utils/redux/reducer/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

function ModalWrap() {
  const dispatch = useDispatch();
  const state = useSelector<any, { modalReducer: { value: 'close' | 'ctg' } }>((state) => state);

  return (
    <div
      onClick={(e) => {
        dispatch(changeModal('close'));
      }}
      className={`${styles.modalWrap} ${state.modalReducer.value == 'close' ? styles.off : null}`}
    >
      <SelectCtg />
    </div>
  );
}

export default ModalWrap;
