import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { BUS_ENDPOINTS } from '../../services/api-endpoints';

export default class AddBusFormComponent extends Component {
  @tracked busNo = '';
  @tracked busType = '';
  @tracked totalSeats = null;
  @tracked operatorName = '';
  @service apiPost;

  @tracked showBusList = false;

  @action
  toggleBusList() {
    this.showBusList = !this.showBusList;
  }

  @action
  addBusNo(event) {
    this.busNo = event.target.value;
  }

  @action
  changeBusType(event) {
    this.busType = event.target.value;
  }

  @action
  addTotalSeats(event) {
    this.totalSeats = event.target.value;
  }

  @action
  addOperatorName(event) {
    this.operatorName = event.target.value;
  }

  @action
  async addNewBus() {
    try {
      const data = {
        busNo: this.busNo,
        busType: this.busType,
        totalSeats: this.totalSeats,
        operatorName: this.operatorName,
      };
      const result = await this.apiPost.post(BUS_ENDPOINTS.addBus, data);
      console.log(result);
    } catch (error) {
      console.error('error adding bus: ', error);
    }
  }
}
