import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/components/user/User.module.scss';

function JoinBox({ setType }: { setType: React.Dispatch<React.SetStateAction<'main' | 'login' | 'join'>> }) {
  const [step, setStep] = useState(0);
  const [validate, setValidate] = useState(false);
  const nickNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setStep(1);
  }, []);

  return (
    <>
      <div
        onClick={() => {
          setType('main');
        }}
        style={{ marginBottom: '10px', cursor: 'pointer' }}
      >
        {' '}
        {'<'} 뒤로가기
      </div>
      <div style={{ marginBottom: '20px' }}>회원가입</div>

      <div className={`${styles.inputWrap} ${step >= 1 ? styles.onAct : null}`}>
        NickName
        <input
          ref={nickNameInputRef}
          role="nickNameInput"
          spellCheck="false"
          onChange={() => {
            setStep(1);
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              setStep(2);
              setTimeout(() => {
                emailInputRef.current?.focus();
              }, 20);
            }
          }}
          type="text"
        />
      </div>

      <div className={`${styles.inputWrap} ${step == 2 ? styles.onAct : null}`}>
        Email
        <input
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              setStep(2);
              pwInputRef.current?.focus();
            }
          }}
          ref={emailInputRef}
          role="emailInput"
          type="email"
        />
      </div>

      <div className={`${styles.inputWrap} ${step == 2 ? styles.onAct : null}`}>
        Password
        <input
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              alert('join action');
            }
          }}
          ref={pwInputRef}
          type="password"
        />
        {'  '}ㄴEnter로 회원가입
      </div>
    </>
  );
}

export default JoinBox;
