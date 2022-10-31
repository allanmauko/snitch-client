import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Header from "../components/header/header";
import Link from "next/link";

function AdminSignUp() {
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
        window.location = "/adminLogin";
      });
      return;
    }

    // send data to server
    fetch("https://buildcon.herokuapp.com/admin_signup", {
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
          // sessionStorage.setItem("user_id", JSON.stringify(user.id))
          window.location = "/adminLogin";
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
          window.location = "/adminSignUp";
        });
      });
  }

  return (
    <>
      <Header />
      <div className="form-main-container">
        <div className="form-wrapper">
          <div className="form-header">
            <span className="form-title">
            👋 Admin Welcome To <strong>Build Con</strong>
            </span>
          </div>

          <form className="form-content">
            <div className="input-wrapper">
              <input
                className="input-style"
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              <span className="input-style-focus"></span>
            </div>
            <div className="input-wrapper">
              <input
                className="input-style"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <span className="input-style-focus"></span>
            </div>
            <div className="input-wrapper">
              <div className="input-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  id="password"
                  required
                />
                <span className="form-control-focus"></span>
                <div
                  className="input-group-addon"
                  onClick="passwordVisibility();"
                >
                  <i className="fa fa-eye" id="showPass"></i>
                  <i className="fa fa-eye-slash d-none" id="hidePass"></i>
                </div>
              </div>
            </div>

            <div className="input-wrapper">
              <input
                className="form-control"
                type="password"
                placeholder="Repeat Password"
                id="repeatPassword"
                required
              />
              <span className="input-style-focus"></span>
            </div>

            {/* <div className="checkbox-wrapper mt-4">
              <input
                type="checkbox"
                className="checkbox-style"
                id="checkbox"
                name="remember-me"
                required
              />
           
            </div> */}

            <button className="button-style w-100">Sign Up</button>

            <p className="txt-style1 mt-5">
              Already a member?{" "}
              <Link className="txt-style2" href="/adminLogin">
                <strong>Login!</strong>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminSignUp;
