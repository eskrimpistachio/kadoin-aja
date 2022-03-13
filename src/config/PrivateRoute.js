import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkToken } from "./utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = checkToken();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
