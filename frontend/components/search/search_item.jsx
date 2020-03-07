import React from "react";

const SearchItem = (props) => (
    <div className="search-item">
        <h1>{props.item.name}</h1>
        <h1>{props.item.price}</h1>
        <h1>{props.item.campsiteType}</h1>
    </div>
)

export default SearchItem;