export const selectAllCities = state => {
    return Object.values(state.entities.venues).map( venue => venue.name)
};

export const selectAllTags = state => {
    return Object.values(state.entities.tags).map(tag => tag.name)
};

export const selectAllCategories = state => {
    const tags = Object.values(state.entities.tags);
    

}
