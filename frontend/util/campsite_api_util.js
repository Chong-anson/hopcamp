export const fetchCampsites = (filter) => {
    const { bounds, minCapacity, minPrice, maxPrice } = filter; 
    return $.ajax({
        url: "/api/campsites",
        data:{
            filter: {
                bounds,
                min_capacity: minCapacity,
                min_price: minPrice,
                max_price: maxPrice
            }
        }
    })
}

export const fetchCampsite = (campsiteId) => {
    return $.ajax({
        url: `api/campsites/${campsiteId}`
    })
}