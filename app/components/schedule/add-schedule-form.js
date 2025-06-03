import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { SCHEDULE_ENDPOINTS } from '../../services/api-endpoints';
export default class AddScheduleFormComponent extends Component {
  @tracked routeid = null;
  @tracked busid = null;
  @tracked deptime = null;
  @tracked arrivaltime = null;
  @tracked av_seats = null;
  @tracked price = null;
  @tracked journeydate = null;
  @service apiPost;
  @action
  handleInput(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  @action
  async addNewSchedule() {
    const data = {
      routeId: this.routeid,
      busId: this.busid,
      departureTime: this.deptime,
      arrivalTime: this.arrivaltime,
      price: this.price,
      journeyDate: this.journeydate,
      availableSeats: this.av_seats,
    };

    try {
      const result = await this.apiPost.post(SCHEDULE_ENDPOINTS.addSchedule, data);
      console.log(result);
    } catch (error) {
        console.log(error);
        throw error;
    }
  }
}
