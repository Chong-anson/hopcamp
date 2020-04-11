import { connect } from 'react-redux';
import MoreFilter from './more_filter';
import { fetchTags } from '../../actions/tag_actions';
import { updateFilter, resetTagFilter, updateTagFilter } from '../../actions/filter_actions';
import { filterCampsites } from "../../reducers/selector";

const msp = (state, ownProps) => {
    const campsites = filterCampsites(state);
    const tags = state.entities.tags;
    const { 
      checkedTags, 
      appliedFilter,
      minCapacity,
      maxPrice
    } = state.ui.filter;
    if (tags.length){
    // categorize tags
        const categorized = {};
        tags.forEach(tag => {
            if (categorized[tag.category])
                categorized[tag.category].push(tag);
            else
                categorized[tag.category] = [tag];
        } )
        return ({
            categorized,
            campsites,
            checkedTags,
            appliedFilter,
            minCapacity,
            maxPrice
        })
    }
    else{
      return ({
        campsites: [], 
        checkedTags: [], 
      })
    }
};

const mdp = (dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
  updateFilter: (filter, value) => 
                dispatch(updateFilter(filter, value)),
  updateTagFilter: ( filter ) => dispatch(updateTagFilter(filter)),
  resetTagFilter: () => dispatch(resetTagFilter())
}); 

export default connect(msp,mdp)(MoreFilter);

// catgorized: {
//     activities: ["Hiking",
//         "Swimming",
//         "Fishing",
//         "Paddling",
//         "Wildlife watching",
//         "Biking",
//         "Boating",
//         "OHV",
//         "Whitewater paddling",
//         "Climbing",
//         "Snow sports",
//         "Horseback riding",
//         "Surfing",
//         "Wind sports",
//         "Stargazing"
//     ],
//         amentities: [
//             "Pets allowed",
//             "Toilets",
//             "Campfires",
//             "Water",
//             "Showers",
//             "Picnic table",
//             "Trash",
//             "Wifi",
//             "Cooking equipment"
//         ],
//             terrain: [
//                 "Lake",
//                 "Beach",
//                 "Forest",
//                 "River, stream or creek",
//                 "Hot spring",
//                 "Redwoods",
//                 "Swimming hole",
//                 "Desert",
//                 "Cave"
//             ]
// },