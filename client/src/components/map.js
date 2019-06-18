import React, { Component } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from 'styled-components'
import "./map.css"


/* mapbox.streets
mapbox.light
mapbox.dark
mapbox.satellite
mapbox.streets-satellite
mapbox.wheatpaste
mapbox.streets-basic
mapbox.comic
mapbox.outdoors
mapbox.run-bike-hike
mapbox.pencil
mapbox.pirates
mapbox.emerald
mapbox.high-contrast */

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`

class Map extends Component {
  componentDidMount() {
    this.map = L.map("map", {
      center: [41.902974, 12.490694],
      zoom: 4,
      zoomControl: false
    });

    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        detectRetina: true,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        maxNativeZoom: 17,
        id: "mapbox.light",
        accessToken: "pk.eyJ1Ijoid21jZmFsbDIiLCJhIjoiNjk4NGY3YjdiOGVhYWZhYzI1YjA5ZGJmMTc0ZDMwNTYifQ.0tJmXauSlx_qjiJLTscB8g"
      }
    ).addTo(this.map);
    
    L.circle([1.508, 12.11], {
        color: '#2A93FC',
        fillColor: '#2A93FC',
        fillOpacity: 0.5,
        radius: 100000
    }).bindPopup("Gabon Marker").addTo(this.map);

    L.circle([51.508, -0.11], {
        color: '#2A93FC',
        fillColor: '#2A93FC',
        fillOpacity: 0.5,
        radius: 100000
    }).bindPopup("UK Marker").addTo(this.map);


    L.circle([21.508, 25.11], {
        color: '#2A93FC',
        fillColor: '#2A93FC',
        fillOpacity: 0.5,
        radius: 100000
    }).bindPopup("Sudan Marker").addTo(this.map);
  }

  render() {
    return (
      <div className="container">
          <h1>Submitted Form Data - Map</h1>
          <hr />
          <div className="Map_Container">
          <Wrapper width="100%" height="600px" id="map">
          </Wrapper>
          </div>
          <p>Note - This page is a placeholder until form data with geospatial attributes is made available</p>
          <br>
          </br>
      </div>
    );
  }
}

export default Map;
