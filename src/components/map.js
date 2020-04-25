import React, { Component } from 'react';
// import { render } from 'react-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '75%',
    float: 'right',
    height: '100%',
};

// Class based Component
class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [
                {latitude: 33.986903, longitude: -117.907868},
                {latitude: 33.9759423, longitude: -117.921071},
                {latitude: 33.9192687988, longitude: -117.888426208496},
                {latitude: 33.91307081, longitude: -117.91434325},
                {latitude: 33.93084488, longitude: -117.92140121},
                {latitude: 33.95524695, longitude: -117.90425407}
            ],

            location: []
        }
        // Bind Event
        this.showCords = this.showCords.bind(this);
    }

    displayMarkers = () => {
        console.log('click')
    }

    // showCords = (ref, map, e) => {
    //   const location = e.latLng;

    //   this.setState( (prevState, props) => {
    //     locations: [...prevState.locations]
    //   });
    //   map.panTo(location);

    //   // console.log(location)
    //   // console.log(store.latitude)
    //   // console.log(store.longitude)
    // }
    
    showCords = (...stores) => {
        return this.showCords(stores)
    }

    componentDidMount() {

    }

    render() {

        return (

            // Map Component 
            <div id="map" className="map">

              {/* Map Library*/}
              <Map 
                className="innerMap"
                onClick={this.showCords}
                google={this.props.google}
                zoom={14}
                initialCenter={{ lat: 33.986903, lng: -117.907}}
              >

                {/* Render Array */}
                {this.state.stores.map((m, i) => (
                  <Marker 
                    key={i}
                    id={i}
                    position={{
                      lat: m.latitude,
                      lng: m.longitude
                    }}
                  />
                ))}

              </Map>
              {/* End of Map Libary */}
              
            </div>
            // End of Map Component

        );
    }
}

// Google Maps API
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAksdTwdalWwKDN0IuFELIHTpywlhVZFhE'
})(MapContainer);