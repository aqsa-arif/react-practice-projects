import React, { useRef } from 'react'
import classes from './TaskForm.module.css';


const TaskForm = (props) => {
    const inputRef = useRef();

    const SubmitHandler = (e) => {
        e.preventDefault();
        const text = inputRef.current.value;

        if(text.trim().length > 0) {
            props.addTask(text);
            inputRef.current.value = '';
        }
    }

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
        <input type="text" ref={inputRef} />
        <button type='submit'>
            {props.loading ? 'Sending...' : 'Add Task' }
        </button>
    </form>
  )
}

export default TaskForm
