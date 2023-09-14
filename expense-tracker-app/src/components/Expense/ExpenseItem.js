import React from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

import './ExpenseItem.css';

const ExpenseItem = (props) => {
   const {title, amount , date} = props.expense;
  return (
    <li>
    <Card className='expense-item'>
        <ExpenseDate expenseDate={date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <p className='expense-item__price'>${amount}</p>
        </div>
    </Card>
    </li>
  )
}

export default ExpenseItem
