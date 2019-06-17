import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

// components
import Signup from "./components/sign-up";
import LoginForm from "./components/login-form";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import AdminAdd from "./components/admin-add";
import Admin from "./components/admin";
import Table from "./components/table";
import Map from "./components/map";

// css
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/login"
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route exact path="/signup" render={() => <Signup />} />
        <Route path="/table" component={Table} />
        <Route exact path="/map" render={() => <Map />} />
        <Route exact path="/admin" render={() => <Admin />} />
        <Route exact path="/admin/create" render={() => <AdminAdd />} />
        <Footer />
      </div>
    );
  }
}

export default App;
