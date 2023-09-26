import React from 'react'
import AuthForm from '../components/AuthForm'
import { json, redirect } from 'react-router-dom'

const Authentication = () => {
    return <AuthForm />
}

export default Authentication;


export async function action({ request }) {
    console.log('hii');
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode');
    const authData = await request.formData();
  
    if (mode !== 'login' && mode !== 'signup') {
        throw json({ message: 'Unsupported mode' })
    }
 
    const userData = {
        email: authData.get('email'),
        password: authData.get('password')
    }
  
    const response = await fetch('http://localhost:8080/' + mode, {
        method: request.method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })  

    if (response.status === 422 || response.status === 401) {
        return response;
    }
    if (!response.ok) {
        throw json({ message: 'Could not authenticate user.' }, { status: 500 });
    }

    const data = await response.json();
    const token = data.token;

    localStorage.setItem('token', token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());

    return redirect('/');
}
