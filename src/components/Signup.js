import React, { useState } from "react";
import "../Login.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const defemail = "admin@gmail.com";
    const defpassword = "admin";

    if (email === defemail && password === defpassword) {
      alert(`Login Successfully!`);
      window.location.reload();
    } else {
      alert(`Invalid Credentials!`);
    }
  }
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
