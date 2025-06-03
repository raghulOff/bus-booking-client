import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { BUS_ENDPOINTS } from '../../services/api-endpoints';


export default class AddBusFormComponent extends Component {
  @service apiGet;
  @service apiPost;

  @tracked buses = [];
  @tracked editingBusId = null;

  @tracked editBusNo = '';
  @tracked editBusType = '';
  @tracked editOperatorName = '';
  @tracked editTotalSeats = 0;

  constructor() {
    super(...arguments);
    this.fetchBuses();
  }

  async fetchBuses() {
    try {
      const response = await this.apiGet.get(BUS_ENDPOINTS.getAllBuses);
      this.buses = response;
    } catch (error) {
      console.error('Failed to fetch buses', error);
    }
  }

  
  @action editBus(bus) {
    this.editingBusId = bus.busId;
    this.editBusNo = bus.busNo;
    this.editBusType = bus.busType;
    this.editOperatorName = bus.operatorName;
    this.editTotalSeats = bus.totalSeats;
  }

  @action cancelEdit() {
    this.editingBusId = null;
  }

  @action updateField(field, event) {
    this[field] = event.target.value;
  }

  @action async saveBus(busId) {

  }

  @action async deleteBus(busId) {

  }
}
