import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { CANCEL_ENDPOINTS } from '../services/api-endpoints';

export default class BookingsController extends Controller {
    @service apiPut;
    @service bookings;
    @action
    async cancelTicket(seatId) {
        const data = {
            seatId
        }
        const response = await this.apiPut.put(CANCEL_ENDPOINTS.cancelTicket, data);
        if (response.ok) {
            alert("Ticket Cancelled. Amount will be refunded within 7 days.");
            await this.bookings.fetchBookings();
        } else {
            alert("Something went wrong.");
        }
    }    
}
