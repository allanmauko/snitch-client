import { useEffect, useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Perform localStorage action
    let value = localStorage.getItem("isLoggedIn");
   alert(value);
    if (value) {
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
    console.log(localStorage.getItem("isLoggedIn"));
  }, []);

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-instagram-square"></i>
        <h1>Snitch</h1>
      </div>
      {/* if user is logged in , show the loggedin data */}
      {isLoggedIn ? (
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem ">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="topListItem">
              <Link href="/blog">Blogs</Link>
            </li>
            <li className="topListItem">
              <Link href="/contactUs">Contact Us</Link>
            </li>
            <li className="topListItem">
              <Link href="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="topRight">
          <li className="topListItem ">
            <Link href="/">Home</Link>
          </li>
          <ul className="topList">
            <li className="topListItem">
              <Link href="/login">Login</Link>
            </li>
            <li className="topListItem">
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
