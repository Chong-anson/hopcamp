import React from "react";
import { useSelector } from "react-redux";
import TripItem from "./trip_item";
// import ResultItem from "../search/result_item";

const TripList = (props) => {
  const { user } = props;
  const campsites = useSelector((state) => state.entities.campsites);
  var bookings = useSelector((state) => {
    let bookingState = Object.keys(state.entities.bookings);
    if (bookingState.length > 0)
      bookingState = user.bookings.map(
        (bookingId) => state.entities.bookings[bookingId]
      );
    return bookingState;
  })
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .map((booking, idx) => {
      if (campsites[booking.campsiteId]) {
        const campsite = campsites[booking.campsiteId];
        return (
          <TripItem
            key={`booking-${idx}`}
            campsite={campsite}
            booking={booking}
            idx={idx}
          />
        );
      } else return null;
    });

  return <div className="user-booking-list">{bookings}</div>;
};

export default TripList;
