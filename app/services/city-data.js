import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import config from 'bus-booking-client/config/environment'
import { CITY_ENDPOINTS } from './api-endpoints';
export default class CityDataService extends Service {
  @tracked allCities = null;
  async getCityData() {
    try {
      let res = await fetch(config.apiBaseUrl + CITY_ENDPOINTS.getAllCities)
      if (!res.ok) throw new Error("Can't access cities");

      let data = await res.json();
      this.allCities = data;
      return data;

    } catch (error) {
        console.error("Error fetching city data ", error);
        throw error;
    }
  }
}
