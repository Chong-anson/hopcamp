import React from "react";

const SpashItem = (props) => {
    const {type} = props;
    const photoUrl = (props[type] && props[type].photoUrl) ? props[type].photoUrl : "#";
    return(
        <a href="" className="splash-item-link">
            <div className="splash-item-background" 
                style={{ 
                    backgroundImage: `url(${photoUrl})`,
                    backgroundPosition: "center"
                    }}>
            </div>
            <div className="splash-item-title">
                <h2 className="item-title">Escape reality</h2>
                <span>{props[type].name}</span>
            </div>

        </a>
    )
}

export default SpashItem; 