import React, { useState } from 'react'
import BookingFormContainer from "./booking_form_container";
import BookingList from "./booking_list";

const BookingWidget = (props) => {
  const { campsite, currentUser } = props;
  const [ tab, setTab ] = useState("booking");
  // BOOKING, CHECKOUT, FINISH

  const handleTab = (tab) => (e) => {
    e.preventDefault(); 

  };

  let bookingForm = <BookingFormContainer campsite={campsite} />;

  if (tab === "checkout"){
    <div className="booking-form">
      <h2>Your trip to:</h2>
      
      <h3>Number of Nights: </h3>
    </div>
  }

  return (
    <div className="booking-widget">
    {bookingForm}
    <BookingList
      user={currentUser}
      campsiteId={campsite.id}
      />
  </div>
  )
}

export default BookingWidget;