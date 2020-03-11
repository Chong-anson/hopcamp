import React from 'react'

const ResultItem = props => {
    console.log(props.item)
    return (
        <div className="result-item">
            <h1>{props.item.name}</h1>
            <h1>{props.item.price}</h1>
            <h1>{props.item.campsiteType}</h1>
        </div>
    )
};

export default ResultItem; 