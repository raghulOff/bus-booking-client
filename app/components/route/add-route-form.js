import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { ROUTE_ENDPOINTS } from '../../services/api-endpoints';

export default class AddRouteFormComponent extends Component {
  @service cityData;
  @tracked allCities = null;

  @tracked source = '';
  @tracked destination = '';
  @tracked distance = null;
  @tracked timeTravel = null;
  @service apiPost;



  @action handleInput(event) {
    const {name, value} = event.target;
    this[name] = value;
  }

  @action
  async addNewRoute() {
    try {
      const data = {
        source: this.source,
        destination: this.destination,
        distanceKm: this.distance,
        estimatedTime: this.timeTravel
      };

      const result = await this.apiPost.post(ROUTE_ENDPOINTS.addRoute, data);
      console.log(result);
    } catch (error) {
      console.error('error adding city: ', error);
    }
  }

  constructor() {
    super(...arguments);
    this.loadCities();
  }

  async loadCities() {
    try {
      this.allCities = await this.cityData.getCityData();
      const cityArray = Object.values(this.allCities);
      this.allCities = cityArray;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
