import React from "react";
import axios from "axios";

const Checkout = () => {
  const ItemID = localStorage.getItem("itemID");
  const ItemName = localStorage.getItem("itemName");
  const ItemPrice = localStorage.getItem("itemPrice");
  const loginStatus = localStorage.getItem("loginStatus");
  const id = localStorage.getItem("id");

  const request = () => {
    axios
      .post("https://backend.zagolarts.com/buy/purchase", {
        userId: id,
        artName: ItemName,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSuccess = () => {
    if (loginStatus !== "true") {
      alert("Payment Successful");
      localStorage.clear();
      window.location.href = "/";
    } else {
      alert("Please Login to continue");
      window.location.href = "/login";
    }
  };

  const handleCancel = () => {
    localStorage.removeItem("itemID");
    localStorage.removeItem("itemName");
    localStorage.removeItem("itemPrice");
    window.location.href = "/";
  };

  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-md-6 rounded border p-4 mx-auto">
          <h1> Checkout </h1> <p> Item ID: {ItemID} </p>{" "}
          <p> Item Name: {ItemName} </p> <p> Item Price: {ItemPrice} </p>{" "}
          <button
            className="btn btn-success mx-3"
            type="submit"
            onClick={(e) => handleSuccess(e)}
          >
            Buy Now{" "}
          </button>{" "}
          <button
            type="submit"
            className="btn btn-danger"
            onClick={handleCancel}
          >
            Cancel{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Checkout;
