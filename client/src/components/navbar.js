// import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/wfp-logo-extended-white-en.svg";
import axios from "axios";
import "./navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error:" + error);
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);
    return (
      <div>
        <header className="Navbar Navbar-header" id="nav-container">
          <div className="col-12">
            {loggedIn ? (
              <section className="navbar-section">
                <div className="col-md-2">
                  <img src={logo} className="Navbar-logo" alt="logo" />
                </div>
                <div className="col-md-7" />
                <div className="col-md-3">
                  <Link to="/table" className="btn btn-link">
                    <span className="Navbar-link">table</span>
                  </Link>
                  {/* <Link to="/disciplines" className="btn btn-link">
                    <span className="Navbar-link">disciplines</span>
                  </Link> */}
                  <Link to="/map" className="btn btn-link">
                    <span className="Navbar-link">map</span>
                  </Link>
                  <span className="btn btn-link" onClick={this.logout}>
                    <Link to="/" className="Navbar-link">
                      logout
                    </Link>
                  </span>
                </div>
              </section>
            ) : (
              <section className="navbar-section">
                <div className="row">
                  <div className="col-md-2">
                    <img src={logo} className="Navbar-logo" alt="logo" />
                  </div>
                  <div className="col-md-7" />
                  <div className="col-md-3">
                    <Link to="/" className="btn btn-link">
                      <span className="Navbar-link">home</span>
                    </Link>
                    <Link to="/login" className="btn btn-link">
                      <span className="Navbar-link">login</span>
                    </Link>
                    <Link to="/signup" className="btn btn-link">
                      <span className="Navbar-link">sign up</span>
                    </Link>
                  </div>
                </div>
              </section>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
