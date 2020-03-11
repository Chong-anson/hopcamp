import React from 'react';

class HomeSearch extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){

    };

    render(){
        return (
            <div className="home-search-container">

                <div className="home-title">
                    <h1>Find yourself outside!</h1>
                    <div className="sub-title">
                        <h3>Book unique camping experiences on over <strong>300,000</strong> campsites, cabins, RV parks, public parks and more.</h3>
                    </div>
                </div>
                <div className="home-search-container">
                    <form className="home-search">
                    </form>
                    
                </div>
            </div>
        )
    };

};

export default HomeSearch;