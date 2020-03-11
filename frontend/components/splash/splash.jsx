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
            <div className="main-content">
                {/* SearchBox */}
                <HomeSearch />

                <div className="splash-items-container">
                    {citiesList}
                </div>
                <div className="splash-items-container">
                    {tagsList}
                </div>
                {/* Places list */}
                {/* <img src={photoUrl} alt=""/> */}
    
            </div>
        )

    }
}

export default Splash; 