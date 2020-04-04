import React, { useState, useEffect } from 'react';
import { filterCampsites, selectAllCategories } from '../../reducers/selector';

class MoreFilter extends React.Component{
  constructor(props){
    super(props);
    // const selectedCampsites = [...props.campsites];
    this.state = {
      selectedCampsites: props.campsites,
      count: props.campsites.length, 
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
      minCapacity,
      count: selectedCampsites.length 
    });
  };

  handlePriceChange(e){
    const maxPrice = parseInt(e.target.value);
    const selectedCampsites = this.state.selectedCampsites.filter( campsite => 
      campsite.price <= maxPrice
    )
    this.setState({
      selectedCampsites,
      maxPrice,
      count: selectedCampsites.length
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
      count: selectedCampsites.length, 
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
      count: selectedCampsites.length,
      checkedTags: []
    })
    this.props.closeModal();
  }

  componentDidMount(){
    if (!this.props.categorized) this.props.fetchTags();
    if (this.state.checkedTags.length) {
      this.state.checkedTags.forEach(id => {
        $(`#${id}`).prop("checked", true)
      }
      )
    }
  };

  componentDidUpdate(prevProps){
    if(!prevProps.campsites.length && this.props.campsites){
      const selectedCampsites = this.props.campsites; 
      this.setState({ 
        selectedCampsites, 
        count: selectedCampsites.length })
    }
  };

  render(){
    const { minCapacity, maxPrice } = this.state; 
    if ( this.props.categorized ){
      const categorizedList = {};
      Object.keys(this.props.categorized).forEach(key => 
          categorizedList[key] = Object.values(this.props.categorized[key]).map( tag => {
            return (
              <label key={tag.id}>
                <input
                  type="checkbox"
                  key={`tag-${tag.id}`}
                  name={tag.id}
                  id={tag.id} 
                  onChange={this.handleTagChange}
                  data-campsites={tag.campsites}
                />
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
      return(
        <div className="more-filter-large">
            <div className="more-filter-section">
                <h2>Group Size</h2>
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
                <h2>Pricing</h2>
                <select className="form-control" name="" id=""
                  defaultValue = {maxPrice === 1/0 ? "" : maxPrice}
                  onChange={this.handlePriceChange}
                >
                    <option value="">Any price</option>
                    {priceRange}
                </select>
            </div>
            <div className="more-filter-section">
                <h2>Amenities</h2>
                <div className="strong-filter amentities">
                    {categorizedList["Amenities"]}
                </div>
            </div>
            <div className="more-filter-section">
                <h2>Activities</h2>
                <div className="strong-filter activities">
                    {categorizedList["Activities"]}
                </div>
            </div>
            <div className="more-filter-section">
                <h2>Terrain</h2>
                <div className="strong-filter terrain">
                    {categorizedList["Terrain"]}
                </div>
                <button></button>
            </div>
            <button onClick={this.clearFilter}>Clear Filter</button>
            <button onClick={this.handleSubmit}>Show {this.state.count}+ camps </button>

        </div>
    )
  }
  else 
    return null; 
  }
};

export default MoreFilter; 