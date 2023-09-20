import React, { Fragment, useContext, useState } from 'react'
import Modal from "../UI/Modal";
import CartContext from '../../store/cartContext';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import Checkout from './Checkout';
import useHttp from '../hooks/use-http';


const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { items, totalAmount, addToCartHandler, removeFromCartHandler, clearCartHandler } = useContext(CartContext);
  const { isLoading, sendRequest } = useHttp();

  const hasItems = items?.length > 0;

  const addItemToCart = (item) => {
    addToCartHandler({ ...item, quantity: 1 });
  }
  const removeItemFromCart = (itemId) => {
    removeFromCartHandler(itemId);
  }

  const handleCheckout = () => {
    setIsCheckout(true);
  }

  const submitCheckout = async (input) => {
    const data = await sendRequest({
      url: 'https://custom-food-order-default-rtdb.firebaseio.com/orders.json',
      method: 'POST',
      body: input
    })
    if (data) {
      setSubmitted(true);
      clearCartHandler();
    }
  }

  if (isLoading) {
    return <Modal>
      <p>Sending order data...</p>
    </Modal>
  }

  const cartItems = <ul className={classes['cart-items']}>
    {
      items?.map((item) => {
        return <CartItem
          key={item.id}
          item={item}
          addItem={addItemToCart.bind(null, item)}
          removeItem={removeItemFromCart.bind(null, item.id)}
        />
      })
    }
  </ul> 

  const modelContent = <Fragment>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>${totalAmount?.toFixed(2)}</span>
    </div>

    {isCheckout && totalAmount && <Checkout
      submitCheckout={submitCheckout}
      CloseCart={props.CloseCart}
    />}
    {
      !isCheckout && <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.CloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}
          onClick={handleCheckout}
        >Order</button>}
      </div>
    }
  </Fragment>

  const SubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.CloseCart}>
          Close
        </button>
      </div>
    </React.Fragment>
  );



  return (
    <Modal CloseHandler={props.CloseCart}> 
      {!submitted && modelContent}
      {submitted && SubmitModalContent}
    </Modal>
  )
}

export default Cart
