import React from 'react';
import {withRouter} from "react-router-dom";
import DayPickerInput from "react-day-picker/DayPickerInput";

class HomeSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: "", 
            startDate: new Date(Date.now()),
            endDate: undefined, 
            type: "",
            lat: "",
            lng: "",
        };
        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit= this.handleSubmit.bind(this);
    };

    handleChange(e){
        this.setState({ input: e.target.value })
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
            //     // window.alert("No details available for input: '" + place.name + "'");
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
            // that.props.history.push(`/search?lat=${lat}&lng=${lng}`)
            that.setState({ lat, lng})
        })
    };

    handleSubmit(e){
        e.preventDefault();
        const {lat, lng} = this.state
        this.props.history.push(`/search?lat=${lat}&lng=${lng}`)
        this.setState({input : ""});
    }

    render(){
        return (
            <div className="home-search-container">

                <div className="home-title">
                    <h1>Find yourself outside!</h1>
                    <div className="sub-title">
                        <h3>Book unique camping experiences on over <strong>300,000</strong> campsites, cabins, RV parks, public parks and more.</h3>
                    </div>
                </div>
                <div className="home-search-box">
                    <form action="" onSubmit={this.handleSubmit}>

                        <input 
                            type="text" 
                            id="place-search-box-home"
                            onChange={this.handleChange}
                            />
                        <DayPickerInput /> 
                        <button onClick={this.handleButtonClick}></button>
                        <button> Submit </button>
                    </form>
                </div>
            </div>
        )
    };

};

export default withRouter(HomeSearch);