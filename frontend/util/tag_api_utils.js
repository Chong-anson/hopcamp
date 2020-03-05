export const fetchTags = () => {
    return $.ajax({
        url: "/api/tags",

    })
}

// export const fetchTag = (tagId) => {
//     return $.ajax({
//         url: `api/tags/${tagId}`
//     })
// }