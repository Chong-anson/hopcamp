import React from 'react';
import {withRouter} from "react-router-dom";
import DayPickerInput from "react-day-picker/DayPickerInput";

class HomeSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location: "San Francisco", 
            startDate: new Date(Date.now()),
            endDate: undefined, 
            lat: "",
            lng: "",
            campsiteTypes: "All",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    };

    handleChange(e){
        this.setState({ location: e.target.value })
    }

    componentDidMount() {
        const searchBox = new google.maps.places.Autocomplete(document.getElementById("place-search-box-home"), { types: ['(cities)'] })
        const that = this;
        searchBox.addListener('place_changed', function () {
            var place = searchBox.getPlace();
            if (place.length == 0) {
                return;
            }
            // if (!place.geometry) {
            //     // User entered the name of a Place that was not suggested and
            //     // pressed the Enter key, or the Place Details request failed.
            //     // window.alert("No details available for location: '" + place.name + "'");
            //     // return;
            //     const geocoder = new google.maps.Geocoder();
            //     geocoder.geocode({ 'address': that.state.input }, (res, status) => {
            //         if (status === 'OK') {
            //             const searchLat = res[0].geometry.location.lat();
            //             const searchLng = res[0].geometry.location.lng();
            //             // that.props.history.push(`/search?lat=${searchLat}&lng=${searchLng}`)
            //         }
            //     })
            // }
            const lat = place.geometry.location.lat()
            const lng = place.geometry.location.lng()

            console.log(place)
            const location = place.formatted_address;
            that.setState({location, lat, lng})
        })
    };

    handleSubmit(e){
        e.preventDefault();
        let { location, campsiteTypes } = this.state;
        const geocoder = new google.maps.Geocoder();
        const that = this;
        geocoder.geocode({'address': location}, (res,status) => {
          if (status === 'OK') {
            console.log(res)
            const location = res[0].formatted_address;
            const lat = res[0].geometry.location.lat();
            const lng = res[0].geometry.location.lng();
            that.props.updateLocation({ location, lat, lng });
            if (campsiteTypes !== "All"){
              that.props.updateFilter("type", [campsiteTypes]);
            }
            that.props.history.push(`/search?lat=${lat}&lng=${lng}`)
          }
          else 
            window.alert(status)
        })
    }

    render(){
        return (
            <div className="home-search-container">
                <div className="home-title">
                    <h1>Find yourself outside.</h1>
                    <div className="sub-title">
                    <h3>Book unique camping experiences on over <strong>300,000</strong> campsites, cabins, RV parks, public parks and more.</h3>
                    </div>
                </div>
                <div className="home-search-box">
                    <form className="home-search-form" onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            className="form-control"
                            id="place-search-box-home"
                            onChange={this.handleChange}
                            />
                        {/* <div className="daypicker-home"> */}
                            <input 
                              type="date" 
                              className="splash-date form-control"
                            />
                        {/* </div> */}
                        {/* <button onClick={this.handleButtonClick}></button> */}

                        <select 
                          className="form-control" 
                          name="campsiteType" 
                          id=""
                          onChange={(e)=> this.setState({campsiteTypes: e.target.value})}
                        >
                            <option value="All" defaultChecked>All camping</option>
                            <option value="CAMPING">Campsites </option>
                            <option value="GLAMPING">Lodging</option>
                            <option value="RV">RVs</option>
                        </select>
                        <button className="special-buttons-2"> Search </button>
                    </form>
                </div>
            </div>
        )
    };

};

export default withRouter(HomeSearch);