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

export const filterCampsites = (state) => {
  const { 
    type, 
    selectedCampsites 
  } = state.ui.filter;
  // Filter campsite by types (OR relationships)
  let campsites = Object.values(state.entities.campsites);
  if ( state.ui.filter.appliedFilter ) 
    campsites = campsites.filter( campsite => selectedCampsites.includes(campsite.id));
  if (type.length)
    campsites = campsites.filter( campsite => type.includes(campsite.campsiteType));
  
  return campsites;
}
