import styles from '@/styles/components/view/view.module.scss';

function Ctg({ isOn, setIsOn }: { isOn: boolean; setIsOn: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <span
      className={styles.ctg}
      onClick={() => {
        setIsOn((prev) => !prev);
      }}
    >
      {isOn ? '댓글 접기' : '댓글 펼치기'}
    </span>
  );
}

export default Ctg;
