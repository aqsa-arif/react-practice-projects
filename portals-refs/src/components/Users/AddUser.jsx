import React, { Fragment, useRef, useState } from 'react'
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';


const AddUser = (props) => {
    const [error, setError] = useState(null);
    const nameRef = useRef();
    const ageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const username = nameRef.current.value;
        const userage = +ageRef.current.value; 

        if (username.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid Name and Age.'
            })
            return;
        }
 
        if (userage < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid Name and Age.'
            })
            return;
        }
      
        props.onSelectData(username, userage);
        nameRef.current.value = '';
        ageRef.current.value = '';
    }

    const removeError = () => {
        setError(null);
    }

    return (
        <Fragment>
            {
                error && <ErrorModal
                    removeError={removeError}
                    title={error.title}
                    message={error.message}
                />
            }

            <Card className={classes.input}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username"  >Username</label>
                    <input id="username" type="text" ref={nameRef} />
                    <label htmlFor="age"  > Age </label>
                    <input id="age" type="number" ref={ageRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>

        </Fragment>
    )
}

export default AddUser
