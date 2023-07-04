'use client';

import styles from '@/styles/components/modal/Modal.module.scss';
import SelectCtg from './selectCtg/SelectCtg';
import { changeModal } from '@/utils/redux/reducer/modalSlice';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';

function ModalWrap() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.modalReducer.state);

  return (
    <div
      onClick={(e) => {
        dispatch(changeModal('close'));
      }}
      className={`${styles.modalWrap} ${state == 'close' ? styles.off : null}`}
    >
      <SelectCtg />
    </div>
  );
}

export default ModalWrap;
