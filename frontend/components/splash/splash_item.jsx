import React from "react";
import { Link } from "react-router-dom";

const SpashItem = (props) => {
  const { type } = props;
  const photoUrl =
    props[type] && props[type].photoUrl ? props[type].photoUrl : "#";
  const handleClick = (e) => {
    // e.preventDefault();
    props.updateLocation({
      location: props[type].name,
      lat: props[type].lat,
      lng: props[type].lng,
    });
  };
  return (
    <Link
      to={`/search?lat=${props[type].lat}&lng=${props[type].lng}&res=${props[type].name}`}
      className="splash-item-link"
      onClick={handleClick}
    >
      <div
        className="splash-item-background"
        style={{
          backgroundImage: `url(${photoUrl})`,
          backgroundPosition: "center",
        }}
      ></div>
      <div className="splash-item-bottom">
        <h2>{props[type].description}</h2>
        <span>{props[type].name}</span>
      </div>
    </Link>
  );
};

export default SpashItem;
