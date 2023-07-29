'use client';
import styles from '@/styles/components/modal/Modal.module.scss';
import { changeModal } from '@/utils/redux/reducer/modalSlice';
import { useAppDispatch } from '@/utils/hooks/redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
function SelectCtg() {
  const ctgList = ['공지', '리액트', '노드', '잡담'];
  const dispatch = useAppDispatch();
  const router = useRouter();
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
              router.push('/new/react');
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
