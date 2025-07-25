import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CityFormComponent extends Component {
  @tracked showCityList = false;
  @tracked showCityForm = false;
  @tracked showLocationForm = false;
  @action
  toggleCityList() {
    this.showCityList = !this.showCityList;
  }
  @action
  toggleCityForm() {
    this.showCityForm = !this.showCityForm;
  }

  @action
  toggleLocationForm() {
    this.showLocationForm = !this.showLocationForm;
  }

}