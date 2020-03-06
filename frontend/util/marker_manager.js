import { Link } from 'react-router-dom';


class MarkerManager {
    constructor(map, handleMarkerClick) {
        this.map = map;
        this.markers = {};
        this.updateMarkers = this.updateMarkers.bind(this);
        this.removeMarker = this.removeMarker.bind(this);
        this.createMarkerFromCampsite = this.createMarkerFromCampsite.bind(this);
        this.handleMarkerClick = handleMarkerClick;
    }

    updateMarkers(campsites) {

        let newCampsites = {};
        campsites.forEach((campsite) => {
            if (!this.markers[campsite.id]) {
                this.createMarkerFromCampsite(campsite);
            }
            newCampsites = Object.assign({}, newCampsites, { [campsite.id]: campsite })

        })
        Object.keys(this.markers).forEach((id) => {
            if (newCampsites) {
                if (newCampsites[id] === undefined) {
                    this.removeMarker(id)
                }
            }
        }
        )
    }

    removeMarker(id) {
        const marker = this.markers[id];
        delete this.markers[id];
        marker.setMap(null);
        // debugger
    }

    createMarkerFromCampsite(campsite) {
        const { lat, lng } = campsite;
        const latlng = { lat, lng };
        const marker = new google.maps.Marker({
            position: latlng,
            // title: campsite.description,
            map: this.map
        })
        marker.setMap(this.map)
        marker.addListener("click", (e) => {
            e.preventDefault;
            this.handleMarkerClick(campsite.id);
        })
        this.markers[campsite.id] = marker;
    }
}

export default MarkerManager; 