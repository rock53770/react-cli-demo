import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import baseLoadable from '@loadable/component'

function loadable(func) {
  return baseLoadable(func, { fallback: <div>Loading</div> })
}

const Order = loadable(() => import(/* webpackChunkName: "order" */`./order`))

function Quote() {
  console.log("Quote")
  return (
    <div>
      <Link to="/order">order</Link>  
      <h3>Quote</h3>
    </div>
  );
}
function Login() {
  console.log("Login")
  return (
    <div>
      <Link to="/order">order</Link>  
      <h3>Login</h3>
    </div>
  );
}
function NoMatch() {
  return <h3>Not Find</h3>;
}
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        1 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Quote}  exact />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/order" component={Order} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default router;
