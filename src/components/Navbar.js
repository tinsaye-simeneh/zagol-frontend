import React from "react";
import logo from "../assets/images/logo.png";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const LoginStat = localStorage.getItem("loginStatus");
  let Redirect = "";

  if (LoginStat === "true") {
    Redirect = "/profile";
  } else {
    Redirect = "/login";
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white pt-3">
        <div className="container py-3">
          <a className="navbar-brand text-dark" href="./Home">
            <img className="logo" src={logo} alt="logo..." />
            Zagol Arts
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active mt-2 mx-4">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item mt-2 mx-2">
                <div class="dropdown show text-secondary">
                  <a
                    class="btn btn-white dropdown-toggle text-secondary text-dark"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Category
                  </a>
                  <div
                    class="dropdown-menu text-center border-0"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <Link to="/category" class="dropdown-item">
                      paint 1
                    </Link>
                    <Link to="/category" class="dropdown-item">
                      paint 2
                    </Link>
                    <Link to="/category" class="dropdown-item">
                      paint 3
                    </Link>
                    <Link to="/category" class="dropdown-item">
                      paint 4
                    </Link>
                    <Link to="/category" class="dropdown-item">
                      paint 5
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item mt-2 mx-4">
                <Link to="/exclusive" className="nav-link">
                  Exclusive Order
                </Link>
              </li>
              <li className="nav-item mt-2 mx-4">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item mt-2 mx-4">
                <Link to="" className="nav-link disabled">
                  Event
                </Link>
              </li>
              <li className="nav-item mx-4" id="Account">
                <Link to={Redirect} className="nav-link">
                  <button className="btn btn-outline-dark full-width">
                    Account
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
