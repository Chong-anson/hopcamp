export const fetchCampsites = (filter) => {
  const {
    bounds,
    minCapacity,
    minPrice,
    maxPrice,
    type,
    // selectedCampsites,
    // appliedFilter
  } = filter;
  return $.ajax({
    url: "/api/campsites",
    data: {
      filter: {
        bounds,
        min_capacity: minCapacity,
        min_price: minPrice,
        max_price: maxPrice,
        type,
        // selected_campsites: selectedCampsites,
        // applied_filter: appliedFilter,
      },
    },
  });
};

export const fetchCampsite = (campsiteId) => {
  return $.ajax({
    url: `api/campsites/${campsiteId}`,
  });
};
