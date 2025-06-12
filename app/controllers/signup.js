import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import config from 'bus-booking-client/config/environment';
import { USER_ENDPOINTS } from '../services/api-endpoints';

export default class SignupController extends Controller {
  @service router;
  username = '';
  password = '';
  @tracked error = '';
  @tracked userExist = '';

  @action
  updateUsername(event) {
    this.username = event.target.value;
  }

  @action
  updatePassword(event) {
    this.password = event.target.value;
  }

  @action
  async signup() {
    try {
      let res = await fetch(config.apiBaseUrl + USER_ENDPOINTS.signup, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          role: 'USER',
        }),
      });

      if (!res.ok) {
        this.error = await res.text();
        this.userExist = 'User Already Exist';
      } else {
        alert('Register Success');
        this.userExist = '';
        this.router.transitionTo('login');
      }
    } catch (e) {
      this.error = 'Signup failed';
    }
  }
}
