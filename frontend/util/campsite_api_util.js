export const requestCampsites = () => {
    return $.ajax({
        url: "/api/campsites"
    })
}

export const requestCampsite = (campsiteId) => {
    return $.ajax({
        url: `api/campsites/${campsiteId}`
    })
}