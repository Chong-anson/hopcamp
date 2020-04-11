class MarkerManager{
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
      // const contentString = `<div class='result-item-tite'>` +
      //   ${ campsite.name } in ${ campsite.address }
      // +`</div>`
        const photo = $("<div />", {class: "infowindow-left"}).css("background-image", `url(${campsite.photoUrls[0]})`)
        console.log(campsite);
        const element = $("<div />").append(
                          $("<div />", {class: "infowindow"})
                            .append(photo)
                            .append(
                              $("<div />", {class: "infowindow-right"})
                                .append($("<h1 />", { text: campsite.name }))
                                .append($("<p />", { text: `in ${campsite.address}` }))
                          ))
                        .html()

        const infowindow = new google.maps.InfoWindow({
          content: element,
          maxWidth: 250
        }) 

        marker.addListener("mouseover", ()=>{
          infowindow.open(this.map, marker);
        })
        marker.addListener("mouseout", ()=>{
          infowindow.close();
        })
        marker.addListener("click", (e) => {
            e.preventDefault;
            this.handleMarkerClick(campsite.id);
        })
        this.markers[campsite.id] = marker;
    }
}

export default MarkerManager; 