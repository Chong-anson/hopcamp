import React from 'react';
import { withRouter } from "react-router-dom";
import { updateLocation } from "../../actions/map_action";
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
                const service = new google.maps.places.AutocompleteService();
                const geocoder = new google.maps.Geocoder();
                service.getPlacePredictions({input: that.state.input}, (res, status) => {
                  that.setState({input: res[0].description})
                  geocoder.geocode({ 'address': res[0].description }, (result, status) => {
                    if (status === 'OK') {
                      console.log(result[0]);
                      const lat = result[0].geometry.location.lat()
                      const lng = result[0].geometry.location.lng()
                      const location = result[0].formatted_address
                      that.props.updateLocation({ location, lat, lng });

                      that.props.history.replace(`/search?lat=${lat}&lng=${lng}`)

                    }
                    else {
                      window.alert(status);
                    }
                  })
                })
            }
            else{
              const lat = place.geometry.location.lat()
              const lng = place.geometry.location.lng()
              const location = place.formatted_address
              that.props.updateLocation({location, lat, lng});

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