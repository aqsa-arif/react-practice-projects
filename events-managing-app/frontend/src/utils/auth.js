const expirationDuration = () => {
    const storedExpiration = localStorage.getItem('expiration');
    const expiration = new Date(storedExpiration);
    const currentDate = new Date();
    const duration = expiration.getTime() - currentDate.getTime();
    return duration;
}

// Used for addnew, edit and delete event
export function getAuthToken() {
    const token = localStorage.getItem('token');

    if(!token){
        return null;
    }

    const expiration = expirationDuration();
    if(expiration < 0){
        return null;     //Expired token
    }

    return token;
}

export async function tokenLoader(){
  const token = getAuthToken();
  return token;
}