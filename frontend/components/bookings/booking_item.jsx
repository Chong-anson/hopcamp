import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ResultItem from "../../components/search/result_item";

export default ({ booking, idx, type }) => {
  const { status, startDate, endDate, groupSize, campsiteId } = booking;
  let extendComponent = null;

  return (
    <div className="booking-item">
      {extendComponent}
      <h3>Booking #{idx + 1}</h3>
      <p>
        From &nbsp;
        <strong>{startDate}</strong>
        &nbsp; to &nbsp;
        <strong>{endDate}</strong>
      </p>
      <p> Guest number: {groupSize}</p>
    </div>
  );
};
