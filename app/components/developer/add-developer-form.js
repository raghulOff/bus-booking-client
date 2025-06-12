import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { USER_ENDPOINTS } from '../../services/api-endpoints';

export default class AddUserFormComponent extends Component {
  @tracked username = '';
  @tracked password = '';
  @service apiPost;
  get disableSubmit() {
    return !this.username.length || !this.password.length;
  }

  @action async onSubmit(event) {
    event.preventDefault();
    const data = {
      username: this.username,
      password: this.password,
      role: 'DEVELOPER',
    };

    try {
      const response = await this.apiPost.post(USER_ENDPOINTS.signup, data);
      alert('Developer added Successfully');
      let result = response.text();
      alert(result);
      if (!response.ok) {
        throw response;
      }
    } catch (e) {
      alert('Developer already exists');
      console.error(e);
      throw e;
    }
  }
}
