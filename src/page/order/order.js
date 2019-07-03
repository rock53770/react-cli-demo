
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class order extends React.Component {
  render() {
    return (
      <div>
        <Link to="/order/detail">order</Link>  
        <h3>order</h3>
      </div>
    );
  }
}

export default order