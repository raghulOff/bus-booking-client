import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import config from 'bus-booking-client/config/environment';
import { BUS_ENDPOINTS } from '../services/api-endpoints';

export default class HomeController extends Controller {
  @service router;
  @service session;
  @tracked date = localStorage.getItem('doj') || '';
  @tracked fromLocation = localStorage.getItem('fromLocation') || '';
  @tracked toLocation = localStorage.getItem('toLocation') || '';
  @tracked busdetails = null;
  @service bookingData;

  @action
  bookNow(bus) {
    console.log(bus);
    this.bookingData.selectedSchedule = bus;
    this.router.transitionTo('/book/' + bus.scheduleId)
  }

  @action
  updateDate(event) {
    this.date = event.target.value;
    console.log(this.date);
    localStorage.setItem('doj', this.date);
  }
  @action
  setFromLocation(event) {
    this.fromLocation = event.target.value;
    console.log(this.fromLocation);
    localStorage.setItem('fromLocation', this.fromLocation);
  }

  @action
  setToLocation(event) {
    this.toLocation = event.target.value;
    console.log(this.toLocation);
    localStorage.setItem('toLocation', this.toLocation);
  }

  @action
  async searchBus() {
    console.log('came');
    await fetch(config.apiBaseUrl + BUS_ENDPOINTS.getSearchBuses, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        from: this.fromLocation,
        to: this.toLocation,
        doj: this.date,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject('Unauthorized');
        }
      })
      .then((data) => {
        this.busdetails = data;
        console.log(this.busdetails);
      });
  }
}
