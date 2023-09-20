import React, { useState } from 'react'
import classes from '../Cart/Checkout.module.css';

const isEmpty = (val) => val.trim().length > 0;
const isFiveChars = (val) => val.trim().length === 5;

const Checkout = (props) => {
  const [input, setInput] = useState({
    name: '',
    street: '',
    postalCode: '',
    city: ''
  });

  const [formValidity, setFormValidtity] =useState({
    name: true,
    street: true,
    postalCode: true,
    city: true
  });

  const changeHandler = (e) => {
    setInput(prevInput => ( {...prevInput, [e.target.name] : e.target.value} ) );
  }

  const confirmHandler = (e) => {
    e.preventDefault();

    const isNameValid = isEmpty(input.name);
    const isStreetValid = isEmpty(input.street);
    const isPostalValid = isFiveChars(input.postalCode);
    const isCityValid = isEmpty(input.city);
      
    setFormValidtity({
        name:  isNameValid,
        street:  isStreetValid,
        postalCode:  isPostalValid,
        city:  isCityValid
    })

    const formIsValid = isNameValid && isStreetValid && isPostalValid && isCityValid;
    if(!formIsValid){
        return;
    }  
    
    props.submitCheckout(input);
  }

  const nameControlClasses =`${classes.control} ${!formValidity.name && classes.invalid }`
  const streetControlClasses =`${classes.control} ${!formValidity.street && classes.invalid }`
  const postalCodeControlClasses =`${classes.control} ${!formValidity.postalCode && classes.invalid }`
  const cityControlClasses =`${classes.control} ${!formValidity.city && classes.invalid }`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'
         name='name' 
         onChange={changeHandler}
         /> 
      </div>
      {
        !formValidity.name && <p className={classes.error}>Please enter a valid name.</p>
      }

      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street'
        name='street'
        onChange={changeHandler}
        /> 
      </div>
      {
        !formValidity.street && <p className={classes.error}>Please enter a valid street.</p>
      }

      <div className={postalCodeControlClasses}>
        <label htmlFor='postalCode'>Postal Code</label>
        <input type='text' id='postalCode'
        name='postalCode'
        onChange={changeHandler}
        /> 
      </div>
      {
        !formValidity.postalCode && <p className={classes.error}>Please enter a valid postal address.</p>
      }

      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'
        name='city'
        onChange={changeHandler}
        /> 
      </div>
      {
        !formValidity.city && <p className={classes.error}>Please enter a valid city.</p>
      }

      <div className={classes.actions}>
        <button type='button' onClick={props.CloseCart}>
          Cancel
        </button>
        <button type='submit' className={classes.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout
