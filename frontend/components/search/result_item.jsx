import React from 'react';
import { Link } from 'react-router-dom';
import campsite_detail from '../campsite_show/campsite_detail';

const ResultItem = props => {
  const { item } = props;
  const { id, photoUrls, name, campsiteType, address, reviews, price, rating} = item
  let ratingComponent; 
  if (reviews.length){
    ratingComponent = (<span className="green">
                        <i className="fa fa-thumbs-up"></i>
                        &nbsp; {rating} %
                        <span className="gray">
                          &nbsp; - &nbsp;
                        </span>
                     </span> 
                    
    )
  }
  else {
    ratingComponent = "";
  }
  return (
    <div className="result-item" >
      <Link to={`/campsites/${id}`}>
        <div className="result-image-wrapper">
            <div className="result-image"
                style={{ backgroundImage: `url(${photoUrls[0]})` }}>
            </div>
        </div>
        {/* <div className="result-info"> */}
        <div className="result-item-main-info">
          <div className="result-title">
            <h1>{name}</h1>
            <div className="result-type">
              <div className={`result-type-icon hc-awesome-${campsiteType.toLowerCase()}`}></div>
            </div>
          </div>
          <p className="result-item-subtitle">{item.address}</p>
        </div>
        <div className="result-item-subinfo">
                <span className="gray"> 
                    {ratingComponent}
                    {reviews.length} 
                    { item.reviews.length === 1 ? " Review" : " Reviews"}
                </span>
            <p>${price}/night</p>
        </div>
        {/* </div> */}
      </Link>
    </div>
  )
};

export default ResultItem; 