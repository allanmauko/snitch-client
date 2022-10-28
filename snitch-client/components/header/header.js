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
                  <div class="container-fluid">
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle d-flex align-items-center"
                          href="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                            class="rounded-circle"
                            height="22"
                            alt="Avatar"
                            loading="lazy"
                          />
                        </a>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              My profile
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Settings
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Logout
                            </a>
                          </li>
                        </ul>
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
