import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";


function App() {
  const [isLoggedIn, setIsLoggedIn]  = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(userInfo){
      setIsLoggedIn(true);
      console.log('Updated');
    }
  }, []);

  const logInHandler = (userData) => {
    localStorage.setItem('userInfo', JSON.stringify(userData) );
    setIsLoggedIn(true);
  }
  const logOutHandler = () => {
    localStorage.removeItem('userInfo');
    setIsLoggedIn(false);
  }

  return (
    <React.Fragment>

      <Header isAuthenticated={isLoggedIn} handleLogout={logOutHandler} /> 
      {!isLoggedIn && <Login handleLogin={logInHandler} /> }
      {isLoggedIn && <Home /> }

    </React.Fragment>
  );
}

export default App;
