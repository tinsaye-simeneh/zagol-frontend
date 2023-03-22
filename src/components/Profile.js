import React from "react";

const Profile = () => {
  const handleLogout = () => {
    localStorage.setItem("LoginStatus", "false");
    window.location.href = "/";
  };

  return (
    <div className="container text-center border rounded p-5">
      <h1>Profile</h1>
      <p>First Name: {localStorage.getItem("Firstname")}</p>
      <p>Last Name: {localStorage.getItem("LastName")}</p>
      <p>Email: {localStorage.getItem("email")}</p>
      <p>Phone Number: {localStorage.getItem("phoneNumber")}</p>
      <button onClick={handleLogout} className="btn btn-success">
        Logout
      </button>
    </div>
  );
};

export default Profile;
