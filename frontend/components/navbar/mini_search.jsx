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
        const searchBox = new google.maps.places.SearchBox(document.getElementById("google-search-box"))
        const that = this;
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }
            console.log(places);
            const lat = places[0].geometry.location.lat()
            const lng = places[0].geometry.location.lng()
            that.props.history.replace(`/search?lat=${lat}&lng=${lng}`)
        })
    };

    // handleSubmit(place){
        // place.preventDefault();

        // this.props.history.replace(`/search?place=${this.state.input}`)

        // const geocoder = new google.maps.Geocoder();
        // geocoder.geocode({ 'address': this.state.input }, (res, status) => {
        //     if (status === 'OK') {
        //         const searchLat = res[0].geometry.location.lat();
        //         const searchLng = res[0].geometry.location.lng();
        //         this.props.history.replace(`/search?lat=${searchLat}&lng=${searchLng}`)
        //     }
        // })
        // this.setState({input: ""})
    // };

    render(){

        if (this.props.location.pathname === "/")
            return null;
        else {
            return (
            <div className="mini-search-box">
                    <input 
                        type="text" 
                        id="google-search-box"
                        className="form-control" 
                        onChange={this.handleChange}
                        value={this.state.input}
                        placeholder="Search.."
                        />
                        <i className="fa fa-search"></i>
            </div>)
        }

    }

};

export default withRouter(MiniSearchBox); 