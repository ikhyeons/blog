'use client';

import styles from '@/styles/components/modal/Modal.module.scss';
import { changeModal } from '@/utils/redux/reducer/modalSlice';
import { useAppDispatch } from '@/utils/hooks/redux';
import { useRouter } from 'next/navigation';
import { useGetCtgListQuery } from '@/utils/redux/reducer/communityAPISlice';

function SelectCtg() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data, error, isLoading } = useGetCtgListQuery(null);
  const ctgList = data!;
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={styles.selectCtg}
    >
      <ul className={styles.ctgList}>
        {!isLoading &&
          ctgList.categoryList.map((data, i) => (
            <li
              key={i}
              onClick={() => {
                dispatch(changeModal('close'));
                router.push(`/new/${data.type}`);
              }}
            >
              {data.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SelectCtg;
