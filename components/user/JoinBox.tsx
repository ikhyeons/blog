import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/components/user/User.module.scss';
import {
  useJoinUserMutation,
  useValidateEmailMutation,
  useValidateNicknameMutation,
} from '@/utils/redux/reducer/userAPISlice';
import { useRouter } from 'next/navigation';

function JoinBox({ setType }: { setType: React.Dispatch<React.SetStateAction<'main' | 'login' | 'join'>> }) {
  const [step, setStep] = useState(0);
  const [validateN, setValidateN] = useState(false);
  const [validateE, setValidateE] = useState(false);
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    password: '',
    profile: null,
  });
  const nickNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);

  const [checkNickname, { isLoading: isUpdatingN }] = useValidateNicknameMutation();
  const [checkEmail, { isLoading: isUpdatingE }] = useValidateEmailMutation();
  const [requestJoin, { isLoading: isUpdatingJ }] = useJoinUserMutation();

  useEffect(() => {
    setStep(1);
  }, []);

  const router = useRouter();
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
        NickName{' '}
        {isUpdatingN ? (
          <span style={{ color: 'green' }}>확인 중</span>
        ) : validateN ? (
          <span style={{ color: 'orange' }}>이미 있는 닉네임</span>
        ) : null}
        <input
          ref={nickNameInputRef}
          role="nickNameInput"
          spellCheck="false"
          onChange={(e) => {
            setStep(1);
            setValidateN(false);
            setFormData((prev) => ({ ...prev, nickname: e.target.value }));
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              checkNickname(formData.nickname)
                .unwrap()
                .then((res) => {
                  console.log(res);
                  if (res) {
                    setStep(2);
                    setValidateN(false);
                    setTimeout(() => {
                      emailInputRef.current?.focus();
                    }, 20);
                  } else setValidateN(true);
                });
            }
          }}
          type="text"
        />
      </div>

      <div className={`${styles.inputWrap} ${step >= 2 ? styles.onAct : null}`}>
        Email{' '}
        {isUpdatingE ? (
          <span style={{ color: 'green' }}>확인 중</span>
        ) : validateE ? (
          <span style={{ color: 'orange' }}>등록된 이메일</span>
        ) : null}
        <input
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, email: e.target.value }));
            setStep(2);
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              checkEmail(formData.email)
                .unwrap()
                .then((res) => {
                  if (res) {
                    setStep(3);
                    setValidateE(false);
                    setTimeout(() => {
                      pwInputRef.current?.focus();
                    }, 20);
                  } else setValidateE(true);
                });
            }
          }}
          ref={emailInputRef}
          role="emailInput"
          type="email"
        />
      </div>

      <div className={`${styles.inputWrap} ${step == 3 ? styles.onAct : null}`}>
        Password
        <input
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, password: e.target.value }));
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              requestJoin(formData)
                .unwrap()
                .then((res) => {
                  res.code == 200 ? router.push('/') : alert('실패');
                });
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
