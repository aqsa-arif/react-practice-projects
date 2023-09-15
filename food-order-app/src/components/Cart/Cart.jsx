import React, { useContext } from 'react'
import Modal from "../UI/Modal";
import CartContext from '../../store/cartContext';
import CartItem from './CartItem';
import classes from './Cart.module.css';


const Cart = (props) => {
  const { items, totalAmount, addToCartHandler, removeFromCartHandler } = useContext(CartContext);

  const hasItems = items.length > 0;

  const addItemToCart = (item) => {
    addToCartHandler({...item, quantity: 1 });
  }
  const removeItemFromCart = (itemId) => {
    removeFromCartHandler(itemId);
  }

  const cartItems = <ul className={classes['cart-items']}>
    {
      items.map((item) => {
        return <CartItem 
          key={item.id}
          item={item}
          addItem={addItemToCart.bind(null, item)}
          removeItem={removeItemFromCart.bind(null, item.id)}
        />
      })
    }
  </ul>

  return (
    <Modal CloseHandler={props.CloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.CloseCart}>
          Close
        </button>
       { hasItems && <button className={classes.button}>Order</button> } 
      </div>

    </Modal>
  )
}

export default Cart
