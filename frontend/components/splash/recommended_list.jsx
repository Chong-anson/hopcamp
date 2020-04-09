import React from 'react';

export default = (props) => {
const recommendedList = 
[
  { 'heading': 'See the winners', 'subHeading': '2019 Hipcamps of the year ', 'imgUrl': 'See-the-winners.jpg' },
  { 'heading': 'Available tonight', 'subHeading': 'Best options near me', 'imgUrl': 'Available-tonight.jpg' },
  { 'heading': 'Available this weekend', 'subHeading': 'Best options near me', 'imgUrl': 'Available-this-weekend.jpg' },
  { 'heading': 'Available next weekend', 'subHeading': 'Best options near me', 'imgUrl': 'Available-next-weekend.jpg' },
  { 'heading': 'Nearby camping (2hrs or less)', 'subHeading': 'Best options near me', 'imgUrl': 'Nearby-camping-(2hrs-or-less).jpg' },
  { 'heading': 'Glamping near me', 'subHeading': 'Best options near me', 'imgUrl': 'Glamping-near-me.jpg' },
  { 'heading': 'Beach camping', 'subHeading': 'Best options near me', 'imgUrl': 'Beach-camping.jpg' },
  { 'heading': 'Pet friendly camping', 'subHeading': 'Best options near me', 'imgUrl': 'Pet-friendly-camping.jpg' },
  { 'heading': 'RV sites', 'subHeading': 'Hipcamps ready for RVs near me', 'imgUrl': 'RV-sites.jpg' },
  { 'heading': 'Lake camping', 'subHeading': 'Best options near me', 'imgUrl': 'Lake-camping.jpg' },
  { 'heading': 'Tent camping near me', 'subHeading': 'Best options near me', 'imgUrl': 'Tent-camping-near-me.jpg' },
  { 'heading': 'Yosemite', 'subHeading': 'California', 'imgUrl': 'Yosemite.jpg' },
  { 'heading': 'Big Sur', 'subHeading': 'California', 'imgUrl': 'Big-Sur.jpg' },
  { 'heading': 'Joshua Tree', 'subHeading': 'California', 'imgUrl': 'Joshua-Tree.jpg' },
  { 'heading': 'Redwood', 'subHeading': 'California', 'imgUrl': 'Redwood.jpg' },
  { 'heading': 'Mount Rainier', 'subHeading': 'Washington', 'imgUrl': 'Mount-Rainier.jpg' },
  { 'heading': 'Bryce Canyon', 'subHeading': 'Utah', 'imgUrl': 'Bryce-Canyon.jpg' },
  { 'heading': 'Grand Canyon', 'subHeading': 'Arizona', 'imgUrl': 'Grand-Canyon.jpg' },
  { 'heading': 'Glacier', 'subHeading': 'Montana', 'imgUrl': 'Glacier.jpg' },
  { 'heading': 'Zion', 'subHeading': 'Utah', 'imgUrl': 'Zion.jpg' },
  { 'heading': 'Great Smoky Mountains', 'subHeading': 'Tennessee', 'imgUrl': 'Great-Smoky-Mountains.jpg' },
  { 'heading': 'Big Bend', 'subHeading': 'Texas', 'imgUrl': 'Big-Bend.jpg' },
  { 'heading': 'Yellowstone', 'subHeading': 'Wyoming', 'imgUrl': 'Yellowstone.jpg' },
  { 'heading': 'Shenandoah', 'subHeading': 'Virginia', 'imgUrl': 'Shenandoah.jpg' },
  { 'heading': 'Teton', 'subHeading': 'Wyoming', 'imgUrl': 'Teton.jpg' }
]

  recommendedList.map( el => {
   return(
     <div className="recommended_list-item">
      <a href="">
        <img src={el.imgUrl} alt=""/>
      </a>
      <h3>{el.heading}</h3>
      
     </div>
   ) 
  })
}
