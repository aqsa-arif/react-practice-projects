import { useEffect, useState } from "react";

const useCounter = (forward = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const counterInterval = setInterval(() => {
            if(forward) {
                setCounter(prevCounter =>  prevCounter + 1 );
            }
            else {
                setCounter(prevCounter =>  prevCounter - 1 );
            }            
        }, 1000);

        return () => {
            clearInterval(counterInterval);
        }
    },[forward]);

    return counter;
}

export default useCounter;