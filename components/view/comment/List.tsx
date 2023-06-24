import React from 'react';
import Card from './Card';
import styles from '@/styles/components/view/view.module.scss';

function List() {
  return (
    <ul>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  );
}

export default List;
