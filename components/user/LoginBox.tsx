'use client';
import styles from '@/styles/components/user/User.module.scss';
import { useState, useEffect, useRef } from 'react';

function LoginBox({ setType }: { setType: React.Dispatch<React.SetStateAction<'main' | 'login' | 'join'>> }) {
  const [step, setStep] = useState(0);
  const emailInput = useRef<HTMLInputElement>(null);
  const pwInput = useRef<HTMLInputElement>(null);
  const [isLast, setIsLast] = useState(true);

  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');
  useEffect(() => {
    setStep(1);
  }, []);

  useEffect(() => {
    if (step == 2) {
      setTimeout(() => {
        pwInput.current?.focus();
      }, 20);
    }
  }, [step]);

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
      <div style={{ marginBottom: '20px' }}>로그인</div>

      <div className={`${styles.inputWrap} ${step >= 1 ? styles.onAct : null}`}>
        Email
        <input
          role="emailInput"
          value={email}
          ref={emailInput}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              setStep(2);
              emailInput.current?.blur();
            }
          }}
          type="email"
        />
      </div>

      <div className={`${styles.inputWrap} ${step >= 2 ? styles.onAct : null}`}>
        Password
        <input
          role="pwInput"
          value={pw}
          ref={pwInput}
          onChange={(e) => {
            setPW(e.target.value);
          }}
          onKeyUp={(e) => {
            if (pw != '') setIsLast(true);
            else setIsLast(false);

            if (e.key == 'Backspace' && pw == '' && !isLast) {
              emailInput.current?.focus();
              setStep(1);
            }
          }}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              alert('login 시도');
            }
          }}
          type="password"
        />
        {'  '}ㄴEnter로 로그인
      </div>
    </>
  );
}

export default LoginBox;