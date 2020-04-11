import React from "react";
import { Link } from 'react-router-dom';
import SplashItem from "./splash_item";
import HomeSearch from './home_search';
import RecommendedList from './recommended_list';
class Splash extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.fetchVenues()
        this.props.fetchTags() 
    }

    render(){
        const tagsList = this.props.tags.map( el => 
            <SplashItem key={el.id} tag={el} type="tag" />
            );
        const citiesList = this.props.venues.map( el => 
            <SplashItem key={el.id} venue={el} type="venue" /> 
            )
        const longTiles = [
          {heading: "Unique Tiny House", subheading: "Small & stylish", imgUrl: "splash-photo-1.jpg"},
          {heading: "Animal Experience", subheading: "Horses, camels, goats & more", imgUrl: "splash-photo-2.jpg"},
          {heading: "Stunning Sunshine State", subheading: "Colorful camping & glamping", imgUrl: "splash-photo-3.jpg"}
        ].map( el => (
          <div className="long-tile">
            <Link to={'search?lat=37.7749295&lng=-122.4194155'}>
              <div className="image-container" style={{backgroundImage: `url(${el.imgUrl})`}} >

              </div>
              <div className="long-tile-bottom">
                <h2>{el.heading}</h2>
                <span>{el.subheading}</span>
              </div>
            </Link>
          </div>
        ))
        return(
            <div className="splash-content">
                {/* SearchBox */}
                <HomeSearch 
                  updateFilter={this.props.updateFilter}
                  updateLocation={this.props.updateLocation}
                  />
                <div className="banner become-host">
                  <div className="banner-description">
                    <h2> Own land? Earn money hosting on Hipcamp </h2>
                    <p>
                      Help more people spend time outside. Share your land with campers, glampers, and RV travelers.
                    </p>
                    <button>Become a Host</button>
                  </div>
                </div>
                <div className="splash-container">
                  <h2>One of a kind trips.</h2>
                  <div className="splash-items-container">
                  {longTiles}
                  </div>
                </div>
                <div className="splash-container">
                  <h2>Destination getaways.</h2>
                  <div className="splash-items-container">
                      {citiesList}
                  </div>
                </div>
                <div className="banner shower">
                  <div className="banner-description">
                    <h2> Showers at Joshua Tree? </h2>
                    <p> 11 gorgeous outdoor showers & bathtubs to enjoy. </p>
                    <button>Learn More.</button>
                  </div>
            </div>
                <div className="splash-container">
                  <h2>Discover camping...</h2>
                  {/* RECEOMMENDED_LIST,  */}
                  <RecommendedList /> 
                </div>
            </div>
        )

    }
}

export default Splash; 