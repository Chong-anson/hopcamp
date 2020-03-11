import React from "react";
import { useLocation } from 'react-router-dom';
import MarkerManager from "../../util/marker_manager";
import SearchItem from "./search_item";
import FilterBar from "./filter_bar";

class Search extends React.Component{
    constructor(props){
        super(props);
        // const location = useLocation(); 
        // const place = query.get('place');
        // if (this.props.place) {
        //     this.setMapbyPlace(this.props.place);
        // }
        this.state = { 
            location: "San Francisco",
            startDate: "",
            endDate: "",
            campsites: this.props.campsites,
        };
        this.updateMap = this.updateMap.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    };

    updateMap(){
        const LatLngBounds = this.map.getBounds();
        const northEast = LatLngBounds.getNorthEast();
        const southWest = LatLngBounds.getSouthWest();
        const neCoordinates = { lat: northEast.lat(), lng: northEast.lng() };
        const swCoordinates = { lat: southWest.lat(), lng: southWest.lng() };
        this.props.updateFilter("bounds", {
            northEast: neCoordinates,
            southWest: swCoordinates
        });
    };

    handleMarkerClick(campsiteId){
        this.props.history.push(`/campsites/${campsiteId}`);
    };

    handleChange(e){
        this.setState({ location: e.target.value });
    };

    // handleSubmit(e){
    //     e.preventDefault();
    //     const request = {
    //         query: this.state.location,
    //         fields: ["geometry", "name"]
    //     };
    //     const service = new google.maps.places.PlacesService(this.map);
    //     service.findPlaceFromQuery(request, (results, status) => {
    //         this.map.setCenter(results[0].geometry.location);
    //     })
    // };

    componentDidMount(){
        let mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 9
        };

        if (this.props.selected) {
            const selectedCampsite = this.props.campsite;
            mapOptions = {
                center: { lat: selectedCampsite.lat, lng: selectedCampsite.lng },
                zoom: 9
            }
        }
        else if (this.props.lat && this.props.lng) {
            const { lat, lng } = this.props
            mapOptions = {
                center: { lat, lng },
                zoom: 9
            }
        }
        console.log(mapOptions);
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

    componentDidUpdate(prevProps){
        if (this.props.selected) {
            this.map.setCenter({ lat: this.props.campsite.lat, lng: this.props.campsite.lng })
        }
        else {
            this.MarkerManager.updateMarkers(this.props.campsites);
        }
        // if (this.props.place){
        //     this.setMapbyPlace(this.props.place);
        // }
        if (this.props.lat && this.props.lng){
            if (prevProps.lat !== this.props.lat || prevProps.lng !== this.props.lng){
                this.map.setCenter({ lat: this.props.lat, lng: this.props.lng })
            }
        }
    }

    render(){
        // const { campsites, updateFilter } = this.props; 
        const campsites = this.props.campsites.map(el => 
            <SearchItem item={el} key={el.id} /> 
            )
        return(
            <div className="search-container">
                
                {/* <div className="search-box">
                    <form onSubmit={this.handleSubmit} id="campsite-map-form">
                        <input type="text" value={this.state.location} onChange={this.handleChange} id="autocomplete" />
                        <button>Search campsite at that city</button>
                    </form>
                </div> */}
                <FilterBar updateFilter={this.props.updateFilter} filterButton={this.props.filterButton}/> 
                <div className="results-container">
                    {/* {CampsiteResult} */}
                    <div className="results-list">
                        {campsites}
                    </div>
                    <div className="results-map">
                        <div id="map-container" ref={map => this.mapNode = map}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search; 