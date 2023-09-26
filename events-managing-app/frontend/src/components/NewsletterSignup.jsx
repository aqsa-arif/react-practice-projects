import React, { useEffect, useRef } from 'react' 
import classes from './NewsletterSignup.module.css';
import { useFetcher } from 'react-router-dom';


const NewsletterSignup = () => {
    const fetcher = useFetcher();    
    const inputRef = useRef();
    const { data, state} = fetcher;

    useEffect(() => {
        if(state === 'idle' && data){
            window.alert(data.message);
            inputRef.current.value = '';
        }
    }, [data, state]);

    return (
        <fetcher.Form
            method="post"
            action="/newsletter"
            className={classes.newsletter}
        >
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
                ref={inputRef}
            />
            <button>Sign up</button>
        </fetcher.Form>
    )
}

export default NewsletterSignup
