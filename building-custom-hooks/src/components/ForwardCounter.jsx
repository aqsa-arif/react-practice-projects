import React from 'react'
import useCounter from '../hooks/use-counter'
import Card from './Card';

const ForwardCounter = () => {
    const counterVal = useCounter();

  return (
    <Card> {counterVal} </Card>
  )
}

export default ForwardCounter
