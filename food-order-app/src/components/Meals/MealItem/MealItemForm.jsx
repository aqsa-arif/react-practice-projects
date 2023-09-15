import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css';


const MealItemForm = (props) => {
    const [isQuantityValid, setQuantityValid] = useState(true);
    const quantityRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = +quantityRef.current.value; 

        if(enteredAmount === 0 || enteredAmount < 1 || enteredAmount > 5 ){
            setQuantityValid(false);
            return;
        } 
        props.addtoCart(enteredAmount);
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input  
        ref={quantityRef}
        label='Quantity'
        input={{
            type: 'number',
            id: 'amount'+ props.mealId,
            min: 1,
            max: 5,
            step: 1,
            defaultValue: 1,
        }} />      
        <button>Add</button>
        {!isQuantityValid && <p>Please enter a valid amount (1-5).</p> }
    </form>
  )
}

export default MealItemForm
