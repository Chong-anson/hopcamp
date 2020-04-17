import React from "react";
import { Link } from 'react-router-dom';

export default ({booking, idx, type}) => {
  const { status, startDate, endDate, groupSize } = booking; 

  if (type === "user"){
    var extendComponent = (
      <div className="booking-item-campsite">
        <Link to={`/campsites/${campsite.id}`}></Link>
      </div>
    )
  }
  return (
    <div className="booking-item">
        <h3>Booking #{idx+1}</h3>
        <p>From &nbsp;
          <strong>{startDate}</strong>
          &nbsp; to &nbsp;
          <strong>{endDate}</strong>
        </p>
        <p> Guest number: {groupSize}</p>
    </div>
  )
}
