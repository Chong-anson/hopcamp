import React from "react";

export default ({booking, idx}) => {
  const { status, startDate, endDate, groupSize } = booking; 
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
