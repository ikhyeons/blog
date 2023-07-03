'use client';
import React, { useState } from 'react';
import styles from '@/styles/components/user/User.module.scss';
import MainBtn from './MainBtn';
import LoginBox from './LoginBox';
import JoinBox from './JoinBox';

function UserBox() {
  const [type, setType] = useState<'main' | 'login' | 'join'>('main');
  return (
    <div className={styles.userBox}>
      {type == 'main' && <MainBtn setType={setType} />}
      {type == 'login' && <LoginBox setType={setType} />}
      {type == 'join' && <JoinBox setType={setType} />}
    </div>
  );
}

export default UserBox;
