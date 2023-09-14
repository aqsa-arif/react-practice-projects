import React from 'react';
import classes from './Header.module.css';
import Navigation from './Navigation';

const  Header = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1> 

      <Navigation 
      isAuthenticated={props.isAuthenticated}  
      handleLogout={props.handleLogout}
      />

    </header>
  );
};

export default  Header;