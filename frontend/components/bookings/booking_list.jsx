import React from 'react'; 
import { useSelector } from 'react-redux';
import BookingItem from "./booking_item";

const BookingList = ({user, campsiteId = null}) => {
  // show bookings the user booked 
  // show bookings user booked for that campsite 
  //  (show bookings the campsite owner has)
  const bookings = useSelector((state) => {
    const bookings = state.entities.campsites[campsiteId].bookings
                          .filter( id => user.bookings.includes(id))
    return ( bookings.map( id => state.entities.bookings[id]))
  })
  .sort((a, b) => ((new Date(b.updatedAt)) - (new Date(a.updatedAt))))
  .map( (booking, idx) => 
    (booking) ? <BookingItem key={`booking-${idx}`} booking={booking} /> : null
  )
  
  if (campsiteId){
    return (
      <div className="booking-list">
        <h2>You have {`${bookings.length}`} upcoming bookings!</h2>
        {bookings}
      </div>
    )
  }
}

export default BookingList; 