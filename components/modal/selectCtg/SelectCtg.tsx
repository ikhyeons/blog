import styles from '@/styles/components/modal/Modal.module.scss';
import { Amodal } from '@/utils/recoilStore/modal';
import { useRecoilState } from 'recoil';

function SelectCtg() {
  const ctgList = ['공지', '리액트', '노드', '잡담'];
  const [isModal, setIsModal] = useRecoilState(Amodal);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={styles.selectCtg}
    >
      <ul className={styles.ctgList}>
        {ctgList.map((data, i) => (
          <li
            key={i}
            onClick={() => {
              setIsModal('close');
            }}
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectCtg;
