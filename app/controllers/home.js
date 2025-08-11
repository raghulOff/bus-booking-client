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
  @tracked fromCityId = localStorage.getItem('fromCityId') || null;
  @tracked toCityId = localStorage.getItem('toCityId') || null;

  @tracked busdetails = null;
  @service bookingData;

  @action
  bookNow(bus) {
    this.bookingData.selectedSchedule = bus;
    this.router.transitionTo('/book/' + bus.scheduleId);
  }

  @action
  updateDate(event) {
    this.date = event.target.value;

    localStorage.setItem('doj', this.date);
  }
  @action
  setFromLocation(event) {
    this.fromLocation = event.target.value;
    localStorage.setItem('fromLocation', this.fromLocation);

    const city = this.model.cityData.find(
      (c) => c.cityName === this.fromLocation,
    );
    this.fromCityId = city ? city.cityId : null;
    localStorage.setItem('fromCityId', this.fromCityId);
  
  }

  @action
  setToLocation(event) {
    this.toLocation = event.target.value;
    localStorage.setItem('toLocation', this.toLocation);


    const city = this.model.cityData.find(
      (c) => c.cityName === this.toLocation,
    );
    this.toCityId = city ? city.cityId : null;

    localStorage.setItem('toCityId', this.toCityId);

  }

  @action
  async searchBus() {
    await fetch(config.apiBaseUrl + BUS_ENDPOINTS.getSearchBuses, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        fromCityId: this.fromCityId,
        toCityId: this.toCityId,
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
      });
  }
}
