import React from 'react';
import styles from '@/styles/components/view/view.module.scss';
import { FiThumbsUp } from 'react-icons/fi';
import { getTimeByNow } from '@/utils/functions/time';
function Card({
  data,
}: {
  data: {
    id: number;
    writerID: number;
    nickname: string;
    refID?: number;
    documentID: number;
    Content: string;
    date: string;
    love: number;
    del: number;
  };
}) {
  console.log(data);
  return (
    <li className={`${styles.card}`}>
      <p>
        <span style={{ marginRight: '10px' }}>{data.nickname}</span>
        <span style={{ marginRight: '10px' }}>{getTimeByNow(data.date)}</span>
        <span style={{ marginRight: '10px' }}>답글</span>
        <span>
          <FiThumbsUp /> {data.love}
        </span>
        {data.refID ? <span style={{ marginLeft: '30px' }}> → 잠자는오리</span> : null}
      </p>
      <p className={styles.content}>{data.Content}</p>
    </li>
  );
}

export default Card;
