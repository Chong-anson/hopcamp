import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import BookingErrors from "../error_show";

class Bookingform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      groupSize: 1,
      hoverRange: null,
    };
    this.handleDateClick = this.handleDateClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  overlappingBookings() {
    const { startDate, endDate } = this.state;
    const bookingDates = this.props.bookings.map((booking) => ({
      startDate: new Date(booking.startDate + " GMT-12").getDate(),
      endDate: new Date(booking.endDate + " GMT-12").getDate(),
    }));

    for (let i = 0; i < bookingDates.length; i++) {
      const bookingDate = bookingDates[i];
      if (endDate > bookingDate.startDate && startDate < bookingDate.endDate) {
        return true;
      }
    }

    return false;
  }

  handleDateClick(type) {
    return (date) => {
      this.setState({ [type]: date });
      if (type === "startDate") {
        this.endDate.getInput().focus();
      }
    };
  }

  handleGuestClick(type) {
    return (e) => {
      e.preventDefault();
      let groupSize = this.state.groupSize;
      if (type === "minus") this.setState({ groupSize: groupSize - 1 });
      else if (type === "plus") this.setState({ groupSize: groupSize + 1 });
    };
  }

  validateBooking() {
    const errors = [];
    const { startDate, endDate, groupSize } = this.state;
    const blankErr = "can't be blank";
    if (startDate === undefined) {
      errors.push("Check in date " + blankErr);
    }
    if (endDate === undefined) {
      errors.push("Check out date " + blankErr);
    }
    if (endDate - startDate <= 0) {
      errors.push("Check in date must be before Check out date");
    } else if (this.overlappingBookings()) {
      errors.push("Booking overlapped with previous bookings :(");
    }
    return errors;
  }

  handleSubmit(e) {
    e.preventDefault();
    const button = $(e.currentTarget);
    const { campsite, currentUserId } = this.props;
    const errors = this.validateBooking();
    if (this.props.currentUserId) {
      const booking = Object.assign({}, this.state, {
        campsiteId: campsite.id,
        userId: currentUserId,
      });
      if (errors.length === 0) {
        this.props.createPayment(booking);
        this.props.setTab("checkout");
      } else {
        this.props.receiveErrors(errors);
      }
    } else {
      // const url = this.props.match.url.concat("/signup")
      this.props.openModal();
      // this.props.history.push(`/campsites/${this.props.campsite.id}/signup`);
    }
  }

  handleDayHover(startDate) {
    return (date, modifiers = {}) => {
      if (modifiers.disabled) {
        return;
      } else {
        this.setState({ hoverRange: { from: startDate, to: date } });
      }
    };
  }

  render() {
    let { startDate, endDate, groupSize } = this.state;
    startDate = startDate || new Date(Date.now());
    const disabledMin = groupSize === 1 ? true : false;
    const disabledMax =
      groupSize === this.props.campsite.capacity ? true : false;
    const { bookedCheckin, bookedCheckout, nextDay } = this.props;
    const tomorrow = nextDay(startDate);

    return (
      <div className="booking-form">
        <div className="price-box">
          <div>
            <h2 className="campsite-price">${this.props.campsite.price} </h2>
            <p>per Night</p>
          </div>
        </div>
        <div className="row booking-row">
          <div className="check-in-btn col-4">
            <h4 className="label">Check in</h4>
            <div className="daypicker-booking">
              <DayPickerInput
                format="LL"
                placeholder="Select date"
                onDayChange={this.handleDateClick("startDate")}
                dayPickerProps={{
                  selectedDays: [startDate, { from: startDate, to: endDate }],
                  disabledDays: bookedCheckin.concat([
                    { before: new Date(Date.now()) },
                  ]),
                }}
              />
            </div>
          </div>
          <div className="check-out-btn col-4">
            <h4 className="label">Check out</h4>
            <div className="daypicker-booking">
              <DayPickerInput
                ref={(daypicker) => (this.endDate = daypicker)}
                format="LL"
                onDayChange={this.handleDateClick("endDate")}
                placeholder="Select date"
                dayPickerProps={{
                  onDayMouseEnter: this.handleDayHover.call(this, startDate),
                  onDayMouseLeave: () => {
                    this.setState({ hoverRange: undefined });
                  },
                  selectedDays: [startDate, { from: startDate, to: endDate }],
                  disabledDays: bookedCheckout.concat([
                    { before: nextDay(startDate) },
                  ]),
                  modifiers: {
                    hoverRange: this.state.hoverRange,
                    startDate: startDate,
                  },
                  month: tomorrow,
                }}
              />
            </div>
          </div>
          <div className="guest-size-container col-2">
            <h4 className="label">Guests</h4>
            <div className="add-minus-guest">
              <div>
                <button
                  className="guest-size-button"
                  disabled={disabledMin}
                  onClick={this.handleGuestClick("minus")}
                >
                  <span className="fa fa-minus"></span>
                </button>
              </div>
              <div>
                <span className="guest-size">{groupSize}</span>
              </div>
              <div>
                <button
                  className="guest-size-button"
                  disabled={disabledMax}
                  onClick={this.handleGuestClick("plus")}
                >
                  <span className="fa fa-plus"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <BookingErrors type="booking" />
        <div className="booking-submit-btn">
          <button className="special-buttons-2" onClick={this.handleSubmit}>
            Request Booking!
          </button>
        </div>
      </div>
    );
  }
}

export default Bookingform;
