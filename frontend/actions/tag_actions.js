export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
import * as tagUtil from '../util/tag_api_utils';

const receiveTags = (tags) => ({
    type: RECEIVE_TAGS,
    tags
})

const receiveTag = (tag) => ({
    type: RECEIVE_TAG,
    tag
})

export const fetchTags = () => (dispatch) => {
    return tagUtil.fetchTags()
        .then(res => dispatch(receiveTags(res)))
}

// export const fetchTag = (tagId) => (dispatch) => {
//     return tagUtil.fetchTag(tagId)
//         .then(tag => dispatch(receiveTag(tag)))
    // .fail(res => console.log(res))
// }