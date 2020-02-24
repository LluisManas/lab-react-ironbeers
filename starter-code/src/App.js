import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Beers from "./components/Beers";
import DetailsBeer from "./components/DetailsBeer";
import RandomBeer from "./components/RandomBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronBeers</h1>

        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={DetailsBeer} />
        <Route exact path="/random-beer" component={RandomBeer} />
      </div>
    );
  }
}

export default App;
