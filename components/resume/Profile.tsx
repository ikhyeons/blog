import React from 'react';
import styles from '@/styles/components/resume/Profile.module.scss';
import Image from 'next/image';
function Profile() {
  return (
    <div className={styles.profileBox}>
      <Image src="/duckProfile.jpg" alt="" width={300} height={300} />
      <div className={styles.profile}>
        <p>성익현 | 프론트엔드 개발자</p>
        <p>
          <span>E-mail</span> <span>skantrkwl789@naver.com</span>
        </p>
        <p>
          <span>GitHub</span> <span>https://github.com/ikhyeons</span>
        </p>
        <p>
          <span>Blog</span> <span>https://blog.com</span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
