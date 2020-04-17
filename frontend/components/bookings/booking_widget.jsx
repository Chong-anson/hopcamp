import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { createBooking, clearErrors, receiveErrors } from "../../actions/booking_actions";
import BookingErrors from "../error_show";
import BookingFormContainer from "./booking_form_container";
import BookingList from "./booking_list";

const BookingWidget = (props) => {
  const dispatch = useDispatch();
  const { campsite, currentUser } = props;
  const [ tab, setTab ] = useState("booking");
  // BOOKING, CHECKOUT, FINISH
  const booking = useSelector( state => (
    state.ui.payment
  ));
  const handleTab = (tab) => {
    setTab(tab);
  };

  const handleCheckOut = (e) => {
    e.preventDefault();
    dispatch(createBooking(booking))
      .then(() => setTab("confirmed"))
      .fail((err) => dispatch(receiveErrors(err.responseJSON)))
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(clearErrors());
    setTab("booking");
  }

  let bookingForm = <BookingFormContainer campsite={campsite} setTab={handleTab}/>;

  if (tab === "checkout"){
    const { startDate, endDate, groupSize } = booking
    const dayDiff = Math.round(endDate - startDate) / (1000 * 24 * 60 * 60);
    bookingForm = (
      <div className="payment-form">
        <h2>Your trip to:  </h2>
        <h2>{campsite.name}</h2>
        <h3>Type: {campsite.campsiteType}</h3>
        <h3>From: {startDate.toDateString()} </h3>
        <h3>To: {endDate.toDateString()}</h3>
        <div className="payment-row">
          <h3>Number of Nights: {dayDiff}</h3>
          <h3>Nightly Price: {campsite.price}</h3>
          <h3>Guests: {groupSize}</h3>
        </div>
        <div className="payment-total">
          <h3>Total: </h3>
          <h3>{Math.round(dayDiff * campsite.price)}</h3>
        </div>
        <div className="booking-submit-btn">
          <button className="special-buttons-2"
            onClick={handleCheckOut}
          >Check out!</button>
        </div>
      </div>
    )
  }
  else if (tab === "confirmed"){
    <div className="booking-form">
      <h2>Booking Confirmed. Thank you!</h2>
      <div className="booking-submit-btn">
        <button className="special-buttons-2"
          onClick={handleConfirm}
        >Make another booking!</button>
      </div>
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