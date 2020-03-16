import React, { useState, useEffect } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

const FilterBar = (props) => {
    const CAMPSITE_TYPE = ["CAMPING", "RV", "GLAMPING"];
    // const state = { typeFilter: this.CAMPSITE_TYPE};
    const [typeFilter, setTypeFilter] = useState(CAMPSITE_TYPE); 
    // props.updateFilter("type", this.CAMPSITE_TYPE);

    const updateTypeFilter = () => {
        const appliedFilter = [];
        document.querySelectorAll('button.selected-filter').forEach(el =>
            appliedFilter.push(el.getAttribute("data-type"))
        );
        setTypeFilter(appliedFilter); 
        props.updateFilter("type", typeFilter);
        // this.setState({ typeFilter }, () => {
        //     this.props.updateFilter("type", this.state.typeFilter);
        // });
    };

    const handleButtonClick = () => {
        const el = $(".more-filter-large")
        // debugger
        el.toggleClass("show")
    };

    const handleFilterClick = (e) => {
        e.preventDefault();
        $(e.currentTarget).toggleClass("selected-filter");
        updateTypeFilter();
    };


    const types = CAMPSITE_TYPE.map( (type,idx) => 
            <button 
                className="type-filter"
                onClick={handleFilterClick}
                data-type={type}
                key={idx}
                >
                    <div className={`filter-type-icon ${type}`}></div>
                    {type}
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