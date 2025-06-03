import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { CITY_ENDPOINTS } from '../../services/api-endpoints';


export default class AddCityFormComponent extends Component {
  @tracked cityName = '';
  @action handleInput(event) {
    const {name, value} = event.target;
    this[name] = value;
  }





  @service apiPost

  @action
  async addNewCity() {
    try {
      const data = {
        cityName: this.cityName
      };
      const result = await this.apiPost.post(CITY_ENDPOINTS.addCity, data);
      console.log(result);
    } catch (error) {
      console.error('error adding city: ', error);
    }
  }


}
