import React from 'react'; 
import { useSelector } from 'react-redux';
import BookingItem from "./booking_item";

const BookingList = ({user, campsiteId = null}) => {
  // show bookings the user booked 
  // show bookings user booked for that campsite 
  //  (show bookings the campsite owner has)

  const handleScroll = (e) => {
    e.preventDefault();
    $("html,body").animate({
      scrollTop: $(".campsite-details-container").offset().top
    }, 'slow')
  }
  if (campsiteId && user) {
    const bookings = useSelector((state) => {
      const bookings = state.entities.campsites[campsiteId].bookings
                            .filter( id => user.bookings.includes(id))
      return ( bookings.map( id => state.entities.bookings[id]))
    })
    .sort((a, b) => ((new Date(a.startDate)) - (new Date(b.startDate))))
    .map( (booking, idx) => 
      (booking) ? <BookingItem key={`booking-${idx}`} idx={idx} booking={booking} /> : null
    )
      return (
        <div className="booking-list">
          <h2>You have {`${bookings.length}`} upcoming bookings!</h2>
          {bookings}
          <div className="booking-list-button">
            <button className="scroll-to-details special-buttons-2" onClick={handleScroll}>
              Check out campsite details
            </button>
          </div>
        </div>
      )
  }
  else return nulll
}

export default BookingList; 