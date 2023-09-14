import Expenses from './components/Expense/Expenses';
import './App.css';
import AddNewExpense from './components/NewExpense/AddNewExpense';
import { useState } from 'react';

function App() {
  
  const dummyExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]; 
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addexpense = (newExpense) => { 
    console.log(newExpense);
    setExpenses((prevExpenses) => {
      return  [newExpense, ...prevExpenses];
    });   
  }
 

  return (
    <div> 
      <AddNewExpense addexpense={addexpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
