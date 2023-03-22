import React, {useState} from "react";
import "../index.css";

const Exclusive = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [size, setSize] = useState("");
  const [photo, setPhoto] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="container-fluid bg-silver py-4">
      <div className="row text-center">
        <div className="col-md-6">
          <h1
            className="caros text-dark px-5 pt-5 leftText"
            style={{fontWeight: "bold" }}
          >
            Lets Chat <br />
            Tell me about <br /> your Art specifications
          </h1>
          <p
            className="caros text-dark px-5 pt-2"
          >
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
            /> <input
            type="email"
            className="border border-secondary mt-1 bg-white text-secondary rounded p-2 mb-3 contactinputs"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

            <input
              type="text"
              className="border border-secondary mt-1 bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="Size"
              onChange={(e) => setSize(e.target.value)}
            />
            <input
              type="file"
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="photo Upload"
              onChange={(e) => setPhoto(e.target.value)}
            />
            <input
              type="text"
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="Type of art"
              onChange={(e) => setType(e.target.value)}
            />
            <textarea
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              style={{ resize: "none" }}
              cols="30"
              rows="5"
              placeholder="Description of the art"
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="btn btn-success mt-3 contactinputs">
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;