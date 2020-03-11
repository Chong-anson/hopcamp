import React from 'react';
import { Link } from 'react-router-dom';

const ResultItem = props => {
    console.log(props.item)
    return (
        <div 
            className="result-item"

            >
            <Link to={`/campsites/${props.item.id}`}>
            <div className="result-image-wrapper">
                <div 
                    className="result-image"
                    style={{
                        backgroundImage: `url(${props.item.photoUrls[0]})`
                    }}
                    >
                
                </div>
            </div>
            <div className="result-info">
                <h1>{props.item.name}</h1>
                <h3>{props.item.price}</h3>
                <h3>{props.item.campsiteType}</h3>
            </div>
            </Link>
        </div>
    )
};

export default ResultItem; 