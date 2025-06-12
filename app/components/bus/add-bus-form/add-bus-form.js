import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { BUS_ENDPOINTS } from '../../../services/api-endpoints';


export default class AddBusFormComponent extends Component {
  @tracked busNo = '';
  @tracked busType = '';
  @tracked totalSeats = null;
  @tracked operatorName = '';
  @service apiPost;
  @service apiGet;
  @service bus;


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
      const response = await this.apiPost.post(BUS_ENDPOINTS.addBus, data);
      let result = await response.text();
      alert(result);
      console.log(result);
      if (!response.ok) {
        throw response;
      }
      this.bus.fetchBuses();
    } catch (error) {
      console.error('Error adding bus: ', error);
    }
  }

}
