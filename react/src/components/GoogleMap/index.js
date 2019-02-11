/*global google*/
import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import mapPin from './img/map-pin.png';

export class MapContainer extends Component {
  render() {
    return (
      <div className="contacts__map">
        <Map google={this.props.google} zoom={17} initialCenter={{lat: 55.748116, lng: 37.570913}}>

          <Marker name={'Current location'} onClick={this.onMarkerClick} icon={{url: mapPin,  scaledSize: new google.maps.Size(50,70)}}/>

          <InfoWindow nClose={this.onInfoWindowClose}>
            <div>
              <h1>dsadas</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCro3tHChMiGSgzL_9c4i_nZrinIxPum5o'
})(MapContainer)
