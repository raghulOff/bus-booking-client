import Component from '@glimmer/component';
import { action } from '@ember/object';

import { tracked } from '@glimmer/tracking';

export default class BusFormComponent extends Component {
  @tracked showBusList = false;
  @tracked showBusForm = false;

  @action
  toggleBusList() {
    this.showBusList = !this.showBusList;
  }
  @action
  toggleBusForm() {
    this.showBusForm = !this.showBusForm;
  }
}
