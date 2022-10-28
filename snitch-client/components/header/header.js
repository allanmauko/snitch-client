import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import AppContext from "../AppContext";

const Header = () => {
  let context = useContext(AppContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="text-warning">Build</span>Con
          </a>
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarSupportedContent"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#about">
                  About
                </Link>
              </li>
              {context.currentUser ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="#services">
                      Blogs
                    </Link>
                  </li>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar-list-4"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbar-list-4">
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img
                            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                            width="40"
                            height="40"
                            class="rounded-circle"
                          />
                        </a>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          <a class="dropdown-item" href="#">
                            Dashboard
                          </a>
                          <a class="dropdown-item" href="#">
                            Edit Profile
                          </a>
                          <a class="dropdown-item" href="#">
                            Log Out
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="./userLogin">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="./userSignUp">
                      Create Account
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
