import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import baseLoadable from '@loadable/component'

function loadable(func) {
  return baseLoadable(func, { fallback: <div>Loading</div> })
}
import OrderIndex from '../view/order/index'
// const OrderIndex = loadable(() => import(/* webpackChunkName: "order" */`../view/order/index`))
console.log(121212121)
function Bus() {
  console.log("Bus")
  return <h3>Bus</h3>;
}
function Quote() {
  console.log("Quote")
  return <h3>Quote</h3>;
}
function Login() {
  console.log("Login")
  return <h3>Login</h3>;
}
function Cart() {
  console.log("Cart")
  return <h3>Cart</h3>;
}
function NoMatch() {
  console.log("NoMatch")
  return <h3>NoMatch</h3>;
}

function Order({ routes }) {
  return (
    <div>
      <h2>Order</h2>
      <ul>
        <li>
          <Link to="/order/bus">Bus</Link>
        </li>
        <li>
          <Link to="/order/cart">Cart</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/order" component={OrderIndex}  exact/>
        <Route path="/order/cart" component={Cart} />
      </Switch>
    </div>
  );
}
export default Order;
