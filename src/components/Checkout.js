import React from "react";
import axios from "axios";

const Checkout = () => {
  const ItemID = localStorage.getItem("itemID");
  const ItemName = localStorage.getItem("itemName");
  const ItemPrice = localStorage.getItem("itemPrice");
  const loginStatus = localStorage.getItem("loginStatus");

  const handleSuccess = () => {
    if (loginStatus === "true") {
      axios
        .post("http://home.heyeman.com/buy/purchase", {
          itemID: ItemID,
          itemName: ItemName,
          itemPrice: ItemPrice,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      alert("Payment Successful");
      localStorage.clear();
      window.location.href = "/";
    } else {
      alert("Please Login to continue");
      window.location.href = "/login";
    }
  };

  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-md-6 rounded border p-4 mx-auto">
          <h1> Checkout </h1> <p> Item ID: {ItemID} </p>{" "}
          <p> Item Name: {ItemName} </p> <p> Item Price: {ItemPrice} </p>{" "}
          <a className="btn btn-success mx-3" onSubmit={handleSuccess}>
            Buy Now{" "}
          </a>{" "}
          <a className="btn btn-danger" href="/">
            Cancel{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Checkout;
