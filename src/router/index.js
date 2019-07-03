import React from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";

import routes from './routes'
import MyRoute from './myRoute'

function RouteConfig() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <MyRoute key={i} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default RouteConfig;
