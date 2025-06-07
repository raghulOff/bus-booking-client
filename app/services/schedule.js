import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { SCHEDULE_ENDPOINTS } from './api-endpoints';



export default class ScheduleService extends Service {
  @tracked schedules = [];
  @service apiGet;

  async fetchSchedules() {
    try {
      const response = await this.apiGet.get(SCHEDULE_ENDPOINTS.getAllSchedules);
      this.schedules = response;
      console.log(this.schedules);
    } catch (error) {
      console.error('Failed to fetch schedules', error);
    }
  }
}
