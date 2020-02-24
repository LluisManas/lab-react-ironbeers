import React, { Component } from "react";
import { Link } from "react-router-dom";
import Beers from "./Beers";
import axios from "axios";
import NavBar from "./Navbar";

class DetailsBeer extends Component {
  state = {
    beer: { name: "Loading" }
  };

  componentDidMount() {
    const beerId = this.props.match.params.id;
    console.log(this.props.match.params);
    console.log(this.props.match);

    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(beer => {
      let found = beer.data.find(info => {
        console.log(info);
        console.log(info.data);
        return info._id === beerId;
      });

      this.setState({
        beer: found
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
      </div>
    );
  }
}

export default DetailsBeer;
