import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { BOOKING_ENDPOINTS } from '../../../services/api-endpoints';

export default class SpecificBusDetails extends Component {
    @service bookingData;
    @service session;
    @service apiPost;
    @service router;
    @action
    toggleSeat(seat) {
        if (seat.status === true) return;
        const passengerData = {
            seatId: seat.seatId,
            passengerName: '',
            passengerAge: 0,
        };
        if (this.bookingData.selectedSeats.includes(seat)) {
            this.bookingData.selectedSeats =
                this.bookingData.selectedSeats.filter((id) => id !== seat);

            this.bookingData.passengerDetails =
                this.bookingData.passengerDetails.filter(
                    (p) => p.seatId !== seat.seatId,
                );

            this.bookingData.payAmount -= this.args.model.schedule.price;
        } else {
            this.bookingData.selectedSeats = [
                ...this.bookingData.selectedSeats,
                seat,
            ];

            this.bookingData.passengerDetails = [
                ...this.bookingData.passengerDetails,
                passengerData,
            ];
            console.log(this.bookingData.passengerDetails);

            this.bookingData.payAmount += this.args.model.schedule.price;
        }
    }
    @action
    isSeatSelected(seat) {
        return this.bookingData.selectedSeats.includes(seat);
    }

    @action
    handleField(field, event) {
        this.bookingData[field] = event.target.value;
        console.log(this.bookingData[field]);
    }

    @action handleNameAge(field, seatId, event) {
        this.bookingData.passengerDetails.forEach(function (passenger, ind) {
            if (passenger.seatId === seatId) {
                passenger[field] = event.target.value;
            }
        });
    }

    checkFilledPassengerDetails() {
    return this.bookingData.passengerDetails.every(function(passenger) {
        return passenger.passengerName.length > 0 && passenger.passengerAge > 0;
    });
}

    @action
    async handlePayment() {
        if (this.bookingData.passengerDetails.length == 0) {
            alert("Please select a seat to proceed.");
            return;
        }

        if (
            this.bookingData.selectedBoardingId === null ||
            this.bookingData.selectedDroppingId === null ||
            this.checkFilledPassengerDetails() === false
        ) {
            alert('Fill in all the details!');
            return;
        }

        const bookSeatData = {
            userId: this.session.user.userId,
            scheduleId: this.args.model.schedule.scheduleId,
            payableAmount: this.bookingData.payAmount,
            boardingPointId: this.bookingData.selectedBoardingId,
            droppingPointId: this.bookingData.selectedDroppingId,
            passengerDetails: this.bookingData.passengerDetails,
        };

        const response = await this.apiPost.post(
            BOOKING_ENDPOINTS.bookSeats,
            bookSeatData,
        );
        let result = await response.text();
        if (response.ok) {
            alert('Payment successful. Seat booked');
        } else {
            alert('Payment Failed. Seat not booked');
        }
        this.bookingData.passengerDetails = [];
        this.bookingData.selectedBoardingId = null;
        this.bookingData.selectedDroppingId = null;

        this.router.transitionTo('home');
    }
}
