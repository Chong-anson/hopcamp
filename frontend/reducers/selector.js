export const selectAllCities = state => {
    return Object.values(state.entities.venues).map( venue => venue.name)
} 