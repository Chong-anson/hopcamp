import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

class FilterBar extends React.Component{
    constructor(props){
        super(props);
        this.CAMPSITE_TYPE = ["CAMPING", "RV", "GLAMPING"];
        this.state = { typeFilter: this.CAMPSITE_TYPE};
        // props.updateFilter("type", this.CAMPSITE_TYPE);
        this.updateTypeFilter = this.updateTypeFilter.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    };

    // componentWillUnmount remove filter modal 
    handleFilterClick(e){
        e.preventDefault();
        $(e.currentTarget).toggleClass("selected-filter");
        this.updateTypeFilter();
    };

    updateTypeFilter(){
        const typeFilter = []; 
        document.querySelectorAll('button.selected-filter').forEach(el =>
            typeFilter.push(el.getAttribute("data-type"))
        );
        this.setState({typeFilter}, ()=> {
            this.props.updateFilter("type", this.state.typeFilter);
        });
    };

    handleButtonClick(){
        console.log("click")
        const el = $(".more-filter-large")
        // debugger
        el.toggleClass("show")
    }

    render(){
        const types = this.CAMPSITE_TYPE.map( (type,idx) => 
            <button 
                className="type-filter"
                onClick={this.handleFilterClick}
                data-type={type}
                key={idx}
                >
                    <div className={`filter-type-icon ${type}`}></div>
                    {type}
            </button>
        )

        return (
            <div className="filter-bar">
                {/* <DayPickerInput />  */}
                {types}
                <div className="more-filter">
                    {this.props.filterButton}
                    {/* <MoreFilterContainer updateFilter={this.props.updateFilter} /> */}
                </div>
            </div>
        )
    };
};

export default FilterBar;