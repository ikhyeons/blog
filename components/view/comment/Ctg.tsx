import styles from '@/styles/components/view/view.module.scss';

function Ctg({
  isOn,
  setIsOn,
  number,
}: {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
  number: number;
}) {
  return (
    <>
      <span
        className={styles.ctg}
        onClick={() => {
          setIsOn((prev) => !prev);
        }}
      >
        {isOn ? '댓글 접기' : '댓글 펼치기'}
        {' ' + number}
      </span>
    </>
  );
}

export default Ctg;
