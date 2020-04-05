import React from "react";

export default ({booking}) => {
  const { status, startDate, endDate, groupSize } = booking; 
  return (
  <div className="booking-item">
    <p>{status}</p>
    <p>{startDate}</p>
    <p>{endDate}</p>
    <p>{groupSize}</p>
  </div>
  )
}

