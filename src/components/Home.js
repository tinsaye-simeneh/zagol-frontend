import React from "react";
import "../index.css";
import Logo from "../assets/images/1.jpg";
import Carousel from "../assets/images/dashboard.png";
import { Data } from "./data.js";

const Home = () => {
  return (
    <div class="container-fluid bg-silver py-5">
      <div
        id="carouselExampleControls"
        class="carousel slide my-5"
        data-ride="carousel"
        style={{
          width: "100%",
        }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="w-100 d-block carousel-img"
              src={Carousel}
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block bg-dark">
              <h5>Text test</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 carousel-img"
              src={Carousel}
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block bg-dark">
              <h5>Text test</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 carousel-img"
              src={Carousel}
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block bg-dark">
              <h5>Text test</h5>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev bg-dark"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
        <a
          class="carousel-control-next bg-dark"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
      </div>

      <div class="row mx-auto text-center bg-silver py-5">
        <h1 className="text-dark pb-5">Latest Products</h1>
        {Data.map((data) => (
          <div class="col-md-3 mb-4" key={data.id}>
            <div class="card">
              <img
                src={data.img.src}
                alt={data.img.alt}
                className="img-fluid"
              />
              <div class="card-body">
                <div className="card-title">
                  <h5>Title: {data.title}</h5>
                </div>
                <p class="card-text">{data.description}</p>
                <p class="card-text">Artist: {data.Artist}</p>
                <p class="card-text">Price: {data.price}</p>
                <p class="card-text">Category: {data.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Home;
