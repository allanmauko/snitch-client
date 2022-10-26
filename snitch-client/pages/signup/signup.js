import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Header from "../../components/header/header";
// import Link from "next/link";

function SignUp() {
  // Declaring the initials
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // handle user registration
  function handleSubmit(e) {
    e.preventDefault();
    // check matching password
    if (password !== passwordConfirm) {
      // if  sign up failed
      let misMatchAlert = Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Passwords don't match"
      });
      // after alert reload page
      misMatchAlert.then(function () {
        window.location = "/signup";
      });
      return;
    }

    // send data to server
    fetch("http://127.0.0.1:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // if account created successfully
        let successAlert = new Swal({
          title: "Success!",
          text: "User saved successfully!",
          type: "success"
        });
        // after successful sign up then login
        successAlert.then(function () {
          sessionStorage.setItem("user_id", JSON.stringify(user.id))
          window.location = "/login";
        });
      })
      .catch((err) => {
        console.log(err);
        // if  sign up failed
        let failAlert = new Swal({
          title: "Oops!",
          text: "User not saved!",
          type: "error"
        });
        // after alert reload page
        failAlert.then(function () {
          window.location = "/signup";
        });
      });
  }

  return (
    <div className="container border-dark rounded mb-3 mt-5 justify-content-centre">
      <form
        onSubmit={handleSubmit}
        className="card text-dark mb-3"
        style={{ backgroundColor: "#BD9FF9", maxWidth: "35rem" }}
      >
        <h4 className="card-header">Welcome to Snitch</h4>
        <div className="card-body">
          <fieldset>
            <div className="form-group">
              <label htmlFor="userName" className="form-label mt-4">
                Username:
              </label>
              <input
                type="name"
                className="form-control"
                id="userName"
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="userEmail" className="form-label mt-4">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="userEmail"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="userPassword" className="form-label mt-4">
                Password:
              </label>
              <input
                className="form-control"
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="userConfirmPassword" className="form-label mt-4">
                Confirm-Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="userPassword"
                value={passwordConfirm}
                placeholder="re-enter Password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            <div className="d-grid mt-3 d-flex justify-content-center">
              <button className="btn btn-warning text-nowrap" type="submit">
                Sign Up
              </button>
              {/* <!-- Register buttons --> */}
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
