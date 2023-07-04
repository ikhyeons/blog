'use client';

import styles from '@/styles/components/modal/Modal.module.scss';
import SelectCtg from './selectCtg/SelectCtg';
import { useRecoilState } from 'recoil';
import { Amodal } from '@/utils/recoilStore/modal';

function ModalWrap() {
  const [isModal, setIsModal] = useRecoilState(Amodal);
  return (
    <div
      onClick={(e) => {
        setIsModal('close');
      }}
      className={`${styles.modalWrap} ${isModal == 'close' ? styles.off : null}`}
    >
      <SelectCtg />
    </div>
  );
}

export default ModalWrap;
