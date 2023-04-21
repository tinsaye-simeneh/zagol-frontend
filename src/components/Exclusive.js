import React, { useState } from "react";
import "../index.css";
import axios from "axios";

const Exclusive = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [size, setSize] = useState("");
  const [photo, setPhoto] = useState("");
  const [type, setType] = useState("");

  const handleOrder = (e) => {
    e.preventDefault();
    axios
      .post("https://backend.zagolarts.com/buy/exclusive", {
        name: name,
        size: size,
        email: email,
        photo: photo,
        type: type,
      })
      .then((res) => {
        console.log(res);
        alert(
          "Thanks for your order, we will get back to you as soon as possible."
        );
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid bg-silver py-4">
      <div className="row text-center">
        <div className="col-md-6">
          <h1
            className="caros text-dark px-5 pt-5 leftText"
            style={{ fontWeight: "bold" }}
          >
            Lets Chat <br />
            Tell me about <br /> your Art specifications
          </h1>
          <p className="caros text-dark px-5 pt-2">
            Lets create something better
          </p>
        </div>
        <div className="col col-sm-12 col-md-6 text-center pb-5">
          <form className="p-5 rounded bg-white text-center">
            <h1 className="caros text-black mb-4" style={{ fontSize: "2rem" }}>
              Exclusive Order
            </h1>
            <input
              type="text"
              className="border border-secondary mt-1 bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              required
            />{" "}
            <input
              type="email"
              className="border border-secondary mt-1 bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <select
              name="type"
              id="type"
              className="border border-secondary mt-1 bg-white text-secondary rounded p-2 mb-3 contactinputs pe-4"
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="painting">Painting</option>
              <option value="Print">Print</option>
              <option value="WorkOnpaper">Work on paper </option>
              <option value="Photography">Photography</option>
              <option value="TexilePrint">Texile print</option>
              <option value="stringArt">String Art</option>
            </select>
            <select
              name="size"
              id="size"
              className="border border-secondary mt-1 bg-white text-secondary rounded p-2 mb-3 contactinputs pe-4"
              onChange={(e) => setSize(e.target.value)}
              required
            >
              <option value="mini">mini</option>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
              <option value="overSize">over size</option>
            </select>
            <input
              type="file"
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="photo Upload"
              onChange={(e) => setPhoto(e.target.value)}
              required
            />
            <button
              className="btn btn-success mt-3 contactinputs"
              type="submit"
              onClick={handleOrder}
            >
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
