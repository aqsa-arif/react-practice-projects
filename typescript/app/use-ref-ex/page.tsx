"use client";

import { useRef, useEffect } from 'react';

const UseRefEx = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const usernameInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        console.log(`Send  data of ${usernameInputRef.current?.value}`);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="useRefExample">
            <input ref={inputRef} type="text" placeholder="focus here" />
            <input ref={usernameInputRef} type="text" placeholder="username" />
            <button onClick={handleClick}>Send</button>
        </div>
    )
}

export default UseRefEx
