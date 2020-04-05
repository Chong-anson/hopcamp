import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import DayPicker, { DateUtils } from 'react-day-picker';
import { formatDate, parseDate } from "react-day-picker/moment";

class Bookingform extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            startDate: new Date(Date.now()),
            endDate: undefined,
            groupSize: 1
        }
        this.handleDateClick = this.handleDateClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    handleDateClick(type){
        return (date) => {
            this.setState({[type]: date})
        }
    };

    handleGuestClick(type){
        return (e) => {
            e.preventDefault();
            let groupSize = this.state.groupSize;
            if (type === "minus")
                this.setState({groupSize: groupSize-1});
            else if (type === "plus")
                this.setState({groupSize: groupSize+1});
        }
    };

    handleSubmit(e){
        e.preventDefault();
        if (this.props.currentUserId){
            const booking = Object.assign({}, this.state, {
                campsiteId: this.props.campsite.id,
                userId: this.props.currentUserId
            });
            this.props.createBooking(booking).then(
                () => window.alert("booking created")
            );
        }
        else{
            const url = this.props.match.url.concat("/signup")
            this.props.history.push(`/campsites/${this.props.campsite.id}/signup`);
        }
    }

    render() {
        const {startDate, endDate, groupSize} = this.state;
        const disabledMin = groupSize === 1 ? true : false;
        const disabledMax = groupSize === this.props.campsite.capacity ? true : false;
        const modifiers = {start: startDate, end: endDate};
        let nextDay = new Date();
        nextDay.setDate(startDate.getDate() + 1);

        console.log(this.props)
        // if (this.props.currentUser.bookings)
        return (
            <div className="booking-form">
                {/* TEST */}
                {/* <div>{this.props.campsite.capacity}</div> */}
                <div className="price-box">
                    <div>
                        <h2 className="campsite-price">${this.props.campsite.price} </h2>
                        <p>per Night</p>
                    </div>
                </div>
                <div className="row booking-row">
                    <div className="check-in-btn col-4" >
                        
                        <h4 className="label">Check in</h4>
                        <div className="daypicker-booking">

                            <DayPickerInput
                                format="LL"
                                formatDate={formatDate}
                                placeholder="Select date"
                                onDayChange={this.handleDateClick("startDate")}
                                dayPickerProps={ {
                                    selectedDays: [startDate, {from: startDate, to: endDate}],
                                    disabledDays: {
                                        before: new Date(Date.now()) 
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className="check-out-btn col-4">
                        <h4 className="label">Check out</h4>
                        <div className="daypicker-booking">

                            <DayPickerInput 
                                ref={ daypicker => this.endDate = daypicker}
                                format="LL"
                                formatDate={formatDate}
                                onDayChange={this.handleDateClick("endDate")}
                                // selectedDays={endDate}
                                placeholder="Select date"
                                dayPickerProps={{
                                    selectedDays: [startDate, { from: startDate, to: endDate }],
                                    disabledDays: { before: nextDay },
                                    month: nextDay
                                }}
                            />
                        </div>

                    </div>
                    <div className="guest-size-container col-2">
                        <h4 className="label">Guests</h4>
                        <div className="add-minus-guest">
                            <div>
                                <button 
                                    disabled={disabledMin}
                                    onClick={this.handleGuestClick("minus")}>
                                    <span className="fa fa-minus"></span>
                                </button>
                            </div>
                            <div>
                                <span className="guest-size">{groupSize}</span>
                            </div>
                            <div>
                                <button 
                                    disabled={disabledMax}
                                    onClick={this.handleGuestClick("plus")}>
                                    <span className="fa fa-plus"></span>
                                </button>
                            </div>
                        </div>
                
                    </div>
                </div>
                <div className="booking-submit-btn">
                    <button className="special-buttons-2" onClick={this.handleSubmit}>Request Booking!</button>
                </div>


            </div>
        )
    }
}

export default Bookingform; 