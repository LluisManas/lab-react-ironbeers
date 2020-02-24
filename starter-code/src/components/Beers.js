import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./Navbar";

class Beers extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(data => {
      console.log(data);
      console.log(data.data);
      this.setState({
        beers: data.data
      });
      console.log(this.state.beers);
    });
  }

  render() {
    const allBeers = this.state.beers.map(beer => {
      console.log(this.state.beers);
      console.log(beer);
      return (
        <div className="beerList">
          <div className="beer-info">
            <img className="beer-img" src={beer.image_url} alt="beer" />
            <p>Name: {beer.name}</p>

            <p>{beer.tagline}</p>

            <p>{beer.contributed_by}</p>

            <Link to={`/beers/${beer._id}`}>
              <p>More details</p>
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div>
        <NavBar />
        <h2>Beers</h2>
        <p>{allBeers}</p>
      </div>
    );
  }
}

export default Beers;
