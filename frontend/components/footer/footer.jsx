import React from 'react'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">

      {/* LOGO IMAGE */}
      {/* ONE BLOCK */}
      </div>
      <div className="footer-left">
        <div className="footer-left-section">
          <h2 className="footer-title">About us</h2>
          <ul>
            <li>Careers</li>
            <li>Journal</li>
            <li>Gift Card</li>
            <li>Contact</li>
            <li>Camper FAQ</li>
          </ul>
        </div>
        <div className="footer-left-section">
          <h2 className="footer-title">Hosting</h2>
          <ul>
            <li>Becoming a Host</li>
            <li>Is my land a fit?</li>
            <li>Insurance</li>
            <li>Standards</li>
            <li>Hosting FAQ</li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <h2 className="footer-title">Hopcamp is everywhere you want to camp</h2>
          <p>
            Discover unique experiences on ranches, nature preserves, farms, 
            ineyards, and public campgrounds across the U.S. Book tent camping, 
            treehouses, cabins, yurts, primitive backcountry sites, car camping,
            airstreams, tiny houses, RV camping, glamping tents and more.
          </p>
      </div>
      <div className="footer-bottom">
        <p>&copy; Hopcamp by Anson Chong </p>
        <div className="profile-link">
          <a href="https://github.com/Chong-anson">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ansonchongch/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer; 