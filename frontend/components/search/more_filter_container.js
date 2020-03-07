import { connect } from 'react-redux';
import MoreFilter from './more_filter';
import { fetchTags } from '../../actions/tag_actions';

const msp = (state) => {
    const tagsList = Object.values(state.entities.tags);
    if (tagsList.length){
        const categorized = {};
        tagsList.forEach(tag => {
            if (categorized[tag.category])
                categorized[tag.category].push(tag);
            else
                categorized[tag.category] = [];
        }
        )
        return ({
            categorized
        })
    }
    else{
        return ({})
    }
};

const mdp = (dispatch) => ({
    fetchTags: () => dispatch(fetchTags()),
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