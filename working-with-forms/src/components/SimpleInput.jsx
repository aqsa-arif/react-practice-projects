import React, { useState } from 'react'

const SimpleInput = () => {
    const [nameInput, setNameInput] = useState('');
    const [nameIsTouched, setNameIsTouched] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [emailIsTouched, setEmailIsTouched] = useState(false);

    const isNameEmpty = nameInput.trim().length > 0;
    const nameHasError = !isNameEmpty && nameIsTouched;
    const isEmailValid = emailInput.includes('@');
    const emailHasError = !isEmailValid && emailIsTouched;
 

    const nameChangeHandler = (e) => {
        setNameInput(e.target.value);
    }

    const nameBlurHandler = () => {
        setNameIsTouched(true);
    }

    const emailChangeHandler = (e) => {
        setEmailInput(e.target.value);
    }

    const emailBlurHandler = () => {
        setEmailIsTouched(true);
    }

    const submitHandler = (e) => {
        e.preventDefault(); 

        if (!isNameEmpty) { 
            setNameIsTouched(true); 
        }
        if (!isEmailValid) {     
            setEmailIsTouched(true); 
        }
        if(isNameEmpty && isEmailValid ){
            console.log(nameInput, emailInput);
            setNameInput('');
            setNameIsTouched(false);
            setEmailInput('');
            setEmailIsTouched(false);
        }
    }

    const nameInputClasses = `${nameHasError ? 'invalid form-control' : 'form-control'}`
    const emailInputClasses = `${emailHasError ? 'invalid form-control' : 'form-control'}`

    return (
        <form onSubmit={submitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text"
                    id='name'
                    value={nameInput}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                />
            </div> 
            {nameHasError && <p className='error-text'>Please enter a valid name.</p>}

            <div className={emailInputClasses}>
                <label htmlFor="email">Your Email</label>
                <input type="email"
                    id='email'
                    value={emailInput}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
            </div> 
            {emailHasError && <p className='error-text'>Please enter a valid email.</p>}

            <div className='form-actions'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput
