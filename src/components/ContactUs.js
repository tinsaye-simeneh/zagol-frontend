import React, { useState } from "react";
import "../index.css";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleContact = (e) => {
    e.preventDefault();
    axios
      .post("https://backend.zagolarts.com/users/contact", {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then((res) => {
        console.log(res);
        alert(
          "Thanks for Contacting US, we will get back to you as soon as possible."
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
            Tell me about <br /> your Concerns
          </h1>
          <p className="caros text-dark px-5 pt-2">
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
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              style={{ resize: "none" }}
              cols="30"
              rows="5"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn btn-success mt-3 contactinputs">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
