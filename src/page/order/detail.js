
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class orderDetail extends React.Component {
  render() {
    return (
      <div>
        <Link to="/order">order</Link>  
        <h3>detail</h3>
      </div>
    );
  }
}

export default orderDetail