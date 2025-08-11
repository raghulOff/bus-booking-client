import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import {
  BUS_ENDPOINTS,
  SCHEDULE_ENDPOINTS,
  ROUTE_ENDPOINTS,
} from '../../../services/api-endpoints';

export default class AddScheduleFormComponent extends Component {
  @tracked routeId = null;
  @tracked busId = null;
  @tracked deptime = '';
  @tracked arrivaltime = '';
  @tracked price = null;
  @tracked journeydate = '';
  @tracked editBoardingLocationIds = [];
  @tracked editDroppingLocationIds = [];

  @tracked routes = [];
  @tracked buses = [];
  @tracked boardingLocations = [];
  @tracked droppingLocations = [];

  @service schedule;
  @service apiPost;

  filterLocationData(locationIds, locId) {
    if (locationIds.includes(locId)) {
      locationIds = locationIds.filter((id) => id !== locId);
    } else {
      locationIds = [...locationIds, locId];
    }
    return locationIds;
  }

  @action
  handleBoardDropLocations(type, locId) {
    if (type == 'BOARD') {
      this.editBoardingLocationIds = this.filterLocationData(
        this.editBoardingLocationIds,
        locId,
      );
    } else {
      this.editDroppingLocationIds = this.filterLocationData(
        this.editDroppingLocationIds,
        locId,
      );
    }
  }

  @action
  handleInput(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  @action
  async updateField(field, event) {
    this[field] = event.target.value;

    if (field === 'routeId') {
      let routeId = event.target.value;
      this.routes.forEach(async (route) => {
        if (route.routeId == routeId) {
          this.boardingLocations = await this.schedule.getCityLocations(
            route.sourceCityId,
          );
          this.droppingLocations = await this.schedule.getCityLocations(
            route.destinationCityId,
          );
        }
      });
      setTimeout(() => {
        console.log(this.boardingLocations);
        console.log(this.droppingLocations);
      }, 3000);
    }
  }

  @service apiGet;

  constructor() {
    super(...arguments);
    this.loadRoutes();
    this.loadBuses();
  }
  async loadRoutes() {
    try {
      const response = await this.apiGet.get(ROUTE_ENDPOINTS.getAllRoutes);
      this.routes = response;
    } catch (error) {
      console.error('Failed to fetch routes', error);
    }
  }

  async loadBuses() {
    try {
      const response = await this.apiGet.get(BUS_ENDPOINTS.getAllBuses);
      this.buses = response;
    } catch (error) {
      console.error('Failed to fetch routes', error);
    }
  }

  validateScheduleDetails() {
    const now = new Date().toDateString();
    const jd = new Date(this.journeydate);
    const nowd = new Date(now);

    if (!this.journeydate || jd < nowd) {
      alert('Journey date must be today or in the future.');
      return false;
    }
    if (!this.routeId) {
      alert('Please select a route');
      return false;
    }
    if (!this.busId) {
      alert('Please select a bus');
      return false;
    }

    const depDate = new Date(this.deptime);
    if (
      depDate.getFullYear() !== jd.getFullYear() ||
      depDate.getMonth() !== jd.getMonth() ||
      depDate.getDate() !== jd.getDate()
    ) {
      alert('Departure time must be on the same day as journey date.');
      return false;
    }
    
    if (!this.deptime || new Date(this.deptime) < new Date()) {
      alert('Departure time must be in the future.');
      return false;
    }
    if (
      !this.arrivaltime ||
      new Date(this.arrivaltime) < new Date(this.deptime)
    ) {
      alert('Arrival time must be after departure time.');
      return false;
    }

    if (!this.price || this.price <= 0) {
      alert('Price must be greater than 0.');
      return false;
    }

    if (this.editBoardingLocationIds.length === 0) {
      alert('Please select at least one boarding point.');
      return false;
    }

    if (this.editDroppingLocationIds.length === 0) {
      alert('Please select at least one dropping point.');
      return false;
    }
    return true;
  }

  @action
  async addNewSchedule() {
    if (!this.validateScheduleDetails()) {
      return;
    }
    const data = {
      routeId: this.routeId,
      busId: this.busId,
      departureTime: this.deptime,
      arrivalTime: this.arrivaltime,
      price: this.price,
      journeyDate: this.journeydate,
      boardingPointIds: this.editBoardingLocationIds,
      droppingPointIds: this.editDroppingLocationIds,
    };

    try {
      const response = await this.apiPost.post(
        SCHEDULE_ENDPOINTS.addSchedule,
        data,
      );
      let resData = await response.text();
      alert(resData);
      if (!response.ok) {
        throw response;
      }
      this.schedule.fetchSchedules();
    } catch (error) {
      throw error;
    }
  }
}
