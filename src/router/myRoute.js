import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
// const Parent = function({routes}){
//   return (
//     <Switch>
//       {routes.map((route, i) => (
//         <RouteWithSubRoutes key={i} {...route} />
//       ))}
//     </Switch>
//   )
// }
function MyRoute(route) {
  return (
    <Route
      path={route.path}
      render={props => {

        if(route.login){
          return <Redirect to={{
                    pathname: "/login",
                    state: { from: props.location }
                  }}
                />
        } else {
          return <route.component {...props} routes={route.routes} />
        }
      }}
    />
  );
}

export default MyRoute;
