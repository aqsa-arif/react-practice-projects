import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {
          props.isAuthenticated &&
          <li>
            <a href="#">Users</a>
          </li>
        }
        {
          props.isAuthenticated &&
          <li>
            <a href="#">Admin</a>
          </li>
        }
        {
          props.isAuthenticated &&
          <li>
            <a href="#" onClick={props.handleLogout}>Logout</a>
          </li>
        }

      </ul>
    </nav>
  );
};

export default Navigation;