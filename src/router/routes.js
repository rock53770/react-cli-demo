import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

import loadable from '@/components/loadable'
import Login from '@/page/login'
import Quote from '@/page/quote/quote'
import Order from '@/page/order/order'
import MyRoute from './myRoute'

const Parent = function({routes}){
  return (
    <Switch>
      {routes.map((route, i) => (
        <MyRoute key={i} {...route} />
      ))}
    </Switch>
  )
}

const routes = [
  {
    path: "/",
    exact:true,
    component: Quote
  },{
    path: "/login",
    component: Login
  },{
    path: "/quote",
    component: Parent,
    routes: [
      {
        path: "/quote",
        exact:true,
        component: Quote
      },{
        path: "/quote/carpic",
        component: loadable(() => import(/* webpackChunkName: "quote" */`@/page/quote/carpic`))
      }
    ]
  },{
    path: "/order",
    component: Parent,
    login:true,
    routes: [
      {
        path: "/order",
        exact:true,
        component: Order
      },{
        path: "/order/detail",
        component: loadable(() => import(/* webpackChunkName: "order" */`@/page/order/detail`))
      }
    ]
  }
]

export default routes;
