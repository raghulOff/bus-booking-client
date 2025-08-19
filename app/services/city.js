import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { CITY_ENDPOINTS } from './api-endpoints';

export default class CityService extends Service {
  @tracked cities = [];
  @service apiGet;
  @service bookingData;



   async addCity(data) {
    try {
      const response = await this.apiPost.post(CITY_ENDPOINTS.addCity, data);
      let result = await response.text();
      if (!response.ok) {
        throw new Error(result || 'Failed to add city');
      }
      await this.fetchCities();
      return result;
    } catch (error) {
      console.error('Error in city service: ', error);
      throw error;
    }
  }

  async fetchCities() {
    try {
      const response = await this.apiGet.get(CITY_ENDPOINTS.getAllCities);
      this.cities = response;
    } catch (error) {
      console.error('Failed to fetch cities', error);
    }
  }

  async getLocationPoints(scheduleId, type) {
    try {
      const response = await this.apiGet.get(
        CITY_ENDPOINTS.getLocationPoints + `/${scheduleId}/${type}`,
      );
      if (type === 1) {
        this.bookingData.boardingPoints = response;

      } else {
        this.bookingData.droppingPoints = response;

      }
    } catch (error) {
      console.error(error);
    }
  }

}
