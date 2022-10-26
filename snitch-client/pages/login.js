import { useState } from "react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  // const navigate = useNavigate();

  const loginData = { email: email, password: password };

  function handleSubmit() {
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
          sessionStorage.setItem("user_id", JSON.stringify(user.id));
          window.location = "/";
        });
      } else {
        res
          .json()
          .then((e) => console.log([e.error]))
          .finally(setEmail(""), setPassword(""));
      }
    });
  }
  return (
    <>
      <form />
      <div className="form-main-container">
        <div className="form-wrapper">
          <div className="form-header">
            <span className="form-title">
              Login to <strong>Welcome To Snitch</strong>
            </span>
          </div>

          <form className="form-content">
            <div className="input-wrapper">
              <input
                className="input-email"
                type="text"
                name="Email"
                input={loginData.email}
                placeholder="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <div className="input-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  id="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            <button className="button-style w-100">Login</button>

            <div className="checkbox-wrapper mt-4">
              <input
                type="checkbox"
                className="checkbox-style"
                id="checkbox"
                name="remember-me"
              />
              <label className="label-checkbox-style" htmlFor="checkbox">
                Remember me
              </label>
              {error.length > 0 && (
                <ul style={{ color: "red" }} className="fs-5">
                  {error.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <button
                className="login-form-button"
                type="submit"
                onClick={handleSubmit}
              ></button>
            </div>
            <p className="txt-style1 mt-5">
              Not a member yet?{" "}
              <a className="txt-style2" href="#">
                <strong>Sign Up!</strong>
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
