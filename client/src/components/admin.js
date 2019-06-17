import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./admin.css";

class Admin extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4"/>
        <div className="col-md-4">
        <br />
        <h4>Admin Interface - Select Task </h4>
        <hr />
          <Link to="/admin/create" className="btn btn-primary center-block">
            Create Steps
          </Link>
          <Link to="/admin/update" className="btn btn-primary center-block">
            Update Steps
          </Link>
          <Link to="/admin/delete" className="btn btn-primary center-block">
            Delete Steps
          </Link>
        </div>
        <div className="col-md-4" />
      </div>
    );
  }
}

export default Admin;
