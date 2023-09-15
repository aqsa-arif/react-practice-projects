import React from 'react'
import classes from './CartItem.module.css';

const CartItem = (props) => {
    const {name, price, quantity } = props.item;

    const Formatprice = `$${price.toFixed(2)}`

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{Formatprice}</span>
                    <span className={classes.amount}>x {quantity}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.removeItem}>−</button>
                <button onClick={props.addItem}>+</button>
            </div>
        </li>
    )
}

export default CartItem
