import React from "react";

const Checkout = () => {
    
    const ItemID = localStorage.getItem("itemID");
    const ItemName = localStorage.getItem("itemName");
    const ItemPrice = localStorage.getItem("itemPrice");

    return (
        <div className="container text-center my-5">
            <div className="row">
                <div className="col-md-6 rounded border p-4 mx-auto">
                    <h1>Checkout</h1>
                    <p>Item ID: {ItemID}</p>
                    <p>Item Name: {ItemName}</p>
                    <p>Item Price: {ItemPrice}</p>
                    <button className="btn btn-success mx-3">Pay Now</button>
                <button className="btn btn-danger">Cancel</button>
                </div>
            </div>
        </div>
    );
    }

export default Checkout;