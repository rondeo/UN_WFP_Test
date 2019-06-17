import React, { Component } from "react";
import "./other.css";
import strategy from "../assets/other/ISD_FY19_Performance_Goals.pptx";
import toc from "../assets/other/Long-Term_Recovery_Theory_of_Change.pptx";

class Other extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8 other-container">
            <br />
            <h1>American Red Cross Resources</h1>
            <hr />
            <h3>Strategy</h3>
            <a href={strategy} target="_blank" rel="noopener noreferrer">
              AmRC - FY19 Performance Goals
            </a>
            <br></br>
            <a href={toc} target="_blank" rel="noopener noreferrer">
              AmRC - Recovery Theory of Change
            </a>
            <h3>Operations</h3>
            <p>
              N/A
            </p>
            <h3>Standards</h3>
            <p>
              N/A
            </p>
            <br />
            <h1> Red Cross Red Crescent Movement Resources</h1>
            <hr />
            <h3>Strategy</h3>
            <a href="https://www.ifrc.org/Global/Publications/general/strategy-2020.pdf" target="_blank" rel="noopener noreferrer">
              {" "}
              IFRC - Strategy 2020
            </a>
            <h3>Operations</h3>
            <a href="https://go.ifrc.org/" target="_blank" rel="noopener noreferrer"> IFRC - Go Project</a>
            <br />
            <h3>Standards</h3>
            <a href="https://www.ifrc.org/Global/Publications/disasters/code-of-conduct/code-english.pdf" target="_blank" rel="noopener noreferrer"> IFRC - Code of Conduct</a>
            <br />
            <h1> External Resources</h1>
            <hr />
            <h3>Strategy</h3>
            <a href="https://interagencystandingcommittee.org/grand-bargain-hosted-iasc" target="_blank" rel="noopener noreferrer">
              IASC - Grand Bargain
            </a>
            <h3>Operations</h3>
            <a href="https://reliefweb.int/" target="_blank" rel="noopener noreferrer">
              {" "}
              Relief Web{" "}
            </a>
            <br />
            <a href="https://data.humdata.org/" target="_blank" rel="noopener noreferrer">
              {" "}
              Humanitarian Data Exchange{" "}
            </a>
            <br />
            <a href="https://www.humanitarianresponse.info/" target="_blank" rel="noopener noreferrer">
              {" "}
              UNOCHA - Humanitarian Response{" "}
            </a>
            <br></br>
            <a href="https://data.worldbank.org/" target="_blank" rel="noopener noreferrer">
              {" "}
              World Bank - Open Data{" "}
            </a>
            <h3>Standards</h3>
            <a href="https://www.spherestandards.org/" target="_blank" rel="noopener noreferrer">
              Sphere Standards
            </a>
            <br></br>
            <a href="https://corehumanitarianstandard.org/the-standard" target="_blank" rel="noopener noreferrer">
              Core Humanitarian Standards
            </a>
            <br></br>
          </div>
          <div className="col-md-1" />
        </div>
        <div className="row">
          <br />
        </div>
      </div>
    );
  }
}

export default Other;
