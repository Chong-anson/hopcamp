import React from 'react';
import { withRouter } from "react-router-dom"
import MarkerManager from "../../util/marker_manager";

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = { location: "San Francisco"}
        this.updateMap = this.updateMap.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateMap() {
        const LatLngBounds = this.map.getBounds();
        const northEast = LatLngBounds.getNorthEast();
        const southWest = LatLngBounds.getSouthWest();
        const neCoordinates = { lat: northEast.lat(), lng: northEast.lng() }
        const swCoordinates = { lat: southWest.lat(), lng: southWest.lng() }
        this.props.updateFilter("bounds", {
            northEast: neCoordinates,
            southWest: swCoordinates
        })
    }

    handleMarkerClick(campsiteId) {
        this.props.history.push(`/campsites/${campsiteId}`)
    }

    handleClick(e) {
        // console.log(e);
        // const lat = e.latLng.lat();
        // const lng = e.latLng.lng();
        // this.props.history.push({
        //     pathname: "/cam/new",
        //     search: `lat=${lat}&lng=${lng}`
        // })
    }

    handleChange(e) {
        this.setState({ location: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.location);
        const request = {
            query: this.state.location,
            fields: ["geometry", "name"]
        };
        const service = new google.maps.places.PlacesService(this.map);

        service.findPlaceFromQuery(request, (results, status) => {
            // console.log(results);

            this.map.setCenter(results[0].geometry.location);
        })

        // debugger
        // const request2 = {
        //     location: this.map.getCenter(),
        //     radius: '20000',
        //     type: ['lodging']
        // }
        // const service2 = new google.maps.places.PlacesService(this.map);
        // const res_list = [];
        // service2.nearbySearch(request2, (res, status) => {

        //     res.forEach(pl => {
        //         const lat = pl.geometry.location.lat();
        //         const lng = pl.geometry.location.lng();

        //         res_list.push({ lat, lng });
        //     })
        // })
        // this.setState({ result: res_list })
    }

    componentDidMount() {
        let mapOptions;
        if (this.props.selected) {

            const selectedCampsite = this.props.campsite;
            mapOptions = {
                center: { lat: selectedCampsite.lat, lng: selectedCampsite.lng },
                zoom: 13
            }
        }
        else {
            mapOptions = {
                center: { lat: 37.7758, lng: -122.435 },
                zoom: 13
            }

        }

        this.map = new google.maps.Map(this.mapNode, mapOptions)
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

        if (this.props.selected) {
            this.map.setOptions({ draggable: false })
        }
        else {
            this.map.addListener("idle", this.updateMap);
            // this.map.addListener("click", this.handleClick);
        }
        this.MarkerManager.updateMarkers(this.props.campsites);

        // const autocomplete = new google.maps.places.Autocomplete(
        //     (document.getElementById("autocomplete")),
        //     { types: ['(cities)'] }
        // );
        // console.log(autocomplete);
        // autocomplete.addListener('place_changed', () => {
        //     const place = autocomplete.getPlace();
        //     console.log(place);
        // const form = document.getElementById("bench-map-form").dispatchEvent("submit");
        // });
    }

    componentDidUpdate() {
        if (this.props.selected) {
            this.map.setCenter({ lat: this.props.campsite.lat, lng: this.props.campsite.lng })
        }
        else {
            this.MarkerManager.updateMarkers(this.props.campsites);

        }

    }

    // lodging, rv_park, cemetery
    render() {
        // const res_list = this.state.result.map(el => {
        //     return (
        //         <li> {el.lat},{el.lng}</li>
        //     )
        // })
        return (
            <div className="campsite-map">
                {/* <ul>
                    {res_list}
                </ul> */}
                <form onSubmit={this.handleSubmit} id="campsite-map-form">
                    <input type="text" value={this.state.location} onChange={this.handleChange} id="autocomplete" />
                    <br />
                    <button>Search campsite at that city</button>
                </form>

                <div id="map-container" ref={map => this.mapNode = map}>

                </div>
            </div>
        )
    }

}

export default withRouter(Map);
