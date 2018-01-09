import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Strings from '../misc/Strings'
 

class Home extends Component {
    constructor(){
      super()
    }

    render() {
      return <GApi selectedPlace="NY" />
    }
  }
  
export default Home;

  
 
class MapContainer extends Component {
  constructor() {
    super()
    this.state = {
      selectedPlace : { name: 'NY' }
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
  }
  
  onMarkerClick() {
    console.log('GAPI - clicked in Marker')
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
const GApi = GoogleApiWrapper({
  apiKey: (Strings.GoogleApi)
})(MapContainer)