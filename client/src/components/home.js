import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="parallax">
          <div className="parallax_title"> Vulnerability Analysis Mapping </div>
        </div>
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <div className="home_body_text">
              <br />
              <p>
                The United Nations World Food Program (WFP) Vulnerability
                Analysis and Mapping (VAM) Unit is an internal structure within
                WFP that provides temporary and long-term technical assistance
                in food security analysis to decision-makers at WFP Headquarters
                in Rome and in WFP Regional and Country Offices. The VAM network
                is currently comprised of three full-time international staff
                members in Rome Headquarters, 12 international VAM Officers, and
                approximately 20 VAM National Officers and VAM Focal Points.
                This network currently provides food security analysis coverage
                for 36 countries. The broad goals of VAM are to: Provide the
                factual basis for WFP country program design, in both the relief
                and development contexts, to identify, understand, and best
                address problems of food insecurity and vulnerability in WFP
                partner countries; Provide additional information and analytical
                support as needed during relief and development program
                implementation and evaluation phases. The VAM strategy is a
                direct extension of the guidance provided in WFP’s current
                Program Design Manual and Enabling Development strategy document. 
                VAM is expressly an information tool for WFP relief and
                development program design, management, and evaluation. Working
                with WFP program staff in each country where it is operational,
                VAM will produce a range of analytical outputs intended to
                inform decision-making at key points within the WFP country
                programming cycle. As a result, the VAM analytical cycle is
                explicitly linked to the country programming cycle. Please login/sign up below
                to access the VAM portal.
              </p>
              <div className="row">
                <Link to="/login" className="btn btn-primary center-block">
                  Login Now
                </Link>
                <Link to="/signup" className="btn btn-primary center-block">
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-1" />
        </div>
      </div>
    );
  }
}

export default Home;
