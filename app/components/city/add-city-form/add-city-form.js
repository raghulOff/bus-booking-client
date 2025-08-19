import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { CITY_ENDPOINTS } from '../../../services/api-endpoints';


export default class AddCityFormComponent extends Component {
  @tracked cityName = '';
  @service city;
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

      result = this.city.addCity(data);
      this.cityName = '';
    } catch (error) {
      console.error('Error adding city: ', error);
      alert('Error adding city:');
    }
  }


}
