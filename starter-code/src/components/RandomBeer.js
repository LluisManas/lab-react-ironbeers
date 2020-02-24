import React, { Component } from "react";
import axios from "axios";
import NavBar from "./Navbar";

class RandomBeer extends Component {
  state = {
    beer: "Loading"
  };
  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(random => {
        this.setState({
          beer: random.data
        });
      });
  }

  render() {
    console.log(this.state.beer);
    return (
      <div>
        <NavBar />
        <img src={this.state.beer.image_url} />
        <p>{this.state.beer.name}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    );
  }
}

export default RandomBeer;
