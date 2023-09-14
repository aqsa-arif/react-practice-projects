import React, { useState } from 'react'
import classes from './UserInput.module.css' 


const initialValues = {
    'current-savings': 10000,     //Amount initially invest 
    'yearly-contribution': 1200,  //Amount invest or add each year 
    'expected-return': 7,         //Interest rate each year 
    duration: 10,                 //Duration of investment 
}

const UserInput = (props) => {
    const [inputData, setInputData] = useState(initialValues);

    const inputChangeHandler = (e) => { 
        setInputData((prevData) => {
            return {
                ...prevData,
                [e.target.name] : +e.target.value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();  
        props.CalculateHandler(inputData); 
    }

    const resetHandler = () => {
        setInputData(initialValues);
        props.CalculateHandler(null); 
    }

  return (
     <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes['input-group']}>
            <div className={classes['input-group__elem']}>
                <label htmlFor='current-savings'>Current Savings ($)</label>
                <input type='number' name='current-savings' id='current-savings'
                value={inputData['current-savings']}
                onChange={inputChangeHandler} 
                ></input>
            </div>

            <div className={classes['input-group__elem']}>
                <label htmlFor='yearly-contribution'> Yearly Contribution ($) </label>
                <input type='number' name='yearly-contribution' id='yearly-contribution'
                value={inputData['yearly-contribution']}
                onChange={inputChangeHandler}
                ></input>
            </div>

            <div  className={classes['input-group__elem']}>
                <label htmlFor='expected-return'>  Expected Interest (%, per year) </label>
                <input type='number' name='expected-return' id='expected-return'
                value={inputData['expected-return']}
                onChange={inputChangeHandler}
                ></input>
            </div>

            <div className={classes['input-group__elem']}>
                <label htmlFor='duration'>Investment Duration (years)</label>
                <input type='number' name='duration' id='duration'
                value={inputData.duration}
                onChange={inputChangeHandler}
                ></input>
            </div>

        </div>

        <div className={classes.actions}>
            <button type='reset' className={classes.buttonAlt}
            onClick={resetHandler}
            >Reset</button>
            <button type='submit' className={classes.button}>Calculate</button>
        </div>

     </form>
  )
}

export default UserInput
