import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NavBarComponent extends Component {
  @service session;
  @service router;

  @tracked loggedIn = this.session.user;
  @action
  async logout() {
    await this.session.logout();
    this.router.transitionTo('login');
  }
}