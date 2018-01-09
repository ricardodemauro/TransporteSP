import React, { Component } from 'react'
import { compose, withProps, lifecycle } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Strings from '../misc/Strings'
import Utils from '../misc/Utils'
import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox'
 
const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
        const refs = {}
        
        const center = {
            lat: this.props.lat ? this.props.lat : -23.55, 
            lng: this.props.lng ? this.props.lng : -46.63
        }
        
        this.setState({
            bounds: null,
            center: center,
            markers: [],
            onMapMounted: ref => {
                refs.map = ref;
            },
            onBoundsChanged: () => {
                this.setState({
                    bounds: refs.map.getBounds(),
                    center: refs.map.getCenter(),
                })
            },
            onSearchBoxMounted: ref => {
                refs.searchBox = ref;
            },
            onPlacesChanged: () => {
                const places = refs.searchBox.getPlaces();
                const bounds = new google.maps.LatLngBounds();

                places.forEach(place => {
                    if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport)
                    } else {
                    bounds.extend(place.geometry.location)
                    }
                });
                const nextMarkers = places.map(place => ({
                    position: place.geometry.location,
                }));
                //const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
                const nextCenter = nextMarkers[0].position
                this.setState({
                    center: nextCenter,
                    markers: nextMarkers,
                });
                // refs.map.fitBounds(bounds);
            }
        })
    },
    componentDidMount() {
        if(this.props.useLocation) {
            Utils.getCurrentLocation()
                .then((position) => {
                    const centerPosition = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                    this.setState({center: centerPosition})
                })
                .catch((err) => {
                    Utils.log(`unable to get location ${err}`)
                })
        }
    }
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
<GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
    >
    <SearchBox
    ref={props.onSearchBoxMounted}
    bounds={props.bounds}
    controlPosition={google.maps.ControlPosition.TOP_LEFT}
    onPlacesChanged={props.onPlacesChanged}
    >
    <input
        type="search"
        placeholder={Strings.get(Strings.MapSearchBoxPlaceHolder)}
        style={{
        boxSizing: `border-box`,
        border: `1px solid transparent`,
        width: `80%`,
        height: `32px`,
        marginTop: `8px`,
        padding: `0 12px`,
        borderRadius: `3px`,
        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
        fontSize: `14px`,
        outline: `none`,
        textOverflow: `ellipses`,
        }}
    />
    </SearchBox>
    {props.markers.map((marker, index) =>
    <Marker key={index} position={marker.position} />
    )}
</GoogleMap>
)

export default Map