import Component from '@glimmer/component';
import Service, { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { CITY_ENDPOINTS } from '../../../services/api-endpoints';


export default class AddLocationFormComponent extends Component {
  @service city;
  @tracked editCityId = null;
  @tracked editLocationName = '';
  @service apiPost;

  constructor() {
    super(...arguments);
    this.city.fetchCities();
  }

  @action
  handleCity(event) {
    this.editCityId = parseInt(event.target.value);
    console.log(this.editCityId)
  }

  @action
  handleLocation(event) {
    this.editLocationName = event.target.value;
    console.log(this.editLocationName);
  }

  @action
  async addLocation() {
    console.log(this.city.cities);
    const data = {
        cityId: this.editCityId,
        locationName: this.editLocationName,
    };
    const response = await this.apiPost.post(CITY_ENDPOINTS.addLocation, data);
    const result = await response.text();
    alert(result);
    if (response.status === 400) {
        return;
    }
  }
}