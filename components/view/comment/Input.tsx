import React from 'react';
import styles from '@/styles/components/view/view.module.scss';

function Input() {
  return (
    <div
      onKeyUp={(e) => {
        if (e.key == 'Enter' && !e.shiftKey) {
          e.preventDefault();
          alert('입력');
        } else {
        }
      }}
      className={styles.inputWrap}
    >
      <textarea cols={2} className={styles.input} />
    </div>
  );
}

export default Input;
