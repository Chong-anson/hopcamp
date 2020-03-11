import React from 'react';
import { withRouter } from "react-router-dom"


class MiniSearchBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {input: ""};
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e){
        this.setState({input: e.target.value})
    };

    componentDidMount(){
        const searchBox = new google.maps.places.Autocomplete(document.getElementById("place-search-box"), {types: ['(cities)']})
        const that = this;
        searchBox.addListener('place_changed', function () {
            var place = searchBox.getPlace();
            if (place.length == 0) {
                return;
            }

            if (!place.geometry) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                // window.alert("No details available for input: '" + place.name + "'");
                // return;
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'address': that.state.input }, (res, status) => {
                    if (status === 'OK') {
                        const searchLat = res[0].geometry.location.lat();
                        const searchLng = res[0].geometry.location.lng();
                        that.props.history.replace(`/search?lat=${searchLat}&lng=${searchLng}`)
                    }
                })
            }
            else{
                const lat = place.geometry.location.lat()
                const lng = place.geometry.location.lng()
                that.props.history.replace(`/search?lat=${lat}&lng=${lng}`)
            }
            that.setState({ input: "" })
        })
    };

    // handleSubmit(e){
    //     e.preventDefault();

    //     console.log(this.state.input)
    //     const geocoder = new google.maps.Geocoder();
    //     geocoder.geocode({ 'address': this.state.input }, (res, status) => {
    //         if (status === 'OK') {
    //             const searchLat = res[0].geometry.location.lat();
    //             const searchLng = res[0].geometry.location.lng();
    //             this.props.history.replace(`/search?lat=${searchLat}&lng=${searchLng}`)
    //         }
    //     })
    //     this.setState({input: ""})
    // };

    render(){

        if (this.props.location.pathname === "/")
            return null;
        else {
            return (
            <div className="mini-search-box">
                <i className="fa fa-search"></i>
                    <input 
                        type="text" 
                        id="place-search-box"
                        className="form-control" 
                        onChange={this.handleChange}
                        // onSubmit={this.handleSubmit}
                        value={this.state.input}
                        placeholder="Search.."
                        />
            </div>)
        }

    }

};

export default withRouter(MiniSearchBox); 