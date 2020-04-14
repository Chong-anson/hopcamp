import React from "react";
import BookingFormContainer from "../bookings/booking_form_container";
import BookingList from "../bookings/booking_list";
import PhotoCarousel from "./photo_carousel";
import CampsiteDetail from "./campsite_detail";

class CampsiteShow extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      index: 0,
      truncated: true
    };

  }

  componentDidMount(){
    this.props.fetchCampsite(this.props.match.params.id);

  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.id != this.props.match.params.id){
      this.props.fetchCampsite(this.props.match.params.id);
    }

    if (this.props.campsite) {
      const { lat, lng } = this.props.campsite
      this.map = new google.maps.Map(this.mapNode, {
        center: { lat, lng },
        zoom: 9,
        streetViewControl: false,
        mapTypeId: 'terrain'
      });
      // this.map.setOptions({draggable: false})
      new google.maps.Marker({ position: { lat, lng }, map: this.map})
    }
  }

  // show(n){
  //     return () => {
  //     const photos = document.querySelectorAll('.photo-container .photo')
  //     let index = this.state.index + n ;

  //     console.log("index", index);
  //     console.log("state", this.state);

  //     if (index === photos.length ) index = 0; 
  //     else if (index === -1 ) index = photos.length - 1; 
  //     this.setState({index})
  //     photos[index].scrollIntoView(false);
  //   }
  // }

  handleShowMore(e){
    e.preventDefault()
    $(e.target).parent().toggleClass("truncated")
    $(e.target).parent().toggleClass("full")
    const truncated = !this.state.truncated;
    console.log(truncated);
    this.setState({truncated})
  }

  render(){
    const { campsite } = this.props;
    if (this.props.campsite){
      const { truncated } = this.state; 
      const descriptionClass = ( truncated ? "truncated" : "full")
      const charIndex = campsite.description.indexOf(" ", 730);
      const campsiteDescription = ( truncated ? campsite.description.slice(0, charIndex)  : campsite.description );
      const showMore = (truncated ? "Show more..." : "Show less..." )

      const tags = {};
      tags["Activities"] = [];
      tags["Amenities"]  = [] ;
      tags["Terrain"] = [] ;
      // debugger
      this.props.tags.forEach( (tag,idx) => {
          if (tag){
              tags[tag.category].push(
                <li key={`${tag.category}-${idx}`}>
                  <span className={`filter-type-icon hc-awesome-${tag.icon}`}></span>
                  <p> {tag.name}</p>
                </li>
              )
              }
      })
      return (
        <div className="campsite-page">
          <PhotoCarousel photoUrls={campsite.photoUrls} />
          {/* <div className="photo-container"> */}
            {/* <button className="prev" onClick={this.show(-1).bind(this)}>
              &lt;
            </button> */}
            {/* {photos} */}
            {/* <button className="next" onClick={this.show(+1).bind(this)}>
              &gt;
            </button> */}
          {/* </div> */}
          <div className="campsite-main-content">
            <div className="campsite-show-info">
              <div className="campsite-show-title">
                <h1 className="campsite-title">{campsite.name}</h1>
                <h2 className="campsite-address">Nearby: </h2>
                <span>{campsite.address}</span>
              </div>
              <div className={`campsite-description ${descriptionClass}`}>
                <p> {campsiteDescription} ;&nbsp;&nbsp; </p>
                <button onClick={this.handleShowMore.bind(this)}>{showMore}</button>
                
              </div>
              <div className="row show-row">
                <div className="tags-container">
                  <h2>Amenities</h2>
                  <ul className="tags-list">
                    {tags["Amenities"].length
                      ? tags["Amenities"]
                      : "No amenities"}
                  </ul>
                </div>
                <div className="tags-container">
                  <h2>Activites</h2>
                  <ul className="tags-list">
                    {/* {tags["Activities"]} */}
                    {tags["Activities"].length
                      ? tags["Activities"]
                      : "No activities"}
                  </ul>
                </div>
                <div className="tags-container">
                  <h2>Terrain</h2>
                  <ul className="tags-list">
                    {/* {tags["Terrain"]} */}
                    {tags["Terrain"].length ? tags["Terrain"] : "No terrain"}
                  </ul>
                </div>
              </div>
              <div className="row show-row">
                <h2>The vibe at {campsite.address} </h2>
                <div className="weather-container">
                  <h2>Elevation</h2>
                </div>
                <div className="weather-container">
                  <h3>
                    {campsite.weatherApi ? campsite.weatherApi.weather : null}
                  </h3>
                  <h2>Weather</h2>
                </div>
                <div className="weather-container">
                  <h3>
                    {campsite.weatherApi
                      ? campsite.weatherApi.temperature
                      : null}{" "}
                    {"\xB0F"}{" "}
                  </h3>
                  <h2>Temprature</h2>
                </div>
              </div>
              <CampsiteDetail />

            </div>
            <div className="booking-widget">
              <BookingFormContainer campsite={campsite} />
              <BookingList
                user={this.props.currentUser}
                campsiteId={campsite.id}
              />
            </div>
          </div>
          <div className="campsite-map">
            <div id="map-container" ref={(map) => (this.mapNode = map)}></div>
          </div>
        </div>
      );   
    }
    else
      return(
          null
      );
  }
}

export default CampsiteShow;