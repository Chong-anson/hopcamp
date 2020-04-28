import React from "react";
import PhotoCarousel from "./photo_carousel";
import CampsiteDetail from "./campsite_detail";
import BookingWidget from "../bookings/booking_widget";
import ReviewIndex from "./review_index";

class CampsiteShow extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      index: 0,
      truncated: true,
      elevation: 0,
      state: "",
      country: "",
    };
    this.fetchGeoInfo.bind(this);
  }

  componentDidMount(){
    this.props.fetchCampsite(this.props.match.params.id).then(
      () => this.fetchGeoInfo()
    )
  }

  fetchGeoInfo(){
    const that = this;
    if (this.props.campsite){

      const { lat, lng, address } = this.props.campsite;
      this.map = new google.maps.Map(this.mapNode, {
        center: { lat, lng },
        zoom: 9,
        streetViewControl: false,
        mapTypeId: 'terrain'
      });
      new google.maps.Marker({ position: { lat, lng }, map: this.map })
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': address }, (res, status) => {
        if (status == 'OK') {
          if (res[0]) {
            const addressComponents = Object.values(res[0].address_components)
            var country, state;
            addressComponents.forEach( component => {
              if (component.types.includes('country'))
                country = component.long_name;
              else if (component.types.includes("administrative_area_level_1"))
                state = component.long_name;
            })
            that.setState({ country, state })
          }
        }
        else {
          window.alert(status);
        }
      })
      const elevator = new google.maps.ElevationService;
      elevator.getElevationForLocations({
        'locations': [{ lat, lng }]
      }, function (res, status) {
        if (status === 'OK') {
          if (res[0]) {
            const elevation = Math.floor(res[0].elevation);
            that.setState({ elevation })
          } else {
            that.setState({ elevation: "Information not found" })
          }
        }
        else {
          window.alert(status);
        }
      });
    }

  }
  
  componentDidUpdate(prevProps){
    if (this.props.campsite && !prevProps.campsite) {
      this.fetchGeoInfo();
    }
  }

  handleShowMore(e){
    e.preventDefault()
    $(e.target).parent().toggleClass("truncated")
    $(e.target).parent().toggleClass("full")
    const truncated = !this.state.truncated;
    this.setState({truncated})
  }

  render(){
    const { campsite, currentUser } = this.props;
    if (this.props.campsite && !this.props.campsite.truncated){
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
          <div className="campsite-main-content">
            <div className="campsite-show-info">
              <div className="campsite-show-title">
                <div className="campsite-address-container">
                  <h2> {this.state.country} > {this.state.state} > {this.props.campsite.address} </h2>
                </div>
                <div className="campsite-title">
                  <h1>{campsite.name}</h1>
                  <span className={`hc-awesome-${campsite.campsiteType.toLowerCase()}`}></span> 
                </div>
                <h2 className="campsite-address">Nearby: </h2>
                <span>{campsite.address}</span>
              </div>
              <div className={`campsite-description ${descriptionClass}`}>
                <p> {campsiteDescription} &nbsp;&nbsp; </p>
                <button onClick={this.handleShowMore.bind(this)}>{showMore}</button>  
              </div>
              <div className="row show-row">
                <div className="tags-container">
                  <h2>Amenities</h2>
                  <ul className="tags-list">
                    {tags["Amenities"].length
                      ? tags["Amenities"]
                      : <li><p>No amenities :(</p></li>}
                  </ul>
                </div>
                <div className="tags-container">
                  <h2>Activites</h2>
                  <ul className="tags-list">
                    {tags["Activities"].length
                      ? tags["Activities"]
                      : <li><p>No activities :(</p></li>}
                  </ul>
                </div>
                <div className="tags-container">
                  <h2>Terrain</h2>
                  <ul className="tags-list">
                    {tags["Terrain"].length ? tags["Terrain"] : <li><p>No terrains :(</p></li>}
                  </ul>
                </div>
              </div>
              <div className="row show-row">
                <h2>The vibe at {campsite.address} </h2>
                <div className="weather-container">
                  <h3>{this.state.elevation} ft</h3>
                  <span>Elevation</span>
                </div>
                <div className="weather-container">
                  <h3>
                    {campsite.weatherApi ? campsite.weatherApi.weather : null}
                  </h3>
                  <span>Weather</span>
                </div>
                <div className="weather-container">
                  <h3>
                    {campsite.weatherApi
                      ? campsite.weatherApi.temperature
                      : null}{" "}
                    {"\xB0F"}{" "}
                  </h3>
                  <span>Temprature</span>
                </div>
              </div>
              <CampsiteDetail capacity={campsite.capacity} campsiteType={campsite.campsiteType} />
              <ReviewIndex campsiteId={this.props.campsite.id} />
            </div>
            <BookingWidget campsite={campsite} currentUser={currentUser} />
          </div>
          <div className="campsite-map">
            <div id="map-container" ref={(map) => (this.mapNode = map)}></div>
          </div>
        </div>
      );   
    }
    else{
      return( 
        null
      );
    }
  }
}

export default CampsiteShow;