import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
  return   <button 
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
      >
       {props.children}
    </button> 
}

export default Button
