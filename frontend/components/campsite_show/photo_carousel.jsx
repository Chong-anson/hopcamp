import React, { useEffect, useState } from 'react';

export default ({photoUrls}) => {
  useEffect( () => {
    const carousel = new Flickity(".photo-container", { 
      freeScroll: true,
      wrapAround: true,
      pageDots: false, 
      draggable: false,
    });
  }, []);

  const photos = photoUrls.map(
    (url) => (
      <div
        className="photo"
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
    )
    // <img className="photo" src={`${url}`} alt=""/>
  );

  return (
    <div className="photo-container">
      {photos}
    </div>
  )
} 