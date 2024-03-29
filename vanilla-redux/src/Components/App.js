import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Router/Home";
import Detail from "../Router/Detail";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </Router>
  );
}

export default App;
