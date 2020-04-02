import React, { useState, useEffect } from 'react';
import { filterCampsites } from '../../reducers/selector';

class MoreFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedCampsites: props.campsites,
            count: ((props.campsites) ? props.campsites.length : 0), 
            appliedFilter: props.appliedFilter,
            checkedTags: props.checkedTags
        };
        this.handleChange = this.handleChange.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e){
      // update the filter in the state 
        console.log("handle change")
        $(e.target).toggleClass("selected-more-filter");
        const filters = document.querySelectorAll("input.selected-more-filter");
        let appliedFilter; 
        let selectedCampsites = [];
        let checkedTags = []; 
        if (filters.length){
            selectedCampsites = [...this.props.campsites];
            // debugger
            appliedFilter = true;
            filters.forEach( el => {
                const newSites = el.getAttribute("data-campsites")
                                    .split(",")
                                    .map(id => parseInt(id))
                // debugger
                selectedCampsites = selectedCampsites.filter(campsite => 
                  newSites.includes(campsite.id)
                );
                checkedTags.push(el.id)
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
        this.props.updateFilter("appliedFilter", this.state.appliedFilter );
        this.props.updateFilter( 
          "selectedCampsites", 
          this.state.selectedCampsites.map(campsite => campsite.id)
        )
        this.props.updateFilter("checkedTags", this.state.checkedTags)
        // this.props.updateFilter(
        //   "selectedCampsites", 
        //   this.state.campsites.map(id => parseInt(id)
        // ));
        this.props.closeModal();
    };

    clearFilter(e){
        e.preventDefault();
        this.props.updateFilter("appliedFilter", false);
        this.props.updateFilter("selectedCampsites", []); 
        this.props.updateFilter("checkedTags", []);
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
      if(!prevProps.campsites && this.props.campsites){
          const {campsites} = this.props;
          this.setState({ campsites, count: campsites.length })
      }
    };

    render(){
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
                    onChange={this.handleChange}
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
            <option key={i} value={i}>{i} camper{i > 1 ? "s" : ""}</option>
          )
        }

        return(
          <div className="more-filter-large">
              <div className="more-filter-section">
                  <h2>Group Size</h2>
                  <select className="form-control" name="" id="">
                      <option value="">Any size</option>
                      {groupSize}
                      <option value="">10+ campers</option>
                      <option value="">15+ campers</option>
                  </select>
                  <h2>Pricing</h2>
                  <select className="form-control" name="" id="">
                      <option value="25">Under $25</option>
                      <option value="50">Under $50</option>
                      <option value="75">Under $75</option>
                      <option value="125">Under $125</option>
                      <option value="175">Under $175</option>
                      <option value="175+">$175 or more</option>
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