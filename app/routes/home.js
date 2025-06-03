import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HomeRoute extends Route {
    @service session;
    @service cityData;
    async model() {
      await this.session.checkStatus("home");
      await this.cityData.getCityData();
      const cityArray = Object.values(this.cityData.allCities);
      
      return {
        user: this.session.user,
        cityData: cityArray
      }
    }
}

