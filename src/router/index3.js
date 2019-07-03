import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import baseLoadable from '@loadable/component'

import Login from '../page/login'
import QuoteIndex from '../page/quote/index'
import OrderIndex from '../page/order/index'
function loadable(func) {
  return baseLoadable(func, { fallback: <div>Loading</div> })
}

// const Order = loadable(() => import(/* webpackChunkName: "order" */`./order`))

function Quote() {
  console.log("Quote")
  return (
    <div>
      <Link to="/order">order</Link>  
      <h3>Quote</h3>
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
        <Route path="/" component={QuoteIndex}  exact />
        <PrivateRoute path="/quote" component={QuoteIndex} />
        <PrivateRoute path="/order" component={OrderIndex} />
        <Route path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default router;
