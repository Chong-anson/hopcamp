import React from "react";
import CampsiteMap from "../campsite_map/campsite_map";

class Search extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { campsites, updateFilter } = this.props; 
        return(

            <div className="search-container">
                <div className="results-container">
                    {/* {CampsiteResult} */}
                </div>
                <div className="results-map">
                    <CampsiteMap campsites={campsites} updateFilter={updateFilter} selected={false} />
                </div>
            </div>
        )
    }
}

export default Search; 