import React from 'react';
import Card from './Card';
import styles from '@/styles/components/view/view.module.scss';

function List() {
  return (
    <ul>
      <Card indent={false} />
      <Card indent={true} />
      <Card indent={false} />
      <Card indent={true} />
      <Card indent={true} />
      <Card indent={true} />
    </ul>
  );
}

export default List;
