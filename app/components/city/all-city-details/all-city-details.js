import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { CITY_ENDPOINTS } from '../../../services/api-endpoints';


export default class AllCityDetailsComponent extends Component {
  
  @service city;
  @service apiDelete;
  constructor () {
    super(...arguments);
    this.city.fetchCities();
  }

  @action
  async deleteCity(cityId) {
    
    const response = await this.apiDelete.delete(CITY_ENDPOINTS.deleteCity + `/${cityId}`);
    const result = await response.text();
    if (response.ok) {
      alert('Delete successful');
    } else {
      alert(result);
    
    }
    this.city.fetchCities();
  }
  

}
