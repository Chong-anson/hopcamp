import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { updateLocation } from "../../actions/map_action";
import { useDispatch } from 'react-redux';

const MiniSearchBox= function (props){
  const [location, setLocation] = useState("");
  const dispatch = useDispatch(); 
  const update = (location) => {
    dispatch(updateLocation(location))
  }

  const handleChange = (e) => {
    setLocation(e.target.value); 
  }

  useEffect(()=>{
    const searchBox = new google.maps.places.Autocomplete(document.getElementById("place-search-box"), { types: ['(cities)'] })
    searchBox.addListener('place_changed', () => {
      var place = searchBox.getPlace();
      if (place.length == 0) {
        console.log("not result")
        return;
      }
      debugger;
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        // window.alert("No details available for input: '" + place.name + "'");
        // return;
        const service = new google.maps.places.AutocompleteService();
        service.getQueryPredictions({input: that.location}, (predictions, status) => {
          console.log("s", predictions)
          debugger;
        })
        // const geocoder = new google.maps.Geocoder();
        // geocoder.geocode({ 'address': input }, (res, status) => {
        //   if (status === 'OK') {
        //     console.log(res);
        //     var lat = res[0].geometry.location.lat();
        //     var lng = res[0].geometry.location.lng();
        //     var location = res[0].formatted_address;
        //     // props.history.replace(`/search?lat=${lat}&lng=${searchLng}`)
        //   }
        //   else (

        //     window.alert(status)
        //   )
        // })
      }
      else {
        var lat = place.geometry.location.lat()
        var lng = place.geometry.location.lng()
        var location = place.formatted_address 
        // console.log(place);
      }
      update({location, lat, lng})
      props.history.replace(`/search?lat=${lat}&lng=${lng}`)
      setLocation("");
    })
  }, []);

  if (props.location.pathname === "/")
    return null;
  else {
    return (
      <div className="mini-search-box">
        <i className="fa fa-search"></i>
        <input
          type="text"
          id="place-search-box"
          className="form-control"
          onChange={handleChange}
          // onSubmit={this.handleSubmit}
          value={location}
          placeholder="Search.."
        />
      </div>)
  }
};
// class MiniSearchBox extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {input: ""};
//         // this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     };

//     handleChange(e){
//         this.setState({input: e.target.value})
//     };

//     componentDidMount(){
//         const searchBox = new google.maps.places.Autocomplete(document.getElementById("place-search-box"), {types: ['(cities)']})
//         const that = this;
//         searchBox.addListener('place_changed', function () {
//             var place = searchBox.getPlace();
//             console.log(place)
//             if (place.length == 0) {
//                 return;
//             }

//             if (!place.geometry) {
//                 // User entered the name of a Place that was not suggested and
//                 // pressed the Enter key, or the Place Details request failed.
//                 // window.alert("No details available for input: '" + place.name + "'");
//                 // return;
//                 const geocoder = new google.maps.Geocoder();
//                 geocoder.geocode({ 'address': that.state.input }, (res, status) => {
//                     if (status === 'OK') {
//                         const searchLat = res[0].geometry.location.lat();
//                         const searchLng = res[0].geometry.location.lng();
//                         that.props.history.replace(`/search?lat=${searchLat}&lng=${searchLng}`)
//                     }
//                 })
//             }
//             else{
//                 const lat = place.geometry.location.lat()
//                 const lng = place.geometry.location.lng()
//                 that.props.history.replace(`/search?lat=${lat}&lng=${lng}`)
//             }
//             that.setState({ input: "" })
//         })
//     };

//     // handleSubmit(e){
//     //     e.preventDefault();

//     //     console.log(this.state.input)
//     //     const geocoder = new google.maps.Geocoder();
//     //     geocoder.geocode({ 'address': this.state.input }, (res, status) => {
//     //         if (status === 'OK') {
//     //             const searchLat = res[0].geometry.location.lat();
//     //             const searchLng = res[0].geometry.location.lng();
//     //             this.props.history.replace(`/search?lat=${searchLat}&lng=${searchLng}`)
//     //         }
//     //     })
//     //     this.setState({input: ""})
//     // };

//     render(){

//         if (this.props.location.pathname === "/")
//             return null;
//         else {
//             return (
//             <div className="mini-search-box">
//                 <i className="fa fa-search"></i>
//                     <input 
//                         type="text" 
//                         id="place-search-box"
//                         className="form-control" 
//                         onChange={this.handleChange}
//                         // onSubmit={this.handleSubmit}
//                         value={this.state.input}
//                         placeholder="Search.."
//                         />
//             </div>)
//         }

//     }

// };

export default withRouter(MiniSearchBox); 