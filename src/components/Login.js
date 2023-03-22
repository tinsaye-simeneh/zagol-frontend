import React, { useState } from "react";
import "../Login.css";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://home.heyeman.com/users/auth/login", {
        email: email,
        password: password,
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
        localStorage.setItem("AccessToken", response.data.tokens.accessToken);
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
            <h4>Login</h4>
          </div>
          <div>
            <form className="w-100" onSubmit={handleSubmit}>
              <input
                type="email"
                className="border border-secondary mt-5 p-2 mb-4 rounded login-input"
                placeholder="Enter your Username"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="border border-secondary p-2 rounded mt-3 login-input"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn text-white mt-4 login-btn btn-success"
              >
                Login
              </button>
            </form>
            <div className="mt-4">
              <span className="mt-3">
                Don't have an account?{" "}
                <a href="/signup" className="text-decoration-none">
                  Sign Up
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
