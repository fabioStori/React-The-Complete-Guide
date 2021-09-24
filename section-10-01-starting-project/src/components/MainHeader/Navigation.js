import React, { useContext } from "react";
import AuthContext from "store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const authContext = useContext(AuthContext);
  return (
    // <AuthContext.Consumer>   // CONSUMER WAY OF USING CONTEXT
    //   {(authContext) => {
    //     return (
    <nav className={classes.nav}>
      <ul>
        {authContext.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authContext.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authContext.isLoggedIn && (
          <li>
            <button onClick={authContext.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
  // }}
  // </AuthContext.Consumer>
  // );
};

export default Navigation;
