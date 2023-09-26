import React from 'react'
import classes from './AuthForm.module.css'
import { Form, useActionData, useNavigation, useSearchParams, Link } from 'react-router-dom'


const AuthForm = () => {
    const navigation = useNavigation();
    const [searchParams] = useSearchParams();
    const data = useActionData(); 

    const isLogin = searchParams.get('mode') === 'login'; 
    const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method='post' className={classes.form}>
    <h1>{ isLogin ? 'Log In' : 'Signup'} </h1>
     {
        data && data.errors && 
        <ul>
            {
                Object.values(data.errors).map((error, index) => {
                    return <li key={index}>{error}</li>
                })
            }
        </ul>
     }
    {data && data.message && <p>{data.message}</p>}
    <p>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />
    </p>
    <p>
      <label htmlFor="image">Password</label>
      <input id="password" type="password" name="password" required />
    </p>
    <div className={classes.actions}>
      <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}> 
        { !isLogin ? 'Login' : 'Create new user'}
      </Link>
      <button disabled={isSubmitting}> 
       { isSubmitting ? 'Submitting' : isLogin ? 'Login' : 'Create new user'}
      </button>
    </div>
  </Form>
  )
}

export default AuthForm

