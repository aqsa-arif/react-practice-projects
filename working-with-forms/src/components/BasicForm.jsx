import React from 'react'
import useInput from '../hooks/use-input'

const isNameEmpty = (val) => val.trim().length > 0;
const isEmailValid = (val) => val.includes('@');

const BasicForm = () => {

    const {
        enteredvalue: firstNameValue,
        hasError: firstNameHasError,
        isValid: firstNameIsValid,
        blurHandler: firstNameBlurHandler,
        reset: resetfirstName,
        changeHandler: firstNameChangeHandler
    }
    = useInput(isNameEmpty);

    const {
        enteredvalue: lastNameValue,
        hasError: lastNameHasError,
        isValid: lastNameIsValid,
        blurHandler: lastNameBlurHandler,
        reset: resetlastName,
        changeHandler: lastNameChangeHandler
    }
    = useInput(isNameEmpty);

    const {
        enteredvalue: emailValue,
        hasError: emailHasError,
        isValid: emailIsValid,
        blurHandler: emailBlurHandler,
        reset: resetemail,
        changeHandler: emailChangeHandler
    }
    = useInput(isEmailValid);


    let formIsValid = false;

    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(firstNameValue, lastNameValue, emailValue);
        resetfirstName();
        resetlastName();
        resetemail();
    }

    const firstNameClasses = `${firstNameHasError ? 'invalid form-control' : 'form-control'}`
    const lastNameClasses = `${lastNameHasError ? 'invalid form-control' : 'form-control'}`
    const emailClasses = `${emailHasError ? 'invalid form-control' : 'form-control'}`

    return (
        <form onSubmit={submitHandler}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input
                        type='text'
                        id='name'
                        value={firstNameValue}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                    />
                    {firstNameHasError && <p className="error-text">Please enter a first name.</p>}
                </div>

                <div className={lastNameClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input
                        type='text'
                        id='name'
                        value={lastNameValue}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    {lastNameHasError && <p className="error-text">Please enter a last name.</p>}
                </div>
            </div>

            <div className={emailClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input
                    type='text'
                    id='name'
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailHasError && <p className="error-text">Please enter a valid email address.</p>}
            </div>

            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default BasicForm
