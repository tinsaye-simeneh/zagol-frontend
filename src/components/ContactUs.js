import React from "react";
import "../index.css";
import medium from "../assets/image/medium.svg";
import linkedin from "../assets/image/linkedin.svg";
import twitter from "../assets/image/twitter.svg";
import dev from "../assets/image/dev.svg";
import Mail from "../assets/image/email.svg";
import '../index.css';

const ContactUs = () => {
  return (
    <div className="container-fluid bg-silver py-4">
      <div className="row text-center">
        <div className="col-md-6">
          <h1
            className="caros text-dark px-5 pt-5 leftText"
            style={{fontWeight: "bold" }}
          >
            Lets Chat <br />
            Tell me about <br /> your Concerns
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
              Contact Us
            </h1>
            <input
              type="text"
              className="border border-secondary mt-1 bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="Email"
            />
            <input
              type="text"
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="Subject"
            />
            <textarea
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              style={{ resize: "none" }}
              cols="30"
              rows="5"
              placeholder="Message"
            />
            <button className="btn btn-warning mt-3 contactinputs">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
