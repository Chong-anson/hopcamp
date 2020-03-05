import React from 'react';
import SplashItem from './splash_item';

class Splash extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.fetchVenues()
        this.props.fetchTags() 
    }

    render(){
        const { tagsList } = this.props;
        const citiesList = this.props.venues.map ( el => 
            <SplashItem key={el.id} venue={el} /> 
            )
        return(
            <div className="main-content">
                {/* SearchBox */}
                
                <ul>
                    {tagsList}
                </ul>
                {/* Places list */}
                {citiesList}
                {/* <img src={photoUrl} alt=""/> */}
    
            </div>
        )

    }
}

export default Splash; 