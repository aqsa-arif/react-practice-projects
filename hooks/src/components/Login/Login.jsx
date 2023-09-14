import React, { useEffect, useReducer, useRef, useState } from 'react'
import classes from './Login.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Input from '../UI/Input';

const formReducerFn = (state, action) => {

  if (action.type === 'EMAIL_INPUT') {
    return {
      ...state,
      enteredEmail: action.payload,
      isEmailValid: action.payload.includes('@')
    }
  }
  if (action.type === 'PASSWORD_INPUT') {
    return {
      ...state,
      enteredPassword: action.payload,
      isPassValid: action.payload.trim().length > 6,
    }
  }
  if (action.type === 'EMAIL_INPUT_BLUR') {
    return {
      ...state,
      isEmailValid: state.enteredEmail.includes('@'),
    }
  }
  if (action.type === 'PASSWORD_INPUT_BLUR') {
    return {
      ...state,
      isPassValid: state.enteredPassword.length > 6,
    }
  }

  return {
    ...state
  }
}

const initialFormData = {
  enteredEmail: '',
  enteredPassword: '',
  isEmailValid: null,
  isPassValid: null,
}


const Login = (props) => {
  const emailInputRef = useRef();
  const passInputRef = useRef();
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [isEmailValid, SetIsEmailValid] = useState();
  // const [isPassValid, setIsPassValid] = useState();
  const [isFormValid, setFormValid] = useState(false);

  const [formState, dispatchForm] = useReducer(formReducerFn, initialFormData);

  useEffect(() => {
    // setFormValid( isEmailValid && isPassValid ); 
    setFormValid(formState.isEmailValid && formState.isPassValid);

    return () => {
      console.log('Cleanup function to cleanup resources ie. disconnecting third party libraries or revert states or clean time intervals');
      setFormValid(false);
    }
  }, [formState.isEmailValid, formState.isPassValid]);

  const handleEmailChange = (e) => {
    // setEnteredEmail(e.target.value);
    // SetIsEmailValid( e.target.value.includes('@') );
    dispatchForm({ type: 'EMAIL_INPUT', payload: e.target.value });
  }

  const handlePasswordChange = (e) => {
    // setEnteredPassword(e.target.value);
    // setIsPassValid( enteredPassword.trim().length > 6 ); 
    dispatchForm({ type: 'PASSWORD_INPUT', payload: e.target.value });
  }

  const EmailValidity = () => {
    // SetIsEmailValid( enteredEmail.includes('@') );
    dispatchForm({ type: 'EMAIL_INPUT_BLUR' });
  }
  const PasswordValidity = () => {
    // setIsPassValid( enteredPassword.trim().length > 6 ); 
    dispatchForm({ type: 'PASSWORD_INPUT_BLUR' });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // props.handleLogin({enteredEmail, enteredPassword}); 
    
    if(isFormValid){
      props.handleLogin({
        email: formState.enteredEmail,
        password: formState.enteredPassword
      });
    }
    else if (!formState.isEmailValid){
      emailInputRef.current.focusFunctionality();
    }
    else {
      passInputRef.current.focusFunctionality();
    }
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* <div className={`${classes.control} ${formState.isEmailValid === false && classes.invalid }`}>
          <label htmlFor='email'>Email</label>
          <input type="email" 
          id='email'
          // value={enteredEmail}
          value={formState.enteredEmail}
          onChange={handleEmailChange} 
          onBlur={EmailValidity}
          />    
        </div>  */}

        <Input
          ref={emailInputRef}
          formState={formState.isEmailValid}
          type='email'
          id='email'
          onChange={handleEmailChange}
          onBlur={EmailValidity}
          value={formState.enteredEmail}
          label='Email'
        />

        {/* <div  className={`${classes.control} ${formState.isPassValid === false && classes.invalid }`}>
          <label htmlFor='password'>Password</label>
          <input type="password" 
          id='password'
          // value={enteredPassword}
          value={formState.enteredPassword}
          onChange={handlePasswordChange}
          onBlur={PasswordValidity}  />  
        </div>   */}

        <Input
          ref={passInputRef}
          formState={formState.isPassValid}
          type='password'
          id='password'
          onChange={handlePasswordChange}
          onBlur={PasswordValidity}
          value={formState.enteredPassword}
          label='Password'
        />

        <div>
          <Button
            type='submit'
            // disabled={!isFormValid}
            className={classes.btn}
          >
            LOGIN</Button>
        </div>

      </form>
    </Card>
  )
}

export default Login
