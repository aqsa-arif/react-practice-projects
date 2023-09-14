import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './AddNewExpense.css';

const AddNewExpense = (props) => {
  const [editing, setEditing] = useState(false);
    
    const handleExpenseData = (expenseData) => { 
        const expenseContent = {
          id: Math.random().toString(),
          ...expenseData
        }
        props.addexpense(expenseContent);
    }
    const CancelEditing = () => {
      setEditing(prevState => !prevState );
    }

  return (
    <div className='new-expense'>
      {
        !editing ? 
         <button type='submit' onClick={CancelEditing}>Add Expense</button> 
         :   
        <ExpenseForm 
         saveExpenseData={handleExpenseData}
         CancelEditing={CancelEditing} 
         />        
      }
      
    </div>
  )
}

export default AddNewExpense
