import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import config from 'bus-booking-client/config/environment'
import { USER_ENDPOINTS } from '../services/api-endpoints';


export default class AddUserController extends Controller {
  @tracked username = '';
  @tracked password = '';
  @service router;

  @action
  updateUsername(event) {
    this.username = event.target.value;
  }

  @action
  updatePassword(event) {
    this.password = event.target.value;
  }

  @action
  async submitUser(event) {
    event.preventDefault();

    let response = await fetch(config.apiBaseUrl + USER_ENDPOINTS.signup, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.username,
        password: this.password,
        role: 'USER'
      })
    });

    if (response.ok) {
      alert('User added');
    } else {
      alert('Failed to add user');
    }
  }
}
