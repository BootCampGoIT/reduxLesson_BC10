import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ path, exact, component, isAuth, isRestricted }) => {
  return isAuth && isRestricted ? (
    <Redirect to='/tasks' />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;
