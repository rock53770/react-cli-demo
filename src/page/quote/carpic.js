
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class Carpic extends React.Component {

  render() {
    console.log("Carpic")
    return (
      <div>
        <Link to="/quote">quote</Link>  
        <h3>Carpic</h3>
      </div>
    );
  }
}
export default Carpic