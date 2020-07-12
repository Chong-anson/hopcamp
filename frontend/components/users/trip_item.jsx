import React from "react";
import BookingItem from "../bookings/booking_item";
import { Link } from "react-router-dom";

const TripItem = ({ campsite, booking, idx }) => {
  const { id, name, campsiteType, address } = campsite;
  const { startDate, endDate, groupSize } = booking;
  return (
    <div className="trip-item">
      <Link to={`/campsites/${id}`}>
        <h1>Booking #{idx + 1}</h1>
        <div className="trip-booking-info">
          <p>
            From: &nbsp;
            <strong>{startDate}</strong>
          </p>
          <p>
            To: &nbsp;
            <strong>{endDate}</strong>
          </p>
          <p> Guest number: {groupSize}</p>
        </div>
        <div className="trip-item-main-info">
          <div className="trip-title">
            <h2>{name}</h2>
            <div className="trip-type">
              <div
                className={`trip-type-icon hc-awesome-${campsiteType.toLowerCase()}`}
              ></div>
            </div>
          </div>
          <p className="trip-item-subtitle">{address}</p>
        </div>
      </Link>
    </div>
  );
};

export default TripItem;
