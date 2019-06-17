import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./sign-up.css";
import logo from "../images/World_Food_Program_logo_blue.svg";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post("/user/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          alert("Signup was successful for username " + response.data.username);
          // update the state to redirect to home
          this.setState({
            redirectTo: "/login"
          });
        } else {
          alert("Username already taken, please try different username!");
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={logo}
                  id="signup_logo"
                  alt="American Red Cross Logo"
                />
                <hr></hr>
                <div className="SignupForm">
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-1 col-ml-auto">
                        <label className="form-label" htmlFor="username">
                          Username:
                        </label>
                      </div>
                      <div className="col-3 col-mr-auto">
                        <input
                          className="form-input"
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Username"
                          value={this.state.username}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-1 col-ml-auto">
                        <label className="form-label" htmlFor="password">
                          Password:{" "}
                        </label>
                      </div>
                      <div className="col-3 col-mr-auto">
                        <input
                          className="form-input"
                          placeholder="Password"
                          type="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="col-7" />
                      <button
                        className="btn btn-primary"
                        id="signup_button"
                        onClick={this.handleSubmit}
                        type="submit"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      );
    }
  }
}

export default Signup;
