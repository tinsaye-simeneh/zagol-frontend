import React from "react";
import "../index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselImg from "../assets/images/dashboard.png";
import CarouselImg1 from "../assets/images/1.png";
import CarouselImg2 from "../assets/images/2.png";
import CarouselImg3 from "../assets/images/3.png";
import { Data } from "./data.js";

const Home = () => {
  localStorage.removeItem("itemID");
  localStorage.removeItem("itemName");
  localStorage.removeItem("itemPrice");

  const handleBuy = (id, title, price) => {
    console.log(id, title, price);
    if (localStorage.getItem("loginStatus") === "true") {
      if (localStorage.getItem("itemID") === null) {
        localStorage.setItem("itemID", id);
        localStorage.setItem("itemName", title);
        localStorage.setItem("itemPrice", price);
        alert("You can only buy one item at a time");
        window.location.href = "/checkout";
      }
    } else {
      alert("You must be logged in to buy an item");
      window.location.href = "/login";
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
              class="d-block w-75 carousel-img mx-auto"
              src={CarouselImg1}
              alt="First slide"
            />
            {/* <div class="carousel-caption d-none d-md-block bg-dark">
              <h5>Text test</h5>
            </div> */}
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-75 carousel-img mx-auto"
              src={CarouselImg2}
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-75 carousel-img mx-auto"
              src={CarouselImg3}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev bg-dark carousel-btn"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
          style={{
            width: "7%",
          }}
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next bg-dark carousel-btn"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
          style={{
            width: "7%",
          }}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
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
                <button
                  class="btn btn-success"
                  type="submit"
                  onClick={(e) => handleBuy(data.id, data.title, data.price)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-center my-2">Our Categories</h1>
      <Carousel responsive={responsive}>
        <div className="text-center">
          <img src={CarouselImg} alt="Logo" />
          <p className="text-center">Item 1</p>
        </div>
        <div className="text-center">
          {" "}
          <img src={CarouselImg} alt="Logo" />
          <p className="text-center">Item 1</p>
        </div>
        <div className="text-center">
          <img src={CarouselImg} alt="Logo" />
          <p className="text-center">Item 1</p>
        </div>
        <div className="text-center">
          {" "}
          <img src={CarouselImg} alt="Logo" />
          <p className="text-center">Item 1</p>
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default Home;
