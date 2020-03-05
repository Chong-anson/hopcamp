export const fetchCampsites = (filter) => {
    // const { venue } = filter; 
    return $.ajax({
        url: "/api/campsites",
    })
}

export const fetchCampsite = (campsiteId) => {
    return $.ajax({
        url: `api/campsites/${campsiteId}`
    })
}