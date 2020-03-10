export const fetchVenues = () => {
    return $.ajax({
        url: "/api/venues"
    })
}

// export const fetchVenue = (venueId) => {
//     return $.ajax({
//         url: `api/venues/${venueId}`
//     })
// }