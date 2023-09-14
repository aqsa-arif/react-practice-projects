import React, { useState } from 'react' 
import Card from '../UI/Card'
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020'); 

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  
 
  //FilteredExpenses is derived or computed state
  const filteredExpenses = props.expenses.filter((expense) => {  
    return expense.date.getFullYear().toString() === filteredYear;
  })  
   
  return (
    <Card className='expenses'>
      <ExpenseFilter 
        filteredYear={filteredYear}
        filterChangeHandler={filterChangeHandler}
      />
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />

    </Card>
  )
}

export default Expenses
