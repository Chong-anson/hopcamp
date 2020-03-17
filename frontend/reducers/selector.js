export const selectAllCities = state => {
    return Object.values(state.entities.venues).map( venue => venue.name)
};

export const selectAllTags = state => {
    return Object.values(state.entities.tags).map(tag => tag.name)
};

export const selectAllCategories = state => {
    const tags = Object.values(state.entities.tags);
}

export const selectBookings = (state, bookings) => (
    bookings.map( id => 
        state.entities.booking[id]
    )
)

export const filterCampsites = (campsites, type) => {
    // let campsites = Object.values(state.entities.campsites);
    // const { type } = state.ui.filter;
    // Filter campsite by types (OR relationships)
    if (type && type.length){
        campsites = campsites.filter( el => type.includes(el.campsiteType))
    }
    return campsites;
}
