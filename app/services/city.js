import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { CITY_ENDPOINTS } from './api-endpoints';



export default class BusService extends Service {
  @tracked cities = [];
  @service apiGet;

  async fetchCities() {
    try {
      const response = await this.apiGet.get(CITY_ENDPOINTS.getAllCities);
      this.cities = response;
      console.log(this.cities);
    } catch (error) {
      console.error('Failed to fetch cities', error);
    }
  }
}
