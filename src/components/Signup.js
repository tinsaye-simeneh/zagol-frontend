import React, { useState } from "react";
import "../Login.css";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://home.heyeman.com/users/auth/register", {
        email: email,
        password: password,
        firstname: fname,
        lastname: lname,
        phoneNumber: phoneNumber,
      })
      .then((response) => {
        localStorage.setItem("email", response.data.userDetails.email);
        localStorage.setItem("Firstname", response.data.userDetails.firstname);
        localStorage.setItem("LastName", response.data.userDetails.lastname);
        localStorage.setItem("id", response.data.userDetails.id);
        localStorage.setItem(
          "phoneNumber",
          response.data.userDetails.phoneNumber
        );
        localStorage.setItem("AccessToken", "response.data.tokens.accessToken");
        localStorage.setItem("loginStatus", "true");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-fluid text-center my-3">
      <div className="row bottomMargin">
        <div className="col-sm-6 mt-5 illust-mobile">
          <h1 className="text-center mt-5 pt-5"> Zagol Arts </h1>
        </div>

        <div className="col-sm-6 mt-5">
          <div className="header text-decoration-underline">
            <h4>Signup</h4>
          </div>
          <div>
            <form className="w-100" onSubmit={handleSubmit}>
              <input
                type="text"
                className="border border-secondary p-2 my-4 rounded login-input"
                placeholder="Enter your First Name"
                onChange={(e) => setFname(e.target.value)}
                required
              />
              <input
                type="text"
                className="border border-secondary p-2 mb-4 rounded login-input"
                placeholder="Enter your Last Name"
                onChange={(e) => setLname(e.target.value)}
                required
              />
              <input
                type="tel"
                className="border border-secondary p-2 mb-4 rounded login-input"
                placeholder="Enter your Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <input
                type="email"
                className="border border-secondary p-2 mb-4 rounded login-input"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="border border-secondary p-2 rounded login-input"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn text-white mt-4 login-btn btn-success"
              >
                Signup
              </button>
            </form>
            <div className="mt-4">
              <span className="mt-3">
                Already have an account?{" "}
                <a href="/login" className="text-decoration-none">
                  Login
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
