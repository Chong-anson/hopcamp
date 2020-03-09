import React from 'react';
import { withRouter } from "react-router-dom"


class MiniSearchBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {input: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e){
        this.setState({input: e.target.value})
    };

    handleSubmit(e){
        e.preventDefault();
        // this.props.history.replace(`/search?place=${this.state.input}`)
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': this.state.input }, (res, status) => {
            if (status === 'OK') {
                const searchLat = res[0].geometry.location.lat();
                const searchLng = res[0].geometry.location.lng();
                this.props.history.replace(`/search?lat=${searchLat}&lng=${searchLng}`)
            }
        })
        this.setState({input: ""})
    };

    render(){
        if (this.props.location.pathname === "/")
            return null;
        else {
            return (
            <div className="mini-search-box">
                <form className="search-from" onSubmit={this.handleSubmit}>
                    search
                    <input 
                        type="text" 
                        className="text" 
                        onChange={this.handleChange}
                        value={this.state.input}/>
                </form>
            </div>)
        }

    }

};

export default withRouter(MiniSearchBox); 