import React, { useState, useEffect } from 'react';
import { filterCampsites, selectAllCategories } from '../../reducers/selector';

class MoreFilter extends React.Component{
  constructor(props){
    super(props);
    // const selectedCampsites = [...props.campsites];
    this.state = {
      selectedCampsites: props.campsites,
      appliedFilter: props.appliedFilter,
      checkedTags: props.checkedTags,
      minCapacity: props.minCapacity, 
      maxPrice: props.maxPrice
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  
  handleSizeChange(e){
    const minCapacity = parseInt(e.target.value); 
    const selectedCampsites = this.state.selectedCampsites.filter( campsite => 
      campsite.capacity >= minCapacity
    )
    this.setState({ 
      selectedCampsites, 
      minCapacity
    });
  };

  handlePriceChange(e){
    const maxPrice = parseInt(e.target.value);
    const selectedCampsites = this.state.selectedCampsites.filter( campsite => 
      campsite.price <= maxPrice
    )
    this.setState({
      selectedCampsites,
      maxPrice
    });
  };

  handleTagChange(e){
    // update the filter in the state 
    $(e.target).toggleClass("selected-more-filter");
    const filters = document.querySelectorAll("input.selected-more-filter");
    let appliedFilter; 
    let { selectedCampsites } = this.state;
    let checkedTags = []; 
    if (filters.length){
        // selectedCampsites = [...this.props.campsites];
        appliedFilter = true;
        filters.forEach( el => {
          const newSites = el.getAttribute("data-campsites")
                              .split(",")
                              .map(id => parseInt(id))
          selectedCampsites = selectedCampsites.filter(campsite => 
            newSites.includes(campsite.id)
          );
          checkedTags.push(parseInt(el.id)); 
        })
    }
    else{
        selectedCampsites = this.props.campsites; 
        appliedFilter = false;
        checkedTags = [];
    };        
    this.setState({ 
      selectedCampsites, 
      appliedFilter, 
      checkedTags
    });
  };

  handleSubmit(e){
    e.preventDefault();
    const {
      appliedFilter,
      checkedTags, 
      minCapacity,
      maxPrice
    } = this.state; 
    const selectedCampsites = this.state.selectedCampsites
                                .map(campsite => campsite.id)
    // this.props.updateFilter("appliedFilter", appliedFilter );
    // this.props.updateFilter( 
    //   "selectedCampsites", 
    //   this.state.selectedCampsites.map(campsite => campsite.id)
    // );
    // this.props.updateFilter("checkedTags", checkedTags);
    // this.props.updateFilter("minCapacity", minCapacity);
    // this.props.updateFilter("maxPrice", maxPrice);
    this.props.updateTagFilter({
      appliedFilter, 
      checkedTags, 
      minCapacity, 
      maxPrice, 
      selectedCampsites
    })
    this.props.closeModal();
  };

  clearFilter(e){
    e.preventDefault();
    this.props.resetTagFilter(); 
    console.log("clearing")
    document.querySelectorAll("input.selected-more-filter").forEach(el => {
      el.checked =  false
      el.classList.remove("selected-more-filter")
    })
    const selectedCampsites = [...this.props.campsites];
    this.setState({
      selectedCampsites,
      checkedTags: []
    })
    this.props.closeModal();
  }

  componentDidMount(){
    if (!this.props.categorized) this.props.fetchTags();
    if (this.state.checkedTags.length) {
      this.state.checkedTags.forEach(id => {
        $(`#${id}`).prop("checked", true)
      })
    }
  };

  componentDidUpdate(prevProps){
    if(!prevProps.campsites.length && this.props.campsites.length){
      const selectedCampsites = this.props.campsites; 
      this.setState({ selectedCampsites })
    }
  };

  render(){
    const { minCapacity, maxPrice } = this.state; 
    const count = this.state.selectedCampsites.length;

    if ( this.props.categorized ){
      const categorizedList = {};
      const specialCheckbox = {
        "Pets allowed": "pets",
        "Toilets": "toilet",
        "Campfires": "fire",
        "Water": "water",
        "Hiking": "hiking",
        "Swimming": "swimming",
        "Lake": "lake",
        "Beach": "beach"
      }
      

      Object.keys(this.props.categorized).forEach(key => 
          categorizedList[key] = Object.values(this.props.categorized[key]).map( tag => {
            let className;
            let icon; 
            if (Object.keys(specialCheckbox).includes(tag.name)){
              className = "special";
              icon = 
                <span className={`more-filter-icon 
                    hc-awesome-${specialCheckbox[tag.name]}`}>
                </span>              
            }
            else{
              className = "normal";
              icon = "";
            }

            return (
              <label 
                className={`more-filter-label ${className}-label`} 
                key={tag.id}
                onClick={
                  (e) => {
                  $(`#${tag.id}`).prop("checked")
                  $(e.target).toggleClass("checked-label")
                }}>
                <input
                  type="checkbox"
                  className={`${className}-checkbox`}
                  key={`tag-${tag.id}`}
                  name={tag.id}
                  id={tag.id} 
                  onChange={this.handleTagChange}
                  data-campsites={tag.campsites}
                />
                {icon}
                {tag.name}
              </label>
            )
        })
      )
      const groupSize = [];
      for(let i = 1 ; i <= 10; i++){
        groupSize.push(
          <option key={`size-${i}`} value={i}>
            {i} camper{i > 1 ? "s" : ""}
          </option>
        )
      }
      const priceRange = [25, 50, 75, 125, 175].map( (el, idx) => 
                            <option key={`price-${idx}`} value={`${el}`} >
                              {`Under $${el}`}
                            </option>
                          )
      console.log("camp", this.state.selectedCampsites);
      console.log("camp2", this.props.campsites);
      const filterSection = Object.keys(categorizedList).map( section => (
        <div className="more-filter-section">
          <h2>{section}</h2>
          <div className={`strong-filter ${section.toLowerCase()}`}>
            {categorizedList[section]}
          </div>
        </div>
      ))
      return(
        <div className="more-filter-large">
            <div className="row">
              <div className="more-filter-section">
                  <h2>Group Size</h2>
                  <div className="filter-select">
                    <select 
                      className="form-control" 
                      name="" 
                      id="" 
                      defaultValue={minCapacity}
                      onChange={this.handleSizeChange}
                      >
                        <option value="" >Any size</option>
                        {groupSize}
                        <option value="10">10+ campers</option>
                        <option value="15">15+ campers</option>
                    </select>
                    <i className="fas fa-angle-down"></i>
                  </div>
                  <h2>Pricing</h2>
                  <div className="filter-select">
                    <select className="form-control" name="" id=""
                      defaultValue = {maxPrice === 1/0 ? "" : maxPrice}
                      onChange={this.handlePriceChange}
                      >
                        <option value="">Any price</option>
                        {priceRange}
                    </select>
                    <i className="fas fa-angle-down"></i>
                  </div>
                </div>
              {filterSection}
            </div>
            <div className="row filter-buttons">
              <button className="clear-button" onClick={this.clearFilter}>Clear Filter</button>
              <button className="special-buttons-2" onClick={this.handleSubmit}> 
                Show {(count < 10) ? count : `${count}+`} camps 
              </button>
            </div>
        </div>
    )
  }
  else 
    return null; 
  }
};

export default MoreFilter; 