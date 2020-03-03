import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.fetchVenues()
    }

    render(){
        return(
            <div className="main-content">
                {/* SearchBox */}
                {/* Categories list */}
                {/* Places list */}
                <ul>
                    {this.props.citiesList}
                </ul>
            </div>
        )

    }
}

export default Home; 