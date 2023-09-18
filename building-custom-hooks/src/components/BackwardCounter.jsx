import React from 'react'
import useCounter from '../hooks/use-counter';
import Card from './Card';

const BackwardCounter = () => {
    const counterVal = useCounter(false);

  return (
    <Card> {counterVal} </Card>
  )
}

export default BackwardCounter
