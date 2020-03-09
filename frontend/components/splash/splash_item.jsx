import React from "react";
import { Link } from 'react-router-dom';

const SpashItem = (props) => {
    const {type} = props;
    const photoUrl = (props[type] && props[type].photoUrl) ? props[type].photoUrl : "#";
    return(
        <Link to="/" className="splash-item-link">
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
        </Link>
    )
}

export default SpashItem; 