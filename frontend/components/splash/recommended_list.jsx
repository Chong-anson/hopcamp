import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const recommendedList = 
  [
    // { lat=, lng= ,'heading': 'See the winners', 'subHeading': '2019 Hopcamps of the year ', 'imgUrl': 'See-the-winners.jpg' },
    // { lat=44.281028 ,lng= ,'heading': 'Available tonight', 'subHeading': 'Best options near me', 'imgUrl': 'Available-tonight.jpg' },
    // { lat= ,lng= ,'heading': 'Available this weekend', 'subHeading': 'Best options near me', 'imgUrl': 'Available-this-weekend.jpg' },
    // { lat= ,lng= ,'heading': 'Available next weekend', 'subHeading': 'Best options near me', 'imgUrl': 'Available-next-weekend.jpg' },
    // { lat= ,lng= ,'heading': 'Nearby camping (2hrs or less)', 'subHeading': 'Best options near me', 'imgUrl': 'Nearby-camping-(2hrs-or-less).jpg' },
    // { lat= ,lng= ,'heading': 'Glamping near me', 'subHeading': 'Best options near me', 'imgUrl': 'Glamping-near-me.jpg' },
    // { lat= ,lng= ,'heading': 'Beach camping', 'subHeading': 'Best options near me', 'imgUrl': 'Beach-camping.jpg' },
    // { lat= ,lng= ,'heading': 'Pet friendly camping', 'subHeading': 'Best options near me', 'imgUrl': 'Pet-friendly-camping.jpg' },
    // { lat= ,lng= ,'heading': 'RV sites', 'subHeading': 'Hopcamps ready for RVs near me', 'imgUrl': 'RV-sites.jpg' },
    // { lat= ,lng= ,'heading': 'Lake camping', 'subHeading': 'Best options near me', 'imgUrl': 'Lake-camping.jpg' },
    // { lat= ,lng= ,'heading': 'Tent camping near me', 'subHeading': 'Best options near me', 'imgUrl': 'Tent-camping-near-me.jpg' },
    { "lat":37.8651, "lng": -119.5383 ,'heading': 'Yosemite', 'subHeading': 'California', 'imgUrl': 'Yosemite.jpg' },
    { "lat":36.2704, "lng": -121.8081 ,'heading': 'Big Sur', 'subHeading': 'California', 'imgUrl': 'Big-Sur.jpg' },
    { "lat":33.8734, "lng": -115.9010 ,'heading': 'Joshua Tree', 'subHeading': 'California', 'imgUrl': 'Joshua-Tree.jpg' },
    { "lat":41.2132, "lng": -124.0046,'heading': 'Redwood', 'subHeading': 'California', 'imgUrl': 'Redwood.jpg' },
    { "lat":46.8523, "lng": -121.7603 ,'heading': 'Mount Rainier', 'subHeading': 'Washington', 'imgUrl': 'Mount-Rainier.jpg' },
    { "lat":37.5930, "lng": -112.1871 ,'heading': 'Bryce Canyon', 'subHeading': 'Utah', 'imgUrl': 'Bryce-Canyon.jpg' },
    { "lat":36.108859, "lng": -112.074237 ,'heading': 'Grand Canyon', 'subHeading': 'Arizona', 'imgUrl': 'Grand-Canyon.jpg' },
    { "lat":48.5217, "lng": -112.9197 ,'heading': 'Glacier', 'subHeading': 'Montana', 'imgUrl': 'Glacier.jpg' },
    { "lat":37.2982, "lng": -113.0263 ,'heading': 'Zion', 'subHeading': 'Utah', 'imgUrl': 'Zion.jpg' },
    { "lat":35.6532, "lng": -83.5070 ,'heading': 'Great Smoky Mountains', 'subHeading': 'Tennessee', 'imgUrl': 'Great-Smoky-Mountains.jpg' },
    { "lat":29.1275, "lng": -103.2425 ,'heading': 'Big Bend', 'subHeading': 'Texas', 'imgUrl': 'Big-Bend.jpg' },
    { "lat":44.4280, "lng": -110.5885 ,'heading': 'Yellowstone', 'subHeading': 'Wyoming', 'imgUrl': 'Yellowstone.jpg' },
    { "lat":38.4851, "lng": -78.6250 ,'heading': 'Shenandoah', 'subHeading': 'Virginia', 'imgUrl': 'Shenandoah.jpg' },
    { "lat":43.8536, "lng": -110.6314 ,'heading': 'Teton', 'subHeading': 'Wyoming', 'imgUrl': 'Teton.jpg' }
  ]

  const handleClick=(e) => {
    
  };

  const result = recommendedList.map((el, idx) => {
    return (
      <div className="recommended-list-item" key={`recommendation-${idx}`}>
        <Link 
          to={`search?lat=${el.lat}&lng=${el.lng}&res=${el.heading}`}
        >
          <img src={`/recommended_list/${el.imgUrl}`} alt="" />
        </Link>
        <figcaption>
          <Link to="search?lat=37.7749295&lng=-122.4194155">
            <h2>{el.heading}</h2>
          </Link>
          <p>{el.subHeading}</p>
        </figcaption>
      </div>
    )
  })

  return (
    <div className="recommended-list-container">
      {result}
    </div>
  )
}