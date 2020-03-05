import React from 'react';

const SpashItem = (props) => {
    const photoUrl = (props.el && props.el.photoUrl) ? props.el.photoUrl : "#";
    return(
        <div className="splash-items">
            <h1 className="item-title">{props.el}</h1>
            <img src={photoUrl} alt=""/>
        </div>
    )
}

export default SpashItem; 