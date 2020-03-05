import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.fetchVenues()
        this.props.fetchTags() 
    }

    render(){
        const { citiesList, tagsList } = this.props;
        return(
            <div className="main-content">
                {/* SearchBox */}
                <ul>
                    {tagsList}
                </ul>
                {/* Places list */}
                <ul>
                    {citiesList}
                </ul>
            </div>
        )

    }
}

export default Home; 