import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
// import { formatDate, parseDate } from "react-day-picker/moment";

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
            this.props.createBooking(booking);
        }
        else{
            const url = this.props.match.url.concat("/signup")
            // console.log(url);
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

        return (
            <div className="booking-widget">
                {/* TEST */}
                <div>{this.props.campsite.capacity}</div>
                <div className="price-box">
                    <h4>${this.props.campsite.price} </h4>
                    <p>per Night</p>
                </div>
                <div className="row">
                    <div className="check-in-btn col-4" >
                        
                        <h4 className="label">Check in</h4>
                        <span className="value">Select date</span>
                        <DayPickerInput
                            format="LL"
                            // formatDate={formatDate}
                            onDayChange={this.handleDateClick("startDate")}
                            showOverlay={true}
                            dayPickerProps={ {
                                // selectedDays: [startDate],
                                disabledDays: {
                                    before: new Date(Date.now()) 
                                },
                            }}
                        />
                    </div>
                    <div className="check-out-btn col-4">
                        <h4 className="label">Check out</h4>
                        <span className="value">Select date</span>
                        <DayPickerInput 
                            ref={ daypicker => this.endDate = daypicker}
                            format="LL"
                            // formatDate={formatDate}
                            onDayChange={this.handleDateClick("endDate")}
                            // selectedDays={endDate}
                            dayPickerProps={{
                                // selectedDays: [startDate, { startDate, endDate }],
                                disabledDays: { before: nextDay },
                                month: nextDay

                            }}
                        />
                    </div>
                    <div className="guest-size-container col-4">
                        <h4 className="label">Guests</h4>
                        <button 
                            disabled={disabledMin}
                            onClick={this.handleGuestClick("minus")}>
                            <span className="fa fa-minus"></span>
                        </button>
                        <span className="guest-size">{groupSize}</span>
                        <button 
                            disabled={disabledMax}
                            onClick={this.handleGuestClick("plus")}>
                            <span className="fa fa-plus"></span>
                        </button>
                
                    </div>
                    <div className="booking-submit-btn">
                        <button onClick={this.handleSubmit}>Request Booking!</button>
                    </div>
                </div>


            </div>
        )
    }
}

export default Bookingform; 