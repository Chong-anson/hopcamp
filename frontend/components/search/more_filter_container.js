import { connect } from 'react-redux';
import MoreFilter from './more_filter';
import { fetchTags } from '../../actions/tag_actions';
import { updateTags } from '../../actions/filter_actions';

const msp = (state, ownProps) => {
    const campsites = state.entities.campsites;
    const tags = state.entities.tags;
    if (tags.length){
    // categorize tags
        const categorized = {};
        tags.forEach(tag => {
            if (categorized[tag.category])
                categorized[tag.category].push(tag);
            else
                categorized[tag.category] = [];
        } )
        return ({
            categorized,
            campsites: Object.keys(campsites),
            tags: state.entities.tags,
            checkedTags: state.ui.filter.tags,
            appliedFilter: state.ui.filter.appliedFilter
        })
    }
    else{
        return ({
        })
    }
};

const mdp = (dispatch) => ({
    fetchTags: () => dispatch(fetchTags()),
    updateTags: (selected, selectedCampsites) => 
                  dispatch(updateTags(selected, selectedCampsites)),
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