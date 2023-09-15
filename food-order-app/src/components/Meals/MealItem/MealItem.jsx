import React, { useContext }  from 'react'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cartContext';
import classes from './MealItem.module.css';


const MealItem = (props) => {
  const {addToCartHandler} = useContext(CartContext);

  const addItemToCart = (enteredAmount) => {  
    addToCartHandler({...props.meal, quantity: enteredAmount });
  }

  const NumberFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
 
  return (
    <li  className={classes.meal}>
      <div>
         <h3>{props.meal.name}</h3>
         <p  className={classes.description}>{props.meal.description}</p>
         {/* <p  className={classes.description}>{ `$${props.meal.price.toFixed(2)}` }</p> */}
         <p  className={classes.description}>{ NumberFormatter.format(props.meal.price)} </p>
      </div>

      <div>
          <MealItemForm mealId={props.meal.id} addtoCart={addItemToCart} />
      </div>      

    </li>
  )
}

export default MealItem
