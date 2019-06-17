import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
// import axios from "axios";
import "./table.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.ona.io/api/v1/data/185260")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            forms: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, forms } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <h1>Submitted Form Data - Table</h1>
          <hr />
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">age</th>
                <th scope="col">moustache</th>
                <th scope="col">moustache type</th>
              </tr>
            </thead>
            <tbody>
              {forms.map(form => (
                <tr>
                  <td>{form._id}</td>
                  <td>{form.age}</td>
                  <td>{form.Arif_moustache}</td>
                  <td>{form.type_of_moustache}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br>
          </br>
        </div>
      );
    }
  }
}

export default Table;
