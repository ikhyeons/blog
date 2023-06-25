import React from 'react';
import styles from '@/styles/components/view/view.module.scss';

function Input() {
  return (
    <div className={styles.inputWrap}>
      <textarea cols={2} className={styles.input} />
    </div>
  );
}

export default Input;
