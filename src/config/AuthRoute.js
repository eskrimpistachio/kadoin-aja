import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkToken } from "./utils";

const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = checkToken();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to="/main" /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
