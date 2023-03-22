import React from "react";
import "../index.css";
import Logo from "../assets/images/1.jpg";
import Carousel from "../assets/images/dashboard.png";

const Home = () => {
  return (
    <div class="container-fluid bg-silver px-5 py-5">

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="w-100 d-block" src={Carousel} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Carousel} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Carousel} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev bg-dark" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next bg-dark" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

      <div class="row">
      <div class="card" style={{width:'18rem'}}>
        <img src={Logo} className="card-img-top" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://google.com" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
