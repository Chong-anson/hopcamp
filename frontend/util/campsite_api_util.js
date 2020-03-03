export const fetchCampsites = (filter) => {
    // const { venue } = filter; 
    return $.ajax({
        url: "/api/campsites",
        data: {
            
        }
    })
}

export const fetchCampsite = (campsiteId) => {
    return $.ajax({
        url: `api/campsites/${campsiteId}`
    })
}