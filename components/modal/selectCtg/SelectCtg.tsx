import styles from '@/styles/components/modal/Modal.module.scss';
import { changeModal } from '@/utils/redux/reducer/modalSlice';
import { useAppDispatch } from '@/utils/hooks/redux';
function SelectCtg() {
  const ctgList = ['공지', '리액트', '노드', '잡담'];
  const dispatch = useAppDispatch();
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
              dispatch(changeModal('close'));
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
