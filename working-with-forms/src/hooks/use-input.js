import { useState } from "react";

const useInput = (validate) => {
    const [enteredvalue, setEnteredvalue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validate(enteredvalue);
    const hasError = !isValid && isTouched; 

    const changeHandler = (e) => {
        setEnteredvalue(e.target.value);
    }

    const blurHandler = () => { 
        setIsTouched(true);
    }

    const reset = () => {
      setEnteredvalue('');
      setIsTouched(false);
    }

    return {
        enteredvalue,
        isValid,
        hasError,
        reset,
        changeHandler,
        blurHandler, 
    }
}

export default useInput;