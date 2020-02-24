import React, { Component } from "react";
import { Link } from "react-router-dom";
//import "../App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="beers">
          <img src="../images/beers.png" alt="beers" />
          <br></br>
          <Link to="/beers">All Beers</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            nam ut id accusantium ad non sint quaerat, commodi, cumque quo
            cupiditate! Illo at culpa saepe cumque omnis, aspernatur
            consequuntur voluptate!
          </p>
        </div>
        <div>
          <img src="../images/new-beer.png" alt="all beers" />
          <br></br>
          <Link to="/random-beer">Random Beer</Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
            voluptate accusamus consequuntur? Rerum voluptatum quia totam earum
            harum velit autem, beatae qui quae minima dicta voluptas dolores
            natus obcaecati dolore?
          </p>
        </div>
        <div>
          <img src="../images/random-beer.png" alt="random-beers" />
          <br></br>
          <Link to="/new-beer">New Beer</Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore aut
            doloremque nihil iste. Laborum, nisi qui optio hic quae facilis
            commodi sit, accusamus sapiente maxime neque! Ipsam, ipsa. Maxime,
            quam.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
