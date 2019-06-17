import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import image from "../images/AmRC_ISD_Image.PNG";

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
              <h1>Background</h1>
              <hr />
              {/* <img src={image} id="global_impact" alt="amrc_global_impact"/> */}
              <p>
                Whether it’s a typhoon in the Philippines, a migration crisis in
                Bangladesh, wildfires in Chile, or extreme cold weather in
                Mongolia, the American Red Cross (AmRC) is steadfast in its
                efforts to support Red Cross and Red Crescent National Societies
                across the globe as they work to ensure that affected
                populations are provided the essential goods and services they
                need to rebuild their communities and restart their lives.
                Through the rapid deployment of Disaster Recovery Specialists,
                equipped with key technical expertise and equipment, and through
                the release of pre-positioned supplies strategically placed in
                warehouses across the globe, the AmRC has helped more than 4.6
                million people affected by disasters. To ensure that disaster
                affected populations continue to be supported in an efficient,
                effective, sustainable, and impactful way, it is imparative that
                AmRC supported Disaster Recovery programs are implemented in a
                systematic and consistent fashion, with all staff and volunteers
                following a standardized approach.
                <br />
                <br />
                With this goal in mind, the AmRC has developed a Disaster
                Recovery Toolkit, to serve as a reference guide for Disaster
                Recovery Specialists as they implement large-scale Disaster
                Recovery programs. This toolkit provides a basic outline of the
                minimally required steps for management of these programs and
                outlines the tools needed to executed these steps effectively.
                This toolkit, although certainly not exhaustive or obligatory,
                provides a basic framework for standarized management of
                Disaster Recovery programs and allows for clear and open
                dialogue among staff and volunteers working under AmRC supported
                Disater Recovery programs. In addition to its use as a reference
                guide during project implementation, this toolkit may also find
                value as a framework for Capacity Enhancement and Disaster
                Preparedness activities as specifics skills can be discussed in
                context of the larger project management cycle. To explore the
                Disater Recovery Toolkit, please sign-up and login below.
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
