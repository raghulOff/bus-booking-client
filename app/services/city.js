import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { CITY_ENDPOINTS } from './api-endpoints';

export default class CityService extends Service {
  @tracked cities = [];
  @service apiGet;
  @service bookingData;

  async fetchCities() {
    try {
      const response = await this.apiGet.get(CITY_ENDPOINTS.getAllCities);
      this.cities = response;
      console.log(this.cities);
    } catch (error) {
      console.error('Failed to fetch cities', error);
    }
  }

  async getLocationPoints(scheduleId, type) {
    try {
      const response = await this.apiGet.get(
        CITY_ENDPOINTS.getLocationPoints + `${scheduleId}/${type}`,
      );
      if (type === 1) {
        this.bookingData.boardingPoints = response;
        console.log(this.bookingData.boardingPoints);
      } else {
        this.bookingData.droppingPoints = response;
        console.log(this.bookingData.droppingPoints);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
