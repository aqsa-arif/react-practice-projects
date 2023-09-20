import { useState } from "react";

const useHttp = () => { 
    const [isLoading, setLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);

    const sendRequest = async (urlConfig) => { 
        setLoading(true); 
        try {
            const response = await fetch(urlConfig.url, {
                method: urlConfig.method ? urlConfig.method : 'GET',
                headers: urlConfig.headers ? urlConfig.headers : {},
                body: urlConfig.body ? JSON.stringify(urlConfig.body) : null,
            }) 
            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const data = await response.json(); 
            setLoading(false);
            setHttpError(false);
            
            return data;

        } catch (error) {
            console.log('errorrr');
            setHttpError(error.message);
        }
    }

    return {
        isLoading,
        httpError,
        sendRequest
    }
}

export default useHttp;