import React from "react";
import "../index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselImg from "../assets/images/dashboard.png";
import { Data } from "./data.js";

const Category = () => {
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

  return (
    <div class="container-fluid bg-silver py-5">
      <div class="row mx-auto text-center bg-silver py-5">
        <h1 className="text-dark pb-5">Latest Paint 1 Products</h1>
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
    </div>
  );
};

export default Category;
