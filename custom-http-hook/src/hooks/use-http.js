import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);

 const sendHttpRequest = useCallback(async (configReq, applyData) => {
    setLoading(true);

    try { 
        const response = await fetch(configReq.url, {
            method: configReq.method ? configReq.method : 'GET',
            headers: configReq.headers ? configReq.headers : {},
            body: configReq.body ? configReq.body : null
        })
        if(!response.ok){
            throw new Error('Something went wrong')
        }
    
        const data = await response.json();
        console.log(data);
        applyData(data);

    } catch (error) {
        setError(error.message)
        console.log(error.message || 'Something went wrong' );
    }
    setLoading(false);
  },[]);
  
  return {
    isLoading,
    isError,
    sendHttpRequest
  }
}

export default useHttp;