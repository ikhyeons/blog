'use client';

import styles from '@/styles/components/layout/Sidebar.module.scss';
import { Amodal } from '@/utils/recoilStore/modal';
import Image from 'next/image';
import { useRecoilState } from 'recoil';

function Profile() {
  const [isModal, setIsModal] = useRecoilState(Amodal);

  return (
    <div className={styles.profileBox}>
      <Image width={200} height={200} className={styles.img} src="/duckProfile.jpg" alt="" />
      <div className={styles.name}>잠자는오리</div>
      <div className={styles.subName}>DrowzyDuck</div>
      <div className={styles.email}>skantrkwl789@naver.com</div>
      <span className={styles.visitor}>today 35</span>

      <span
        onClick={() => {
          setIsModal('ctg');
        }}
        className={styles.posting}
      >
        포스팅
      </span>
    </div>
  );
}

export default Profile;
