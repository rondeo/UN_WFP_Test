import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./login-form.css";
import logo from "../images/World_Food_Program_logo_blue.svg";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
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
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          alert("Login successful, welcome " + response.data.username);
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/table"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
        alert("Login or Password were incorrect, please try again!");
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
                <img className="card-img-top" src={logo} id="login_logo" alt="American Red Cross Logo" />
                <hr></hr>
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
                    <div className="col-3">
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
                      id="login_button"
                      onClick={this.handleSubmit}
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      );
    }
  }
}

export default LoginForm;
