'use client';
import styles from '@/styles/components/layout/Sidebar.module.scss';
import { changeModal } from '@/utils/redux/reducer/modalSlice';
import { useAppDispatch } from '@/utils/hooks/redux';

export default function PostingBtn() {
  const dispatch = useAppDispatch();

  return (
    <span
      onClick={() => {
        dispatch(changeModal('ctg'));
      }}
      className={styles.posting}
    >
      포스팅
    </span>
  );
}
