import React, { useState } from 'react'
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: '',
    // }); 

    // const handleChange = (identifier, value) => {
    //     if(identifier === 'title'){
    //         setTitle(value)
    //     }else if(identifier === 'amount'){
    //         setAmount(value);
    //     }else{
    //         setDate(value);
    //     }
    // }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title: e.target.value
        //     }
        // })
    }
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
        // setUserInput((prevState) => {
        //  return { ...prevState, amount: e.target.value  }
        // });
    }
    const handleDateChange = (e) => {
        setDate(e.target.value);
        // setUserInput((prevState) => ({
        //     ...prevState,
        //     date: e.target.value
        // }) );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
         const expenseData = {
            title,            // title: title
            amount,
            date: new Date(date),
        }; 
        console.log( new Date(date) );
        console.log(typeof date); 
        props.saveExpenseData(expenseData);       //Lift up

        setTitle('');
        setAmount('');
        setDate(''); 

        // setUserInput({
            //     title: '',
            //     amount: '',
            //     date: '',
            // });
        props.CancelEditing();
        console.log(expenseData);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' 
                    //  value={userInput.title}
                    value={title.charAt(0).toUpperCase() + title.slice(1)}
                    onChange={handleTitleChange}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='.01' step='.01'
                    value={amount}
                    onChange={handleAmountChange} ></input>
                </div>
                <div className='new-expense__control'>
                    <label> Date </label>
                    <input type='date' min='2019-01-01' max='2022-12-31'
                    value={date}
                    onChange={handleDateChange} ></input>
                </div>
            </div>
            <div className='new-expense__actions'> 
                <button type='button' onClick={props.CancelEditing}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
