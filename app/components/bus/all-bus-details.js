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
    const updatedBus = {
      busId,
      busNo: this.editBusNo,
      busType: this.editBusType,
      operatorName: this.editOperatorName,
      totalSeats: this.editTotalSeats
    };

    try {
      const response = await fetch(`http://localhost:8080/tryingAuth/api/bus/update-bus/${busId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBus)
      });
      if (response.ok) {
        this.editingBusId = null;
        this.fetchBuses(); // refresh list
      } else {
        console.error('Failed to update bus');
      }
    } catch (error) {
      console.error('Error saving bus:', error);
    }
  }

  // --- Delete ---
  @action async deleteBus(busId) {
    try {
      const response = await fetch(`http://localhost:8080/tryingAuth/api/bus/delete-bus/${busId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        this.buses = this.buses.filter(b => b.busId !== busId);
      } else {
        console.error('Failed to delete bus');
      }
    } catch (error) {
      console.error('Error deleting bus:', error);
    }
  }
}
