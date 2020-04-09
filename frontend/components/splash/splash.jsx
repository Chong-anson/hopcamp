import React from "react";
import SplashItem from "./splash_item";
import HomeSearch from './home_search';

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
        return(
            <div className="splash-content">
                {/* SearchBox */}
                <HomeSearch />
                <h2>Destination getaways...</h2>
                <div className="splash-items-container">
                    {citiesList}
                </div>
                <h2>Discover camping</h2>
            {/* RECEOMMENDED_LIST,  */}
    
            </div>
        )

    }
}

export default Splash; 