import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cartContext'
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = (props) => { 
  const {items} = useContext(CartContext);
  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const numberOfItemsInCart = items.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  },0);  

  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if(numberOfItemsInCart === 0){
      return;
    } 
    setBtnHighlighted(true);
    const animationTimer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 3000);

    return () => {
      clearTimeout(animationTimer);
    }
  },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  )
}

export default HeaderCartButton;
