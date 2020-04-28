export const RECEIVE_TAGS = "RECEIVE_TAGS";
import * as tagUtil from "../util/tag_api_utils";

const receiveTags = (tags) => ({
    type: RECEIVE_TAGS,
    tags
})


export const fetchTags = () => (dispatch) => {
    return tagUtil.fetchTags()
        .then(res => dispatch(receiveTags(res)))
}
