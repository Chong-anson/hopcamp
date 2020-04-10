import React, { useState, useEffect } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

const FilterBar = (props) => {
    const CAMPSITE_TYPE = [{Campsites: "CAMPING"}, {RVs: "RV"}, {Lodging: "GLAMPING"}];
    // const state = { typeFilter: this.CAMPSITE_TYPE};
    const [typeFilter, setTypeFilter] = useState(CAMPSITE_TYPE); 
    // props.updateFilter("type", this.CAMPSITE_TYPE);

    const updateTypeFilter = () => {
        const appliedFilter = [];
        document.querySelectorAll('button.selected-filter').forEach(el =>
            appliedFilter.push(el.getAttribute("data-type"))
        );
        setTypeFilter(appliedFilter); 
        // props.updateFilter("type", appliedFilter);
        props.updateTypeFilter(appliedFilter);
        // this.setState({ typeFilter }, () => {
        //     this.props.updateFilter("type", this.state.typeFilter);
        // });
    };

    // const handleButtonClick = () => {
    //     const el = $(".more-filter-large")
    //     el.toggleClass("show")
    // };
 
    const handleFilterClick = (e) => {
        e.preventDefault();
        $(e.currentTarget).toggleClass("selected-filter");
        updateTypeFilter();
    };


    const types = CAMPSITE_TYPE.map( (type,idx) => 
            <button 
                className="type-filter"
                onClick={handleFilterClick}
                data-type={Object.values(type)[0]}
                key={idx}
                >
                    <span className={`filter-type-icon hc-awesome-${Object.values(type)[0].toLowerCase()}`}></span>
                    {Object.keys(type)[0]}
            </button>
    )

    useEffect( () => {props.updateFilter} , [typeFilter]); 

    return (
        <div className="filter-bar">
            {/* <DayPickerInput />  */}
            {types}
            <div className="more-filter">
                {props.filterButton}
                {/* <MoreFilterContainer updateFilter={this.props.updateFilter} /> */}
            </div>
        </div>
    )
};

export default FilterBar;