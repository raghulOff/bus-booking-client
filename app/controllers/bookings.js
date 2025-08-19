import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { CANCEL_ENDPOINTS } from '../services/api-endpoints';
import { tracked } from '@glimmer/tracking';

export default class BookingsController extends Controller {
    @service apiPut;
    @service bookings;
    @tracked cancelLoading = false;



    @action
    async cancelTicket(scheduledSeatId) {
        this.cancelLoading = true;
        const data = {
            scheduledSeatId
        }
        
        const response = await this.apiPut.put(CANCEL_ENDPOINTS.cancelTicket, data);
        if (response.ok) {
            alert("Ticket Cancelled. Amount will be refunded within 7 days.");
            await this.bookings.fetchBookings();
        } else if (response.status == 400) {
            alert("Ticket already cancelled. Invalid request.")
        } else {
            alert("Something went wrong.");
        }

        this.cancelLoading = false;

    }    
}
