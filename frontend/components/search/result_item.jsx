import React from 'react';
import { Link } from 'react-router-dom';

const ResultItem = props => {
    // console.log(props.item)
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
                <h1 className="result-item-title">{props.item.name}</h1>
                <div className="result-type">
                    <div className={`result-type-icon ${props.item.campsiteType}`}></div>
                </div>
                    <p className="result-item-subtitle">{props.item.address}</p>
                <div className="result-item-subinfo">
                        <span className="gray"> 
                            <span className="green">
                                <i className="fa fa-thumbs-up"></i> 
                                100% 
                            </span> 
                              - 5 Reviews
                        </span>
                    <p>${props.item.price}/night</p>
                </div>
            </div>
            </Link>
        </div>
    )
};

export default ResultItem; 