import React from 'react';

class MoreFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tags: []
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e){
        $(e.target).toggleClass("selected-more-filter");
        let tags = [];
        document.querySelectorAll("input.selected-more-filter")
                .forEach( el => {
                    const newSites = el.getAttribute("data-campsites").split(",");
                    tags = tags.concat(newSites);
                }
        );
        const distinctTags = [...new Set(tags)];
        console.log(distinctTags);

    };

    componentDidMount(){
        this.props.fetchTags();
    };

    render(){
        if (this.props.categorized){
            const categorizedList = {};
            Object.keys(this.props.categorized).forEach(key => 
                categorizedList[key] = Object.values(this.props.categorized[key]).map( tag => 
                    <label key={tag.id}>
                        <input
                            type="checkbox"
                            name={tag.id}
                            id={tag.id} 
                            onChange={this.handleChange}
                            data-campsites={tag.campsites}
                            />
                        {tag.name}
                    </label>
                )
            )
            return(
                <div className="more-filter-contents">
                    <div className="more-filter-section-1">
                        <h2>Group Size</h2>
                        {/* DROP DOWN MENU FOR GROUP SIZE */}
                        <h2>Pricing</h2>
                        {/* DROP DOWN MENU FOR PRICING */}
                    </div>
                    <div className="more-filter-section-2">
                        <h2>Amenities</h2>
                        <div className="strong-filter-amentities">
                            {categorizedList["Amenities"]}
                        </div>
                    </div>
                    <div className="more-filter-section-3">
                        <h2>Activities</h2>
                        <div className="strong-filter-activities">
                            {categorizedList["Activities"]}
                            {/* <label> 
                                <input type="checkbox" name="" id=""/>

                            </label>
                            <label> 
                                <input type="checkbox" name="" id=""/>
                                test2
                            </label> */}
                        </div>
                    </div>
                    <div className="more-filter-section-4">
                        <h2>Terrain</h2>
                        <div className="strong-filter-terrain">
                            {categorizedList["Terrain"]}

                        </div>
                    </div>
                </div>
            )
        }
        else 
            return null; 
    }
};

export default MoreFilter; 