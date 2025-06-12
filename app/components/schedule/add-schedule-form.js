import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { BUS_ENDPOINTS, SCHEDULE_ENDPOINTS } from '../../services/api-endpoints';
import { ROUTE_ENDPOINTS } from '../../services/api-endpoints';
export default class AddScheduleFormComponent extends Component {
  @tracked routeId = null;
  @tracked busId = null;
  @tracked deptime = null;
  @tracked arrivaltime = null;
  @tracked av_seats = null;
  @tracked price = null;
  @tracked journeydate = null;

  @tracked routes = [];
  @tracked buses = [];

  @service apiPost;
  @action
  handleInput(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  @action
  updateField(field, event) {
    this[field] = event.target.value;
    console.log(this[field]);
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
    console.log(this.routes);
  }

  async loadBuses() {
    try {
      const response = await this.apiGet.get(BUS_ENDPOINTS.getAllBuses);
      this.buses = response;
    } catch (error) {
      console.error('Failed to fetch routes', error);
    }
    console.log(this.buses);
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
      availableSeats: this.av_seats,
    };
    console.log(data);
    try {
      const response = await this.apiPost.post(
        SCHEDULE_ENDPOINTS.addSchedule,
        data
      );
      let resData = await response.text();
      alert(resData)
      if (!response.ok) {
        throw response;
      }

    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
