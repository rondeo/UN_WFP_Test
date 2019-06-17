import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Phase from "../components/phase";
import axios from "axios";

class Phases extends Component {
  constructor(props) {
    super(props);
    this.state = { topics: [] };
  }
  componentDidMount() {
    axios
      .get("/phases")
      .then(response => {
        this.setState({ topics: response.data });
        console.log(this.state.topics);
      })  
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  render() {
    return (
      <div>
        <div className="Content_Body">
        <h1>Project Management Phases</h1>
        <ul>
          {this.state.topics.map(({ name, id }) => (
            <li key={id}>
               <Link to={`/phases/${id}`}>
                 {"Phase " + id + ": "}
                 {name}
               </Link>
            </li>
          ))}
        </ul>
         <Route path={`/phases/:topicId`} component={Phase} /> 
        </div>
      </div>
    )
}
}

export default Phases;
