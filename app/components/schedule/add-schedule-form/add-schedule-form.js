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

  @action
  async addNewSchedule() {
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
