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
      .then(() => setTab("finish"))
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
        <div className="payment-title">
          <h2>Your trip to:  </h2>
          <h2>{campsite.name}</h2>
          <div className="space-between">
            <span>Type: </span>
            <span>{campsite.campsiteType}</span>
          </div>
          <div className="space-between">
            <span>From: </span>
            <span>{startDate.toDateString()}</span>
          </div>
          <div className="space-between">
            <span>To: </span>
            <span>{endDate.toDateString()}</span>
          </div>
        </div>

        <div className="payment-row">
          <div className="space-between">
            <span>Number of Nights: </span>
            <span>{dayDiff}</span>
          </div>
          <div className="space-between">
            <span>Nightly Price: </span>
            <span> {campsite.price} </span>
          </div>
          <div className="space-between">
            <span>Guests: </span>
            <span>{groupSize}</span>
          </div>
        </div>
        <div className="payment-total space-between">
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
  else if (tab === "finish"){
    bookingForm = (
      <div className="payment-form">
        <h2>Booking Confirmed. Thank you!</h2>
        <div className="booking-submit-btn">
          <button className="special-buttons-2"
            onClick={handleConfirm}
            >Make another booking!</button>
        </div>
      </div>
    )
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