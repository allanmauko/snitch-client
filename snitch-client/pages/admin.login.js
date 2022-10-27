import React, { useState } from "react";
import Header from "../../components/header/header";

function AdminLogin({ setUser }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  function handleAdminSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/admin_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
        window.location = "/admin_me";
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <Header />
      <div className="form-main-container">
        <div className="form-wrapper">
          <div className="form-header">
            <span className="form-title">
              Login to <strong>BuildCon</strong>
            </span>
          </div>

          <form className="form-content">
            <div className="input-wrapper">
              <label htmlFor="username" className="text-l ">
                Email:
              </label>
              <input
                required
                className=" mt-2 h-8 rounded-lg"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="input-style-focus"></span>
            </div>

            <div className="input-wrapper">
              <div className="input-group">
                <label htmlFor="username" className="text-l">
                  Password:
                </label>
                <input
                  className="mt-2 h-8 rounded-lg"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.map((error) => {
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3 text-center"
                    role="alert"
                  >
                    <span className="block sm:inline">{error}</span>
                  </div>;
                })}
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

            <button
              className="button-style w-100"
              type="submit"
              onClick={handleUserSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
