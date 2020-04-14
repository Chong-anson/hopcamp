import React from 'react'; 

export default (props) => {
  const CAMPSITE_TYPE = {CAMPING: "Campsites", RV: "RVs", GLAMPING: "Lodging" };

  return (
    <div className="campsite-details-container show-row">
      <div className="row">
        <div className="details-left">
          <h2>Details</h2>
        </div>
        <div className="details-right">
          <ul>
            <li>
              <h2>Campsite type: </h2>
              <span>&nbsp;{CAMPSITE_TYPE[props.campsiteType]}</span>
            </li>
            <li>
              <h2> Number of guests: </h2>
              <span> Up to {props.capacity} guests </span>  
            </li>
            <li>
              <h2>Check in:</h2>
              <span>&nbsp;After 2PM</span>
            </li>
            <li>
              <h2>Check out:</h2>
              <span>&nbsp;Before 12PM</span>
            </li>
    
          </ul>
          <ul>
            <li>
              <h2>On arrival:</h2>
              <span>&nbsp;Meet and greet</span>
            </li>
            <li>
              <h2>Minimum nights:</h2>
              <span>&nbsp;1</span>
            </li>
              <li>
              <h2>Accepts bookings:</h2>
              <span>&nbsp;12 months out</span>
            </li>
            <li>
              <h2>Cancellation policy:</h2>
              <span>&nbsp;Super Strict (30 Days)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}