import React from "react";

const SpashItem = (props) => {
    const {type} = props;
    const photoUrl = (props[type] && props[type].photoUrl) ? props[type].photoUrl : "#";
    return(
        <div className="splash-items">
            <h1 className="item-title">{props[type].name}</h1>
            <img src={photoUrl} alt=""/>
        </div>
    )
}

export default SpashItem; 