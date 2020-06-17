export const createBooking = (booking) => {
  return $.ajax({
    method: "POST",
    url: "/api/bookings",
    data: {
      booking: {
        user_id: booking.userId,
        campsite_id: booking.campsiteId,
        group_size: booking.groupSize,
        start_date: booking.startDate.toJSON(),
        end_date: booking.endDate.toJSON(),
      },
    },
  });
};

export const deleteBooking = (bookingId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/booking/${bookingId}`,
  });
