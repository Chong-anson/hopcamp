import React from "react";
import BookingFormContainer from "../booking_form/booking_form_container";
import { connect } from "react-redux";

class CampsiteShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchCampsite(this.props.match.params.id);
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.id != this.props.match.params.id){
            this.props.fetchCampsite(this.props.match.params.id);
        }

        if (this.props.campsite) {
            const { lat, lng } = this.props.campsite
            const mapOptions = {
                center: { lat, lng },
                zoom: 9
            }
            this.map = new google.maps.Map(this.mapNode, {
                center: { lat, lng },
                zoom: 9,
                streetViewControl: false,
                mapTypeId: 'terrain'
            });
            // this.map.setOptions({draggable: false})
            const marker = new google.maps.Marker({ position: { lat, lng }, map: this.map})
        }

    }

    render(){
        const {campsite } = this.props;
        console.log(this.props)
        if (this.props.campsite){
            const photos = campsite.photoUrls.map( url => 
                <div 
                    className="photo"
                    style={{
                        backgroundImage: `url(${url})`
                    }}
                    >
                </div>
                )
            const tags = []
            tags["Activities"] = [];
            tags["Amentities"]  = [] ;
            tags["Terrain"] = [] ;
            this.props.tags.forEach( tag => 
                tags[tag.category].push(tag.name)
            )
            return (
                <div className="campsite-page">
                    <div className="photo-container">
                        {photos}
                    </div>
                    <div className="campsite-main-content">

                        <div className="campsite-show-info">
                            <div className="campsite-show-title">
                                <h1 className="campsite-title">{campsite.name}</h1>
                                <h2 className="campsite-address">Nearby: </h2>
                                <span>{campsite.address}</span>
                            </div>
                            <div className="campsite-description">
                                <p>
                                    {campsite.description}
                                </p>
                            </div>

                            <div className="row">
                                <div className="tags-container">
                                    <h2>Amentities</h2>
                                </div>
                                <div className="tags-container">
                                    <h2>Activites</h2>

                                </div>
                                <div className="tags-container">
                                    <h2>Terrain</h2>

                                </div>
                            </div>
                        </div>
                        <BookingFormContainer campsite={campsite}  />
                    </div>

                    <div className="campsite-map">
                        <div id="map-container" ref={map => this.mapNode = map}>
                        </div>
                    </div>

                </div>
            )   
        }
        else
            return(
                null
            );
         
    }
}

export default CampsiteShow;