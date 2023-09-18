import React from 'react'
import classes from './Button.module.css';


const Button = (props) => {
    console.log('Button render');
    
    return <button
        className={`${classes.button} ${props.className}`}
        type={props.type || 'button'}
        onClick={props.changeTitleHandler}
    >
        Change Title
    </button>
}

export default Button
